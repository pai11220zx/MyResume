# 📜 บันทึกประวัติการพัฒนาและสถานะโปรเจกต์ (Changelog & Progress Log)

เอกสารนี้ใช้สำหรับบันทึกความคืบหน้า ประวัติการพัฒนา และสถานะของโปรเจกต์ **Developer Portfolio Website**

---

## 📌 1. สถานะโปรเจกต์ปัจจุบัน (Current Project Status)

- **สถานะ:** 🟢 ปรับปรุง UI แสดงผลเนื้อหาเป็น Minimalist Editorial & Content-First เรียบร้อย (Production Ready)
- **เวอร์ชันปัจจุบัน:** `v1.6.0`
- **สถาปัตยกรรมหลัก:** React 18 + Tailwind CSS + Framer Motion + **WebGL (ogl)** + Vite + **Vercel (Hosting)** + **Supabase PostgreSQL (Database)**

---

## 📝 2. บันทึกการเปลี่ยนแปลง (Changelog)

### [v1.6.0] — 2026-08-30 (Minimalist Editorial UI Redesign, Lenis & DRY Architecture)
- **🎨 Minimalist Editorial Redesign:** ปรับปรุง `About.jsx`, `Projects.jsx`, และ `Contact.jsx` เป็นสไตล์ Editorial Layout ที่เน้นเนื้อหาโดยตรง ปลดแอนิเมชัน Fade-in ที่ไม่จำเป็น เพื่อความรวดเร็วในการอ่านข้อมูล
- **🌌 WebGL DarkVeil & GlowCursor:** ผสานพื้นหลัง Shader `DarkVeil.jsx` และ `GlowCursor.jsx` ขับเคลื่อนด้วย `ogl` ให้ภาพลักษณ์ล้ำสมัย เบาเครื่อง และไม่บล็อกการคลิก (`pointer-events-none`)
- **🚀 Lenis Smooth Scroll:** ติดตั้งและผสาน `<SmoothScroll />` มอบการเลื่อนหน้าจอที่มีแรงเฉื่อยลื่นไหล พร้อมระบบล็อก Scrollbar อัตโนมัติเมื่อเปิด ProjectModal
- **💎 Glassmorphic Navbar & Ghost Resume CTA:** ปรับ Navbar เมื่อเลื่อนลงมาให้โปร่งแสงสไตล์ Glassmorphism และปรับปุ่ม Resume เป็น Ghost Button เรืองแสงสีม่วง
- **📦 DRY Architecture & IconBox Component:** รวมศูนย์โครงสร้างกล่องไอคอนสร้างเป็น [`IconBox.jsx`](file:///c:/xampp/htdocs/Resume/src/components/common/IconBox.jsx) ใช้งานร่วมกันใน 4 คอมโพเนนต์หลัก
- **🔗 Live Demo & Semantic Anchoring:** เชื่อมต่อปุ่ม Live Demo `(project.demoUrl || project.liveUrl)` ครบถ้วน และเพิ่ม `id="education"` รองรับ CSS Containment
- **🛡️ Ignore Rules & Full Markdown Compliance:** ปรับปรุง `.gitignore` และ `.antigravityignore` ให้กรองไฟล์แคช/ขยะครบถ้วน พร้อมอัปเดต `AboutProject.md` และ `DEBUG.md`
- **🧪 Verification:** `npm run build` ผ่านสมบูรณ์ 100% (0 errors, 0 warnings)

### [v1.0.0 - v1.5.0] — 2026-08-27 ถึง 2026-08-28 (Historical Milestones Summary)
- **v1.5.0:** ปรับปรุงข้อมูลส่วนตัวของ ปุรเชษฐ์ อบรม (PURACHET AOBORM) เปลี่ยนแบรนด์เป็น **MyResume** และบันทึกประวัติการศึกษา/ผลงานโครงการจริง
- **v1.4.0:** ตัดส่วน `<Experience />` และ `<GitHubActivity />` ออกจากหน้าหลักตามความต้องการของผู้ใช้เพื่อความกระชับ
- **v1.3.0:** ผสาน WebGL Glow Cursor Trail และปรับแต่ง Vite Vendor Chunks
- **v1.2.0:** ปรับแต่งธีม Scrollbar สีม่วงแบรนด์ `#8B5CF6` และตรวจสอบกฎ `REFACTORCODE.md`
- **v1.1.0:** สกัด Reusable Components (`SectionHeading`, `Badge`), ทำความสะอาด CSS และเตรียม Local Assets 100%
- **v1.0.0 & v0.1.0:** Setup โปรเจกต์ React + Vite + Tailwind CSS + Framer Motion ครบ 11 Sections พร้อมเอกสารคู่มือตั้งต้น

