# 🛠️ เทคโนโลยีที่ใช้ในโปรเจกต์ (Technology Stack & Roles)

เอกสารนี้ระบุรายการเทคโนโลยี บทบาทหน้าที่ และแนวทางปฏิบัติในการเลือกใช้งานแพ็กเกจสำหรับโปรเจกต์ **Developer Portfolio Website** ตามข้อกำหนดใน [`PROJECT_SPEC.md.md`](file:///c:/xampp/htdocs/Resume/PROJECT_SPEC.md.md) ร่วมกับการ Deploy บน **Vercel** และเชื่อมต่อระบบฐานข้อมูล **Supabase (PostgreSQL)**

---

## 1. รายการเทคโนโลยีหลัก (Core Tech Stack)

| ส่วนประกอบ | เทคโนโลยีที่เลือกใช้ | รายละเอียด / บทบาท |
|---|---|---|
| **Frontend Framework** | **React** | Component-based UI, Hook-driven Architecture |
| **Styling Framework** | **Tailwind CSS** | Utility-first CSS สำหรับจัดการ Layout, Spacing, Colors |
| **Animation Library** | **Framer Motion** | จัดการ Motion, Transitions, Scroll Reveal และ Micro-interactions |
| **Icons Library** | **Lucide React** | ชุดไอคอนมาตรฐานสำหรับ UI, Navigation และ Social Links |
| **Build Tool & Dev Server** | **Vite** | เครื่องมือ Build ที่รวดเร็ว และ Hot Module Replacement (HMR) |
| **Package Manager** | **npm** | จัดการ Dependencies และรันคำสั่งสคริปต์ |
| **Deployment & Hosting** | **Vercel** | แพลตฟอร์มคลาวด์สำหรับโฮสต์เว็บระดับ Production, Global Edge Network |
| **Database & BaaS** | **Supabase (PostgreSQL)** | ฐานข้อมูล Relational Database สำหรับบันทึกข้อความจาก Contact Form, สถิติ หรือ Dynamic Data |
| **Version Control** | **Git & GitHub** | ควบคุมเวอร์ชันของซอร์สโค้ดและเชื่อมโยง CI/CD กับ Vercel |

---

## 2. บทบาทและความรับผิดชอบของแต่ละเทคโนโลยี (Technology Roles)

### ⚛️ React
- **หน้าที่หลัก:**
  - จัดการโครงสร้าง Component แบบแยกส่วน (Component-based architecture)
  - นำ Component กลับมาใช้ซ้ำ (Reusable Components เช่น Cards, Buttons, Modals)
  - จัดการ State ภายในหน้าเว็บและการรับส่ง Props
  - จัดการ Dynamic Data และ Render รายการข้อมูลจาก Data Files และ Supabase

### 🎨 Tailwind CSS
- **หน้าที่หลัก:**
  - จัดการโครงสร้าง Layout ด้วย Flexbox และ Grid
  - ควบคุมการแสดงผลตามขนาดหน้าจอ (Responsive Breakpoints: Mobile-first)
  - กำหนดชุดสี (Theme Tokens) และ Dark Mode
  - กำหนดระยะห่าง (Spacing Scale), Typography และ Border
- **กฎสำคัญ:** หลีกเลี่ยงการเขียน Custom CSS ซ้ำซ้อน หากสามารถใช้ Class ของ Tailwind CSS จัดการได้

### 🎬 Framer Motion
- **หน้าที่หลัก:**
  - จัดการ Animation เมื่อโหลดหน้าเว็บ (Page Entrance)
  - จัดการ Effect เมื่อเลื่อนหน้าจอมาถึง Section ต่างๆ (Scroll Reveal)
  - จัดการ Stagger Animation ของรายการการ์ด (Skills, Projects, Timeline)
  - จัดการ Hover Effects บนปุ่มและการ์ดผลงาน
  - รองรับโหมดลดการเคลื่อนไหว (`prefers-reduced-motion`) เพื่อการเข้าถึงที่ดี

### ⚡ Vite
- **หน้าที่หลัก:**
  - จัดเตรียม Development Server ที่เริ่มทำงานได้ทันที
  - แปลงและรวมไฟล์ (Bundling) สำหรับ Production Build ที่มีประสิทธิภาพสูงเพื่อ Deploy บน Vercel

### ☁️ Vercel
- **หน้าที่หลัก:**
  - แพลตฟอร์มหลักสำหรับการ Deploy เว็บไซต์และเชื่อมต่อ Git แบบอัตโนมัติ (Continuous Deployment)
  - จัดการ Custom Domain, SSL/HTTPS Certificate อัตโนมัติ
  - จัดการ Environment Variables (เช่น URL และ Public Key ของ Supabase) อย่างปลอดภัย

### 🐘 Supabase (PostgreSQL)
- **หน้าที่หลัก:**
  - ให้บริการฐานข้อมูล **PostgreSQL** บนระบบคลาวด์
  - บันทึกข้อมูลข้อความจากแบบฟอร์มติดต่อ (Contact Form messages) หรือสถิติการเข้าชม
  - ควบคุมความปลอดภัยในการเข้าถึงข้อมูลผ่าน **Row Level Security (RLS)**
- **กฎข้อบังคับสำคัญ:** ห้าม AI สร้าง Table หรือ Import Data เองโดยพลการ ทุกการเปลี่ยนแปลงโครงสร้างตาราง ให้เตรียมเป็นไฟล์ SQL Script เพื่อให้ผู้ใช้เป็นคนรันเองบน Supabase Dashboard เสมอ

### 🔣 Lucide React
- **หน้าที่หลัก:**
  - เป็นชุดไอคอนหลักของทั้งเว็บไซต์ เพื่อรักษา Visual Consistency
- **กฎสำคัญ:** ใช้ Lucide Icon แทนการวาด SVG เองทุกกรณีที่มีไอคอนที่เหมาะสมอยู่แล้ว

---

## 3. นโยบายการจัดการ Dependencies & Packages

- **ติดตั้งเฉพาะ Package ที่จำเป็นเท่านั้น:**
  ```bash
  # Core Packages
  npm install framer-motion lucide-react clsx tailwind-merge

  # Database Integration (ติดตั้งเมื่อต้องการเชื่อมต่อ Supabase)
  npm install @supabase/supabase-js
  ```
- **ข้อห้าม:** ห้ามติดตั้ง Library ขนาดใหญ่หรือ Package เสริมที่ไม่จำเป็น เพื่อรักษา Performance และลดขนาดของ Bundle Size ให้เล็กที่สุด

---

## 4. โครงสร้างโปรเจกต์และสถาปัตยกรรมข้อมูล (Project Structure & Data Flow)

โครงสร้างโฟลเดอร์ที่กำหนดให้ใช้งาน:

```text
src/
├── assets/          # รูปภาพและ static assets ภายในโปรเจกต์
├── components/      # UI Components ที่แยกหน้าที่ชัดเจน
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Activities.jsx
│   ├── Education.jsx
│   ├── GitHubActivity.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data/            # ไฟล์เก็บข้อมูลดิบ (Static Data Layer)
│   ├── projects.js
│   ├── skills.js
│   ├── experience.js
│   └── activities.js
├── lib/             # โมดูลเชื่อมต่อภายนอก
│   └── supabaseClient.js  # การตั้งค่าเชื่อมต่อ Supabase Client
├── pages/           # หน้า Page หลัก (Home, ProjectDetail)
├── App.jsx          # Root Component
├── main.jsx         # Entry point ของ React
└── index.css        # Tailwind directives และ Global styles
```
