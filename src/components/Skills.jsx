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
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

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
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-[#272A33]/50 bg-[#0F1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Tech Stack"
          title="Skills & Technologies"
          description="ประสบการณ์ทางภาษา เครื่องมือ โปรแกรม และระบบอัตโนมัติ (ระดับเบื้องต้น - ประยุกต์ใช้งาน)"
        />

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] hover:border-[#8B5CF6]/30 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-[#272A33] flex items-center justify-between">
                <span>{cat.category}</span>
                <Badge variant="accent">{cat.skills.length} รายการ</Badge>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => {
                  const IconComp = iconLookup[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-[#0F1117]/60 border border-[#272A33]/80 hover:border-[#8B5CF6]/40 transition-all flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#171A21] flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform flex-shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white group-hover:text-[#8B5CF6] transition-colors truncate">{skill.name}</div>
                        <div className="text-[11px] text-[#A1A1AA]">{skill.level}</div>
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
