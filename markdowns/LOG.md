# 📜 บันทึกประวัติการพัฒนาและสถานะโปรเจกต์ (Changelog & Progress Log)

เอกสารนี้ใช้สำหรับบันทึกความคืบหน้า ประวัติการพัฒนา และสถานะของโปรเจกต์ **Developer Portfolio Website**

---

## 📌 1. สถานะโปรเจกต์ปัจจุบัน (Current Project Status)

- **สถานะ:** 🟢 อัปเดตข้อมูลจริงครบถ้วน (ปุรเชษฐ์ อบรม / MyResume) พร้อมใช้งานและผ่านการทดสอบ 100% (Production Ready)
- **เวอร์ชันปัจจุบัน:** `v1.5.0`
- **สถาปัตยกรรมหลัก:** React 18 + Tailwind CSS + Framer Motion + **WebGL (ogl)** + Vite + **Vercel (Hosting)** + **Supabase PostgreSQL (Database)**

---

## 📝 2. บันทึกการเปลี่ยนแปลง (Changelog)

### [v1.5.0] — 2026-08-28 (Personal Profile Overhaul & MyResume Branding)
- **👤 Profile Data Overhaul:** อัปเดตชื่อ `ปุรเชษฐ์ อบรม (PURACHET AOBORM)`, เบอร์โทร `095-882-9113`, อีเมล `664244132@mail.pbru.ac.th`, ลิงก์ GitHub `https://github.com/664244132`, และคติประจำใจ `Never Stop learning`
- **🏷️ Branding & Identity:** เปลี่ยนชื่อโปรเจกต์และโลโก้จาก `PAI.DEV` เป็น **`MyResume`** ทั่วทั้ง Navbar, Footer, และ `index.html`
- **🎓 Education Details:** อัปเดตประวัติการศึกษาครบ 2 สถาบัน (มรภ.เพชรบุรี วท.บ. วิทยาการคอมพิวเตอร์ ปี 4 GPA 2.80 และ ร.ร.เตรียมอุดมศึกษาพัฒนาการปราณบุรี)
- **💼 Work Experience & Projects:** บันทึกข้อมูลงาน Earn while learn คณะ IT มรภ.เพชรบุรี และอัปเดต 5 ผลงานโปรเจกต์จริง (`KaDaCooked`, `Dev Note Snippets`, `AI Investment Portfolio Simulator`, `MyResume`, `PBRU Clean Air & PM 2.5 Sound Pitching`)
- **🗣️ Language Proficiency:** เพิ่มข้อมูลทักษะภาษา: ภาษาไทย (เจ้าของภาษา), ภาษาอังกฤษ (B1), ภาษาจีน (เบื้องต้น)
- **🎯 Career Objective:** เพิ่มเป้าหมายความสนใจในการฝึกงานด้าน **Automation & Software Development**
- **🧪 Verification:** `npm run build` ผ่านสมบูรณ์ (0 errors, 0 warnings)

### [v1.4.0] — 2026-08-28 (UI Simplification & Pruning)
- **✂️ Hero Section Cleanup:** นำ Availability Status Badge และกลุ่มปุ่ม CTA (View Projects / Download Resume) ออกจาก `Hero.jsx` เพื่อลดความซ้ำซ้อนและทำให้ส่วนหัวโปร่งโล่ง อ่านง่าย
- **✂️ Layout Streamlining:** นำ Section `<Experience />` และ `<GitHubActivity />` ออกจาก `Home.jsx` ตามความต้องการของผู้ใช้
- **🔗 Navbar Menu Synchronization:** นำรายการเมนู Experience ออกจาก Navigation Links ใน `Navbar.jsx` เพื่อป้องกัน Dead Links
- **🧪 Verification:** `npm run build` ผ่านสมบูรณ์ (0 errors, 0 warnings)

