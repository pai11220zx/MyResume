# Developer Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** สร้างเว็บไซต์ Personal Developer Portfolio / Resume แบบ Modern Responsive Web Application (Dark Theme) ที่รวดเร็ว ลื่นไหลด้วย Framer Motion พร้อมระบบบันทึกข้อความติดต่อลง Supabase (PostgreSQL) และพร้อม Deploy บน Vercel

**Architecture:** Single Page Application (SPA) ประกอบด้วย 11 Sections บนหน้าหลัก (`Home.jsx`) ที่เชื่อมโยงด้วย Smooth Scroll Navigation และใช้ Animated Modal (Framer Motion) สำหรับเปิดดูรายละเอียดเชิงลึกของโปรเจกต์ โดยแยกข้อมูลคงที่ไว้ใน Static Data Layer (`src/data/*.js`) และใช้ Dynamic Database Layer สำหรับ Contact Form Messages

**Tech Stack:** React (v18/v19), Vite, Tailwind CSS, Framer Motion, Lucide React, Supabase JavaScript Client (`@supabase/supabase-js`), Vercel Hosting

## Global Constraints
- **Naming Rule:** การตั้งชื่อไฟล์ โฟลเดอร์ คอมโพเนนต์ และตารางฐานข้อมูลต้องใช้ภาษาอังกฤษที่เข้าใจง่าย ชัดเจน เหมาะสำหรับผู้เริ่มต้น (เช่น `src/components/Navbar.jsx`, `contact_messages`)
- **Design Rule:** ยึดถือ Dark Theme Palette: Background `#0F1117`, Surface `#171A21`, Accent `#8B5CF6`, Text `#FFFFFF`/`#A1A1AA`, Border `#272A33` และใช้ Uniform Border Standard (ห้ามใช้ `border-l-4`)
- **Database Rule (Rule 10):** ห้าม AI เชื่อมต่อไปสร้างตารางหรือ Insert ข้อมูลใน Supabase เองเด็ดขาด โดยให้สร้างไฟล์สคริปต์ `database/schema.sql` พร้อม RLS Policies เพื่อให้ผู้ใช้นำไปรันเองบน Supabase SQL Editor
- **Git Rule (Rule 11):** ห้าม AI รันคำสั่ง `git commit` หรือ `git push` ขึ้น GitHub เด็ดขาด ให้บันทึกการเปลี่ยนแปลงในแต่ละ Task เพื่อให้ผู้ใช้เป็นผู้จัดการ Git เอง
- **Animation Rule:** ใช้ Framer Motion โดย Animate เฉพาะ GPU properties (`opacity`, `transform: x, y, scale`) และรองรับ `prefers-reduced-motion`
- **Performance Rule:** แยก Data Layer (`src/data/*.js`) ออกจาก UI Components เพื่อให้ไม่มี Latency ในการโหลดหน้าแรก

---

### Task 1: Project Scaffolding & Dependencies Setup

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/index.css`
- Create: `src/main.jsx`
- Create: `src/App.jsx`

**Interfaces:**
- Produces: Base React App running on Vite with Tailwind CSS and Dark Theme baseline styles

- [ ] **Step 1: Create `package.json` with all required dependencies**

```json
{
  "name": "developer-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.48.0",
    "clsx": "^2.1.1",
    "framer-motion": "^12.4.7",
    "lucide-react": "^1.16.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^3.0.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.5.2",
    "tailwindcss": "^3.4.17",
    "vite": "^6.1.0"
  }
}
```

- [ ] **Step 2: Create `vite.config.js`**

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
```

