# Domain Context & Glossary — Developer Portfolio Website

เอกสารนี้รวบรวมคำศัพท์เฉพาะทาง (Canonical Terms), กฎการตั้งชื่อ และข้อตกลงในการออกแบบเชิงสถาปัตยกรรมของโปรเจกต์ เพื่อสร้างความเข้าใจตรงกันระหว่างนักพัฒนาและ AI Agents

---

## 📖 Glossary (พจนานุกรมศัพท์เฉพาะของระบบ)

### 1. Core Concepts (แนวคิดหลัก)
- **Developer Portfolio:** เว็บไซต์ส่วนตัวในรูปแบบ Modern Dark Theme ที่ใช้แสดงผลงาน ทักษะ ประวัติการศึกษา และกิจกรรมของนักพัฒนา เพื่อเป้าหมายในการสมัครงาน ฝึกงาน หรือแสดงผลงานทางวิชาการ
- **Landing Page:** หน้าหลัก (`Home.jsx`) ของเว็บไซต์ที่รวบรวม Section ทั้งหมด 11 ส่วนไว้ในหน้าเดียวแบบเชื่อมต่อกัน
- **Static Data Layer:** ชุดข้อมูลคงที่ที่ถูกจัดเก็บในไฟล์ JavaScript (`src/data/*.js`) เช่น รายการทักษะ รายการผลงาน ประวัติการศึกษา เพื่อให้อ่านข้อมูลได้รวดเร็วระดับ Zero Latency
- **Dynamic Database Layer:** ระบบจัดเก็บข้อมูลแบบ Relational บน Supabase (PostgreSQL) สำหรับข้อมูลข้อความติดต่อ (`contact_messages`)

### 2. UI & Section Components
- **Navbar:** แถบนำทางด้านบนแบบ Sticky พร้อม Background Blur และปุ่มเปิด/ดาวน์โหลด `resume.pdf`
- **Hero Section:** ส่วนต้อนรับด้านบนสุด แสดงชื่อ บทบาท คำแนะนำตัวสั้น และปุ่ม Call-to-Action (CTA)
- **Project Card:** การ์ดแสดงผลงานโปรเจกต์เด่น พร้อมรูปภาพ คำอธิบายสั้น แท็กเทคโนโลยี และลิงก์ภายนอก
- **Project Detail Modal:** หน้าต่างป๊อปอัปแบบแอนิเมชัน (Framer Motion) สำหรับแสดงรายละเอียดเชิงลึกของโปรเจกต์ (Overview, Problem, Solution, Technologies, Challenges, Learnings)
- **Timeline:** ส่วนแสดงประวัติ ประสบการณ์ และกิจกรรมย้อนหลังตามลำดับเวลา
- **Contact Form:** แบบฟอร์มสำหรับให้ผู้เข้าชมส่งข้อความติดต่อ พร้อมระบบบันทึกลง Supabase

### 3. Architecture & Naming Rules (กฎการตั้งชื่อที่เข้าใจง่าย)
- **Beginner-Friendly File & Folder Naming:** การตั้งชื่อไฟล์และโฟลเดอร์ทั้งหมดต้องใช้ภาษาอังกฤษที่ตรงตัว ชัดเจน ไม่ใช้ชื่อย่อที่สับสน:
  - โฟลเดอร์: `src/components/`, `src/data/`, `src/lib/`, `src/assets/`, `database/`
  - คอมโพเนนต์: `Navbar.jsx`, `Hero.jsx`, `About.jsx`, `Skills.jsx`, `Projects.jsx`, `ProjectModal.jsx`, `Experience.jsx`, `Activities.jsx`, `Education.jsx`, `GitHubActivity.jsx`, `Contact.jsx`, `Footer.jsx`
  - ข้อมูล: `projects.js`, `skills.js`, `experience.js`, `activities.js`, `education.js`
- **Beginner-Friendly Database Table Schema:** ตารางฐานข้อมูลใน Supabase ต้องใช้ชื่อที่เข้าใจง่าย:
  - ตาราง: `contact_messages`
  - ฟิลด์: `id`, `name`, `email`, `subject`, `message`, `created_at`
- **Security & RLS:** ทุกตารางใน Supabase ต้องเปิด Row Level Security (RLS) และอนุญาตเฉพาะ `INSERT` สำหรับผู้ใช้ทั่วไป (Anonymous)