### [v1.3.0] — 2026-08-28 (React Bits Glow Cursor Integration)
- **✨ WebGL Glow Cursor Integration:** ติดตั้งแพ็กเกจ `ogl` และสร้างคอมโพเนนต์ `GlowCursor.jsx` + `GlowCursor.css` จาก React Bits เพื่อเพิ่มลูกเล่นเส้นทางแสงเรืองรองตามการเลื่อนเมาส์
- **🎨 Brand Palette Synchronization:** กำหนดสี `color="#8B5CF6"` (หัวแสงสีม่วงแบรนด์) และ `secondaryColor="#38BDF8"` (หางแสงสีฟ้าคราม) เข้ากับ Dark Theme `#0F1117` อย่างลงตัว
- **⚡ Vite Bundle Optimization:** กำหนด `manualChunks` รวม `ogl` เข้ากับ `animation-vendor` เพื่อให้โค้ดแยกส่วนอย่างสะอาดและโหลดรวดเร็ว
- **📖 Documentation Sync:** อัปเดตผังคอมโพเนนต์ใน `AboutProject.md`

### [v1.2.0] — 2026-08-28 (Refactor according to REFACTORCODE.md & Documentation Overhaul)
- **🛡️ Ignore Rules Enhancement:** อัปเดต `.gitignore` และ `.antigravityignore` ให้กรองไฟล์ที่ไม่จำเป็น ป้องกันการ Commit ที่ไม่พึงประสงค์ และเพิ่มความเร็วในการสแกนไฟล์ของ AI Agent
- **🎨 Scrollbar Theme (Rule 11):** เพิ่มสไตล์ Scrollbar โทนสีม่วงธีมแบรนด์ `#8B5CF6` ใน `src/index.css`
- **📖 Documentation Overhaul:**
  - อัปเดต `AboutProject.md` สะท้อนผังโครงสร้างไดเรกทอรีและคอมโพเนนต์ปัจจุบัน 100%
  - ปรับปรุง `DEBUG.md` เพื่อให้ AI Agent ใช้ตรวจสอบและดีบักระบบได้อย่างแม่นยำ
  - จัดระเบียบ `LOG.md` ให้สะอาด กระชับ ไม่เยิ่นเย้อ
- **🧪 Verification:** `npm run build` ผ่านสมบูรณ์ (0 errors, 0 warnings)

### [v1.1.0] — 2026-08-28 (DRY Refactor, Local Assets & Full Accessibility Audit)
- **🧩 DRY & Shared Components:** สร้าง `SectionHeading.jsx` และ `Badge.jsx` ลดโค้ดซ้ำซ้อนใน 8 Sections
- **🎨 CSS Modularization:** สกัดคลาส Component ใน `src/index.css` (`.card-surface`, `.btn-primary`, `.btn-secondary`, `.form-input`)
- **📦 Local Assets Integration:** สร้างไฟล์รูปภาพ Mockup Vector ใน `public/images/projects/` รองรับการรันแบบ 100% Offline
- **♿ ARIA & Accessibility:** เพิ่ม `role="dialog"`, `aria-modal="true"`, `aria-live="polite"` และ Keyboard Navigation (`tabIndex`, `onKeyDown`)
- **🌐 SEO & Social Sharing:** เพิ่ม OpenGraph meta tags และ `theme-color="#0F1117"` ใน `index.html`

### [v1.0.0] — 2026-08-28 (Full Portfolio Implementation & Initial Assembly)
- **✨ Complete Application Assembly:** พัฒนาครบทั้ง 11 Sections ตาม `PROJECT_SPEC.md.md` (Navbar, Hero, About, Skills, Projects with Modal, Experience, Activities, Education, GitHub Activity, Contact with Supabase, Footer)
- **🚀 Performance Optimization:** ตั้งค่า `manualChunks` ใน `vite.config.js` แยก Vendor Chunks ลดขนาดไฟล์และตัด Warning ทั้งหมด

### [v0.1.0] — 2026-08-27 (Project Initialization & Documentation Setup)
- **📄 Core Documentation:** จัดทำเอกสารข้อกำหนดหลัก `PROJECT_SPEC.md.md`, `AboutProject.md`, `TECHSTACK.md`, `DESIGN.md`, `PROJECT.md`, `SECURITY.md`, `DEBUG.md`, `LOG.md` และ Coding Guides ครบ 18 ไฟล์
- **☁️ Cloud Infrastructure:** กำหนดสเปก Vercel Hosting และ Supabase PostgreSQL
