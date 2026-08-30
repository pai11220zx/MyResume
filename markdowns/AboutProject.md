# 📖 เกี่ยวกับโปรเจกต์ (About Project) — Developer Portfolio Website

เอกสารนี้ระบุภาพรวม วัตถุประสงค์ สถาปัตยกรรมระบบ โครงสร้างไฟล์ และขอบเขตการทำงานของเว็บไซต์ **Personal Developer Portfolio / Resume Website** โดยอ้างอิงจาก [`PROJECT_SPEC.md.md`](file:///c:/xampp/htdocs/Resume/PROJECT_SPEC.md.md)

---

## 1. ภาพรวมของโปรเจกต์ (Project Overview)

เว็บไซต์นี้เป็น **Modern Personal Developer Portfolio / Online Resume** ที่พัฒนาขึ้นเพื่อนำเสนอตัวตน ทักษะความสามารถ ผลงานซอฟต์แวร์ (Projects), ประสบการณ์ (Experience), กิจกรรม (Activities), การศึกษา (Education) และระบบรับข้อความติดต่อสำหรับนักพัฒนาซอฟต์แวร์

### 🌟 จุดเด่นของโปรเจกต์ (Core Highlights):
- **Minimalist Editorial & Content-First Design:** โครงสร้างหน้าเว็บแบบเน้นเนื้อหา อ่านง่าย สบายตา ไม่มีแอนิเมชัน Fade-in บดบังสายตา
- **WebGL DarkVeil Background & Glow Cursor:** ขับเคลื่อนฉากหลังแบบไดนามิกด้วย Shader WebGL (`DarkVeil.jsx` และ `GlowCursor.jsx` พัฒนาบน `ogl`) ให้ความสว่าง นุ่มนวล ลึกลับ และเบาเครื่อง (High Performance)
- **Physics-based Inertia Smooth Scrolling:** ขับเคลื่อนการเลื่อนหน้าจอด้วย **Lenis** (`SmoothScroll.jsx`) มอบประสบการณ์ Scroll ที่ลื่นไหล นุ่มนวล ระดับ Awwwards พร้อมระบบจัดการล็อก Scrollbar อัตโนมัติเมื่อเปิด Modal
- **3D DepthText Hero Display:** นำเสนอชื่อ "Purachet Aobrom" ด้วยคอมโพเนนต์ 3D Layered Canvas Text พร้อมระบบ Pointer Tracking และ Auto Orbiting
- **Glassmorphic Floating Navbar & Ghost CTA:** แถบนำทางโปร่งแสงสไตล์ Glassmorphism เมื่อเลื่อนหน้าจอ พร้อมปุ่ม Resume แบบ Ghost Button เรืองแสงม่วง
- **DRY & Shared Components Architecture:** รวมศูนย์คอมโพเนนต์ส่วนกลาง (`IconBox`, `SectionHeading`, `Badge`, `Icons`) ลดโค้ดซ้ำซ้อนและควบคุมสไตล์ได้จากจุดเดียว
- **Accessible Frameless Media Cards & Project Modal:** แสดงผลงานโครงการด้วยการ์ดลอยอิสระ (Frameless) พร้อม Dialog ป๊อปอัปดูรายละเอียดเชิงลึกที่มีระบบ Event Bubbling Guard ป้องกันการปิดโดยไม่ตั้งใจ
- **100% Offline-Ready Assets:** รูปภาพและไอคอนทั้งหมดเก็บอยู่ภายในโปรเจกต์ ไม่พึ่งพา CDN ภายนอก
- **Cloud Database Ready:** มีไฟล์ `database/schema.sql` พร้อมใช้งานร่วมกับ Supabase PostgreSQL ภายใต้มาตรฐานความปลอดภัย Row Level Security (RLS)
- **Vercel Cloud Deployment:** รองรับการ Deploy บน Vercel พร้อมไฟล์คอนฟิก `vercel.json` สำหรับ SPA Routing Rewrites

---

## 2. ผังโครงสร้างไดเรกทอรีในปัจจุบัน (Current Directory Structure)

```text
Resume/
├── .antigravityignore       # การกำหนดค่าข้ามไฟล์สำหรับ AI Agent (Caches, Dist, Logs)
├── .env.example             # แม่แบบตัวแปรแวดล้อม Supabase
├── .gitignore               # การกรองไฟล์ที่ไม่จำเป็นสำหรับ Git
├── CONTEXT.md               # นิยามศัพท์และข้อตกลงมาตรฐานของโปรเจกต์
├── PRODUCT.md               # รายละเอียดผลิตภัณฑ์และ Product Principles
├── PROJECT_SPEC.md.md       # สเปกข้อกำหนดทางเทคนิคต้นฉบับ
├── index.html               # Entry HTML พร้อม SEO, Theme Color และ OpenGraph
├── package.json             # รายการ Dependencies และ Build Scripts
├── postcss.config.js        # PostCSS Configuration
├── tailwind.config.js       # Tailwind CSS Tokens & Breakpoints
├── vercel.json              # Vercel SPA Routing Rewrites
├── vite.config.js           # การตั้งค่า Vite และ Vendor Manual Chunks
│
├── database/
│   └── schema.sql           # โครงสร้างตาราง PostgreSQL และ RLS Policies (สำหรับรันบน Supabase)
│
├── docs/                    # Architecture Decision Records (ADR)
│   ├── adr/
│   └── superpowers/
│
├── markdowns/               # คู่มือการพัฒนาและแนวทางปฏิบัติ (18 ไฟล์)
│   ├── AboutProject.md      # ภาพรวมและสถาปัตยกรรมระบบ
│   ├── DEBUG.md             # คู่มือการแก้ไขปัญหาและดีบักสำหรับ AI Agent
│   ├── DESIGN.md            # ระบบการออกแบบและโทนสี
│   ├── LOG.md               # บันทึกประวัติและสถานะโปรเจกต์
│   ├── PROJECT.md           # สเปกโครงสร้างระบบและการเชื่อมต่อ
│   ├── REFACTORCODE.md      # กฎและมาตรฐานการ Refactor โค้ด
│   ├── SECURITY.md          # มาตรการความปลอดภัยและ RLS
│   ├── TECHSTACK.md         # บทบาทและรายการเทคโนโลยี
│   └── *CodingGuide.md      # แนวทางการเขียนโค้ดภาษาต่างๆ (HTML, CSS, JS, React, SQL, etc.)
│
├── public/
│   ├── favicon.svg          # โลโก้ Favicon สไตล์ Dark Theme
│   ├── resume/
│   │   └── Resume_purachet.pdf # ไฟล์ PDF เรซูเม่ฉบับเต็มสำหรับดาวน์โหลด
│   ├── projects/            # รูปภาพผลงานโปรเจกต์จริงทุกชิ้นงาน (Local Assets)
│   │   ├── CaDaCooked/
│   │   ├── DevNote/
│   │   ├── investment/
│   │   ├── resume/
│   │   ├── cleanair/
│   │   ├── cleanairtoys/
│   │   ├── comsci/
│   │   └── cleanairvoice/
│   └── images/
│       └── projects/        # รูปภาพ Vector สำรอง
│           ├── database-system.svg
│           ├── dev-portfolio.svg
│           └── hotel-booking.svg
│
└── src/
    ├── App.jsx              # Main Root Component ผสาน DarkVeil, GlowCursor และ SmoothScroll
    ├── index.css            # Tailwind Directives, Scrollbar Theme & Component Classes
    ├── main.jsx             # React DOM Mounting Entry Point
    │
    ├── components/          # UI Components
    │   ├── common/          # Reusable Shared Components (DRY)
    │   │   ├── Badge.jsx          # ป้ายกำกับเทคโนโลยี / สถานะ
    │   │   ├── BlurText.jsx       # แอนิเมชันตัวอักษรแบบเบลอ
    │   │   ├── DarkVeil.css       # สไตล์พื้นหลัง WebGL Canvas ของ DarkVeil
    │   │   ├── DarkVeil.jsx       # WebGL Shader Background (React Bits / OGL)
    │   │   ├── DepthText.css      # สไตล์การจัดวาง 3D Layers ของ DepthText
    │   │   ├── DepthText.jsx      # คอมโพเนนต์ข้อความ 3D Layered (React Bits)
    │   │   ├── GlowCursor.css     # สไตล์เรืองแสงและ Canvas Layout ของ Glow Cursor
    │   │   ├── GlowCursor.jsx     # WebGL Glow Cursor Trail Shader (React Bits / OGL)
    │   │   ├── GooeyNav.css       # สไตล์ฟิลเตอร์เมตาบอลของเนวิเกชัน
    │   │   ├── GooeyNav.jsx       # เมนูเนวิเกชันแบบ Gooey Effect
    │   │   ├── IconBox.jsx        # กล่องไอคอนสไตล์ม่วงโปร่งแสงมาตรฐานของแบรนด์ (DRY)
    │   │   ├── LightPillar.css    # สไตล์ฟอลล์แบ็กเสาแสง
    │   │   ├── LightPillar.jsx    # เสาแสง WebGL Shader
    │   │   ├── ScrollReveal.css   # สไตล์เลื่อนเปิดเผยคอนเทนต์
    │   │   ├── ScrollReveal.jsx   # คอมโพเนนต์ Scroll Reveal
    │   │   ├── SectionHeading.jsx # หัวข้อประจำ Section แบบมาตรฐาน (Title + Description)
    │   │   ├── SmoothScroll.jsx   # Lenis Inertia Smooth Scrolling Provider
    │   │   ├── SoftAurora.css     # สไตล์แสงออโรร่า
    │   │   ├── SoftAurora.jsx     # แสงออโรร่า WebGL Shader
    │   │   ├── Toast.css          # สไตล์กล่องแจ้งเตือนสถานะผลงานแบบ Portal
    │   │   └── Toast.jsx          # คอมโพเนนต์แจ้งเตือนสถานะผลงานแบบ Portal (DRY)
    │   │
    │   ├── About.jsx        # ข้อมูลประวัติ, เป้าหมายการทำงาน (Career Objective), และทักษะภาษา
    │   ├── Activities.jsx   # กิจกรรมและใบประกาศนียบัตร (พร้อม id="activities")
    │   ├── Contact.jsx      # Contact Information Grid (โทรศัพท์, อีเมล, มหาวิทยาลัย, GitHub)
    │   ├── Education.jsx    # ประวัติการศึกษาสองสถาบันและวุฒิการศึกษา
    │   ├── Experience.jsx   # ไทม์ไลน์ประสบการณ์และเส้นทางการเรียนรู้
    │   ├── Footer.jsx       # ส่วนท้ายเว็บและปุ่ม Back-to-Top
    │   ├── GitHubActivity.jsx # การ์ดแสดงกิจกรรมบน GitHub (พร้อม id="github")
    │   ├── Hero.jsx         # ส่วนหัวต้อนรับ, 3D DepthText, และลิงก์ติดต่อตรง
    │   ├── Icons.jsx        # SVG Vector Icons สำหรับแบรนด์ (GitHub, LinkedIn)
    │   ├── Navbar.jsx       # แถบเนวิเกชัน Glassmorphic Sticky พร้อม Ghost Resume Button
    │   ├── ProjectCard.jsx  # คอมโพเนนต์การ์ดโปรเจกต์แบบแยกส่วน (DRY Architecture)
    │   ├── Projects.css     # ไฟล์ CSS สำหรับการจัดเลย์เอาต์การ์ดโปรเจกต์และแอนิเมชัน
    │   ├── ProjectModal.css # ไฟล์ CSS สำหรับป๊อปอัป Modal และ Feature List
    │   ├── ProjectModal.jsx # ป๊อปอัปแสดงรายละเอียดโปรเจกต์เชิงลึก (Accessible Dialog Guard)
    │   └── Projects.jsx     # กริดแสดงผลงานโปรเจกต์แบบ 9-Items Grid พร้อมระบบ Pagination
    │
    ├── data/                # Static Data Layer (Zero Latency)
    │   ├── activities.js    # ข้อมูลกิจกรรม
    │   ├── education.js     # ข้อมูลการศึกษา
    │   ├── experience.js    # ข้อมูลประสบการณ์
    │   ├── profile.js       # ข้อมูลส่วนตัว ช่องทางติดต่อ ลิงก์
    │   ├── projects.js      # ข้อมูลโปรเจกต์และรายละเอียดสำหรับ Modal
    │   └── skills.js        # ข้อมูลทักษะและไอคอน
    │
    ├── lib/                 # Third-party & Utilities
    │   ├── supabaseClient.js # Supabase Client Instance
    │   └── utils.js         # cn() Class Merge Helper
    │
    └── pages/
        └── Home.jsx         # Landing Page รวมทุก Section หลัก (Hero, About, Skills, Projects, Experience, Activities, Education, GitHubActivity, Contact)
```

---

## 3. นิยามความสำเร็จของงาน (Definition of Done)

- [x] โครงสร้างโปรเจกต์สะอาด เป็นไปตามมาตรฐาน Clean Code และ DRY
- [x] เว็บไซต์ผ่านการ Build (`npm run build`) แบบ **Zero Warnings & Zero Errors**
- [x] รองรับ Responsive Design ครบทุกอุปกรณ์ (Mobile, Tablet, Desktop)
- [x] รองรับ Accessibility (ARIA Roles, Modal Dialog, Screen Reader, Keyboard Navigation)
- [x] แยกข้อมูล Static Data เพื่อการโหลดที่รวดเร็ว และมี Cloud Database รองรับการส่งข้อความ
- [x] มีไฟล์ `database/schema.sql` พร้อม RLS Policies ปลอดภัยตาม Rule 10
- [x] มีการตั้งค่า `vercel.json` ป้องกันปัญหา 404 เมื่อ Refresh บน Vercel
