import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';
import Badge from './common/Badge';
import './Projects.css';

/**
 * Reusable ProjectCard Component
 * การ์ดแสดงผลงานโปรเจกต์แต่ละชิ้น (Thumbnail, Title, Tags, Action Buttons)
 * 
 * @param {Object} props
 * @param {Object} props.project - ข้อมูลผลงานโปรเจกต์
 * @param {number} props.index - ลำดับการแสดงผลเพื่อคำนวณ animation delay
 * @param {Function} props.onSelectProject - ฟังก์ชันเรียกเปิดดูรายละเอียดใน Modal
 * @param {Function} props.onTriggerNotice - ฟังก์ชันเรียกแสดงข้อความแจ้งเตือนสถานะผลงาน
 */
export default function ProjectCard({
  project,
  index = 0,
  onSelectProject,
  onTriggerNotice
}) {
  const { language, t } = useLanguage();

  const getLocalized = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'object') {
      return obj[language] || obj.th || '';
    }
    return obj;
  };

  const projectTitle = getLocalized(project.title);
  const projectDesc = getLocalized(project.description);
  const projectNotice = getLocalized(project.statusNotice);

  const handleCardKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelectProject(project);
    }
  };

  const hasLiveLink = Boolean(project.demoUrl || project.liveUrl);
  const liveTargetUrl = project.demoUrl || project.liveUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group project-card-container space-y-4"
    >
      {/* Thumbnail Image Container */}
      <div
        role="button"
        tabIndex={0}
        aria-label={`${t('projects.viewDetails')}: ${projectTitle}`}
        className="project-card-thumbnail focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
        onClick={() => onSelectProject(project)}
        onKeyDown={handleCardKeyDown}
      >
        <img
          src={project.image}
          alt={projectTitle}
          loading="lazy"
          decoding="async"
          width="400"
          height="225"
          className="project-card-image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/90 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Body */}
      <div className="flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3
            role="button"
            tabIndex={0}
            aria-label={`${t('projects.viewDetails')}: ${projectTitle}`}
            onClick={() => onSelectProject(project)}
            onKeyDown={handleCardKeyDown}
            className="text-lg sm:text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors cursor-pointer flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded text-secondary-readable"
          >
            <span>{projectTitle}</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#8B5CF6]" />
          </h3>
          <p className="text-xs sm:text-sm text-[#CBD5E1] font-normal project-card-description mt-1.5 leading-relaxed text-muted-readable">
            {projectDesc}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {(project.technologies || project.tags || []).map((tech) => (
            <Badge key={tech} size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Links */}
        <div className="pt-3 border-t border-[#272A33]/30 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onSelectProject(project)}
            className="text-xs font-bold text-[#8B5CF6] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded cursor-pointer"
          >
            {t('projects.viewDetails')} &rarr;
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0F1117]/80 border border-[#272A33] text-[#E2E8F0] hover:text-white hover:border-[#8B5CF6]/50 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {hasLiveLink ? (
              <a
                href={liveTargetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#0F1117]/80 border border-[#272A33] text-[#E2E8F0] hover:text-white hover:border-[#8B5CF6]/50 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                aria-label={t('projects.liveDemo')}
                title={t('projects.liveDemo')}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : projectNotice ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onTriggerNotice(projectNotice);
                }}
                className="p-2 rounded-lg bg-[#0F1117]/80 border border-[#272A33] text-[#E2E8F0] hover:text-white hover:border-[#8B5CF6]/50 transition-colors shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                aria-label={t('projects.liveDemo')}
                title={t('projects.liveDemo')}
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