- [ ] **Step 3: Create `tailwind.config.js` and `postcss.config.js`**

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0F1117',
        surface: {
          DEFAULT: '#171A21',
          hover: '#1E222D'
        },
        primary: '#8B5CF6',
        'primary-hover': '#7C3AED',
        border: '#272A33',
        text: {
          main: '#FFFFFF',
          muted: '#A1A1AA'
        }
      }
    },
  },
  plugins: [],
}
```

```javascript
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 4: Create `index.html` and `src/index.css`**

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en" class="dark scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Personal Developer Portfolio of Pai, Computer Science Student & Software Developer" />
    <title>Pai — Developer Portfolio & Resume</title>
  </head>
  <body class="bg-[#0F1117] text-white selection:bg-[#8B5CF6]/30 selection:text-[#8B5CF6] overflow-x-hidden antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-[#0F1117] text-[#FFFFFF] font-sans;
  }
}
```

- [ ] **Step 5: Create `src/main.jsx` and `src/App.jsx`**

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

```jsx
// src/App.jsx
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white flex items-center justify-center">
      <h1 className="text-3xl font-bold text-[#8B5CF6]">Developer Portfolio Initialized</h1>
    </div>
  );
}
```

- [ ] **Step 6: Install dependencies & verify build**
Run: `npm install`
Run: `npm run build`
Expected: Production build successful in `dist/` directory.

---

### Task 2: Static Data Layer Scaffolding (`src/data/`)

**Files:**
- Create: `src/data/profile.js`
- Create: `src/data/skills.js`
- Create: `src/data/projects.js`
- Create: `src/data/experience.js`
- Create: `src/data/activities.js`
- Create: `src/data/education.js`

**Interfaces:**
- Produces: Fully-typed/structured JavaScript objects exporting portfolio content for UI components

- [ ] **Step 1: Create `src/data/profile.js`**

```javascript
export const profileData = {
  name: "PAI",
  fullName: "Purachet (Pai)",
  title: "Computer Science Student & Aspiring Software Developer",
  shortBio: "I build modern web applications, design clean user experiences, and explore innovative cloud technologies.",
  email: "664244132@mail.pbru.ac.th",
  location: "Phetchaburi, Thailand",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/pai11220zx",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com",
    email: "mailto:664244132@mail.pbru.ac.th"
  },
  highlights: [
    { label: "Education", value: "Computer Science", subValue: "PBRU University" },
    { label: "Focus", value: "Web & Software", subValue: "Frontend & Cloud" },
    { label: "Goal", value: "Software Engineer", subValue: "Full-Stack Ready" }
  ]
};
```

- [ ] **Step 2: Create `src/data/skills.js`**

```javascript
export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", level: "Advanced", icon: "Code2" },
      { name: "Python", level: "Intermediate", icon: "Terminal" },
      { name: "Java", level: "Intermediate", icon: "FileCode" },
      { name: "C / C++", level: "Intermediate", icon: "Cpu" }
    ]
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", level: "Advanced", icon: "Atom" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "HTML5 / CSS3", level: "Advanced", icon: "Layout" },
      { name: "PHP", level: "Intermediate", icon: "Server" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "Supabase", level: "Intermediate", icon: "Database" },
      { name: "PostgreSQL", level: "Intermediate", icon: "HardDrive" },
      { name: "MySQL", level: "Intermediate", icon: "Layers" },
      { name: "Vercel", level: "Advanced", icon: "Cloud" }
    ]
  },
  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "VS Code", level: "Advanced", icon: "Laptop" },
      { name: "Figma", level: "Intermediate", icon: "Figma" },
      { name: "Vite", level: "Advanced", icon: "Zap" }
    ]
  }
];
```

- [ ] **Step 3: Create `src/data/projects.js`**

```javascript
export const projectsData = [
  {
    id: "smart-hotel-booking",
    title: "Smart Hotel Booking System",
    description: "ระบบจองห้องพักออนไลน์สำหรับจัดการห้องพัก การชำระเงิน และข้อมูลการจองของลูกค้าแบบครบวงจร",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
    year: "2026",
    category: "Full-Stack Web App",
    technologies: ["React", "PHP", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/pai11220zx/MyResume",
    demoUrl: "https://my-resume-pai.vercel.app",
    featured: true,
    details: {
      overview: "ระบบจัดการห้องพักโรงแรมที่ช่วยให้ผู้ใช้สามารถค้นหาห้องพัก เช็คห้องว่าง ทำการจอง และจัดการสถานะห้องพักสำหรับผู้ดูแลระบบ",
      problem: "การจัดการห้องพักแบบเดิมใช้เวลานานและมีข้อผิดพลาดเรื่องการจองห้องซ้ำซ้อน",
      solution: "ออกแบบระบบฐานข้อมูลแบบสัมพันธ์ (Relational DB) ที่ตรวจสอบสถานะห้องพักว่างแบบเรียลไทม์ พร้อมหน้าจอ UI ที่ใช้งานง่าย",
      features: [
        "ระบบค้นหาห้องพักตามช่วงวันที่และจำนวนผู้เข้าพัก",
        "ระบบคำนวณราคารวมและยืนยันการจอง",
        "แดชบอร์ดจัดการห้องพักและสถานะสำหรับแอดมิน",
        "รองรับการแสดงผลทุกหน้าจออย่างสมบูรณ์"
      ],
      challenges: "การจัดการเงื่อนไขเวลาและช่วงวันที่ที่อาจทับซ้อนกัน",
      learnings: "เข้าใจการออกแบบ Database Schema และการจัดการ Form State ที่ซับซ้อนใน React"
    }
  },
  {
    id: "dev-portfolio",
    title: "Modern Developer Portfolio",
    description: "เว็บไซต์พอร์ตโฟลิโอส่วนตัวและเรซูเม่ออนไลน์ ออกแบบสไตล์ Dark Theme ด้วย React, Tailwind และ Framer Motion",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    year: "2026",
    category: "Frontend & Animation",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Supabase", "Vercel"],
    githubUrl: "https://github.com/pai11220zx/MyResume",
    demoUrl: "https://my-resume-pai.vercel.app",
    featured: true,
    details: {
      overview: "เว็บไซต์นำเสนอผลงานและทักษะของนักพัฒนาซอฟต์แวร์ที่เน้น Modern Developer Aesthetic พร้อมระบบส่งข้อความติดต่อผ่าน Supabase",
      problem: "เรซูเม่แบบเอกสาร PDF ทั่วไปไม่สามารถแสดงความสามารถด้านการสร้าง Interactive UI และ Animation ได้",
      solution: "สร้าง Single Page Application ที่มีแอนิเมชันลื่นไหล รองรับ Accessibility และเชื่อมต่อฐานข้อมูลคลาวด์",
      features: [
        "แอนิเมชันลื่นไหลด้วย Framer Motion พร้อมรองรับ Prefers-reduced-motion",
        "Project Detail Modal แสดงรายละเอียดเชิงลึก",
        "Contact Form บันทึกลง Supabase PostgreSQL พร้อมระบบป้องกัน Spam",
        "Responsive 100% Mobile-First"
      ],
      challenges: "การควบคุม Bundle Size และการจัดระเบียบโครงสร้าง Component ให้ Reuse ได้สูงสุด",
      learnings: "เชี่ยวชาญการใช้ Tailwind CSS Utility, Framer Motion Stagger และ Supabase Row Level Security"
    }
  },
  {
    id: "university-database-system",
    title: "University Database Management",
    description: "ระบบจำลองการจัดการข้อมูลนักศึกษา รายวิชา และผลการเรียน พร้อมการออกรายงานสรุป",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60",
    year: "2025",
    category: "Database & Backend",
    technologies: ["PostgreSQL", "Python", "SQL"],
    githubUrl: "https://github.com/pai11220zx",
    demoUrl: "",
    featured: false,
    details: {
      overview: "โครงงานการออกแบบและเขียนคำสั่ง SQL สำหรับจัดการข้อมูลนักศึกษาและการลงทะเบียนเรียน",
      problem: "ข้อมูลมีความซับซ้อนและจำเป็นต้องมี Foreign Key Constraints ที่ถูกต้อง",
      solution: "วิเคราะห์ Normalized ER Diagram ถึงระดับ 3NF และเขียน Trigger/Views เพื่อสร้างรายงาน",
      features: [
        "ออกแบบฐานข้อมูล 3NF ป้องกันข้อมูลซ้ำซ้อน",
        "สร้าง SQL Views สำหรับสรุปเกรดเฉลี่ย",
        "คำสั่งค้นหาข้อมูลนักศึกษาที่มีประสิทธิภาพสูง"
      ],
      challenges: "การจัดการ Join หลายตารางโดยรักษา Performance",
      learnings: "หลักการออกแบบ Relational Database และการเขียน SQL Query ขั้นสูง"
    }
  }
];
```

- [ ] **Step 4: Create `src/data/experience.js`, `src/data/activities.js`, `src/data/education.js`**

```javascript
// src/data/experience.js
export const experienceData = [
  {
    period: "2026 - Present",
    role: "Frontend & Web Application Developer",
    organization: "Personal & Academic Projects",
    description: "พัฒนาเว็บแอปพลิเคชันด้วย React, Tailwind CSS และ Framer Motion พร้อมศึกษาเทคโนโลยี Cloud และ Supabase",
    skills: ["React", "Tailwind CSS", "Framer Motion", "Supabase", "Git"]
  },
  {
    period: "2025",
    role: "Database Project Developer",
    organization: "Computer Science Coursework",
    description: "ออกแบบระบบฐานข้อมูล PostgreSQL และพัฒนาสคริปต์จัดการข้อมูลสำหรับโครงการการศึกษา",
    skills: ["PostgreSQL", "SQL", "Database Design", "Python"]
  },
  {
    period: "2024",
    role: "Computer Science Student",
    organization: "Phetchaburi Rajabhat University",
    description: "เริ่มต้นศึกษาหลักสูตรวิทยาการคอมพิวเตอร์ เน้นโครงสร้างข้อมูล อัลกอริทึม และการเขียนโปรแกรมเชิงวัตถุ",
    skills: ["C", "C++", "Java", "Data Structures", "Algorithms"]
  }
];

// src/data/activities.js
export const activitiesData = [
  {
    title: "Web Development Workshop 2025",
    date: "2025",
    organization: "Faculty of Information Technology",
    description: "เข้าร่วมอบรมเชิงปฏิบัติการการพัฒนาเว็บแอปพลิเคชันสมัยใหม่ด้วย React และ Tailwind CSS"
  },
  {
    title: "University Coding Competition",
    date: "2024",
    organization: "PBRU Computer Club",
    description: "เข้าร่วมการแข่งขันการเขียนโปรแกรมแก้ไขโจทย์ปัญหาอัลกอริทึมและโครงสร้างข้อมูล"
  }
];

// src/data/education.js
export const educationData = {
  degree: "Bachelor of Science (Computer Science)",
  faculty: "Faculty of Information Technology",
  university: "Phetchaburi Rajabhat University",
  status: "Undergraduate Student",
  graduationYear: "Expected 2027",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Systems & SQL",
    "Web Application Development",
    "Software Engineering Principles"
  ]
};
```

---

### Task 3: Client Utilities & Database Schema Setup

**Files:**
- Create: `src/lib/utils.js`
- Create: `src/lib/supabaseClient.js`
- Create: `database/schema.sql`
- Create: `public/resume.pdf` (placeholder)
- Create: `public/favicon.svg`

**Interfaces:**
- Produces: `cn()` utility helper, configured `supabase` client instance, and ready-to-run PostgreSQL schema script for user.

- [ ] **Step 1: Create `src/lib/utils.js`**

```javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create `src/lib/supabaseClient.js`**

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

