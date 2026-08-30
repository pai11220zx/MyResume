import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import SectionHeading from './common/SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Toast from './common/Toast';
import './Projects.css';

const PROJECTS_PER_PAGE = 9;

/**
 * Projects Section Component
 * ส่วนแสดงรายการผลงานและระบบที่พัฒนาขึ้นจริง พร้อมระบบแบ่งหน้า (Pagination) และ Modal แสดงรายละเอียด
 */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [toastNotice, setToastNotice] = useState(null);
  const toastTimeoutRef = useRef(null);
  const sectionRef = useRef(null);

  const totalPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projectsData.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  // ฟังก์ชันแสดงข้อความแจ้งเตือนสถานะผลงาน และหน่วงเวลาปิดอัตโนมัติ
  const triggerNotice = (message) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastNotice(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastNotice(null);
    }, 4000);
  };

  // ฟังก์ชันเปลี่ยนหน้าและเลื่อนกลับขึ้นมายังส่วนหัวข้อผลงาน
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative z-10 border-t border-[#272A33]/40">
      {/* Toast Notification กลาง (Portal) */}
      <Toast
        message={toastNotice}
        onClose={() => setToastNotice(null)}
        title="สถานะผลงาน"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Featured Work"
          title="Projects & Applications"
          description="ผลงานและระบบที่พัฒนาขึ้นจริง"
        />

        {/* Minimalist Editorial Projects Grid (9 per page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelectProject={setSelectedProject}
              onTriggerNotice={triggerNotice}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-3">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F1117]/90 border border-[#272A33] text-sm text-[#CBD5E1] hover:text-white hover:border-[#8B5CF6]/50 disabled:opacity-35 disabled:pointer-events-none transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>ก่อนหน้า</span>
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-xl text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] flex items-center justify-center ${
                    currentPage === pageNum
                      ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/30 border border-[#8B5CF6]'
                      : 'bg-[#0F1117]/80 border border-[#272A33] text-[#94A3B8] hover:text-white hover:border-[#8B5CF6]/40'
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F1117]/90 border border-[#272A33] text-sm text-[#CBD5E1] hover:text-white hover:border-[#8B5CF6]/50 disabled:opacity-35 disabled:pointer-events-none transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              <span>ถัดไป</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNotice={triggerNotice}
        />
      )}
    </section>
  );
}
