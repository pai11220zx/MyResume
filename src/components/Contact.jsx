import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Copy, Check } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './common/SectionHeading';
import IconBox from './common/IconBox';
import Toast from './common/Toast';

export default function Contact() {
  const { language, t, getLocalized } = useLanguage();
  const [copiedKey, setCopiedKey] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handleCopy = (e, text, key, successMsg) => {
    e.preventDefault();
    e.stopPropagation();

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key);
        setToastMessage(`${successMsg}: ${text}`);
        setTimeout(() => setCopiedKey(null), 2000);
        setTimeout(() => setToastMessage(null), 3000);
      }).catch((err) => {
        console.error('Failed to copy: ', err);
      });
    }
  };

  const contactChannels = [
    {
      key: 'phone',
      icon: Phone,
      label: t('contact.phoneLabel'),
      value: profileData.phone,
      href: profileData.socialLinks.phone,
      isExternal: false,
      allowCopy: true,
      copyText: profileData.phone,
      copySuccessMsg: t('contact.copiedPhoneMsg'),
    },
    {
      key: 'email',
      icon: Mail,
      label: t('contact.emailLabel'),
      value: profileData.email,
      href: profileData.socialLinks.email,
      isExternal: false,
      allowCopy: true,
      copyText: profileData.email,
      copySuccessMsg: t('contact.copiedEmailMsg'),
    },
    {
      key: 'location',
      icon: MapPin,
      label: t('contact.locationLabel'),
      value: getLocalized(profileData.location),
      href: null,
      isExternal: false,
      allowCopy: false,
    },
    {
      key: 'github',
      icon: GithubIcon,
      label: 'GitHub Profile',
      value: profileData.socialLinks.github,
      href: profileData.socialLinks.github,
      isExternal: true,
      allowCopy: false,
    },
  ];

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('contact.tag')}
          title={t('contact.title')}
          description={t('contact.description')}
        />

        {/* Minimalist Editorial Contact Information Grid */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {contactChannels.map((item, idx) => {
            const isCopied = copiedKey === item.key;

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border-b border-[#272A33]/30 pb-4"
              >
                <div className="flex items-start justify-between gap-3 py-2 group transition-all">
                  <div className="flex items-start gap-4 min-w-0">
                    <IconBox icon={item.icon} size="md" />
                    <div className="min-w-0">
                      <span className="text-xs text-[#8B5CF6] uppercase tracking-wider font-bold block mb-1">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.isExternal ? '_blank' : undefined}
                          rel={item.isExternal ? 'noopener noreferrer' : undefined}
                          className="text-sm sm:text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors break-words text-secondary-readable hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors break-words text-secondary-readable">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.allowCopy && (
                    <button
                      type="button"
                      onClick={(e) => handleCopy(e, item.copyText, item.key, item.copySuccessMsg)}
                      className={`p-2 rounded-xl border transition-all shrink-0 cursor-pointer flex items-center gap-1.5 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                        isCopied
                          ? 'bg-[#8B5CF6]/20 border-[#8B5CF6] text-[#8B5CF6]'
                          : 'bg-[#0F1117] border-[#272A33] text-[#94A3B8] hover:text-white hover:border-[#8B5CF6]/50'
                      }`}
                      title={isCopied ? t('contact.copiedBtn') : `${t('contact.copyBtn')} ${item.label}`}
                      aria-label={isCopied ? t('contact.copiedBtn') : `${t('contact.copyBtn')} ${item.label}`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#8B5CF6]" />
                          <span className="hidden sm:inline text-[11px]">{t('contact.copiedBtn')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline text-[11px]">{t('contact.copyBtn')}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Toast Notification Portal */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
        title={t('contact.copiedToastTitle')}
      />
    </section>
  );
}
