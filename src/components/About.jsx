import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Compass, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';
import SectionHeading from './common/SectionHeading';

const iconMap = {
  Education: GraduationCap,
  Focus: Compass,
  Goal: Target
};

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#272A33]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="About Me"
          title="Background & Career Interest"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            <p>
              สวัสดีครับ ผม <strong className="text-white">{profileData.name}</strong> นักศึกษาสาขาวิทยาการคอมพิวเตอร์ (Computer Science) มหาวิทยาลัยราชภัฏเพชรบุรี ผู้มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชันและซอฟต์แวร์สมัยใหม่
            </p>
            <p>
              ผมมุ่งมั่นที่จะพัฒนาทักษะทางด้าน <span className="text-[#8B5CF6]">Frontend & Modern Web Technologies</span> โดยเน้นการสร้าง User Interface ที่สวยงาม ลื่นไหล ใช้งานง่ายตามมาตรฐาน Clean Code และ Responsive Web Design
            </p>
            <p>
              นอกจากนี้ยังศึกษาและฝึกฝนการออกแบบระบบฐานข้อมูลเชิงสัมพันธ์ (PostgreSQL / MySQL) และการใช้งาน Cloud Platform เช่น Supabase และ Vercel เพื่อเตรียมความพร้อมสู่การทำงานจริงในฐานะ Software Developer
            </p>
          </div>

          {/* Summary Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {profileData.highlights.map((item, index) => {
              const IconComponent = iconMap[item.label] || Sparkles;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 card-surface card-surface-hover flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] uppercase tracking-wider block font-semibold">{item.label}</span>
                    <h3 className="text-lg font-bold text-white">{item.value}</h3>
                    <span className="text-xs text-[#A1A1AA]">{item.subValue}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
