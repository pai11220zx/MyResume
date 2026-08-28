import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import Badge from './common/Badge';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Content Box */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-[#171A21] border border-[#272A33] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 cursor-default max-h-[90vh] flex flex-col"
        >
          {/* Header image banner */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden shrink-0 bg-[#0F1117]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171A21] via-[#171A21]/40 to-transparent" />
            
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0F1117]/80 border border-[#272A33] text-white hover:text-[#8B5CF6] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title on Image */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#8B5CF6] text-white inline-block mb-2">
                {project.category} • {project.year}
              </span>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
            </div>
          </div>

          {/* Scrollable details body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <Badge key={tech} size="md" variant="accent">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Overview</h4>
              <p className="text-white text-base leading-relaxed">{project.details?.overview || project.description}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0F1117] border border-[#272A33]">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">{project.details?.problem}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0F1117] border border-[#272A33]">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">{project.details?.solution}</p>
              </div>
            </div>

            {/* Features list */}
            {project.details?.features && (
              <div>
                <h4 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.details.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-white">
                      <Sparkles className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#272A33] flex flex-wrap gap-4 justify-end">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F1117] border border-[#272A33] text-white hover:border-[#8B5CF6] text-sm font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium transition-colors shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