- [ ] **Step 3: Create `database/schema.sql` (For user to run in Supabase SQL Editor)**

```sql
-- ============================================================
-- Supabase SQL Schema for Developer Portfolio
-- Table: contact_messages (ข้อความจากแบบฟอร์มติดต่อ)
-- ============================================================

-- 1. Create table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow public (anonymous) users to submit messages
CREATE POLICY "Allow public insert messages"
ON contact_messages
FOR INSERT
TO anon
WITH CHECK (true);

-- 4. Policy: Only authenticated owner can view messages
CREATE POLICY "Allow authenticated owner read"
ON contact_messages
FOR SELECT
TO authenticated
USING (true);
```

- [ ] **Step 4: Create `public/favicon.svg` and placeholder `public/resume.pdf`**

```xml
<!-- public/favicon.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="24" fill="#0F1117" />
  <rect x="2" y="2" width="96" height="96" rx="22" fill="none" stroke="#272A33" stroke-width="4" />
  <text x="50" y="65" font-family="system-ui, sans-serif" font-size="44" font-weight="900" fill="#8B5CF6" text-anchor="middle">P</text>
</svg>
```

---

### Task 4: Navigation Component (`Navbar.jsx`)

**Files:**
- Create: `src/components/Navbar.jsx`

**Interfaces:**
- Consumes: `profileData` from `src/data/profile.js`
- Produces: `<Navbar activeSection={activeSection} />` with smooth scrolling, active section highlight, responsive mobile drawer, and resume download link.

