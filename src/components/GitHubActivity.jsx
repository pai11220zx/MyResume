import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Code2, Sparkles, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';
import { useLanguage } from '../context/LanguageContext';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function GitHubActivity() {
  const { language, t, getLocalized } = useLanguage();

  const topRepositories = [
    {
      name: "devnote-snippets",
      title: {
        th: "DevNote Snippets & VS Code Extension",
        en: "DevNote Snippets & VS Code Extension"
      },
      description: {
        th: "ระบบจัดเก็บ Code Snippets, AI Prompts พร้อม VS Code Extension และ PostgreSQL",
        en: "Developer notes and snippets manager with VS Code extension and PostgreSQL backend."
      },
      tags: ["React 18", "TypeScript", "Node.js", "VS Code API"],
      language: "TypeScript",
      langColor: "#3178C6",
      url: "https://github.com/664244132"
    },
    {
      name: "CaDaCooked-Unity3D",
      title: {
        th: "CaDaCooked (Unity 3D Cooking Game)",
        en: "CaDaCooked (Unity 3D Cooking Game)"
      },
      description: {
        th: "เกมทำอาหาร 3D Fast-Paced Simulation พัฒนาด้วย Unity 6, C# และ Finite State Machine",
        en: "3D kitchen simulation game made with Unity 6, C#, and Finite State Machine."
      },
      tags: ["Unity 6", "C#", "URP", "FSM Architecture"],
      language: "C#",
      langColor: "#178600",
      url: "https://github.com/664244132"
    },
    {
      name: "SmartPort-AI",
      title: {
        th: "SmartPort AI (AI Stock Analytics & Simulator)",
        en: "SmartPort AI (AI Stock Analytics & Simulator)"
      },
      description: {
        th: "เว็บแอปพลิเคชันวิเคราะห์หุ้นด้วย AI, Altman Z-Score และพอร์ตจำลอง 1,000,000 บาท",
        en: "AI financial scoring, stock analysis screener, and 1M THB virtual investment portfolio."
      },
      tags: ["PHP 8", "MySQL", "Quantitative AI", "Chart.js"],
      language: "PHP",
      langColor: "#4F5D95",
      url: "https://github.com/664244132"
    },
    {
      name: "MyResume-Portfolio",
      title: {
        th: "MyResume (Developer Portfolio Website)",
        en: "MyResume (Developer Portfolio Website)"
      },
      description: {
        th: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว WebGL Shaders (DarkVeil, GlowCursor), Lenis และ Supabase",
        en: "Modern developer portfolio featuring WebGL shaders, Lenis smooth scroll, and Supabase."
      },
      tags: ["React 18", "WebGL (ogl)", "Tailwind CSS", "Supabase"],
      language: "JavaScript",
      langColor: "#F7DF1E",
      url: "https://github.com/664244132"
    }
  ];

  const githubStats = [
    {
      icon: FolderGit2,
      label: language === 'en' ? "Open Source Ecosystem" : "ระบบนิเวศผลงาน",
      value: "8+ Projects",
      sub: language === 'en' ? "Web, Game & Cloud Extensions" : "เว็บ แอป เกม และส่วนขยายคลาวด์"
    },
    {
      icon: Code2,
      label: language === 'en' ? "Core Focus" : "สายงานหลัก",
      value: "Automation & Dev",
      sub: language === 'en' ? "Modern Full-Stack & Python / C#" : "Full-Stack สมัยใหม่ และ Python / C#"
    },
    {
      icon: Sparkles,
      label: language === 'en' ? "Architecture" : "มาตรฐานสถาปัตยกรรม",
      value: "Clean & DRY",
      sub: language === 'en' ? "100% Offline & Local Assets" : "แยกเลเยอร์ข้อมูล และพร้อมใช้งานทันที"
    }
  ];

  return (
    <section id="github" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag={t('github.tag')}
          title={t('github.title')}
          description={t('github.description')}
          className="mb-12"
        />

        <div className="max-w-5xl mx-auto space-y-8">
          {/* GitHub Profile Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0F1117]/60 border border-[#272A33]/70 hover:border-[#8B5CF6]/40 transition-colors"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#272A33]/40">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#171A21] border border-[#272A33] text-[#8B5CF6] shrink-0 shadow-md">
                  <GithubIcon className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white text-title-readable">Purachet Aoborm</h3>
                    <Badge variant="accent" size="sm">@664244132</Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-readable mt-1">
                    {language === 'en' ? 'Computer Science & Software Developer | PBRU' : 'นักศึกษาวิทยาการคอมพิวเตอร์ & ผู้พัฒนาซอฟต์แวร์ | มรภ.เพชรบุรี'}
                  </p>
                </div>
              </div>

              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto shrink-0 cursor-pointer shadow-md"
              >
                <span>{t('github.visit')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Stats Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {githubStats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-[#171A21]/40 border border-[#272A33]/40 space-y-1">
                  <div className="flex items-center gap-2 text-[#8B5CF6]">
                    <stat.icon className="w-4 h-4" />
                    <span className="text-xs font-semibold text-muted-readable">{stat.label}</span>
                  </div>
                  <div className="text-lg font-bold text-white text-title-readable">{stat.value}</div>
                  <p className="text-xs text-secondary-readable leading-relaxed">{stat.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top Repositories Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 text-title-readable">
                <FolderGit2 className="w-5 h-5 text-[#8B5CF6]" />
                <span>{t('github.topReposTitle')}</span>
              </h4>
              <span className="text-xs text-muted-readable font-medium">
                {t('github.statsProjects')}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topRepositories.map((repo, idx) => (
                <motion.a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-[#0F1117]/40 border border-[#272A33]/60 hover:border-[#8B5CF6]/50 hover:bg-[#171A21]/40 transition-all flex flex-col justify-between space-y-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                        <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors font-mono">
                          {repo.name}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#8B5CF6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </div>

                    <h5 className="text-xs sm:text-sm font-semibold text-white/90 text-title-readable">
                      {getLocalized(repo.title)}
                    </h5>

                    <p className="text-xs text-secondary-readable leading-relaxed">
                      {getLocalized(repo.description)}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#272A33]/30">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                      <span className="text-xs text-muted-readable font-medium">{repo.language}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {repo.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-[#171A21] border border-[#272A33] text-[#CBD5E1]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
