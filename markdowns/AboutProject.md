# 📖 เกี่ยวกับโปรเจกต์ (About Project) — Developer Portfolio Website

เอกสารนี้ระบุภาพรวม วัตถุประสงค์ สถาปัตยกรรมระบบ โครงสร้างไฟล์ และขอบเขตการทำงานของเว็บไซต์ **Personal Developer Portfolio / Resume Website** โดยอ้างอิงจาก [`PROJECT_SPEC.md.md`](file:///c:/xampp/htdocs/Resume/PROJECT_SPEC.md.md)

---

## 1. ภาพรวมของโปรเจกต์ (Project Overview)

เว็บไซต์นี้เป็น **Modern Personal Developer Portfolio / Online Resume** ที่พัฒนาขึ้นเพื่อนำเสนอตัวตน ทักษะความสามารถ ผลงานซอฟต์แวร์ (Projects), ประสบการณ์ (Experience), กิจกรรม (Activities), การศึกษา (Education) และระบบรับข้อความติดต่อสำหรับนักพัฒนาซอฟต์แวร์

### 🌟 จุดเด่นของโปรเจกต์ (Core Highlights):
- **Modern UI & Dark Aesthetic:** โทนสีเข้ม (#0F1117, #171A21) ตัดกับ Accent ม่วง (#8B5CF6) ดูล้ำสมัย สไตล์ Developer
- **Interactive Framer Motion:** แอนิเมชันลื่นไหล รองรับการเปิด Modal รายละเอียดโปรเจกต์ และรองรับ `prefers-reduced-motion`
- **100% Offline-Ready Assets:** รูปภาพและไอคอนทั้งหมดเก็บอยู่ภายในเครื่อง ไม่พึ่งพา CDN ภายนอก
- **DRY & Shared Components Architecture:** แยกคอมโพเนนต์ Reusable (`SectionHeading`, `Badge`, `Icons`)
- **Hybrid Data Layer:** แยก Static Data สำหรับการแสดงผลความเร็วสูงระดับเสี้ยววินาที ออกจาก Cloud Database (Supabase PostgreSQL) สำหรับรับข้อความติดต่อ
- **Vercel Cloud Deployment:** รองรับการ Deploy บน Vercel พร้อมไฟล์คอนฟิก `vercel.json` สำหรับ SPA Routing

---

## 2. ผังโครงสร้างไดเรกทอรีในปัจจุบัน (Current Directory Structure)

```text
Resume/
├── .antigravityignore       # การกำหนดค่าข้ามไฟล์สำหรับ AI Agent
├── .env.example             # แม่แบบตัวแปรแวดล้อม Supabase
├── .gitignore               # การกรองไฟล์ที่ไม่จำเป็นสำหรับ Git
├── CONTEXT.md               # นิยามศัพท์และข้อตกลงมาตรฐานของโปรเจกต์
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
│   ├── resume.pdf           # ไฟล์ PDF เรซูเม่สำหรับดาวน์โหลด
│   └── images/
│       └── projects/        # รูปภาพ Mockup Vector ผลงานโปรเจกต์
│           ├── database-system.svg
│           ├── dev-portfolio.svg
│           └── hotel-booking.svg
│
└── src/
    ├── App.jsx              # Main Root Component
    ├── index.css            # Tailwind Directives, Custom Scrollbar & Component Classes
    ├── main.jsx             # React DOM Mounting Entry Point
    │
    ├── components/          # UI Components
    │   ├── common/          # Reusable Shared Components (DRY)
    │   │   ├── Badge.jsx          # ป้ายกำกับเทคโนโลยี / สถานะ
    │   │   ├── GlowCursor.css     # สไตล์เรืองแสงและ Canvas Layout ของ Glow Cursor
    │   │   ├── GlowCursor.jsx     # WebGL Glow Cursor Trail Shader (React Bits)
    │   │   └── SectionHeading.jsx # หัวข้อประจำ Section แบบมาตรฐาน
    │   ├── About.jsx        # ข้อมูลประวัติและจุดเน้น
    │   ├── Activities.jsx   # กิจกรรมและใบประกาศนียบัตร
    │   ├── Contact.jsx      # ฟอร์มติดต่อเชื่อมต่อ Supabase PostgreSQL
    │   ├── Education.jsx    # ประวัติการศึกษาและรายวิชา
    │   ├── Experience.jsx   # ไทม์ไลน์ประสบการณ์
    │   ├── Footer.jsx       # ส่วนท้ายเว็บและปุ่ม Back-to-Top
    │   ├── GitHubActivity.jsx # การ์ดแสดงกิจกรรมบน GitHub
    │   ├── Hero.jsx         # หน้าแรก ทักทาย บทบาท และปุ่ม Action
    │   ├── Icons.jsx        # SVG Vector Icons สำหรับแบรนด์ (GitHub, LinkedIn)
    │   ├── Navbar.jsx       # แถบเนวิเกชัน Sticky พร้อม Mobile Drawer
    │   ├── ProjectModal.jsx # ป๊อปอัปแสดงรายละเอียดโปรเจกต์เชิงลึก (Accessible Dialog)
    │   └── Projects.jsx     # กริดแสดงผลงานโปรเจกต์
    │
    ├── data/                # Static Data Layer (ความเร็วสูง)
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
        └── Home.jsx         # รวมทุก Section เข้าด้วยกัน
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
