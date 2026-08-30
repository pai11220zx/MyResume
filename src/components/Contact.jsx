import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './common/SectionHeading';
import IconBox from './common/IconBox';

export default function Contact() {
  const { language, t } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'object') {
      return obj[language] || obj.th || '';
    }
    return obj;
  };

  const contactChannels = [
    {
      icon: Phone,
      label: t('contact.phoneLabel'),
      value: profileData.phone,
      href: profileData.socialLinks.phone,
      isExternal: false,
    },
    {
      icon: Mail,
      label: t('contact.emailLabel'),
      value: profileData.email,
      href: profileData.socialLinks.email,
      isExternal: false,
    },
    {
      icon: MapPin,
      label: t('contact.locationLabel'),
      value: getLocalized(profileData.location),
      href: null,
      isExternal: false,
    },
    {
      icon: GithubIcon,
      label: 'GitHub Profile',
      value: profileData.socialLinks.github,
      href: profileData.socialLinks.github,
      isExternal: true,
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
            const content = (
              <div className="flex items-start gap-4 p-4 rounded-2xl group transition-all">
                <IconBox icon={item.icon} size="md" />
                <div className="min-w-0">
                  <span className="text-xs text-[#8B5CF6] uppercase tracking-wider font-bold block mb-1">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors break-words text-secondary-readable">
                    {item.value}
                  </span>
                </div>
              </div>
            );

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="border-b border-[#272A33]/30 pb-4"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-2xl"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
