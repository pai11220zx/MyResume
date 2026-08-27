# 🏗️ โครงสร้างระบบและสเปกการทำงาน (Project Architecture & Specification)

เอกสารนี้ระบุรายละเอียดโครงสร้างหน้าเว็บ (Sitemap), ลำดับการแสดงผลของ Section, ข้อกำหนดของแต่ละ Component, Data Schema และขั้นตอนการพัฒนาสำหรับโปรเจกต์ **Developer Portfolio Website** ตามข้อกำหนดใน [`PROJECT_SPEC.md.md`](file:///c:/xampp/htdocs/Resume/PROJECT_SPEC.md.md)

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
├── 10. Contact CTA & Form (Contact Information & Message Form)
└── 11. Footer (Quick Links, Social Profiles, Copyright)
```

---

## 2. รายละเอียดข้อกำหนดของแต่ละ Section (Section Specifications)

### 🧭 1. Navbar (`Navbar.jsx`)
- **คุณสมบัติ:**
  - ติดอยู่ด้านบนตลอดเวลา (Sticky / Fixed) พร้อมเอฟเฟกต์เบลอพื้นหลัง (`backdrop-blur-md bg-[#0F1117]/80`)
  - โลโก้ / ชื่อย่อ: `PAI`
  - เมนูหลัก (Desktop): `Home`, `About`, `Skills`, `Projects`, `Experience`, `Contact`
  - ปุ่ม Action: **`Resume`** (สำหรับดูหรือดาวน์โหลดเรซูเม่)
  - รองรับ Mobile Menu (Hamburger Icon ที่เปิด-ปิดด้วย Animation)
  - มี Active Section Indicator เมื่อผู้ใช้เลื่อนหน้าจอไปยัง Section นั้นๆ

### 🚀 2. Hero Section (`Hero.jsx`)
- **ข้อมูลที่ต้องแสดง:**
  - คำทักทาย (Greeting): `HELLO, I'M`
  - ชื่อ (Name): `PAI`
  - ตำแหน่ง/บทบาท (Role): `Computer Science Student & Aspiring Software Developer`
  - คำแนะนำตัวสั้น (Short Bio): อธิบายความสนใจและเป้าหมายในสายงานพัฒนาซอฟต์แวร์
  - รูปโปรไฟล์ (Profile Image) ที่จัดวางอย่างสมดุล
  - ปุ่ม CTA: `[ View Projects ]` (Scroll ไปที่ Projects) และ `[ Download Resume ]`
  - ลิงก์โซเชียลมีเดีย: GitHub, LinkedIn, Facebook, Email
- **Animation:** Fade in, Slide up, Floating elements และ Stagger animations สำหรับปุ่ม

### 👤 3. About Me (`About.jsx`)
- **ข้อมูลที่ต้องแสดง:**
  - ประวัติความเป็นมาและการศึกษา
  - ความสนใจเฉพาะทาง (Web Development, Software Engineering)
  - สรุปเป็นการ์ดสั้นๆ (Summary Cards):
    - **Education:** Computer Science
    - **Focus:** Web Development
    - **Goal:** Frontend / Software Developer

### 💡 4. Tech Stack & Skills (`Skills.jsx`)
- **การจัดหมวดหมู่:**
  - **Programming Languages:** C, C++, Java, Python, JavaScript
  - **Web Development:** HTML5, CSS3, JavaScript, React, PHP
  - **Databases:** MySQL, PostgreSQL, Firebase
  - **Tools & DevOps:** Git, GitHub, VS Code, Figma
- **กฎสำคัญ:** หลีกเลี่ยงการใช้ Progress Bar แบบเปอร์เซ็นต์ (เช่น `React 90%`) เพราะวัดผลได้ยาก ให้ใช้ระดับความชำนาญ (Beginner / Intermediate / Advanced) หรือแสดงผ่านโปรเจกต์ที่ใช้งานจริง

### 💻 5. Featured Projects (`Projects.jsx`)
- **การแสดงผล:** แสดงผลงานเด่น 3–4 โปรเจกต์ในรูปแบบ Grid Cards
- **ข้อมูลในการ์ดโปรเจกต์:**
  - รูปภาพตัวอย่างโปรเจกต์ (Project Screenshot)
  - ชื่อโปรเจกต์ (Project Title)
  - คำอธิบายโปรเจกต์ (Short Description)
  - รายการเทคโนโลยีที่ใช้ (Tech Badges: e.g. React, PHP, MySQL)
  - ปีที่พัฒนา (Year) และประเภทของโปรเจกต์ (Project Type)
  - ปุ่ม Action: `[ View Project / Details ]`, `[ GitHub ]`, `[ Live Demo ]`

### ⏳ 6. Experience & Activities (`Experience.jsx`)
- **รูปแบบ:** แสดงผลแบบ Timeline เรียงตามลำดับปี/เวลา (จากปัจจุบันไปอดีต)
- **ข้อมูล:**
  - โครงการที่ทำในมหาวิทยาลัย (University Projects)
  - การฝึกงาน (Internships)
  - การเข้าร่วม Workshop, การแข่งขัน หรือ Hackathon

### 🏆 7. Activities & Achievements (`Activities.jsx`)
- **ข้อมูล:** กิจกรรมด้านเทคโนโลยี ใบประกาศนียบัตร (Certificates) พร้อมรูปภาพและองค์กรผู้จัด

### 🎓 8. Education (`Education.jsx`)
- **ข้อมูล:**
  - วุฒิการศึกษา: Bachelor of Science (Computer Science)
  - คณะ / สถาบัน: Faculty of Information Technology, Phetchaburi Rajabhat University
  - สถานะ / ปีที่คาดว่าจะสำเร็จการศึกษา: Expected Graduation: 202X
  - ผลการเรียนและวิชาสำคัญที่เกี่ยวข้อง

### 📊 9. GitHub Activity (`GitHubActivity.jsx`)
- **ข้อมูล:** สถิติการพัฒนาบน GitHub, GitHub Contribution Chart หรือแสดง Top Repositories เพื่อตอกย้ำภาพลักษณ์ Active Developer

### 📬 10. Contact Section (`Contact.jsx`)
- **ข้อมูล:** ช่องทางการติดต่อโดยตรง (Email, GitHub, LinkedIn, Socials)
- **Contact Form:** ช่องกรอก Name, Email, Subject, Message พร้อมระบบ Client-side Form Validation

### 🦶 11. Footer (`Footer.jsx`)
- **ข้อมูล:** สรุปชื่อ, Quick Links, Social Icons และข้อความลิขสิทธิ์ © 2026

---

## 3. โครงสร้างข้อมูล (Data Layer Architecture)

ข้อมูลทั้งหมดจะถูกจัดเก็บในโฟลเดอร์ `src/data/` เพื่อให้สามารถแก้ไขข้อมูลได้ง่ายโดยไม่ต้องแก้ UI Component:

```javascript
// src/data/projects.js
export const projectsData = [
  {
    id: "hotel-booking",
    title: "Smart Hotel Booking System",
    description: "ระบบจองห้องพักออนไลน์สำหรับจัดการห้องพัก ลูกค้า และข้อมูลการจอง",
    technologies: ["React", "PHP", "MySQL", "Tailwind CSS"],
    year: 2026,
    image: "/images/projects/hotel.png",
    githubUrl: "https://github.com/pai11220zx/...",
    demoUrl: "https://...",
    featured: true
  }
];

// src/data/skills.js
export const skillsData = {
  programming: ["C", "C++", "Java", "Python", "JavaScript"],
  webDevelopment: ["HTML5", "CSS3", "React", "Tailwind CSS", "PHP"],
  database: ["MySQL", "PostgreSQL", "Firebase"],
  tools: ["Git", "GitHub", "VS Code", "Figma"]
};

// src/data/experience.js
export const experienceData = [
  {
    year: "2026",
    title: "Portfolio Website & Modern Web Apps",
    role: "Frontend Developer",
    description: "ออกแบบและพัฒนาเว็บไซต์ด้วย React, Tailwind CSS และ Framer Motion"
  }
];
```

---

## 4. ลำดับขั้นตอนการพัฒนา (Development Phases)

การสร้างโปรเจกต์จริงจะดำเนินตาม 6 ขั้นตอนตาม `PROJECT_SPEC.md.md`:
1. **Phase 1 — Project Setup:** Setup Vite + React + Tailwind CSS + Lucide React + Framer Motion
2. **Phase 2 — Core UI:** สร้าง Components ครบทั้ง 11 ส่วน และเชื่อมต่อกับ Data Layer
3. **Phase 3 — Responsive Design:** ตรวจสอบและปรับปรุงการแสดงผลบน Mobile, Tablet, Desktop
4. **Phase 4 — Animation:** ใส่ Framer Motion (Page entrance, Scroll reveal, Hover, Stagger)
5. **Phase 5 — Optimization:** จัดการ Performance, Image optimization, Accessibility, SEO
6. **Phase 6 — Testing & Verification:** ตรวจสอบการทำงานของปุ่ม ลิงก์ ฟอร์ม และ Build Production
