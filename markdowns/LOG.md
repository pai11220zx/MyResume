# 📜 บันทึกประวัติการพัฒนาและสถานะโปรเจกต์ (Changelog & Progress Log)

เอกสารนี้ใช้สำหรับบันทึกความคืบหน้า ประวัติการพัฒนา และสถานะของโปรเจกต์ **Developer Portfolio Website**

---

## 📌 1. สถานะโปรเจกต์ปัจจุบัน (Current Project Status)

- **สถานะ:** 🟢 สถาปัตยกรรมระบบสมบูรณ์แบบ 100% (Clean Code, DRY, Accessibility & Production Ready)
- **เวอร์ชันปัจจุบัน:** `v1.7.0`
- **สถาปัตยกรรมหลัก:** React 18 + Tailwind CSS + Framer Motion + **WebGL (ogl)** + Vite + **Vercel (Hosting)** + **Supabase PostgreSQL (Database)**

---

## 📝 2. บันทึกการเปลี่ยนแปลง (Changelog)

### [v1.7.0] — 2026-08-31 (Full Codebase Refactoring, DRY Architecture & Hardening)
- **📦 Component Decoupling & DRY Refactoring:**
  - แยกคอมโพเนนต์ [`ProjectCard.jsx`](file:///c:/xampp/htdocs/Resume/src/components/ProjectCard.jsx) ออกมาเป็นการ์ดเดี่ยว ทำให้ [`Projects.jsx`](file:///c:/xampp/htdocs/Resume/src/components/Projects.jsx) สั้นลงกว่า 50% อ่านเข้าใจง่ายและดูแลรักษาสะดวก
  - สกัดคอมโพเนนต์แจ้งเตือนกลาง [`Toast.jsx`](file:///c:/xampp/htdocs/Resume/src/components/common/Toast.jsx) พร้อมระบบ Portal Mount ไปยัง `document.body`
  - แยกไฟล์สไตล์ CSS เฉพาะ: [`Projects.css`](file:///c:/xampp/htdocs/Resume/src/components/Projects.css), [`ProjectModal.css`](file:///c:/xampp/htdocs/Resume/src/components/ProjectModal.css), และ [`Toast.css`](file:///c:/xampp/htdocs/Resume/src/components/common/Toast.css)
- **🌐 Complete Section Integration in `Home.jsx`:**
  - ผสาน Section ทั้งหมดเข้าสู่ [`Home.jsx`](file:///c:/xampp/htdocs/Resume/src/pages/Home.jsx) ได้แก่ `Hero`, `About`, `Skills`, `Projects`, `Experience`, `Activities`, `Education`, `GitHubActivity`, และ `Contact`
  - ปรับปรุง Navigation Links ใน [`Navbar.jsx`](file:///c:/xampp/htdocs/Resume/src/components/Navbar.jsx) และ [`Footer.jsx`](file:///c:/xampp/htdocs/Resume/src/components/Footer.jsx) ให้เชื่อมต่อไปยังทุก Section อย่างราบรื่น
- **🎨 Typography & Contrast Standardization:**
  - สร้าง Utility Classes กลางใน [`index.css`](file:///c:/xampp/htdocs/Resume/src/index.css) (`.text-title-readable`, `.text-secondary-readable`, `.text-muted-readable`) แทนที่ Arbitrary Drop-shadows ซ้ำซ้อน
  - อัปเดต `content-visibility: auto` ครอบคลุมทุก Section ID เพื่อเพิ่มประสิทธิภาพการเรนเดอร์สูงสุด
- **🛡️ Accessibility & Performance Hardening:**
  - เพิ่ม `aria-hidden="true"` ให้กับ Canvas พื้นหลังใน [`DarkVeil.jsx`](file:///c:/xampp/htdocs/Resume/src/components/common/DarkVeil.jsx)
  - ปรับปรุง Key ใน [`ScrollReveal.jsx`](file:///c:/xampp/htdocs/Resume/src/components/common/ScrollReveal.jsx) ให้เป็น Stable Composite Key
- **⚙️ Ignore Configurations & Documentation Refresh:**
  - อัปเดต [`.gitignore`](file:///c:/xampp/htdocs/Resume/.gitignore) และ [`.antigravityignore`](file:///c:/xampp/htdocs/Resume/.antigravityignore) กรองไฟล์ที่ไม่จำเป็นต่อ Git และ AI Agents อย่างรัดกุม
  - อัปเดตคู่มือ [`AboutProject.md`](file:///c:/xampp/htdocs/Resume/markdowns/AboutProject.md) และ [`DEBUG.md`](file:///c:/xampp/htdocs/Resume/markdowns/DEBUG.md) ให้ตรงกับโครงสร้างจริง

### [v1.6.0] — 2026-08-30 (Minimalist Editorial UI, WebGL Shaders & Real Projects Showcase)
- **🎨 Minimalist Editorial Redesign:** ปรับปรุง UI เป็นสไตล์ Editorial Layout ที่เน้นเนื้อหาโดยตรง ปลดแอนิเมชัน Fade-in ที่ไม่จำเป็น
- **🌌 WebGL DarkVeil & GlowCursor:** ผสานพื้นหลัง Shader `DarkVeil.jsx` และ `GlowCursor.jsx` ขับเคลื่อนด้วย `ogl` น้ำหนักเบา ไม่บล็อกการคลิก
- **🚀 Lenis Smooth Scroll:** ติดตั้ง `<SmoothScroll />` มอบการเลื่อนหน้าจอที่มีแรงเฉื่อยลื่นไหล พร้อมระบบล็อก Scrollbar อัตโนมัติเมื่อเปิด ProjectModal
- **💼 Real Projects Showcase:** อัปเดตข้อมูลผลงานและภาพพรีวิว Local Assets ครบทั้ง 8 ชิ้นงาน (CaDaCooked, DevNote, Investment, Resume, CleanAir, CleanAirToys, Com-Sci PBRU, CleanAirVoice)

### [v1.0.0 - v1.5.0] — 2026-08-27 ถึง 2026-08-28 (Milestones Summary)
- **v1.5.0:** ปรับปรุงข้อมูลส่วนตัวเป็น ปุรเชษฐ์ อบรม (MyResume)
- **v1.0.0:** Setup โปรเจกต์ React + Vite + Tailwind CSS + Framer Motion ครบวงจร


