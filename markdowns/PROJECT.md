# 🏗️ โครงสร้างระบบและสเปกการทำงาน (Project Architecture & Specification)

เอกสารนี้ระบุรายละเอียดโครงสร้างหน้าเว็บ (Sitemap), ลำดับการแสดงผลของแต่ละ Section, ข้อกำหนดของ Component, สถาปัตยกรรมข้อมูล Supabase (PostgreSQL), การกำหนดค่า Vercel Deployment และขั้นตอนการพัฒนาสำหรับโปรเจกต์ **Developer Portfolio Website**

---

## 1. ผังโครงสร้างเว็บไซต์ (Website Sitemap & Navigation)

```text
Home (Landing Page)
│
├── 1. Navbar (Sticky Navigation & Resume CTA)
├── 2. Hero Section (Introduction, Main Role, CTA, Social Links)
├── 3. About Me (Bio, Background, Career Goals, Key Summary Cards)
├── 4. Tech Stack & Skills (Categorized Skills & Proficiency)
├── 5. Featured Projects (Top 3-4 Projects with GitHub & Demo links)
│   └── [Optional Modal / Page] Project Detail
├── 6. Experience & Activities (Timeline Format)
├── 7. Activities & Achievements (Workshops, Competitions, Certificates)
├── 8. Education (University, Degree, Faculty, Academic Status)
├── 9. GitHub Activity (Contribution Stats / Repository Showcase)
├── 10. Contact CTA & Form (Contact Information & Message Form -> Supabase)
└── 11. Footer (Quick Links, Social Profiles, Copyright)
```

---

## 2. รายละเอียดข้อกำหนดของแต่ละ Section (Section Specifications)

### 🧭 1. Navbar (`Navbar.jsx`)
- ติดอยู่ด้านบนตลอดเวลา (Sticky / Fixed) พร้อมเอฟเฟกต์เบลอพื้นหลัง (`backdrop-blur-md bg-[#0F1117]/80`)
- โลโก้: `PAI`
- เมนูหลัก (Desktop): `Home`, `About`, `Skills`, `Projects`, `Experience`, `Contact`
- ปุ่ม Action: **`Resume`**
- รองรับ Mobile Menu (Hamburger Icon พร้อมแอนิเมชันเปิดปิด)
- มี Active Section Indicator ตามตำแหน่งการเลื่อนหน้าจอ

### 🚀 2. Hero Section (`Hero.jsx`)
- ข้อมูล: คำทักทาย, ชื่อ (`PAI`), บทบาท (`Computer Science Student & Aspiring Software Developer`), คำแนะนำตัวสั้น, รูปโปรไฟล์
- ปุ่ม CTA: `[ View Projects ]`, `[ Download Resume ]`
- ลิงก์โซเชียล: GitHub, LinkedIn, Facebook, Email

### 👤 3. About Me (`About.jsx`)
- ประวัติและความสนใจด้าน Software Development
- การ์ดสรุปย่อ (Summary Cards): Education (Computer Science), Focus (Web Development), Goal (Frontend / Software Developer)

### 💡 4. Tech Stack & Skills (`Skills.jsx`)
- จัดหมวดหมู่: Programming Languages, Web Development, Databases (Supabase, PostgreSQL, MySQL), Tools (Git, GitHub, VS Code, Figma, Vercel)
- แสดงผลตามระดับความชำนาญ หรือการใช้งานจริงในโปรเจกต์ (ไม่ใช้ Progress bar % ที่วัดผลไม่ได้)

### 💻 5. Featured Projects (`Projects.jsx`)
- แสดงผลงานเด่น 3–4 โปรเจกต์ในรูปแบบ Grid Cards
- ข้อมูลในการ์ด: รูปภาพ, ชื่อโปรเจกต์, คำอธิบาย, Tech Badges, ปีที่พัฒนา, ลิงก์ `GitHub` และ `Live Demo`

### ⏳ 6. Experience & Activities (`Experience.jsx`)
- รูปแบบ Timeline เรียงตามลำดับเวลา: โครงการในมหาวิทยาลัย, การฝึกงาน, การเข้าร่วม Workshop / Hackathon

### 🏆 7. Activities & Achievements (`Activities.jsx`)
- กิจกรรมด้านเทคโนโลยี ใบประกาศนียบัตร (Certificates) พร้อมรูปภาพและองค์กรผู้จัด

