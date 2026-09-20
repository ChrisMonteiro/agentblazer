import React, { createContext, useContext, useState } from 'react';

// Default official emblem asset path
export const DEFAULT_OFFICIAL_LOGO = '/assets/images/agentblazer_official_logo_1789660136606.jpg';
const STORAGE_KEY = 'agentblazer_custom_logo_data';

interface LogoContextType {
  logoUrl: string;
  isCustom: boolean;
  addLogoFile: (file: File) => Promise<{ success: boolean; error?: string }>;
  addLogoUrl: (url: string) => void;
  resetToDefault: () => void;
  isAddLogoModalOpen: boolean;
  openAddLogoModal: () => void;
  closeAddLogoModal: () => void;
}

const LogoContext = createContext<LogoContextType>({
  logoUrl: DEFAULT_OFFICIAL_LOGO,
  isCustom: false,
  addLogoFile: async () => ({ success: false }),
  addLogoUrl: () => {},
  resetToDefault: () => {},
  isAddLogoModalOpen: false,
  openAddLogoModal: () => {},
  closeAddLogoModal: () => {},
});

export const LogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [logoUrl, setLogoUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    } catch {
      // Ignore
    }
    return DEFAULT_OFFICIAL_LOGO;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch {
      return false;
    }
  });

  const [isAddLogoModalOpen, setIsAddLogoModalOpen] = useState(false);

  const openAddLogoModal = () => setIsAddLogoModalOpen(true);
  const closeAddLogoModal = () => setIsAddLogoModalOpen(false);

  const addLogoFile = async (file: File): Promise<{ success: boolean; error?: string }> => {
    if (!file) return { success: false, error: 'No file selected' };

    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return { success: false, error: 'Please choose a PNG, JPG, SVG, or WEBP image.' };
    }

    if (file.size > 8 * 1024 * 1024) {
      return { success: false, error: 'File size should be under 8MB.' };
    }

    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setLogoUrl(result);
          setIsCustom(true);
          try {
            localStorage.setItem(STORAGE_KEY, result);
          } catch {
            console.warn('Local storage quota reached; active in session');
          }
          resolve({ success: true });
        } else {
          resolve({ success: false, error: 'Failed to read image file.' });
        }
      };
      reader.onerror = () => resolve({ success: false, error: 'Error reading file.' });
      reader.readAsDataURL(file);
    });
  };

  const addLogoUrl = (url: string) => {
    if (!url) return;
    setLogoUrl(url);
    setIsCustom(true);
    try {
      localStorage.setItem(STORAGE_KEY, url);
    } catch {
      // Ignore
    }
  };

  const resetToDefault = () => {
    setLogoUrl(DEFAULT_OFFICIAL_LOGO);
    setIsCustom(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  return (
    <LogoContext.Provider
      value={{
        logoUrl,
        isCustom,
        addLogoFile,
        addLogoUrl,
        resetToDefault,
        isAddLogoModalOpen,
        openAddLogoModal,
        closeAddLogoModal,
      }}
    >
      {children}
    </LogoContext.Provider>
  );
};

export const useClubLogo = () => useContext(LogoContext);