- [x] **Step 1: Implement `src/components/Navbar.jsx`**

```jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code } from 'lucide-react';
import { profileData } from '../data/profile';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0F1117]/85 backdrop-blur-md border-b border-[#272A33] py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-[#171A21] border border-[#272A33] flex items-center justify-center text-[#8B5CF6] group-hover:border-[#8B5CF6]/50 transition-colors">
            <Code className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#8B5CF6] transition-colors">
            {profileData.name}
            <span className="text-[#8B5CF6]">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#171A21]/60 border border-[#272A33] rounded-full px-4 py-1.5 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 shadow-sm shadow-[#8B5CF6]/20'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium transition-colors shadow-lg shadow-[#8B5CF6]/20"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#171A21] border border-[#272A33] text-white hover:text-[#8B5CF6] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1117]/95 backdrop-blur-xl border-b border-[#272A33] px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#A1A1AA] hover:text-white hover:bg-[#171A21]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-3 rounded-xl bg-[#8B5CF6] text-white font-medium shadow-md"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      )}
    </header>
  );
}
```

---

### Task 5: Hero Section Component (`Hero.jsx`)

**Files:**
- Create: `src/components/Hero.jsx`

**Interfaces:**
- Consumes: `profileData` from `src/data/profile.js`
- Produces: `<Hero />` Section with developer badges, greeting, CTA buttons, and social links.

