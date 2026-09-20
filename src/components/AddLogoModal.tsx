import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Check, Image as ImageIcon, RotateCcw, AlertCircle, Link as LinkIcon, Upload } from 'lucide-react';
import { useClubLogo } from '../context/LogoContext';

export const AddLogoModal: React.FC = () => {
  const {
    logoUrl,
    isCustom,
    addLogoFile,
    addLogoUrl,
    resetToDefault,
    isAddLogoModalOpen,
    closeAddLogoModal,
  } = useClubLogo();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [urlInput, setUrlInput] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isAddLogoModalOpen) return null;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    setStatusMessage(null);
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setStatusMessage({ type: 'error', text: 'Please select a valid PNG, JPG, SVG, or WEBP image.' });
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setStatusMessage({ type: 'error', text: 'File size exceeds 8MB limit.' });
      return;
    }

    setSelectedFile(file);
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUrlInput(val);
    if (val.trim()) {
      setPreviewUrl(val.trim());
      setSelectedFile(null);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleApply = async () => {
    setIsProcessing(true);
    setStatusMessage(null);

    if (activeTab === 'upload' && selectedFile) {
      const result = await addLogoFile(selectedFile);
      setIsProcessing(false);
      if (result.success) {
        setStatusMessage({ type: 'success', text: 'Logo added and updated across the site!' });
        setTimeout(() => {
          closeAddLogoModal();
          setPreviewUrl(null);
          setSelectedFile(null);
          setStatusMessage(null);
        }, 900);
      } else {
        setStatusMessage({ type: 'error', text: result.error || 'Failed to add logo' });
      }
    } else if (activeTab === 'url' && urlInput.trim()) {
      addLogoUrl(urlInput.trim());
      setIsProcessing(false);
      setStatusMessage({ type: 'success', text: 'Logo added and updated across the site!' });
      setTimeout(() => {
        closeAddLogoModal();
        setPreviewUrl(null);
        setUrlInput('');
        setStatusMessage(null);
      }, 900);
    } else {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    resetToDefault();
    setPreviewUrl(null);
    setSelectedFile(null);
    setUrlInput('');
    setStatusMessage({ type: 'success', text: 'Reset to default official emblem.' });
    setTimeout(() => {
      setStatusMessage(null);
    }, 1200);
  };

  const canApply = (activeTab === 'upload' && !!selectedFile) || (activeTab === 'url' && !!urlInput.trim());

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg rounded-2xl bg-[#141411] border border-[#3A3323] p-6 shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#2A271F] mb-5">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#FFB000]/10 border border-[#FFB000]/30 text-[#FFB000]">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-[#F4F0E6]">Add Club Logo</h3>
                <p className="text-xs text-[#A8A397] font-mono">Upload a file or provide an image link</p>
              </div>
            </div>
            <button
              onClick={closeAddLogoModal}
              className="p-1.5 rounded-lg bg-[#1E1E1A] hover:bg-[#2A271F] text-[#A8A397] hover:text-[#F4F0E6] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`mb-4 px-3.5 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2 ${
                statusMessage.type === 'success'
                  ? 'bg-[#8BAE5D]/15 text-[#8BAE5D] border border-[#8BAE5D]/30'
                  : 'bg-[#FF4D4D]/15 text-[#FF4D4D] border border-[#FF4D4D]/30'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <Check className="w-4 h-4 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Current & New Comparison Preview */}
          <div className="flex items-center justify-center gap-6 py-3 mb-5 bg-[#0D0D0B] rounded-xl border border-[#2A271F]">
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-mono text-[#A8A397] mb-1.5">Current Logo</span>
              <div className="w-16 h-16 rounded-lg bg-[#171714] border border-[#3A3323] p-1 flex items-center justify-center overflow-hidden">
                <img src={logoUrl} alt="Current Emblem" className="max-w-full max-h-full object-contain" />
              </div>
            </div>

            {previewUrl && (
              <>
                <div className="text-xs font-mono text-[#FFB000]">&rarr;</div>
                <div className="flex flex-col items-center">
                  <span className="text-[11px] font-mono text-[#FFB000] mb-1.5">New Logo Preview</span>
                  <div className="w-16 h-16 rounded-lg bg-[#171714] border border-[#FFB000] p-1 flex items-center justify-center overflow-hidden">
                    <img
                      src={previewUrl}
                      alt="New Preview"
                      className="max-w-full max-h-full object-contain"
                      onError={() => {
                        setStatusMessage({ type: 'error', text: 'Could not load image from this source.' });
                      }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Tab Selector */}
          <div className="flex rounded-xl bg-[#0D0D0B] p-1 border border-[#2A271F] mb-4">
            <button
              type="button"
              onClick={() => {
                setActiveTab('upload');
                setPreviewUrl(selectedFile ? URL.createObjectURL(selectedFile) : null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'upload'
                  ? 'bg-[#20201B] text-[#FFB000] border border-[#3A3323] shadow-sm'
                  : 'text-[#A8A397] hover:text-[#F4F0E6]'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              Upload Image
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('url');
                setPreviewUrl(urlInput.trim() || null);
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'url'
                  ? 'bg-[#20201B] text-[#FFB000] border border-[#3A3323] shadow-sm'
                  : 'text-[#A8A397] hover:text-[#F4F0E6]'
              }`}
            >
              <LinkIcon className="w-3.5 h-3.5" />
              Image URL
            </button>
          </div>

          {/* Upload Tab */}
          {activeTab === 'upload' && (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-all ${
                isDragging
                  ? 'border-[#FFB000] bg-[#FFB000]/10'
                  : 'border-[#3A3323] hover:border-[#FFB000]/60 bg-[#171714]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/jpg,image/svg+xml,image/webp"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="p-3 rounded-full bg-[#20201B] text-[#FFB000]">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <p className="font-mono text-xs text-[#F4F0E6] font-medium">
                  Click to browse or drag & drop image file
                </p>
                <p className="font-mono text-[11px] text-[#7A7568]">
                  Supports PNG, JPG, SVG, or WEBP (Max 8MB)
                </p>
                {selectedFile && (
                  <span className="mt-1 px-2.5 py-0.5 rounded bg-[#FFB000]/15 text-[#FFB000] text-[11px] font-mono">
                    Selected: {selectedFile.name}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* URL Tab */}
          {activeTab === 'url' && (
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="url"
                  value={urlInput}
                  onChange={handleUrlChange}
                  placeholder="https://example.com/logo.png"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#171714] border border-[#3A3323] text-sm text-[#F4F0E6] placeholder-[#7A7568] focus:outline-none focus:border-[#FFB000] font-mono"
                />
              </div>
              <p className="font-mono text-[11px] text-[#7A7568]">
                Paste a direct image link (ending in .png, .jpg, .svg, or .webp).
              </p>
            </div>
          )}

          {/* Modal Action Bar */}
          <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-[#2A271F]">
            {isCustom ? (
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-[#A8A397] hover:text-[#F4F0E6] bg-[#1A1A16] border border-[#2A271F] hover:border-[#3A3323] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Default</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={closeAddLogoModal}
                className="px-4 py-2 rounded-xl text-xs font-mono text-[#A8A397] hover:text-[#F4F0E6] transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={!canApply || isProcessing}
                onClick={handleApply}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-xl font-mono text-xs font-bold transition-all shadow-md ${
                  canApply && !isProcessing
                    ? 'bg-[#FFB000] text-[#0D0D0B] hover:bg-[#E85D04] cursor-pointer'
                    : 'bg-[#2A271F] text-[#7A7568] cursor-not-allowed opacity-60'
                }`}
              >
                <Check className="w-4 h-4" />
                <span>{isProcessing ? 'Applying...' : 'Set Logo'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
