# 📜 บันทึกประวัติการพัฒนาและสถานะโปรเจกต์ (Changelog & Progress Log)

เอกสารนี้ใช้สำหรับบันทึกความคืบหน้า ประวัติการพัฒนา และสถานะของโปรเจกต์ **Developer Portfolio Website**

---

## 📌 1. สถานะโปรเจกต์ปัจจุบัน (Current Project Status)

- **สถานะ:** 🟢 ในขั้นตอนการเตรียมเอกสารและข้อกำหนดทางเทคนิค (Documentation & Specs Setup)
- **เวอร์ชันปัจจุบัน:** `v0.2.0`
- **สถาปัตยกรรมหลัก:** React + Tailwind CSS + Framer Motion + Vite + **Vercel (Hosting)** + **Supabase PostgreSQL (Database)**

---

## 📝 2. บันทึกการเปลี่ยนแปลง (Changelog)

### [v0.2.0] — 2026-08-27 (Vercel & Supabase PostgreSQL Integration)
- **[`TECHSTACK.md`](file:///c:/xampp/htdocs/Resume/markdowns/TECHSTACK.md):** เพิ่ม Vercel (Deployment Platform) และ Supabase (PostgreSQL BaaS) พร้อมแพ็กเกจ `@supabase/supabase-js`
- **[`AboutProject.md`](file:///c:/xampp/htdocs/Resume/markdowns/AboutProject.md):** เพิ่มโครงสร้างพื้นฐานคลาวด์ Vercel & Supabase ในภาพรวมและ Definition of Done
- **[`PROJECT.md`](file:///c:/xampp/htdocs/Resume/markdowns/PROJECT.md):** เพิ่มสถาปัตยกรรม `src/lib/supabaseClient.js`, การกำหนดค่า `vercel.json` (SPA Rewrite Rules) และข้อกำหนด SQL Script พร้อม RLS
- **[`SECURITY.md`](file:///c:/xampp/htdocs/Resume/markdowns/SECURITY.md):** เพิ่มมาตรฐาน Supabase Row Level Security (RLS), การแยก `anon key` vs `service_role key`, และการตั้งค่า Environment Variables บน Vercel
- **[`DEBUG.md`](file:///c:/xampp/htdocs/Resume/markdowns/DEBUG.md):** เพิ่มคู่มือแก้ปัญหา Vercel (404 on refresh, missing env) และ Supabase (RLS policy errors)

### [v0.1.0] — 2026-08-27 (Initialization & Documentation Sync)
- **✨ เพิ่มเติมเอกสารหลัก (Core Documentation):** จัดทำ `AboutProject.md`, `TECHSTACK.md`, `DESIGN.md`, `PROJECT.md`, `SECURITY.md`, `DEBUG.md`, `LOG.md` ครบถ้วนตาม `PROJECT_SPEC.md.md`
- **🔄 ปรับปรุงและจัดระเบียบ Coding Guides (11 ไฟล์):** ปรับส่วนหัวให้สะอาดและรักษาเนื้อหา 100%

---

## 🚀 3. แผนการดำเนินงานขั้นถัดไป (Next Milestones)

- [x] **Step 1:** เติมเต็มเอกสารหลัก (`AboutProject.md`, `TECHSTACK.md`, `DESIGN.md`)
- [x] **Step 2:** จัดทำเอกสารสเปกระบบและความปลอดภัย (`PROJECT.md`, `SECURITY.md`)
- [x] **Step 3:** จัดทำเอกสารการบำรุงรักษาและประวัติการพัฒนา (`DEBUG.md`, `LOG.md`)
- [x] **Step 4:** ตรวจสอบและปรับปรุงความสอดคล้องของ Coding Guides ทั้ง 11 ไฟล์
- [x] **Step 5:** อัปเดตสเปกโครงสร้างคลาวด์ Vercel และ Supabase (PostgreSQL) ครบทุกไฟล์
- [ ] **Step 6:** เริ่มต้นพัฒนาโปรเจกต์ Phase 1 — Project Setup (Setup Vite + React + Tailwind CSS + Lucide React + Framer Motion)
