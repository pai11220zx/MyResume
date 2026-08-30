import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, AlertCircle, CheckCircle2, Sparkles, Lightbulb, Flame, Info } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import Badge from './common/Badge';
import './ProjectModal.css';

/**
 * Project Detail Modal Component
 * หน้าต่างแสดงรายละเอียดเชิงลึกของโปรเจกต์ (Overview, Problem, Solution, Features, Challenges, Learnings)
 * 
 * @param {Object} props
 * @param {Object|null} props.project - ข้อมูลโปรเจกต์ที่ถูกเลือก
 * @param {Function} props.onClose - ฟังก์ชันปิดหน้าต่าง Modal
 * @param {Function} [props.onNotice] - ฟังก์ชันแจ้งเตือนสถานะเมื่อคลิกปุ่มภายนอก
 */
export default function ProjectModal({ project, onClose, onNotice }) {
  const { language, t } = useLanguage();
  const [inlineNotice, setInlineNotice] = useState(null);

  const getLocalized = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'object') {
      return obj[language] || obj.th || '';
    }
    return obj;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Stop Lenis and lock body scroll when modal is mounted
    window.__lenis?.stop();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      window.__lenis?.start();
    };
  }, [onClose]);

  if (!project || typeof document === 'undefined') return null;

  const projectTitle = getLocalized(project.title);
  const projectDesc = getLocalized(project.description);
  const projectNotice = getLocalized(project.statusNotice);
  const details = project.details?.[language] || project.details?.th || project.details || {};

  const hasLiveLink = Boolean(project.demoUrl || project.liveUrl);
  const liveTargetUrl = project.demoUrl || project.liveUrl;

  return createPortal(
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden"
        data-lenis-prevent="true"
      >
        {/* Backdrop overlay (Rule 13: Backdrop Click Close) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="project-modal-backdrop"
          aria-hidden="true"
        />

        {/* Modal Content Box (Rule 13: Content Box Propagation Guard) */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          onClick={(e) => e.stopPropagation()}
          data-lenis-prevent="true"
          className="project-modal-dialog"
        >
          {/* Header image banner */}
          <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 w-full overflow-hidden shrink-0 bg-[#05060A]">
            <img
              src={project.image}
              alt={projectTitle}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="800"
              height="450"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-[#090B10]/60 to-transparent" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#05060A]/85 border border-[#272A33] text-white hover:text-[#8B5CF6] hover:border-[#8B5CF6]/50 flex items-center justify-center transition-all shadow-lg backdrop-blur-md z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] cursor-pointer"
              aria-label={t('modal.close')}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title on Image */}
            <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-7 right-4 sm:right-7">
              <h2
                id="modal-project-title"
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
              >
                {projectTitle}
              </h2>
            </div>
          </div>

          {/* Scrollable details body */}
          <div
            className="p-4 sm:p-6 md:p-8 space-y-6 project-modal-body"
            data-lenis-prevent="true"
          >
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {(project.technologies || project.tags || []).map((tech) => (
                <Badge key={tech} size="md">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {t('modal.overview')}
              </h4>
              <p className="text-white text-sm sm:text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {details.overview || projectDesc}
              </p>
            </div>

            {/* Problem & Solution Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl border border-[#272A33]/70 bg-[#0F1117]/50 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{t('modal.problem')}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
                  {details.problem}
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl border border-[#272A33]/70 bg-[#0F1117]/50 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{t('modal.solution')}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
                  {details.solution}
                </p>
              </div>
            </div>

            {/* Features list */}
            {details.features && details.features.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {t('modal.features')}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {details.features.map((feat) => (
                    <div
                      key={feat}
                      className="project-modal-feature-card text-xs sm:text-sm text-[#F1F5F9] font-medium"
                    >
                      <Sparkles className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Learnings Grid */}
            {(details.challenges || details.learnings) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {details.challenges && (
                  <div className="p-4 sm:p-5 rounded-2xl border border-[#272A33]/70 bg-[#0F1117]/50 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                      <Flame className="w-4 h-4 shrink-0" />
                      <span>{t('modal.challenges')}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
                      {details.challenges}
                    </p>
                  </div>
                )}
                {details.learnings && (
                  <div className="p-4 sm:p-5 rounded-2xl border border-[#272A33]/70 bg-[#0F1117]/50 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <Lightbulb className="w-4 h-4 shrink-0" />
                      <span>{t('modal.learnings')}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#E2E8F0] leading-relaxed font-normal">
                      {details.learnings}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Inline Status Notice if triggered */}
            <AnimatePresence>
              {inlineNotice && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: 10 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: 10 }}
                  className="p-3.5 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 flex items-center gap-3 text-sm text-[#E2E8F0]"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] shrink-0">
                    <Info className="w-4 h-4" />
                  </div>
                  <div className="flex-1 font-medium">
                    <span className="text-[#8B5CF6] font-semibold mr-1.5">{t('modal.statusTitle')}:</span>
                    {inlineNotice}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="pt-5 border-t border-[#272A33]/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F1117] border border-[#272A33] text-white hover:border-[#8B5CF6] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{t('modal.viewSource')}</span>
                </a>
              )}
              {hasLiveLink ? (
                <a
                  href={liveTargetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium transition-colors shadow-md shadow-[#8B5CF6]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t('modal.liveLink')}</span>
                </a>
              ) : projectNotice ? (
                <button
                  type="button"
                  onClick={() => {
                    setInlineNotice(projectNotice);
                    if (onNotice) {
                      onNotice(projectNotice);
                    }
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium transition-colors shadow-md shadow-[#8B5CF6]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t('modal.liveLink')}</span>
                </button>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
