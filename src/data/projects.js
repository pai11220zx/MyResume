export const projectsData = [
  {
    id: "kadacooked",
    title: "KaDaCooked (Unity Cooking Game)",
    category: "Game & Web Development",
    year: "2024",
    description: "สร้างและพัฒนาเกมทำอาหารด้วย Unity Engine พร้อมเว็บไซต์สำหรับเผยแพร่และดาวน์โหลดเกม ผู้เล่นต้องบริหารเวลาและทำอาหารเพื่อเก็บคะแนนให้ได้มากที่สุด",
    image: "/images/projects/hotel-booking.svg",
    technologies: ["Unity", "C#", "Web Development", "Game Design", "Vercel"],
    tags: ["Unity", "C#", "Web Development", "Game Design", "Vercel"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://github.com/664244132",
    featured: true,
    details: {
      overview: "KaDaCooked เกิดจากความสนใจในการพัฒนาเกมและความตั้งใจที่จะท้าทายตนเองในการเขียนโปรแกรมด้วยภาษา C# บน Unity Engine ควบคู่กับการสร้างเว็บไซต์เพื่อแจกจ่ายและให้ผู้เล่นดาวน์โหลดเกม",
      problem: "ต้องการสร้างประสบการณ์ความสนุกที่เล่นง่าย เข้าถึงได้ทุกคน พร้อมระบบคำนวณคะแนนและจำลองขั้นตอนการทำอาหารที่ท้าทายความเร็ว",
      solution: "ออกแบบ Game Loop ด้วย Unity C# จัดการระบบเวลา การรับออเดอร์ การเตรียมวัตถุดิบ และพัฒนาหน้า Landing Page สำหรับดาวน์โหลดตัวเกม",
      features: [
        "ระบบสั่งทำอาหารและจัดการออเดอร์แบบ Real-time",
        "ระบบจับเวลาและคำนวณคะแนน High Score",
        "หน้าเว็บ Landing Page Responsive สำหรับดาวน์โหลดเกม",
        "กราฟิกและเสียงประกอบเกมที่สร้างความสนุกสนาน"
      ],
      challenges: "การจัดการ State ของวัตถุดิบอาหารและจังหวะเวลาใน Unity ให้ลื่นไหลไม่กระตุก",
      learnings: "เข้าใจโครงสร้าง Game Development วงจรชีวิตของเกม (Update Loop, Physics) และการผสานงานระหว่าง Game Engine กับ Web Deployment"
    }
  },
  {
    id: "dev-note-snippets",
    title: "Dev Note Snippets & VS Code Extension",
    category: "Developer Tools",
    year: "2024",
    description: "แพลตฟอร์มเว็บไซต์สำหรับจัดเก็บ Code Snippets, AI Prompts และ Markdowns พร้อมทั้งสร้างเป็น Extension บน Visual Studio Code เพื่อเพิ่มความสะดวกรวดเร็วในการเขียนโปรแกรม",
    image: "/images/projects/dev-portfolio.svg",
    technologies: ["React", "TypeScript", "VS Code Extension", "Tailwind CSS", "Markdowns"],
    tags: ["React", "TypeScript", "VS Code Extension", "Tailwind CSS", "Markdowns"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://github.com/664244132",
    featured: true,
    details: {
      overview: "เครื่องมือที่พัฒนาขึ้นจาก Pain Point ในชีวิตประจำวันที่ต้องค้นหา Snippets, คำสั่ง Prompt และรูปแบบ Markdown ซ้ำๆ จึงสร้างระบบจัดเก็บและเชื่อมต่อกับ VS Code โดยตรง",
      problem: "การสลับหน้าจอไปมาเพื่อหาโค้ดตัวอย่างหรือ Prompt ที่ใช้บ่อย ทำให้เสียเวลาและลด Focus ในการทำงาน",
      solution: "พัฒนา Web Dashboard และ VS Code Extension ให้สามารถค้นหา แทรก และบันทึก Snippets / Prompts ได้ในคลิกเดียว",
      features: [
        "ระบบจัดหมวดหมู่ Code, Prompts และ Markdowns",
        "VS Code Extension สำหรับดึง Snippets มาใช้งานได้ทันที",
        "ระบบ Search ค้นหาอย่างรวดเร็ว",
        "รองรับการจัดเก็บข้อมูลแบบเป็นระบบและปลอดภัย"
      ],
      challenges: "การเรียนรู้ VS Code Extension API และการสื่อสารข้อมูลระหว่าง Extension กับ Web Storage",
      learnings: "เข้าใจกระบวนการพัฒนาเครื่องมือสำหรับนักพัฒนา (Developer Experience) และการจัดการ State ด้วย TypeScript"
    }
  },
  {
    id: "ai-portfolio-simulator",
    title: "AI Investment Portfolio Simulator",
    category: "AI & Financial Tech",
    year: "2024",
    description: "เว็บไซต์พอร์ตจำลองการลงทุน สามารถวางแผนการลงทุน วิเคราะห์หุ้นและข้อมูลเชิงลึกต่างๆ โดยมีระบบ AI ช่วยเหลือและให้คำแนะนำหุ้น",
    image: "/images/projects/database-system.svg",
    technologies: ["React", "AI Integration", "PostgreSQL", "Tailwind CSS", "Data Analysis"],
    tags: ["React", "AI Integration", "PostgreSQL", "Tailwind CSS", "Data Analysis"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://github.com/664244132",
    featured: true,
    details: {
      overview: "ระบบจำลองพอร์ตการลงทุนที่เปิดโอกาสให้ผู้ใช้งานได้ทดลองวางแผนการเงิน วิเคราะห์หุ้น และทดสอบกลยุทธ์การลงทุนโดยไม่ต้องเสี่ยงกับเงินจริง พร้อมผู้ช่วย AI ในการสรุปมุมมองข้อมูล",
      problem: "ผู้เริ่มต้นลงทุนมักขาดเครื่องมือฝึกฝนและขาดคำแนะนำที่เข้าใจง่ายในการอ่านงบการเงินและแนวโน้มตลาด",
      solution: "สร้างอินเทอร์เฟซพอร์ตจำลองที่คำนวณผลตอบแทนเสมือนจริง และนำ AI มาช่วยสรุปข้อมูลและวิเคราะห์แนวโน้ม",
      features: [
        "จำลองการซื้อขายและติดตามผลตอบแทนของพอร์ตการลงทุน",
        "ระบบ AI Assistant ให้ข้อมูลเชิงลึกและแนวโน้มหุ้น",
        "แดชบอร์ดสรุปสัดส่วนการลงทุนและกราฟสถิติ",
        "จัดเก็บข้อมูลประวัติการลงทุนอย่างเป็นระบบ"
      ],
      challenges: "การออกแบบคำสั่ง Prompt และเชื่อมต่อ AI ให้ตอบข้อมูลที่แม่นยำและเป็นประโยชน์",
      learnings: "การเชื่อมต่อ AI APIs เข้ากับ Web Application และการจัดการข้อมูลเชิงสถิติในรูปแบบ Real-time"
    }
  },
  {
    id: "my-resume",
    title: "MyResume Portfolio & Academic Journey",
    category: "Web Application",
    year: "2024",
    description: "เว็บไซต์เรซูเม่และพอร์ตโฟลิโอส่วนตัวเพื่อแสดงผลงานทั้งงานวิชาการและงานกิจกรรม สะท้อนเส้นทางการพัฒนาตนเองตั้งแต่จุดเริ่มต้นจนถึงปัจจุบัน",
    image: "/images/projects/dev-portfolio.svg",
    technologies: ["React 18", "Tailwind CSS", "Framer Motion", "WebGL (ogl)", "Supabase"],
    tags: ["React 18", "Tailwind CSS", "Framer Motion", "WebGL (ogl)", "Supabase"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://github.com/664244132",
    featured: true,
    details: {
      overview: "เว็บไซต์ Portfolio & Resume ส่วนตัวที่พัฒนาด้วย React 18 และ Tailwind CSS สไตล์ Modern Dark Aesthetic พร้อมระบบ WebGL Glow Cursor และเชื่อมต่อฐานข้อมูล Supabase PostgreSQL",
      problem: "ต้องการพื้นที่รวมศูนย์ข้อมูลประวัติการศึกษา ทักษะ ผลงาน และช่องทางติดต่อที่สวยงาม ทันสมัย และเข้าถึงได้ง่ายทุกอุปกรณ์",
      solution: "ออกแบบและพัฒนาเว็บสไตล์โมเดิร์น โทนสีมืดสไตล์นักพัฒนา รองรับ Responsive Design และมีแบบฟอร์มติดต่อที่เชื่อมต่อ Cloud Database",
      features: [
        "Responsive Dark Theme UI สวยงามบนทุกขนาดหน้าจอ",
        "WebGL Glow Cursor Trail Shader เพิ่มมิติการเคลื่อนไหว",
        "Modal แสดงรายละเอียดโปรเจกต์เชิงลึก (Accessible Dialog)",
        "แบบฟอร์มส่งข้อความติดต่อพร้อมบันทึกลง Supabase PostgreSQL"
      ],
      challenges: "การจัดระเบียบโครงสร้างโค้ดแบบ DRY และการคุมขนาด Vendor Chunks ให้โหลดรวดเร็ว",
      learnings: "การใช้งาน Framer Motion, WebGL Shaders, Supabase Database และแนวทางการจัดทำ Accessible Web Standards"
    }
  },
  {
    id: "pbru-clean-air-projects",
    title: "PBRU Web Projects & PM 2.5 Sound Pitching",
    category: "Academic & Institutional Web",
    year: "2024",
    description: "ชุดระบบเว็บไซต์ที่พัฒนาขึ้นสำหรับคณะเทคโนโลยีสารสนเทศ มรภ.เพชรบุรี รวมถึงเว็บสาขาวิทยาการคอมพิวเตอร์ เว็บประกวดโครงการ PM 2.5 และเว็บตรวจจับเสียงเปิดงาน Pitching",
    image: "/images/projects/hotel-booking.svg",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Web Audio API"],
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Web Audio API"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://github.com/664244132",
    featured: false,
    details: {
      overview: "ผลงานที่สร้างและพัฒนาขึ้นระหว่างการทำงานเป็นนักศึกษาจ้างงาน (Earn while learn) ให้กับคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี",
      problem: "กิจกรรมของคณะต้องการระบบรองรับการลงทะเบียน การสร้างหน้าเว็บผ่าน QR Code และระบบตรวจจับระดับเสียงเพื่อเปิดพิธีแบบสร้างสรรค์",
      solution: "พัฒนาเว็บสมัครแข่งขันโครงงานวิทยาศาสตร์ Clean Air For Life, เว็บ QR Code สร้างหน้าเว็บสำหรับกิจกรรม และระบบใช้ Web Audio API ตรวจจับเสียงเพื่อเปิดงาน Pitching",
      features: [
        "เว็บไซต์สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ PBRU",
        "ระบบรับสมัครประกวดแข่งขันโครงงานวิทยาศาสตร์ Clean Air For Life",
        "ระบบสแกน QR Code สำหรับสร้างหน้าเว็บมอบให้ผู้ร่วมกิจกรรม",
        "ระบบตรวจจับระดับเสียง (Sound Detection) เพื่อเปิดงาน Pitching"
      ],
      challenges: "การเขียนโค้ดอ่านค่าสัญญาณไมโครโฟนผ่าน Web Audio API ให้ตรวจจับระดับเดซิเบลได้อย่างแม่นยำเพื่อสั่ง Trigger แอนิเมชันเปิดงาน",
      learnings: "การประยุกต์ใช้งาน Web Audio API ในงานอีเวนต์จริง และการพัฒนาเว็บแอปพลิเคชันตอบโจทย์องค์กร"
    }
  }
];
