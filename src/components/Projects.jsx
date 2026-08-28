import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-[#272A33]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Featured Work"
          title="Projects & Applications"
          description="ผลงานและระบบที่พัฒนาขึ้นจริง"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl bg-[#171A21] border border-[#272A33] hover:border-[#8B5CF6]/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10"
            >
              {/* Thumbnail Image */}
              <div
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                className="relative h-48 w-full overflow-hidden bg-[#0F1117] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A21] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold rounded-md bg-[#0F1117]/80 text-[#8B5CF6] border border-[#272A33] backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
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
                    className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors cursor-pointer flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#8B5CF6]" />
                  </h3>
                  <p className="text-sm text-[#A1A1AA] line-clamp-2 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech}>
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-[#272A33] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[#8B5CF6] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded"
                  >
                    View Details &rarr;
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0F1117] border border-[#272A33] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6]/50 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0F1117] border border-[#272A33] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6]/50 transition-colors"
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
