import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  FileCode,
  Cpu,
  Atom,
  Palette,
  Layout,
  Server,
  Database,
  HardDrive,
  Layers,
  Cloud,
  GitBranch,
  Laptop,
  PenTool,
  Zap,
  Smartphone,
  Puzzle,
  FileSpreadsheet,
  Globe,
  Bot,
  Sparkles,
  FileText,
  GitPullRequest,
  Gamepad2,
  Code
} from 'lucide-react';
import { skillsData } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './common/SectionHeading';
import IconBox from './common/IconBox';

const iconLookup = {
  Code2,
  Terminal,
  FileCode,
  Cpu,
  Atom,
  Palette,
  Layout,
  Server,
  Database,
  HardDrive,
  Layers,
  Cloud,
  GitBranch,
  Laptop,
  PenTool,
  Zap,
  Smartphone,
  Puzzle,
  FileSpreadsheet,
  Globe,
  Bot,
  Sparkles,
  FileText,
  GitPullRequest,
  Gamepad2,
  Code
};

export default function Skills() {
  const { t, getLocalized } = useLanguage();

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('skills.tag')}
          title={t('skills.title')}
          description={t('skills.description')}
        />

        {/* Skills Grid by Category (Frameless Floating) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {skillsData.map((cat, catIdx) => (
            <motion.div
              key={getLocalized(cat.category) || catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white pb-2 border-b border-[#272A33]/40 text-title-readable">
                {getLocalized(cat.category)}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((skill) => {
                  const IconComp = iconLookup[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3.5 group p-2 transition-all"
                    >
                      <IconBox icon={IconComp} size="sm" />
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white group-hover:text-[#8B5CF6] transition-colors truncate text-secondary-readable">{skill.name}</div>
                        <div className="text-xs text-muted-readable font-medium">{getLocalized(skill.level)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
