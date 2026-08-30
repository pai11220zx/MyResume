import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projects';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

const ProjectModal = lazy(() => import('./ProjectModal'));

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Featured Work"
          title="Projects & Applications"
          description="ผลงานและระบบที่พัฒนาขึ้นจริง"
        />

        {/* Minimalist Editorial Projects Grid (Frameless Media Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col justify-between space-y-4"
            >
              {/* Thumbnail Image Container */}
              <div
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#272A33]/60 bg-[#0F1117]/60 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] group-hover:border-[#8B5CF6]/50 transition-all shadow-md"
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="225"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090E]/90 via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Body */}
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${project.title}`}
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    className="text-lg sm:text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors cursor-pointer flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#8B5CF6]" />
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CBD5E1] font-normal line-clamp-2 mt-1.5 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(project.technologies || project.tags || []).map(tech => (
                    <Badge key={tech} size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-3 border-t border-[#272A33]/30 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#8B5CF6] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded cursor-pointer"
                  >
                    View Details &rarr;
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0F1117]/80 border border-[#272A33] text-[#E2E8F0] hover:text-white hover:border-[#8B5CF6]/50 transition-colors shadow-sm"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {(project.demoUrl || project.liveUrl) && (
                      <a
                        href={project.demoUrl || project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0F1117]/80 border border-[#272A33] text-[#E2E8F0] hover:text-white hover:border-[#8B5CF6]/50 transition-colors shadow-sm"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal (Lazy loaded & Suspense guarded) */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </Suspense>
      )}
    </section>
  );
}
