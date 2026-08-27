# 🛠️ เทคโนโลยีที่ใช้ในโปรเจกต์ (Technology Stack & Roles)

เอกสารนี้ระบุรายการเทคโนโลยี บทบาทหน้าที่ และแนวทางปฏิบัติในการเลือกใช้งานแพ็กเกจสำหรับโปรเจกต์ **Developer Portfolio Website** ตามข้อกำหนดใน [`PROJECT_SPEC.md.md`](file:///c:/xampp/htdocs/Resume/PROJECT_SPEC.md.md)

---

## 1. รายการเทคโนโลยีหลัก (Core Tech Stack)

| ส่วนประกอบ | เทคโนโลยีที่เลือกใช้ | รายละเอียด / เวอร์ชัน |
|---|---|---|
| **Frontend Framework** | **React** | Component-based UI, Hook-driven Architecture |
| **Styling Framework** | **Tailwind CSS** | Utility-first CSS สำหรับจัดการ Layout, Spacing, Colors |
| **Animation Library** | **Framer Motion** | จัดการ Motion, Transitions, Scroll Reveal และ Micro-interactions |
| **Icons Library** | **Lucide React** | ชุดไอคอนมาตรฐานสำหรับ UI, Navigation และ Social Links |
| **Build Tool & Dev Server** | **Vite** | เครื่องมือ Build ที่รวดเร็ว และ Hot Module Replacement (HMR) |
| **Package Manager** | **npm** | จัดการ Dependencies และรันคำสั่งสคริปต์ |
| **Version Control** | **Git & GitHub** | ควบคุมเวอร์ชันของซอร์สโค้ดและเผยแพร่โปรเจกต์ |

---

## 2. บทบาทและความรับผิดชอบของแต่ละเทคโนโลยี (Technology Roles)

### ⚛️ React
- **หน้าที่หลัก:**
  - จัดการโครงสร้าง Component แบบแยกส่วน (Component-based architecture)
  - นำ Component กลับมาใช้ซ้ำ (Reusable Components เช่น Cards, Buttons, Modals)
  - จัดการ State ภายในหน้าเว็บและการรับส่ง Props
  - จัดการ Dynamic Data และ Render รายการข้อมูลจาก Data Files

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
  - แปลงและรวมไฟล์ (Bundling) สำหรับ Production Build ที่มีประสิทธิภาพสูง

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
├── data/            # ไฟล์เก็บข้อมูลดิบ (Data Layer) ไม่ Hard-code ใน Component
│   ├── projects.js
│   ├── skills.js
│   ├── experience.js
│   └── activities.js
├── pages/           # หน้า Page หลัก (Home, ProjectDetail)
├── App.jsx          # Root Component
├── main.jsx         # Entry point ของ React
└── index.css        # Tailwind directives และ Global styles
```
