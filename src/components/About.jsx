import React from 'react';
import { Languages, Quote, Briefcase, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import SectionHeading from './common/SectionHeading';
import Badge from './common/Badge';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#272A33]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="About Me"
          title="ประวัติและเป้าหมายการทำงาน"
          description="ทำความรู้จักกับตัวตน ความมุ่งมั่น และทักษะความพร้อมในการปฏิบัติงาน"
        />

        {/* Deep Dive: Bio, Career Objective & Language Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Bio & Career Objective */}
          <div className="lg:col-span-7 space-y-8 text-[#E2E8F0] leading-relaxed">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-white">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  {profileData.thaiName} ({profileData.name})
                </h3>
                <Badge variant="default" className="text-xs">นักศึกษาชั้นปีที่ 4</Badge>
              </div>
              <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] font-normal">
                นักศึกษาสาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี มีพื้นฐานแน่นด้านการเขียนโปรแกรม โครงสร้างข้อมูล และการพัฒนาระบบเว็บ มีความกระตือรือร้นในการเรียนรู้เทคโนโลยีใหม่ๆ และมุ่งมั่นที่จะพัฒนาตนเองผ่านการลงมือปฏิบัติงานจริง
              </p>
            </div>

            {/* Editorial Career Objective (Frameless Minimalist) */}
            <div className="pt-6 border-t border-[#272A33]/40 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-base drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                <Briefcase className="w-4 h-4 text-[#8B5CF6]" />
                <span>เป้าหมายการทำงานและการฝึกงาน (Career Objective)</span>
              </div>
              <p className="text-sm sm:text-base text-[#F8FAFC] leading-relaxed font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] italic">
                "{profileData.careerObjective || 'มีความมุ่งมั่นที่จะนำความรู้ด้านวิทยาการคอมพิวเตอร์และการพัฒนาซอฟต์แวร์ มาประยุกต์ใช้ในการพัฒนาระบบอัตโนมัติ (Automation) และ Web Applications เพื่อเพิ่มประสิทธิภาพการทำงานขององค์กร พร้อมเรียนรู้เทคโนโลยีใหม่ๆ และร่วมงานกับทีมอย่างมืออาชีพ'}"
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-[#E2E8F0] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Automation & Scripting</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#E2E8F0] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Full-stack Development</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#E2E8F0] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Continuous Learning</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Language Skills & Guiding Principle */}
          <div className="lg:col-span-5 space-y-8">
            {/* Language Skills (Editorial Minimalist List) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base pb-2 border-b border-[#272A33]/40 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                <Languages className="w-4 h-4 text-[#8B5CF6]" />
                <span>ทักษะด้านภาษา (Language Proficiency)</span>
              </div>
              <div className="space-y-3 pt-1">
                {profileData.languages.map((lang) => (
                  <div
                    key={lang.language}
                    className="flex items-center justify-between py-2 border-b border-[#272A33]/20"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-bold text-[#8B5CF6] uppercase tracking-wider">{lang.tag}</span>
                      <span className="text-sm font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{lang.language}</span>
                    </div>
                    <span className="text-xs text-[#CBD5E1] font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values / Motto Editorial Block */}
            <div className="pt-4 border-t border-[#272A33]/40 flex items-start gap-3.5">
              <Quote className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-[#8B5CF6] uppercase tracking-wider block font-bold mb-0.5">คติประจำใจ</span>
                <h4 className="text-base font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">"Never Stop Learning"</h4>
                <p className="text-xs text-[#CBD5E1] font-medium mt-1 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  ยึดมั่นในการเรียนรู้และพัฒนาตนเองอย่างต่อเนื่องเพื่อส่งมอบผลงานที่มีคุณภาพสูงสุด
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