- [x] **Step 1: Implement `src/components/Hero.jsx`**

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#8B5CF6]/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171A21] border border-[#272A33] text-sm text-[#A1A1AA] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-medium">Available for Software Developer Opportunities</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6"
        >
          Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-purple-400 to-indigo-400">{profileData.name}</span>
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-2xl font-medium text-[#A1A1AA] max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          {profileData.title}
        </motion.p>

        {/* Short Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm sm:text-base text-[#A1A1AA]/80 max-w-2xl mx-auto mb-10"
        >
          {profileData.shortBio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium transition-all shadow-lg shadow-[#8B5CF6]/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#171A21] hover:bg-[#1E222D] text-white border border-[#272A33] hover:border-[#8B5CF6]/40 font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 text-[#8B5CF6]" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-4 text-[#A1A1AA]"
        >
          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-[#171A21] border border-[#272A33] hover:border-[#8B5CF6]/50 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profileData.socialLinks.email}
            className="p-3 rounded-xl bg-[#171A21] border border-[#272A33] hover:border-[#8B5CF6]/50 hover:text-white transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 6: About Me & Skills Components (`About.jsx`, `Skills.jsx`)

**Files:**
- Create: `src/components/About.jsx`
- Create: `src/components/Skills.jsx`

**Interfaces:**
- Consumes: `profileData` from `src/data/profile.js`, `skillsData` from `src/data/skills.js`
- Produces: `<About />` and `<Skills />` components

- [x] **Step 1: Implement `src/components/About.jsx`**

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Compass, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

const iconMap = {
  Education: GraduationCap,
  Focus: Compass,
  Goal: Target
};

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#272A33]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background & Career Interest
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            <p>
              สวัสดีครับ ผม <strong className="text-white">{profileData.name}</strong> นักศึกษาสาขาวิทยาการคอมพิวเตอร์ (Computer Science) มหาวิทยาลัยราชภัฏเพชรบุรี ผู้มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชันและซอฟต์แวร์สมัยใหม่
            </p>
            <p>
              ผมมุ่งมั่นที่จะพัฒนาทักษะทางด้าน <span className="text-[#8B5CF6]">Frontend & Modern Web Technologies</span> โดยเน้นการสร้าง User Interface ที่สวยงาม ลื่นไหล ใช้งานง่ายตามมาตรฐาน Clean Code และ Responsive Web Design
            </p>
            <p>
              นอกจากนี้ยังศึกษาและฝึกฝนการออกแบบระบบฐานข้อมูลเชิงสัมพันธ์ (PostgreSQL / MySQL) และการใช้งาน Cloud Platform เช่น Supabase และ Vercel เพื่อเตรียมความพร้อมสู่การทำงานจริงในฐานะ Software Developer
            </p>
          </div>

          {/* Summary Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {profileData.highlights.map((item, index) => {
              const IconComponent = iconMap[item.label] || Sparkles;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-5 rounded-2xl bg-[#171A21] border border-[#272A33] hover:border-[#8B5CF6]/40 transition-colors flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] uppercase tracking-wider block font-semibold">{item.label}</span>
                    <h3 className="text-lg font-bold text-white">{item.value}</h3>
                    <span className="text-xs text-[#A1A1AA]">{item.subValue}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [x] **Step 2: Implement `src/components/Skills.jsx`**

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, FileCode, Cpu, Atom, Palette, Layout, Server, Database, HardDrive, Layers, Cloud, GitBranch, Laptop, Figma, Zap, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skills';

const iconLookup = {
  Code2, Terminal, FileCode, Cpu, Atom, Palette, Layout, Server, Database, HardDrive, Layers, Cloud, GitBranch, Laptop, Figma, Zap
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 border-t border-[#272A33]/50 bg-[#0F1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2">เทคโนโลยีและเครื่องมือที่ใช้ในการพัฒนาซอฟต์แวร์</p>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] hover:border-[#8B5CF6]/30 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-6 pb-3 border-b border-[#272A33] flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="text-xs font-normal text-[#8B5CF6] bg-[#8B5CF6]/10 px-2.5 py-1 rounded-full">{cat.skills.length} skills</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill) => {
                  const IconComp = iconLookup[skill.icon] || Code2;
                  return (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-[#0F1117]/60 border border-[#272A33]/80 hover:border-[#8B5CF6]/40 transition-all flex items-center gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#171A21] flex items-center justify-center text-[#8B5CF6] group-hover:scale-110 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#8B5CF6] transition-colors">{skill.name}</div>
                        <div className="text-[11px] text-[#A1A1AA]">{skill.level}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 7: Featured Projects & Animated Modal Components (`Projects.jsx`, `ProjectModal.jsx`)

**Files:**
- Create: `src/components/Projects.jsx`
- Create: `src/components/ProjectModal.jsx`

**Interfaces:**
- Consumes: `projectsData` from `src/data/projects.js`
- Produces: `<Projects />` grid with view project buttons and `<ProjectModal />` dialog with backdrop click close and escape key handling.

- [x] **Step 1: Implement `src/components/ProjectModal.jsx`**

```jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Layers, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        />

        {/* Modal Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-[#171A21] border border-[#272A33] rounded-2xl shadow-2xl overflow-hidden z-10 my-8 cursor-default max-h-[90vh] flex flex-col"
        >
          {/* Header image banner */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden shrink-0 bg-[#0F1117]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171A21] via-[#171A21]/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0F1117]/80 border border-[#272A33] text-white hover:text-[#8B5CF6] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title on Image */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#8B5CF6] text-white inline-block mb-2">
                {project.category} • {project.year}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{project.title}</h2>
            </div>
          </div>

          {/* Scrollable details body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 text-xs font-medium rounded-lg bg-[#0F1117] text-[#8B5CF6] border border-[#272A33]">
                  {tech}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Overview</h4>
              <p className="text-white text-base leading-relaxed">{project.details?.overview || project.description}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0F1117] border border-[#272A33]">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm mb-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>Problem</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">{project.details?.problem}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0F1117] border border-[#272A33]">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">{project.details?.solution}</p>
              </div>
            </div>

            {/* Features list */}
            {project.details?.features && (
              <div>
                <h4 className="text-sm font-semibold text-[#A1A1AA] uppercase tracking-wider mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.details.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white">
                      <Sparkles className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#272A33] flex flex-wrap gap-4 justify-end">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F1117] border border-[#272A33] text-white hover:border-[#8B5CF6] text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm font-medium transition-colors shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
```

- [x] **Step 2: Implement `src/components/Projects.jsx`**

```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-[#272A33]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Projects & Applications
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2">ผลงานและระบบที่พัฒนาขึ้นจริง</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl bg-[#171A21] border border-[#272A33] hover:border-[#8B5CF6]/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10"
            >
              {/* Thumbnail Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#0F1117] cursor-pointer" onClick={() => setSelectedProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A21] via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold rounded-md bg-[#0F1117]/80 text-[#8B5CF6] border border-[#272A33] backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#8B5CF6]" />
                  </h3>
                  <p className="text-sm text-[#A1A1AA] line-clamp-2 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-0.5 text-[11px] font-medium rounded-md bg-[#0F1117] text-[#A1A1AA] border border-[#272A33]">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="pt-4 border-t border-[#272A33] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[#8B5CF6] hover:underline"
                  >
                    View Details &rarr;
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0F1117] border border-[#272A33] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6]/50 transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0F1117] border border-[#272A33] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6]/50 transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
```

---

### Task 8: Experience & Activities Timeline Components (`Experience.jsx`, `Activities.jsx`)

**Files:**
- Create: `src/components/Experience.jsx`
- Create: `src/components/Activities.jsx`

**Interfaces:**
- Consumes: `experienceData` from `src/data/experience.js`, `activitiesData` from `src/data/activities.js`
- Produces: `<Experience />` and `<Activities />`

- [x] **Step 1: Implement `src/components/Experience.jsx`**

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Sparkles } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-[#272A33]/50 bg-[#0F1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience & Journey
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2">เส้นทางการเรียนรู้และประสบการณ์ในการพัฒนาซอฟต์แวร์</p>
        </div>

        {/* Timeline Items */}
        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-[#272A33] space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#171A21] border-2 border-[#8B5CF6] group-hover:scale-125 transition-transform" />

              <div className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] group-hover:border-[#8B5CF6]/40 transition-colors space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-xs text-[#A1A1AA]">{item.organization}</span>
                </div>

                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{item.description}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map(skill => (
                    <span key={skill} className="px-2 py-0.5 text-[11px] font-medium rounded bg-[#0F1117] text-[#A1A1AA] border border-[#272A33]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [x] **Step 2: Implement `src/components/Activities.jsx`**

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Sparkles } from 'lucide-react';
import { activitiesData } from '../data/activities';

export default function Activities() {
  return (
    <section className="py-20 relative z-10 border-t border-[#272A33]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Activities & Workshops</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {activitiesData.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] hover:border-[#8B5CF6]/40 transition-colors space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8B5CF6]">{act.date}</span>
                <span className="text-xs text-[#A1A1AA]">{act.organization}</span>
              </div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-[#8B5CF6]" />
                {act.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">{act.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 9: Education & GitHub Activity Components (`Education.jsx`, `GitHubActivity.jsx`)

**Files:**
- Create: `src/components/Education.jsx`
- Create: `src/components/GitHubActivity.jsx`

**Interfaces:**
- Consumes: `educationData` from `src/data/education.js`, `profileData` from `src/data/profile.js`
- Produces: `<Education />` and `<GitHubActivity />`

- [x] **Step 1: Implement `src/components/Education.jsx`**

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Sparkles } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section className="py-20 relative z-10 border-t border-[#272A33]/50 bg-[#0F1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-[#171A21] border border-[#272A33] space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">{educationData.status} • {educationData.graduationYear}</span>
              <h3 className="text-xl font-bold text-white mt-1">{educationData.degree}</h3>
              <p className="text-sm text-[#A1A1AA]">{educationData.faculty} — {educationData.university}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#272A33]">
            <h4 className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8B5CF6]" />
              Relevant Coursework
            </h4>
            <div className="flex flex-wrap gap-2">
              {educationData.coursework.map(course => (
                <span key={course} className="px-3 py-1 text-xs font-medium rounded-lg bg-[#0F1117] text-white border border-[#272A33]">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [x] **Step 2: Implement `src/components/GitHubActivity.jsx`**

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, GitPullRequest, Star, ExternalLink, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export default function GitHubActivity() {
  return (
    <section className="py-20 relative z-10 border-t border-[#272A33]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Developer Activity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">GitHub Activity & Repositories</h2>
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-[#171A21] border border-[#272A33] text-center space-y-6">
          <div className="inline-flex p-4 rounded-2xl bg-[#0F1117] border border-[#272A33] text-[#8B5CF6]">
            <Github className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Explore My GitHub Repositories</h3>
            <p className="text-sm text-[#A1A1AA] max-w-xl mx-auto mt-2">
              ติดตามความเคลื่อนไหว ซอร์สโค้ดของโปรเจกต์ต่างๆ และการพัฒนาอย่างต่อเนื่องได้ที่ GitHub Profile ของผม
            </p>
          </div>

          <a
            href={profileData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-medium text-sm transition-colors shadow-lg shadow-[#8B5CF6]/20"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
```

---

### Task 10: Contact Section & Supabase Integration (`Contact.jsx`, `Footer.jsx`)

**Files:**
- Create: `src/components/Contact.jsx`
- Create: `src/components/Footer.jsx`

**Interfaces:**
- Consumes: `supabase` from `src/lib/supabaseClient.js`, `profileData` from `src/data/profile.js`
- Produces: `<Contact />` form with client validation, database record insertion to Supabase `contact_messages`, and `<Footer />` component.

- [x] **Step 1: Implement `src/components/Contact.jsx`**

```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, Phone, MapPin } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success'|'error', text: '' }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage({ type: 'error', text: 'กรุณากรอกข้อมูลให้ครบทุกช่องที่จำเป็น' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'No Subject',
          message: formData.message.trim()
        }
      ]);

      if (error) throw error;

      setStatusMessage({ type: 'success', text: 'ขอบคุณครับ! บันทึกข้อความติดต่อของคุณเรียบร้อยแล้ว' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatusMessage({ type: 'error', text: 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้งหรือติดต่อผ่านอีเมลโดยตรง' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#272A33]/50 bg-[#0F1117]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold tracking-wider uppercase mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2">มีโปรเจกต์ที่สนใจหรือต้องการพูดคุย สามารถส่งข้อความมาได้เลยครับ</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#171A21] border border-[#272A33] space-y-6">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <a href={profileData.socialLinks.email} className="flex items-center gap-4 text-[#A1A1AA] hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1117] border border-[#272A33] flex items-center justify-center text-[#8B5CF6] group-hover:border-[#8B5CF6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">Email</span>
                    <span className="text-sm font-medium text-white">{profileData.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-[#A1A1AA]">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1117] border border-[#272A33] flex items-center justify-center text-[#8B5CF6]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#A1A1AA] block">Location</span>
                    <span className="text-sm font-medium text-white">{profileData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-[#171A21] border border-[#272A33] space-y-5">
              {statusMessage && (
                <div className={`p-4 rounded-xl border flex items-center gap-3 text-sm ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                }`}>
                  {statusMessage.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1117] border border-[#272A33] text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#0F1117] border border-[#272A33] text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry or message topic"
                  className="w-full px-4 py-3 rounded-xl bg-[#0F1117] border border-[#272A33] text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0F1117] border border-[#272A33] text-white focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#8B5CF6] hover:bg-[#7C3AED] disabled:opacity-50 text-white font-semibold text-sm transition-all shadow-lg shadow-[#8B5CF6]/25"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [x] **Step 2: Implement `src/components/Footer.jsx`**

```jsx
import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#272A33] bg-[#0F1117] text-[#A1A1AA] text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <span className="font-bold text-white text-base">{profileData.name}.dev</span>
          <p className="text-xs text-[#A1A1AA] mt-1">© {new Date().getFullYear()} {profileData.fullName}. All rights reserved.</p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-[#171A21] border border-[#272A33] text-[#A1A1AA] hover:text-white hover:border-[#8B5CF6] transition-colors"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
```

---

### Task 11: Main Page Assembly, Vercel Config & Verification

**Files:**
- Create: `src/pages/Home.jsx`
- Modify: `src/App.jsx`
- Create: `vercel.json`

**Interfaces:**
- Consumes: All UI components (Navbar, Hero, About, Skills, Projects, Experience, Activities, Education, GitHubActivity, Contact, Footer)
- Produces: Complete working Single Page Application ready for local development and Vercel deployment.

- [x] **Step 1: Create `src/pages/Home.jsx`**

```jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Activities from '../components/Activities';
import Education from '../components/Education';
import GitHubActivity from '../components/GitHubActivity';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0F1117] text-white selection:bg-[#8B5CF6]/30 selection:text-[#8B5CF6]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Activities />
        <Education />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

- [x] **Step 2: Update `src/App.jsx`**

```jsx
import React from 'react';
import Home from './pages/Home';

export default function App() {
  return <Home />;
}
```

- [x] **Step 3: Create `vercel.json`**

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

- [x] **Step 4: Verify production build**
Run: `npm run build`
Expected: Zero build errors, clean `dist/` bundle created.

---

## Plan Self-Review
- **Spec coverage:** Covers all 11 sections in `PROJECT_SPEC.md.md`, Single Page + Animated Modal (ADR 0001), Hybrid Data with Supabase (ADR 0002), Vercel Rewrites, Dark Theme Token Palette, and Uniform Border standard.
- **Placeholder scan:** No "TODO" or "TBD". All code snippets are complete and copy-ready.
- **Rule compliance:** Rule 10 (database script created for user execution, no automated DB calls), Rule 11 (no git push/commit calls), Beginner-friendly English naming used throughout.
