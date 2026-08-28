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
    <section id="skills" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Tech Stack"
          title="Skills & Technologies"
          description="ประสบการณ์ทางภาษา เครื่องมือ โปรแกรม และระบบอัตโนมัติ (ระดับเบื้องต้น - ประยุกต์ใช้งาน)"
        />

        {/* Skills Grid by Category (Frameless Floating) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
          {skillsData.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white flex items-center justify-between pb-2 border-b border-[#272A33]/40">
                <span>{cat.category}</span>
                <Badge variant="accent">{cat.skills.length} รายการ</Badge>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((skill) => {
                  const IconComp = iconLookup[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3.5 group p-2 transition-all"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform flex-shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white group-hover:text-[#8B5CF6] transition-colors truncate">{skill.name}</div>
                        <div className="text-xs text-[#A1A1AA]">{skill.level}</div>
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