### 🎓 8. Education (`Education.jsx`)
- ข้อมูลการศึกษา: วุฒิ Bachelor of Science (Computer Science), มหาวิทยาลัยราชภัฏเพชรบุรี (PBRU)

### 📊 9. GitHub Activity (`GitHubActivity.jsx`)
- สถิติการพัฒนาบน GitHub, GitHub Contribution Chart หรือ Top Repositories

### 📬 10. Contact Section (`Contact.jsx`)
- ช่องทางการติดต่อโดยตรง (Email, Social Links)
- แบบฟอร์มติดต่อ (Contact Form): กรอก Name, Email, Subject, Message และส่งบันทึกลงฐานข้อมูล **Supabase (PostgreSQL)**

### 🦶 11. Footer (`Footer.jsx`)
- สรุปชื่อ, Quick Links, Social Icons และข้อความลิขสิทธิ์ © 2026

---

## 3. สถาปัตยกรรมข้อมูลและการเชื่อมต่อ Supabase (Data & Database Layer)

### 📂 การแยกเลเยอร์ข้อมูล:
1. **Static Data Layer (`src/data/`):** เก็บข้อมูลโปรไฟล์, สกิล, โปรเจกต์ และประวัติการศึกษาในไฟล์ `.js`
2. **Dynamic Database Layer (`Supabase`):** สำหรับเก็บข้อมูลที่มีการโต้ตอบจากผู้ใช้ (เช่น Contact Messages)

### 🔌 การเชื่อมต่อ Supabase Client (`src/lib/supabaseClient.js`):
```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 🔒 กฎการจัดการฐานข้อมูล (Rule 10 Compliance):
- ห้าม AI สร้าง Table หรือ Import Data ใน Supabase เองเด็ดขาด
- ทุกครั้งที่ต้องใช้ Table ใหม่ AI จะจัดเตรียมคำสั่ง SQL ที่ปลอดภัย (พร้อม RLS Policies) ไว้ในไฟล์ `database/schema.sql` เพื่อให้ผู้ใช้นำไปรันเองบน Supabase SQL Editor

ตัวอย่างสคริปต์ตารางสำหรับ Contact Messages:
```sql
-- ตัวอย่างสคริปต์สำหรับให้ผู้ใช้นำไปรันบน Supabase SQL Editor
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- เปิดใช้งาน Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- อนุญาตให้ผู้ใช้ทั่วไป (Anon) ส่งข้อความได้
CREATE POLICY "Allow public insert contact messages"
ON contact_messages
FOR INSERT
TO anon
WITH CHECK (true);
```

---

## 4. สถาปัตยกรรมและการตั้งค่า Vercel Deployment

### ⚙️ การตั้งค่า `vercel.json` (สำหรับ SPA Routing & Rewrites):
เพื่อป้องกันปัญหาหน้าเว็บ Error 404 เมื่อ Refresh หน้าเว็บบน Vercel:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 🔐 การตั้งค่า Environment Variables บน Vercel:
ต้องตั้งค่าใน Vercel Project Settings > Environment Variables:
- `VITE_SUPABASE_URL` = URL ของโปรเจกต์ Supabase
- `VITE_SUPABASE_ANON_KEY` = Public Anon Key ของ Supabase

---

## 5. ลำดับขั้นตอนการพัฒนา (Development Phases)

1. **Phase 1 — Project Setup:** Setup Vite + React + Tailwind CSS + Lucide React + Framer Motion
2. **Phase 2 — Core UI:** สร้าง Components ครบทั้ง 11 ส่วน และเชื่อมต่อกับ Data Layer
3. **Phase 3 — Responsive Design:** ตรวจสอบและปรับปรุงการแสดงผลบน Mobile, Tablet, Desktop
4. **Phase 4 — Animation:** ใส่ Framer Motion (Page entrance, Scroll reveal, Hover, Stagger)
5. **Phase 5 — Supabase & Dynamic Features:** เชื่อมต่อ Contact Form กับ Supabase (จัดเตรียมไฟล์ `.sql`)
6. **Phase 6 — Vercel Deployment & Testing:** ตั้งค่า `vercel.json`, ตรวจสอบ Environment Variables และทดสอบ Production Build
