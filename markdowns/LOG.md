# 📜 บันทึกประวัติการพัฒนาและสถานะโปรเจกต์ (Changelog & Progress Log)

เอกสารนี้ใช้สำหรับบันทึกความคืบหน้า ประวัติการพัฒนา และสถานะของโปรเจกต์ **Developer Portfolio Website**

---

## 📌 1. สถานะโปรเจกต์ปัจจุบัน (Current Project Status)

- **สถานะ:** 🟢 สถาปัตยกรรมระบบสมบูรณ์แบบ 100% (Image Optimized with WebP, Mobile Performant & Production Ready)
- **เวอร์ชันปัจจุบัน:** `v1.8.0`
- **สถาปัตยกรรมหลัก:** React 18 + Tailwind CSS + Framer Motion + **WebGL (ogl)** + Vite + **Vercel (Hosting)** + **Supabase PostgreSQL (Database)**

---

## 📝 2. บันทึกการเปลี่ยนแปลง (Changelog)

### [v1.8.0] — 2026-08-31 (High-Performance WebP Image Optimization & Mobile Cursor Bypass)
- **🖼️ WebP Image Optimization with Sharp (88.4% File Size Reduction):**
  - ติดตั้ง Library [`sharp`](file:///c:/xampp/htdocs/Resume/package.json) และสร้างสคริปต์อัตโนมัติ [`scripts/convert-webp.js`](file:///c:/xampp/htdocs/Resume/scripts/convert-webp.js)
  - แปลงรูปภาพผลงานทั้งหมดใน `public/projects/` จาก `.png` เป็น `.webp` ระดับ HD ช่วยลดขนาดไฟล์รวมจาก 3.73 MB เหลือเพียง 0.43 MB (ประหยัดพื้นที่และลดเวลาโหลดลงถึง 88.4%)
  - อัปเดตพาธรูปภาพใน [`src/data/projects.js`](file:///c:/xampp/htdocs/Resume/src/data/projects.js) ให้ชี้ไปยัง `.webp`
  - เพิ่มคำสั่งลัด `"optimize:images": "node scripts/convert-webp.js"` ใน `package.json`
- **📱 Mobile & Touch Devices Performance Hardening:**
  - เพิ่ม Media Query ใน [`GlowCursor.css`](file:///c:/xampp/htdocs/Resume/src/components/common/GlowCursor.css) ซ่อน Canvas บนอุปกรณ์พกพา
  - เพิ่ม `isTouchOrMobile()` ใน [`GlowCursor.jsx`](file:///c:/xampp/htdocs/Resume/src/components/common/GlowCursor.jsx) เพื่อข้ามการสร้าง WebGL Context และยกเลิก `requestAnimationFrame` ทันทีเมื่อเปิดบนมือถือ ช่วยประหยัดแบตเตอรี่และ RAM 100%
- **🚀 Image Priority & Async Decoding:**
  - เพิ่ม `loading="eager"` และ `fetchPriority="high"` บนรูปภาพ Banner ของ [`ProjectModal.jsx`](file:///c:/xampp/htdocs/Resume/src/components/ProjectModal.jsx)
  - กำหนด `loading="lazy"` และ `decoding="async"` บน [`ProjectCard.jsx`](file:///c:/xampp/htdocs/Resume/src/components/ProjectCard.jsx)
- **⚙️ Ignore Configurations & Documentation Refresh:**
  - อัปเดต [`.gitignore`](file:///c:/xampp/htdocs/Resume/.gitignore) และ [`.antigravityignore`](file:///c:/xampp/htdocs/Resume/.antigravityignore)
  - อัปเดตคู่มือ [`AboutProject.md`](file:///c:/xampp/htdocs/Resume/markdowns/AboutProject.md) และ [`DEBUG.md`](file:///c:/xampp/htdocs/Resume/markdowns/DEBUG.md) ให้ตรงกับโครงสร้างจริง

### [v1.7.0] — 2026-08-31 (Full Codebase Refactoring & DRY Architecture)
- **📦 Component Decoupling:** แยก `ProjectCard.jsx`, `Projects.css`, `ProjectModal.css`, `Toast.jsx`, `Toast.css`
- **🌐 Complete Section Integration:** ผสาน 9 Sections หลักใน `Home.jsx`
- **🎨 Typography & Contrast:** ปรับปรุง `.text-title-readable`, `.text-secondary-readable`, `.text-muted-readable`

### [v1.0.0 - v1.6.0] — 2026-08-27 ถึง 2026-08-30 (Milestones Summary)
- **v1.6.0:** Minimalist Editorial UI, WebGL Shaders (DarkVeil, GlowCursor), Lenis Smooth Scroll และ 8 Real Projects Showcase
- **v1.0.0:** Setup โปรเจกต์ React + Vite + Tailwind CSS + Framer Motion ครบวงจร


