export const projectsData = [
  {
    id: "cadacooked",
    title: "CaDaCooked (Unity 3D Cooking Game)",
    category: "Game Development & Web",
    year: "2024",
    description: "เกมทำอาหาร 3D Fast-paced Casual Simulation พัฒนาด้วย Unity 6 และ C# ภายใต้ Universal Render Pipeline (URP) ผู้เล่นรับบทเป็นหัวหน้าเชฟทำอาหารกู้วิกฤตงานเลี้ยง พร้อมรับมืออุปสรรคไดนามิกและแมวขโมยวัตถุดิบ",
    image: "/projects/CaDaCooked/CaDaCooked1.webp",
    technologies: ["Unity 6", "C#", "URP", "New Input System", "ScriptableObject", "FSM", "Web Development", "Vercel"],
    tags: ["Unity 6", "C#", "URP", "New Input System", "ScriptableObject", "FSM", "Web Development", "Vercel"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://ca-da-cooked-website.vercel.app/",
    demoUrl: "https://ca-da-cooked-website.vercel.app/",
    featured: true,
    details: {
      overview: "CaDaCooked (CaDaCook) คือเกมทำอาหาร 3D สไตล์ Fast-paced Kitchen Simulation พัฒนาบนเอนจิน Unity 6 (6000.3.6f1) ด้วยภาษา C# และ Universal Render Pipeline (URP) ผู้เล่นรับบทเป็นหัวหน้าเชฟที่ต้องเปิดครัวฉุกเฉินปรุงอาหารส่งงานเลี้ยงต้อนรับระดับชาติของท่านนายกรัฐมนตรี พร้อมเผชิญหน้ากับอุปสรรคไดนามิก เช่น ไฟไหม้เตา, คราบน้ำมันพื้นลื่น 360°, หลุมดักสะดุด, เคาน์เตอร์เลื่อน 2 แกน และสองแมวไร้บ้าน (เจ้าส้ม & เจ้าควัน) ที่คอยย่องมาฉกวัตถุดิบและถังดับเพลิง",
      problem: "ต้องการออกแบบเกมเพลย์ทำอาหารที่ควบคุมเข้าใจง่ายสำหรับผู้เล่นทุกระดับ แต่มีความลึก ความตื่นเต้น และความท้าทายจากอุปสรรคที่ไม่คาดฝัน (Emergent Chaos) พร้อมทั้งต้องออกแบบสถาปัตยกรรมโค้ดให้ยืดหยุ่น ขยายสูตรอาหารได้โดยไม่ต้องแก้โค้ด และปราศจากปัญหาขยะหน่วยความจำ (Zero GC Alloc in Update)",
      solution: "ออกแบบสถาปัตยกรรม Decoupled Event-Driven Architecture ด้วย C# Events แยก Game Logic ออกจาก Visual/Audio อย่างสิ้นเชิง ใช้ ScriptableObject จัดการสูตรอาหารและวัตถุดิบ ใช้ Finite State Machine (FSM) ควบคุมสถานะเตาทอดและ AI แมวป่วนครัว พร้อมสร้างระบบถังดับเพลิง 3D Interactive และระบบฟิสิกส์คราบน้ำมัน",
      features: [
        "ระบบเคาน์เตอร์ครัวโมดูลาร์ 7 ชนิด (Clear, Container, Cutting, Stove, Plates, Delivery, Trash)",
        "ระบบ FSM ควบคุมเตาทอด (Idle, Frying, Fried, Burned) พร้อมระบบไฟไหม้ลุกลาม",
        "ถังดับเพลิง 3D Interactive พร้อมป้าย World Space UI และระบบฉีดพ่นละอองโฟมดับไฟ",
        "AI แมวป่วนครัว 3D (เจ้าส้ม & เจ้าควัน) พร้อมระบบ Procedural Bouncy Locomotion หางส่ายและย่องขโมยของ",
        "อุปสรรคไดนามิก: คราบน้ำมันพื้นลื่น 360°, หลุมดักสะดุด, เคาน์เตอร์เลื่อน 2 แกน และช่วง Rush Hour 2X",
        "ระบบตรวจสอบสูตรอาหารแบบ Set-Based Matching ไม่จำกัดลำดับการวางวัตถุดิบบนจาน",
        "ระบบ VIP Critic ออเดอร์ทองคะแนน 3 เท่า, Tip & Combo Multiplier สูงสุด 2.0x และระบบตัดเกรด 3-Star Rating",
        "รองรับการควบคุมสมบูรณ์แบบทั้ง Keyboard/Mouse และ Gamepad (Xbox/PlayStation) ด้วย Unity New Input System"
      ],
      challenges: "การจัดการ Garbage Collection ไม่ให้เกิดขึ้นใน Update Loop เพื่อรักษาเฟรมเรต 60+ FPS, การสร้างระบบฟิสิกส์ให้ถังดับเพลิงพ่นละอองโฟมตามมุมหันของตัวละครได้อย่างแม่นยำ และการเขียน State Machine ของ AI แมวให้ค้นหาอาหารบนเคาน์เตอร์และวิ่งหนีเมื่อถูกไล่",
      learnings: "เข้าใจการออกแบบ Game Architecture ระดับมืออาชีพ (Decoupled Event-Driven, FSM, ScriptableObject), การจัดการ Spatial 3D Audio & Particle Systems ใน Unity URP, และการพัฒนาหน้า Landing Page บน Vercel เพื่อแจกจ่ายตัวเกม"
    }
  },
  {
    id: "dev-note-snippets",
    title: "DevNote Snippets & VS Code Extension",
    category: "Developer Tools & Cloud Service",
    year: "2024",
    description: "แอปพลิเคชันและเครื่องมือจดโน้ตสำหรับ Developer ศูนย์รวมจัดเก็บ Code Snippets, AI Prompts และเอกสาร Markdown พร้อมระบบหลังบ้าน Node.js REST API, PostgreSQL และส่วนขยายบน VS Code Extension แก้ไขและซิงค์โค้ดแบบ Real-time",
    image: "/projects/DevNote/DevNote1.webp",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "VS Code Extension API", "Node.js (Express)", "PostgreSQL", "Radix UI", "JWT Auth", "Vercel"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://dev-notes-phi-weld.vercel.app/",
    demoUrl: "https://dev-notes-phi-weld.vercel.app/",
    featured: true,
    details: {
      overview: "DevNote คือแอปพลิเคชันและเครื่องมือสำหรับ Developer แบบครบวงจร (Ecosystem) ออกแบบมาเพื่อเป็นศูนย์รวมจัดเก็บ Code Snippets, เอกสาร Markdown และความรู้ทางเทคนิค ครอบคลุมทั้งระบบหน้าบ้าน React 18 Multi-Page Application (MPA), ระบบหลังบ้าน Node.js Express RESTful API บนสถาปัตยกรรม ES Modules, ฐานข้อมูล PostgreSQL และส่วนขยายบนเอดิเตอร์ VS Code Extension ด้วย Virtual FileSystem Provider (devnote://) ที่เปิดอ่านและแก้ไขโค้ดสดบน VS Code ได้ทันที",
      problem: "นักพัฒนามักเผชิญปัญหาการสลับหน้าจอไปมาระหว่าง Code Editor กับเว็บเบราว์เซอร์เพื่อค้นหาโค้ดตัวอย่าง, คำสั่งลัด, Snippets หรือ AI Prompts ที่ใช้บ่อย ทำให้เสียสมาธิ (Context Switching) และการแชร์โค้ดอย่างปลอดภัยในทีมทำได้ยาก รวมถึงปัญหาความปลอดภัย เช่น โค้ดที่แชร์มี Secret Keys หรือ XSS แอบแฝง",
      solution: "พัฒนาแพลตฟอร์มแบบครบวงจร: หน้าเว็บ React Dark-Mode First พร้อม Dual-Layer Editor และ Auto-Detection 18 ภาษา, ระบบหลังบ้าน Node.js REST API ปลอดภัยด้วย Stateless JWT และ Automated Security Scanner ตรวจจับคำสั่งอันตรายและคีย์หลุด, พร้อมสร้าง VS Code Extension เชื่อมต่อข้อมูลและรองรับการกด Ctrl + S บันทึกโค้ดย้อนกลับเข้า PostgreSQL แบบ Real-time",
      features: [
        "VS Code Extension พร้อม TreeView บน Activity Bar และ Virtual FileSystem (devnote://) แก้ไขโค้ดสดใน Editor",
        "ระบบ Security Scanner Engine อัตโนมัติ ตรวจจับ XSS, SQL Injection, RCE และ Secret Key Leaks ก่อนบันทึก",
        "Dual-Layer Code Editor พร้อมระบบ Triple Scroll Sync (เลขบรรทัด + Syntax Highlighting + Editor)",
        "ระบบ 18-Language Priority Pipeline ตรวจจับภาษาโปรแกรมมิ่งอัตโนมัติอย่างแม่นยำ",
        "Community Hub พร้อมระบบสร้างลิงก์ลับ Unlisted Secret Link ลบอัตโนมัติใน 3 วัน",
        "Admin Dashboard ครบวงจร พร้อมกราฟสถิติ Bezier Curve ตรวจสอบ Peak Hours และ PostgreSQL Health",
        "ระบบจัดการ Storage Quota 50 KB ต่อผู้ใช้ พร้อม Real-Time Enforcement",
        "ระบบยืนยันตัวตน Stateless JWT พร้อม Role-Based Access Control (RBAC) และระบบรีเซ็ตรหัสผ่านทางอีเมล"
      ],
      challenges: "การพัฒนา Virtual FileSystem Provider บน VS Code Extension API เพื่อให้สามารถเปิด อ่าน และบันทึกไฟล์เสมือนผ่านโปรโตคอล devnote:// ได้แบบ Real-time รวมถึงการสร้าง De-obfuscation Engine ในระบบ Security Scanner เพื่อถอดรหัสคำเลี่ยงก่อนตรวจจับความปลอดภัย",
      learnings: "เข้าใจการพัฒนา Extension Ecosystem บน VS Code อย่างลึกซึ้ง, การออกแบบ RESTful API ที่รองรับ Single Batch Sync และ Transactions ใน PostgreSQL, และการผสานงานแบบ Multi-Platform ระหว่าง Web, Cloud API, และ Desktop Editor"
    }
  },
  {
    id: "ai-portfolio-simulator",
    title: "SmartPort AI (AI Stock Analytics & Portfolio Simulator)",
    category: "FinTech & Quantitative AI",
    year: "2024",
    description: "เว็บแอปพลิเคชันวิเคราะห์และคัดเลือกหุ้นด้วย AI ผสานการวิเคราะห์งบการเงิน, โมเดล Altman Z-Score & Piotroski F-Score, กราฟราคาเรียลไทม์ 6 Timeframes, เครื่องมือ DCA Simulator, Multi-Currency FX Engine และพอร์ตจำลอง 1 ล้านบาท",
    image: "/projects/investment/investment1.webp",
    technologies: ["PHP 8.x (Strict Types)", "MySQL (PDO)", "Vanilla JS", "Chart.js (Local UMD)", "Quantitative AI", "REST API", "Tailwind / Modular CSS"],
    tags: ["PHP 8.x (Strict Types)", "MySQL (PDO)", "Vanilla JS", "Chart.js (Local UMD)", "Quantitative AI", "REST API", "Tailwind / Modular CSS"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://investment.freedev.app/index.php",
    demoUrl: "https://investment.freedev.app/index.php",
    featured: true,
    details: {
      overview: "SmartPort AI เป็นเว็บแอปพลิเคชันทางการเงินและการลงทุนระดับมืออาชีพ ผสานพลังปัญญาประดิษฐ์ Quantitative AI เข้ากับการวิเคราะห์ปัจจัยพื้นฐาน (Fundamental Analysis), โมเดลสถิติชั้นสูง (Altman Z-Score & Piotroski F-Score) และการวิเคราะห์ทางเทคนิค เชื่อมต่อ Live Market Data API แสดงกราฟราคาเรียลไทม์ 6 ช่วงเวลา พร้อมระบบพอร์ตการลงทุนจำลองเงินทุน 1,000,000 บาท คำนวณต้นทุนเฉลี่ยถ่วงน้ำหนัก (Weighted Average Cost), กำไรขาดทุน Realized/Unrealized, ค่าธรรมเนียม และระบบแปลงสกุลเงิน Multi-Currency FX Engine (THB/USD)",
      problem: "นักลงทุนทั้งมือใหม่และผู้มีประสบการณ์มักขาดเครื่องมือวิเคราะห์งบการเงินเชิงปริมาณที่เชื่อถือได้ ขาดระบบประเมินความเสี่ยงล้มละลายที่แม่นยำ และไม่มีพอร์ตจำลองที่คำนวณต้นทุน ค่าธรรมเนียม และอัตราแลกเปลี่ยนจริงตามมาตรฐานตลาดหลักทรัพย์",
      solution: "พัฒนาเว็บแอปพลิเคชันด้วย PHP 8.x Strict Types และ MySQL (PDO Prepared Statements) ครอบคลุม 10 โมดูลหลัก: SmartPort Composite Score (0-100), Altman Z-Score, Piotroski F-Score (0-9), Quantitative Screener, DCA Compounding Simulator, Peer Comparison Matrix, Multi-Currency Trading Engine, และระบบออกใบแจ้งยอดพอร์ตทางการ (Formal Account Statement)",
      features: [
        "ระบบวิเคราะห์หุ้นรายตัว & กราฟราคาเรียลไทม์ 6 Timeframes (1H, 1D, 1W, 1M, 1Y, ALL)",
        "โมเดลประเมินคะแนน AI Composite Score (0-100) ครอบคลุม Growth, Profitability, Health, Valuation",
        "โมเดลสถิติทำนายความเสี่ยง Altman Z-Score และประเมินความแกร่งทางการเงิน Piotroski F-Score (0-9)",
        "Quantitative Stock Screener คัดกรองหุ้นตาม Sector, P/E, ROE, Yield และ AI Score",
        "เครื่องมือจำลองการออมหุ้นแบบ DCA พร้อมระบบ Reinvest Dividend (DRIP Plan)",
        "พอร์ตการลงทุนจำลองเงินทุน 1,000,000 บาท พร้อม Multi-Currency & FX Conversion Engine (THB/USD)",
        "ระบบ Buying Power Guardrail และ Max Quantity Clamping ป้องกันคำสั่งซื้อเกินวงเงิน",
        "ระบบออกรายงานทางการ (Account Statement) ส่งออกเป็น CSV และพิมพ์ใบแจ้งยอด A4/PDF"
      ],
      challenges: "การคำนวณโมเดลสถิติการเงินหลายตัวแปรพร้อมกันแบบ Zero-Latency, การสร้าง Multi-Currency Engine แปลงค่าเงินบาทและดอลลาร์สหรัฐในคำสั่งซื้อขายแบบเรียลไทม์, และการสร้าง Local Canvas 2D Chart.js โดยไม่พึ่งพา CDN ภายนอก",
      learnings: "เชี่ยวชาญการเขียน PHP 8.x Strict Types ภายใต้ Guard Clauses & Early Return, การคำนวณ Quantitative Financial Models ระดับสถาบันการเงิน, และการออกแบบระบบฐานข้อมูล MySQL รองรับ 60s Smart API Caching"
    }
  },
  {
    id: "my-resume",
    title: "MyResume Portfolio & Academic Journey",
    category: "Modern Web Application & Portfolio",
    year: "2024 - 2026",
    description: "เว็บไซต์พอร์ตโฟลิโอและเรซูเม่ส่วนตัวสไตล์ Minimalist Editorial ผสาน WebGL Shader Background (DarkVeil), GlowCursor, Lenis Smooth Scroll และ 3D DepthText พร้อมรองรับ Supabase PostgreSQL และ Vercel Deployment",
    image: "/projects/resume/resume1.webp",
    technologies: ["React 18", "Tailwind CSS", "WebGL (ogl)", "Lenis", "Supabase (PostgreSQL)", "Vite", "DRY Architecture", "Vercel"],
    tags: ["React 18", "Tailwind CSS", "WebGL (ogl)", "Lenis", "Supabase (PostgreSQL)", "Vite", "DRY Architecture", "Vercel"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://my-resume-three-chi.vercel.app/",
    demoUrl: "https://my-resume-three-chi.vercel.app/",
    featured: true,
    details: {
      overview: "MyResume (Developer Portfolio Website) เป็นเว็บไซต์เรซูเม่และพอร์ตโฟลิโอส่วนตัวสไตล์ Modern Minimalist Editorial & Content-First Design พัฒนาขึ้นเพื่อนำเสนอตัวตน ทักษะ ผลงาน ประสบการณ์ และการศึกษาอย่างคมชัด ไร้สิ่งรบกวนสายตา โดดเด่นด้วยฉากหลัง WebGL DarkVeil Shader และ GlowCursor บน ogl, การเลื่อนหน้าจอแบบมีแรงเฉื่อยด้วย Lenis Smooth Scroll, ข้อความ 3D DepthText Hero Display และรองรับการเชื่อมต่อฐานข้อมูล Supabase PostgreSQL (RLS)",
      problem: "ต้องการนำเสนอประวัติและผลงานทางเทคโนโลยีระดับมืออาชีพที่สามารถสะท้อนความเชี่ยวชาญด้าน Frontend / Full-Stack และ WebGL ได้อย่างแท้จริง โดยที่ยังคงความเร็วระดับสูง (Zero Lag / 60-120 FPS), เข้าถึงง่ายทุกหน้าจอ (Responsive & Accessible), และไม่พึ่งพา External CDN",
      solution: "ออกแบบสถาปัตยกรรม DRY & Reusable Components (IconBox, SectionHeading, Badge), ปรับแต่ง WebGL Shader ให้เบาเครื่องและไม่บล็อกอีเวนต์ (pointer-events-none), จัดการระบบเลื่อนหน้าจอ Inertial Scroll ด้วย Lenis พร้อมระบบ Portal Modal ป้องกันการหลุดขอบ และแยก Static Data Layer เพื่อความเร็ว Zero-Latency",
      features: [
        "Minimalist Editorial & Content-First UI สบายตาและเน้นเนื้อหาโดยตรง",
        "WebGL Shader Background (DarkVeil) และเส้นแสงเมาส์ GlowCursor ขับเคลื่อนด้วย ogl",
        "ระบบเลื่อนหน้าจอ Physics-based Inertial Smooth Scrolling ด้วย Lenis",
        "3D DepthText Hero Display พร้อม Pointer Tracking & Dynamic Layer Scaling",
        "Glassmorphic Sticky Navbar พร้อมปุ่ม Ghost Resume Button เรืองแสงสีม่วง",
        "Accessible Frameless Media Cards & Accessible Dialog Modal (createPortal)",
        "DRY Architecture ผสาน Reusable Component กลาง (IconBox, SectionHeading)",
        "100% Offline-Ready Assets ปราศจาก CDN ภายนอก และรองรับ Vercel Deployment"
      ],
      challenges: "การผสาน WebGL Shaders หลายตัว (DarkVeil + GlowCursor) เข้ากับระบบ DOM Scroll ให้ทำงานร่วมกันได้อย่างลื่นไหล 60-120 FPS โดยไม่กินทรัพยากร GPU และการจัดการ CSS Layout Containment ร่วมกับ React Portal ของ Modal",
      learnings: "เชี่ยวชาญการสร้าง WebGL Shaders ด้วย ogl, การจัดการ Performance & Core Web Vitals (INP, Frame Throttling, Zero Layout Thrashing), และการออกแบบ UI/UX สไตล์ Editorial Engineering"
    }
  },
  {
    id: "clean-air-for-life",
    title: "สมัครประกวดเเข่งขันโครงงาน กิจกรรม Clean Air for Life : ภารกิจพิชิตฝุ่น PM 2.5",
    category: "Academic & Innovation Contest",
    year: "2024",
    description: "ระบบรับสมัครและส่งผลงานประกวดแข่งขันโครงงานวิทยาศาสตร์และนวัตกรรมลดฝุ่น PM 2.5 สำหรับนักเรียน นักศึกษา และประชาชนทั่วไป ภายใต้โครงการ Clean Air for Life มหาวิทยาลัยราชภัฏเพชรบุรี",
    image: "/projects/cleanair/cleanairpm.webp",
    technologies: ["PHP", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "MySQL"],
    tags: ["PHP", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "MySQL"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://it-pbru.makeallcode.com/cleanairforlife/cleanairlogin.php",
    demoUrl: "https://it-pbru.makeallcode.com/cleanairforlife/cleanairlogin.php",
    featured: true,
    details: {
      overview: "ระบบรับสมัครและจัดการประกวดแข่งขันโครงงาน กิจกรรม Clean Air for Life : ภารกิจพิชิตฝุ่น PM 2.5 จัดทำขึ้นเพื่อสนับสนุนการประกวดโครงงานนวัตกรรมสิ่งประดิษฐ์และซอฟต์แวร์ช่วยลดและตรวจจับมลพิษทางอากาศ พัฒนาด้วย PHP, Tailwind CSS, HTML5, CSS3, JavaScript และ MySQL เพื่อรองรับผู้เข้าแข่งขันจากโรงเรียนและสถาบันการศึกษาต่างๆ",
      problem: "กิจกรรมประกวดแข่งขันระดับสถาบันต้องการระบบที่รองรับการลงทะเบียน การส่งเอกสารข้อเสนอโครงงาน (Proposal) และการจัดเก็บข้อมูลทีมผู้เข้าแข่งขันที่ปลอดภัย เป็นระเบียบ และสามารถตรวจสอบสถานะได้แบบเรียลไทม์",
      solution: "พัฒนาเว็บแอปพลิเคชันด้วย PHP และ Tailwind CSS ออกแบบระบบ Authentication และแบบฟอร์มลงทะเบียนทีมแข่งขัน พร้อมระบบอัปโหลดและจัดเก็บเอกสารโครงงานเข้าสู่ฐานข้อมูล MySQL อย่างเป็นระบบ",
      features: [
        "ระบบเข้าสู่ระบบและยืนยันตัวตนสำหรับทีมผู้เข้าประกวด",
        "แบบฟอร์มลงทะเบียนสมัครแข่งขันโครงงานนวัตกรรมลดฝุ่น PM 2.5",
        "ระบบอัปโหลดเอกสารข้อเสนอโครงการและรายละเอียดทีม",
        "หน้าแดชบอร์ดตรวจสอบสถานะการสมัครและการประกาศผล",
        "การออกแบบ Responsive ด้วย Tailwind CSS สวยงามบนทุกอุปกรณ์"
      ],
      challenges: "การจัดการ Validation ข้อมูลผู้สมัครหลายรูปแบบ และการจัดการสิทธิ์การเข้าถึงข้อมูลของแต่ละทีมให้ปลอดภัย",
      learnings: "เชี่ยวชาญการประยุกต์ใช้ PHP ร่วมกับ Tailwind CSS ในการสร้างระบบรับสมัครงานอีเวนต์จริงระดับมหาวิทยาลัย"
    }
  },
  {
    id: "recycle-plastics-qr",
    title: "เว็บไซต์ Recycle Plastics เพื่อนำมาใช้ใหม่เป็นพวงกุญแจและสามารถสแกน QR Code เพื่อสร้างหน้าจดหมาย",
    category: "Eco-Innovation & Web Application",
    year: "2024",
    description: "ระบบสร้างหน้าเว็บไซต์และจดหมายไดนามิกจากขยะพลาสติกรีไซเคิลเป็นพวงกุญแจ โดยลูกค้าสามารถสแกน QR Code เพื่อปรับแต่งข้อความ รูปภาพ โมเดล 3D และเสียงเพลง พร้อมระบบล็อคชิ้นงานถาวรหลังบันทึก",
    image: "/projects/cleanairtoys/cleanairtoys.webp",
    technologies: ["PHP", "Vanilla JavaScript", "Vanilla CSS", "HTML5", "MySQL", "QR Code Engine"],
    tags: ["PHP", "Vanilla JavaScript", "Vanilla CSS", "HTML5", "MySQL", "QR Code Engine"],
    githubUrl: "https://github.com/664244132",
    liveUrl: "https://itpm.makeallcode.com/cgi-bin/view_product?code=nN9ecod5&saved=1",
    demoUrl: "https://itpm.makeallcode.com/cgi-bin/view_product?code=nN9ecod5&saved=1",
    featured: true,
    details: {
      overview: "โปรเจกต์ระบบสร้างหน้าเว็บไซต์จดหมายและของขวัญดิจิทัลแบบไดนามิก เชื่อมโยงกับผลิตภัณฑ์พวงกุญแจจากพลาสติกรีไซเคิล (Recycle Plastics) พัฒนาโดยนักศึกษาสาขาวิทยาการคอมพิวเตอร์ มรภ.เพชรบุรี ระบบช่วยให้แอดมินสร้างรหัสชิ้นงาน (page_code) และผูก QR Code ติดตัวสินค้า เมื่อลูกค้าสแกนครั้งแรกจะสามารถเลือกเทมเพลตมาตรฐาน ปรับแต่งข้อความ สื่อ รูปภาพ และเพลงประกอบได้ และเมื่อบันทึกแล้วระบบจะล็อคชิ้นงานถาวร",
      problem: "ต้องการเพิ่มมูลค่าให้กับผลิตภัณฑ์พลาสติกรีไซเคิลด้วยเทคโนโลยีดิจิทัล และสร้างประสบการณ์การมอบของขวัญที่มีความหมาย แต่ต้องป้องกันไม่ให้ดีไซน์หน้าเว็บผิดเพี้ยนจากการลากวางอิสระ และป้องกันการแก้ไขซ้ำหลังจากมอบของขวัญแล้ว",
      solution: "ออกแบบระบบ One-time Customization ด้วย PHP และ MySQL พร้อม Standardized Template System (Template A, B, C, D) ที่บังคับจัดวางองค์ประกอบให้สมดุล Responsive สวยงาม และระบบ Lock Status Badge ควบคุมสิทธิ์การเข้าดูและแก้ไข",
      features: [
        "ระบบ One-time Customization ปรับแต่งชิ้นงานของขวัญพิเศษเฉพาะตัวได้ 1 ครั้ง",
        "ระบบ Permanent Lock ล็อคหน้าเว็บถาวรหลังกดบันทึก เพื่อคงสถานะของขวัญสำเร็จรูป",
        "ระบบ Standardized Templates (A, B, C, D) รองรับการแสดงผลโมบายล์สมบูรณ์แบบ",
        "รองรับการแทรกข้อความ รูปภาพ โมเดล 3D และเพลงประกอบ",
        "Admin Dashboard บริหารจัดการรหัสหน้าเว็บ (page_code) หมวดหมู่สินค้า และหมายเลขคิว",
        "ระบบ Superuser Override ให้สิทธิ์แอดมินดูแลและรีเซ็ตการล็อคชิ้นงานในกรณีพิเศษ",
        "ระบบ One-click Action Tools คัดลอกรหัส ลิงก์เว็บ และลิงก์ตกแต่งได้อย่างรวดเร็ว"
      ],
      challenges: "การออกแบบระบบ State Locking ที่ปลอดภัย ป้องกัน Race Conditions และการสร้าง Template Engine ที่จัดวางองค์ประกอบให้อยู่กึ่งกลางสวยงามบนมือถือทุกรุ่น",
      learnings: "เข้าใจการเชื่อมโยงสินค้ารักษ์โลกทางกายภาพ (Physical Eco-Product) เข้ากับ Digital Experience ผ่าน QR Code และการสร้างระบบ Admin Panel ที่มีประสิทธิภาพสูง"
    }
  },
  {
    id: "comsci-pbru-website",
    title: "เว็บไซต์สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ มรภ.เพชรบุรี",
    category: "Academic & CMS Platform",
    year: "2024",
    description: "เว็บไซต์ทางการและระบบบริหารจัดการข้อมูล (CMS) สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี พัฒนาด้วย PHP 8.2, PostgreSQL และ Vanilla JS พร้อมระบบความปลอดภัย CSRF/XSS",
    image: "/projects/comsci/comsciitpbru.webp",
    technologies: ["PHP 8.2", "PostgreSQL (PDO)", "Vanilla JS", "Gulp", "SweetAlert2", "Chart.js", "Tailwind / Modular CSS"],
    tags: ["PHP 8.2", "PostgreSQL (PDO)", "Vanilla JS", "Gulp", "SweetAlert2", "Chart.js", "Tailwind / Modular CSS"],
    githubUrl: "https://github.com/664244132",
    liveUrl: null,
    demoUrl: null,
    statusNotice: "อยู่ระหว่างการพัฒนา",
    featured: true,
    details: {
      overview: "เว็บไซต์ทางการและระบบบริหารจัดการข้อมูล (CMS) สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏเพชรบุรี พัฒนาขึ้นเพื่อเป็นศูนย์กลางประชาสัมพันธ์หลักสูตร ข่าวสาร ผลงานนักศึกษา งานวิจัย และข้อมูลคณาจารย์ โครงสร้างระบบใช้ PHP 8.2.12 เชื่อมต่อฐานข้อมูล PostgreSQL ผ่าน PDO Prepared Statements พร้อมระบบ Admin Panel จัดการเนื้อหาอย่างครบวงจร",
      problem: "สาขาวิทยาการคอมพิวเตอร์ต้องการเว็บไซต์ที่สะท้อนภาพลักษณ์ทันสมัย มีระบบจัดการเนื้อหา (CMS) ที่ใช้งานง่าย รวดเร็ว ปลอดภัยตามมาตรฐานสากล และรองรับการแสดงผลทุกหน้าจออย่างสมบูรณ์แบบโดยไม่พึ่งพา Framework ขนาดใหญ่ที่สิ้นเปลืองทรัพยากร",
      solution: "ออกแบบสถาปัตยกรรม Clean Code & Modular Architecture แยกไฟล์ CSS/JS ออกจาก PHP เพื่อประสิทธิภาพ Caching 100%, พัฒนาระบบ Admin Dashboard จัดการข่าวสารและหลักสูตร พร้อมระบบความปลอดภัย CSRF Protection, XSS Filtering และ Bcrypt Password Hashing",
      features: [
        "ระบบบริหารจัดการเนื้อหา (Admin CMS) จัดการข่าวสาร ผลงาน และคลังข้อมูลหลักสูตร",
        "ระบบรักษาความปลอดภัย 4 ชั้น: CSRF Tokens, XSS Filtering, Bcrypt Hash และ Rate Limiting",
        "การจัดสถาปัตยกรรม Modular Reusable Functions (php/helpers/ และ adminDbHelpers.php)",
        "สถาปัตยกรรมแยก CSS/JS สำหรับ 100% Server-side & Browser Caching",
        "การเชื่อมต่อฐานข้อมูล PostgreSQL 18.4 ประสิทธิภาพสูงด้วย PDO Prepared Statements",
        "การออกแบบ Semantic HTML5 และ Accessible UI/UX รองรับทุกขนาดหน้าจออย่างสมบูรณ์"
      ],
      challenges: "การออกแบบระบบ CMS ที่ทำงานด้วย Vanilla JS และ PHP 8.2 โดยไม่มีเฟรมเวิร์ก เพื่อให้โหลดได้รวดเร็วที่สุด และการวางระบบความปลอดภัยป้องกัน CSRF และ SQL Injection ทุก Endpoint",
      learnings: "เชี่ยวชาญการออกแบบโครงสร้าง Enterprise PHP ร่วมกับ PostgreSQL, การวางระบบ Browser Caching ด้วย Gulp, และการเขียนโค้ดตามหลัก DRY & Single Responsibility Principle (SRP)"
    }
  },
  {
    id: "cleanair-voice-pitching",
    title: "เว็บไซต์ตรวจจับเสียงเพื่อใช้ในพิธีเปิด Pitching สมัครประกวดเเข่งขันโครงงาน กิจกรรม Clean Air for Life : ภารกิจพิชิตฝุ่น PM 2.5",
    category: "Speech AI & Event Innovation",
    year: "2024",
    description: "ระบบตรวจจับคำสั่งเสียงอัจฉริยะแบบ 2-Stage Standby พร้อม Audio DSP & Noise Gate Pipeline, 3-Layer Phonetic Hybrid Match, เสียงพากย์ตอบกลับ TTS และ Canvas Audio Visualizer 60 FPS สำหรับพิธีเปิดงาน Pitching ระดับมหาวิทยาลัย",
    image: "/projects/cleanairvoice/speechproject.webp",
    technologies: ["Web Speech API", "Web Audio API", "HTML5 Canvas (60 FPS)", "SpeechSynthesis (TTS)", "PHP 8.x", "MySQL", "Phonetic Search"],
    tags: ["Web Speech API", "Web Audio API", "HTML5 Canvas (60 FPS)", "SpeechSynthesis (TTS)", "PHP 8.x", "MySQL", "Phonetic Search"],
    githubUrl: "https://github.com/664244132",
    liveUrl: null,
    demoUrl: null,
    statusNotice: "ใช้งานเป็น local ไม่ได้ทำการ deploy",
    featured: true,
    details: {
      overview: "ระบบตรวจจับคำสั่งด้วยเสียงอัจฉริยะ (Voice-Activated Action & Trigger System) สำหรับพิธีเปิดงาน Pitching โครงการ Clean Air for Life พัฒนาบนเว็บเบราว์เซอร์ด้วย Web Speech API และ Web Audio API ขับเคลื่อนด้วยสถาปัตยกรรม 2-Stage Passive Standby ดักฟังคำปลุก Wake-Word ('IT' / 'ไอที') เพื่อเข้าสู่ Active Listening Window 15 วินาที พร้อมประมวลผลคำสั่ง 'clean air for life' ผ่าน Bilingual Thai-English Phonetic Engine สั่งเล่นวิดีโอเปิดงานแบบ Fullscreen ทันที 0ms Latency และตอบกลับด้วยเสียงสังเคราะห์ Text-to-Speech (TTS)",
      problem: "พิธีเปิดงาน Pitching ต้องการการเปิดตัวสุดล้ำด้วยเสียงพูดจริงบนเวที แต่ต้องเผชิญกับสภาพแวดล้อมที่มีเสียงรบกวนสูง (เสียงแอร์, เสียงผู้ชมในหอประชุม) เสี่ยงต่อการตรวจจับเสียงผิดพลาด (False Triggers) และปัญหาความหน่วงในการประมวลผล",
      solution: "สร้าง Audio DSP Pipeline กรองเสียงรบกวน 7 ชั้น (Highpass 90Hz, Lowpass 3800Hz, Formant Filters, Adaptive Noise Gate), ใช้ 3-Layer Hybrid Search (Unspaced Exact + Levenshtein Fuzzy + Thai Phonetic Soundex) บนหน่วยความจำ RAM (<0.1ms) และสร้าง 60 FPS HTML5 Canvas Audio Visualizer 72 แท่ง เรนเดอร์แบบ Single-Pass Batched Fill",
      features: [
        "สถาปัตยกรรม 2-Stage Standby: กรองเสียงคุยทั่วไป 100% และตื่นรับคำสั่งเมื่อได้ยิน Wake-Word 'IT'",
        "Audio DSP & Noise Gate Pipeline กรองเสียงแอร์และเสียงความถี่ต่ำด้วย Web Audio API",
        "Bilingual Thai-English Phonetic Engine พร้อมระบบตัดคำสร้อยภาษาไทยอัตโนมัติ",
        "3-Layer In-Memory Hybrid Search ค้นหาคำสั่งเสียงใน RAM ระดับ Sub-millisecond (< 0.1ms)",
        "High-Performance 60 FPS Canvas Audio Visualizer 72 แท่ง ตอบสนองคลื่นเสียงเรียลไทม์",
        "ระบบเสียงสังเคราะห์ตอบกลับ TTS (Text-to-Speech) พร้อมระบบ Voice Pre-caching Map",
        "Action Trigger Engine สั่งเปิดวิดีโอ Fullscreen / เปิด URL ทันทีแบบ 0ms Latency",
        "Admin Control Panel จัดการคำสั่งเสียง วิดีโอ และการตั้งค่าระบบผ่าน PHP & MySQL"
      ],
      challenges: "การตัดเสียงรบกวนและเสียงสะท้อนจากไมโครโฟนบนเวทีหอประชุม และการประมวลผลจับคู่คำสั่งเสียงภาษาไทยที่มีสำเนียงและการออกเสียงต่างกันให้แม่นยำภายในเวลาเสี้ยววินาที",
      learnings: "เชี่ยวชาญการประมวลผลสัญญาณเสียงดิจิทัล (Audio DSP) บน Web Audio API, การสร้าง Speech Recognition Architecture ที่มีเสถียรภาพสูง (Self-Healing Heartbeat), และการเขียน Canvas Visualizer ประสิทธิภาพสูง"
    }
  }
];
