export const projectsData = [
  {
    id: "smart-hotel-booking",
    title: "Smart Hotel Booking System",
    description: "ระบบจองห้องพักออนไลน์สำหรับจัดการห้องพัก การชำระเงิน และข้อมูลการจองของลูกค้าแบบครบวงจร",
    image: "/images/projects/hotel-booking.svg",
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
    image: "/images/projects/dev-portfolio.svg",
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
    image: "/images/projects/database-system.svg",
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
