import React, { useState, useEffect } from 'react';
import { PlusCircle, X, CheckCircle2, Link as LinkIcon, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/categoriesData';
import { useToast } from '../context/ToastContext';

export const SubmitAppModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    appName: '',
    packageName: '',
    category: 'ai',
    version: '1.0.0',
    apkUrl: '',
    githubUrl: '',
    description: '',
    developerName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.appName || !formData.apkUrl) {
      addToast('Please provide an app name and APK download URL', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      addToast(`Submitted "${formData.appName}" for archive verification`, 'success');
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      appName: '',
      packageName: '',
      category: 'ai',
      version: '1.0.0',
      apkUrl: '',
      githubUrl: '',
      description: '',
      developerName: '',
    });
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm animate-fade-in font-sans"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white border border-[#E1E6E2] shadow-2xl overflow-hidden animate-scale-up max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-[#EDF0ED] bg-white shrink-0">
          <div className="flex items-center gap-2 min-w-0">
            <Sparkles className="w-4 h-4 text-[#5B9C8D] shrink-0" />
            <span className="text-xs sm:text-sm font-bold text-[#202522] font-sans truncate">
              Add APK to Archive
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6F7772] hover:text-[#202522] hover:bg-[#EAF1EC] active:bg-[#EDF0ED] transition-colors shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-5 bg-white overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#EAF1EC] text-[#5B9C8D] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#202522] font-sans">
                Build Submitted
              </h3>
              <p className="text-xs text-[#6F7772] max-w-sm mx-auto leading-relaxed">
                Submission for <strong>{formData.appName}</strong> received. The release APK URL and package specifications have been queued for registry.
              </p>
              <button
                onClick={handleReset}
                className="mt-2 px-4 py-2 rounded-xl bg-[#5B9C8D] active:bg-[#4e897b] text-white font-semibold text-xs hover:bg-[#4e897b] transition-colors shadow-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#202522] mb-1">
                    Application Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.appName}
                    onChange={(e) => setFormData({ ...formData, appName: e.target.value })}
                    placeholder="e.g. Cooklet"
                    className="w-full px-3 py-2.5 sm:py-2 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] text-sm sm:text-xs font-medium text-[#202522] placeholder:text-[#9AA19C] focus:border-[#5B9C8D] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202522] mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2.5 sm:py-2 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] text-sm sm:text-xs font-medium text-[#202522] focus:border-[#5B9C8D] focus:bg-white focus:outline-none cursor-pointer transition-colors"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#202522] mb-1">
                    Package Name
                  </label>
                  <input
                    type="text"
                    value={formData.packageName}
                    onChange={(e) => setFormData({ ...formData, packageName: e.target.value })}
                    placeholder="com.niharputhran.app"
                    className="w-full px-3 py-2.5 sm:py-2 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] text-sm sm:text-xs font-medium text-[#202522] placeholder:text-[#9AA19C] focus:border-[#5B9C8D] focus:bg-white focus:outline-none font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202522] mb-1">
                    Version
                  </label>
                  <input
                    type="text"
                    value={formData.version}
                    onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                    placeholder="1.0.0"
                    className="w-full px-3 py-2.5 sm:py-2 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] text-sm sm:text-xs font-medium text-[#202522] placeholder:text-[#9AA19C] focus:border-[#5B9C8D] focus:bg-white focus:outline-none font-mono transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202522] mb-1">
                  APK Release URL *
                </label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-3 sm:top-2.5 w-3.5 h-3.5 text-[#9AA19C]" />
                  <input
                    type="url"
                    required
                    value={formData.apkUrl}
                    onChange={(e) => setFormData({ ...formData, apkUrl: e.target.value })}
                    placeholder="https://github.com/user/repo/releases/download/.../app-release.apk"
                    className="w-full pl-9 pr-3 py-2.5 sm:py-2 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] text-sm sm:text-xs font-medium text-[#202522] placeholder:text-[#9AA19C] focus:border-[#5B9C8D] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202522] mb-1">
                  GitHub Repository (Optional)
                </label>
                <input
                  type="url"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                  placeholder="https://github.com/user/repo"
                  className="w-full px-3 py-2.5 sm:py-2 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] text-sm sm:text-xs font-medium text-[#202522] placeholder:text-[#9AA19C] focus:border-[#5B9C8D] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202522] mb-1">
                  Description
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Summary of features and architecture..."
                  className="w-full px-3 py-2 rounded-xl bg-[#F7F8F5] border border-[#E1E6E2] text-sm sm:text-xs font-medium text-[#202522] placeholder:text-[#9AA19C] focus:border-[#5B9C8D] focus:bg-white focus:outline-none resize-none font-sans transition-colors"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-2 sm:py-1.5 rounded-lg text-xs font-semibold text-[#6F7772] hover:text-[#202522] hover:bg-[#EAF1EC] active:bg-[#EDF0ED] transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2.5 sm:py-2 rounded-xl bg-[#5B9C8D] active:bg-[#4e897b] text-white font-semibold text-xs hover:bg-[#4e897b] transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Build'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
