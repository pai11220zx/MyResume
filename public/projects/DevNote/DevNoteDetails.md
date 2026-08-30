# 📚 DevNote - Complete Project Documentation

**DevNote** (สะกดแบบไม่มี s ต่อท้าย) คือแอปพลิเคชันและเครื่องมือจดโน้ตที่ออกแบบและพัฒนาขึ้นเพื่อ **Developer** โดยเฉพาะ เป็นศูนย์รวมสำหรับจัดเก็บ Code Snippets, เอกสาร Markdown และคลังความรู้ทางเทคนิค ครอบคลุมทั้งระบบหน้าเว็บ (Web Application), หลังบ้าน (RESTful API Service), และส่วนขยายบนเอดิเตอร์ (**VS Code Extension**)

---

## 🛠️ 1. สถาปัตยกรรมระบบและเทคโนโลยี (System Architecture & Tech Stack)

โปรเจกต์นี้ถูกออกแบบให้รองรับการทำงานข้ามแพลตฟอร์ม ครอบคลุมทั้งส่วนหน้าเว็บ (Frontend), ระบบหลังบ้าน (Backend API), และส่วนขยายเอดิเตอร์ (VS Code Extension)

### 🖥️ Frontend (หน้าเว็บ)
- **Architecture:** Multi-Page Application (MPA) พร้อมไฟล์ HTML แยกตามหน้า (`index.html`, `devnote.html`, `community.html`, `admin.html`, `login.html`, `register.html`, `forgot-password.html`, `reset-password.html`)
- **Framework:** React 18+ (พัฒนาและบิลด์ผ่าน **Vite** เพื่อความรวดเร็วสูงสุด)
- **Styling:** **Tailwind CSS** เน้นการออกแบบโครงสร้างแบบ Utility-first และยึดหลัก **Dark Mode First** เพื่อความสบายตาของ Developer
- **UI Primitives:** **Radix UI** สำหรับจัดการ Component ที่ซับซ้อน เช่น Modal, Dropdown, หรือ Tabs เพื่อให้ได้มาตรฐาน Accessibility (a11y)
- **Icons & Assets:** ใช้ **lucide-react** ตามกฎเหล็ก เพื่อลดการพึ่งพา CDN ภายนอกและป้องกันเว็บช้า (ใช้ `DevNoteLogo.tsx` เป็นมาตรฐานแบรนด์กลาง)
- **Fonts:** โหลด Developer Coding Fonts แท้ ได้แก่ `JetBrains Mono`, `Fira Code`, `Source Code Pro`, และ `Consolas`

### 🧩 VS Code Extension (`vscode-extension/`)
- **Language/SDK:** TypeScript 5+ & VS Code Extension API (`^1.80.0`)
- **Sidebar Integration:** โครงสร้าง TreeDataProvider Custom View (`DevNoteProvider`) แสดงโฟลเดอร์ รายการโน้ต และป้ายกำกับภาษาโปรแกรมมิ่งบน Activity Bar
- **Virtual FileSystem Provider (`devnote://`):** เปิดอ่านและแก้ไขเนื้อหาโน้ตสดบน VS Code Editor พร้อมรองรับการบันทึกข้อมูลย้อนกลับไปยัง DevNote API ด้วยปุ่ม `Ctrl + S` / `Cmd + S`
- **Secure Authentication:** จัดเก็บ JWT Auth Token อย่างปลอดภัยผ่าน VS Code `SecretStorage` (`context.secrets`)
- **Packaging & Deployment:** ควบคุมขนาดแพ็กเกจผ่าน `.vscodeignore` และบิลด์ไฟล์ติดตั้ง `.vsix` สำเร็จรูป (`devnote-vscode-1.0.2.vsix`) หรือ Publish ขึ้น Visual Studio Marketplace

### ⚙️ Backend API (ระบบหลังบ้าน)
- **Language:** **Node.js (Express)** ทำหน้าที่เป็น RESTful API Service คอยรับส่งข้อมูลในรูปแบบ JSON โดยปฏิบัติตามมาตรฐาน **ES Modules (ESM)** (ทุก local import ระบุนามสกุล `.js` ครบถ้วน)
- **Authentication:** ระบบยืนยันตัวตนแบบ **Stateless JWT (JSON Web Token)** (`backend/routes/auth.ts`) และ Admin Role Middleware (`backend/middleware/adminMiddleware.ts`) เพื่อความปลอดภัยระดับ Role-Based Access Control (RBAC)
- **API Routes & Endpoints:**
  - `POST /api/auth/login`, `POST /api/auth/register` — ระบบล็อกอินและสมัครสมาชิก (รองรับ `WHERE LOWER(TRIM(email)) = LOWER(TRIM($1))` ป้องกันปัญหาตัวพิมพ์)
  - `POST /api/auth/forgot-password`, `POST /api/auth/reset-password` — ระบบขอลิงก์รีเซ็ตรหัสผ่านทางอีเมล (รองรับ Gmail Port 465 SSL Direct สำหรับ Cloud Server)
  - `GET /api/folders`, `POST /api/folders`, `DELETE /api/folders/:id` — จัดการโฟลเดอร์สำหรับเก็บโน้ต
  - `GET /api/notes`, `POST /api/notes`, `PUT /api/notes/:id`, `DELETE /api/notes/:id` — จัดการโน้ตและคลายการบีบอัด UTF-8 ป้องกันภาษา Mojibake
  - `POST /api/notes/batch` — ระบบ Single Batch Sync โน้ตหลายรายการพร้อมกันใน PostgreSQL Transaction เดียว
  - `GET /api/community/snippets?page=1&limit=15` — ระบบ Server-side Pagination ดึง Code Snippets สาธารณะทีละ 15 รายการ
  - `POST /api/community/share`, `PUT /api/community/snippets/:id`, `DELETE /api/community/snippets/:id` — จัดการ Snippet ใน Community Hub
  - `POST /api/feedback` — ระบบส่งข้อเสนอแนะ Feedback & Rating
  - `GET /api/admin/stats`, `GET /api/admin/users`, `GET /api/admin/feedback`, `GET /api/admin/snippets` — ระบบ Admin Dashboard และการตรวจทานข้อมูล
- **Vercel Serverless Integration:** รองรับการ Deploy บน Vercel Serverless Function ผ่าน entry point `api/index.ts` โดยไม่มีปัญหา Event Loop Leak (`allowExitOnIdle: true`) หรือ 404 Rewrite

### 🗄️ Database (ฐานข้อมูล)
- **Engine:** **PostgreSQL** ตั้งค่าการเชื่อมต่อรองรับ **UTF-8 (`utf8mb4`)** เพื่อป้องกันปัญหาภาษาไทยกลายเป็นภาษาต่างดาว
- **Naming Convention:** ใช้รูปแบบ **`snake_case`** ทั้งหมด สื่อความหมายชัดเจน ตรงตัว (เช่น `user_id`, `size_bytes`, `role`, `status`, `community_snippets`, `user_feedback`)
- **SQL Files:** จัดเตรียมไฟล์ SQL เช่น `database/schema.sql`, `database/admin_setup.sql`, `database/community_snippets.sql`, `database/init_users.sql`, `database/password_reset_tokens.sql`, `database/user_feedback.sql` สำหรับนำไปรันใน pgAdmin / Supabase ด้วยตนเอง

---

## ⭐ 2. ฟีเจอร์หลักของระบบ (Core Features)

1. **🧩 VS Code Extension Manager Integration (`vscode-extension/`):**
   - **Native Explorer TreeView:** ดึงข้อมูลโฟลเดอร์และโน้ตจาก DevNote Server แสดงผลบน Sidebar พร้อมไอคอนแยกตามภาษาโปรแกรมมิ่ง
   - **Virtual File Editor & Real-Time Sync (`devnote://`):** แก้ไขซอร์สโค้ดโน้ตสดบน VS Code Editor และกด `Ctrl + S` เพื่อบันทึกข้อมูลย้อนกลับไปยังฐานข้อมูลทันที
   - **Inline CRUD Actions:** สร้างโฟลเดอร์ใหม่ สร้างโน้ตใหม่พร้อมเลือกภาษา ลบโฟลเดอร์ ลบโน้ต และสลับสถานะโน้ตโปรด (Toggle Favorite ⭐) ได้จาก Sidebar
2. **👑 Admin Dashboard & Moderation System (`admin.html`, `src/features/admin/`):**
   - **System Overview Chart (`OverviewTab.tsx`):** แสดงสถิติกราฟเส้น Bezier Curve โต้ตอบได้จริง (Notes Created vs New Users)
   - **3-Tier Monitoring Panels:** ตรวจจับ Peak Usage Hours, ผู้ใช้ใกล้ชนเพดาน 50 KB, และ PostgreSQL Health
   - **Moderation Tables:** จัดการผู้ใช้งาน (`UsersTab.tsx`), ตรวจสอบ Feedback (`FeedbackTab.tsx`), และจัดการ Community Snippets (`ModerationTab.tsx`)
3. **🛡️ Automated Security & Content Scanner Engine (`securityScanner.ts`):**
   - **De-obfuscation Engine (`normalizeText`):** ถอดรหัสคำเลี่ยงและลบสัญลักษณ์คั่นก่อนสแกน
   - **4 Core Scanners:** สแกน XSS Script Injection, SQL Injection, RCE/Command Injection, Secret Key Leaks, และคำหยาบคาย
4. **🌐 Community Hub & Secret Unlisted Link System:**
   - **Full Snippet Detail Modal (`SnippetDetailModal.tsx`):** แสดงรายละเอียดโค้ดแชร์แบบเต็มจอภาพ
   - **Secret Unlisted Link Generator (`SecretLinkModal.tsx`):** ระบบสร้างลิงก์ลับแชร์ส่วนตัวพร้อมระบบลบอัตโนมัติ 3 วัน (3-Day Auto Expiration)
5. **⚙️ Settings & Persistent Preferences (`SettingsModal.tsx`):**
   - ป๊อปอัปตั้งค่าปรับเปลี่ยนสีแบรนด์, ฟอนต์, สลับธีม, และบันทึกค่ายั่งยืนลง `localStorage`
6. **💻 Dual-Layer Code Editor & Syntax Highlighting:**
   - เอดิเตอร์แบบ 2 เลเยอร์ พร้อมระบบ Triple Scroll Sync (เลขบรรทัด + ไฮไลท์สี + เอดิเตอร์)
7. **🎨 18-Language Priority Pipeline Auto-Detection System (`detectLanguage.ts`):**
   - ตรวจจับภาษาโปรแกรมมิ่งอัตโนมัติ 18 ภาษาผ่าน Priority Pipeline Matrix
8. **📊 50 KB Storage Quota Management & Real-Time Enforcer:**
   - บล็อกการเพิ่มโน้ตเมื่อพื้นที่เกิน 50 KB พร้อมแจ้งเตือนผ่าน `StorageLimitModal`
9. **🖱️ Universal Backdrop Click Close System:**
   - กดปิด Pop-up เมื่อคลิกฉากหลังเบลอ (Backdrop Click Close) ครอบคลุมทุก Modals ในระบบ

---

## 📂 3. โครงสร้างโฟลเดอร์และไฟล์สำคัญ (Project Structure)

```text
DevNotes/
│
├── 📂 api/                      # Vercel Serverless Function entry point
│   └── 📜 index.ts              # Entry point สำหรับ Vercel (/api/(.*) -> /api/index)
│
├── 📂 backend/                  # ระบบหลังบ้าน Node.js REST API (ESM)
│   ├── 📂 config/               # ตั้งค่าฐานข้อมูลและการเชื่อมต่อ PostgreSQL (db.ts)
│   ├── 📂 cron/                 # งานรันตามเวลา (trashCleanup.ts)
│   ├── 📂 middleware/           # มิดเดิ้ลแวร์ยืนยันตัวตน JWT & Admin RBAC (authMiddleware.ts, adminMiddleware.ts)
│   ├── 📂 routes/               # API Routes (auth.ts, folders.ts, notes.ts, feedback.ts, community.ts, admin.ts)
│   ├── 📂 utils/                # ยูทิลิตี้เอนจินสแกนความปลอดภัยหลังบ้าน (securityScanner.ts)
│   ├── 📜 checkDbSize.ts        # สคริปต์ตรวจสอบขนาดฐานข้อมูล
│   └── 📜 server.ts             # ไฟล์รัน Express Server หลัก
│
├── 📂 database/                 # โฟลเดอร์เก็บไฟล์โครงสร้างฐานข้อมูล
│   ├── 📜 schema.sql            # ไฟล์ SQL โครงสร้างตารางทั้งหมดสำหรับนำไปรันใน PostgreSQL
│   ├── 📜 admin_setup.sql       # ไฟล์ SQL สคริปต์สร้างสิทธิ์แอดมินและรหัสผ่านแฮช
│   ├── 📜 community_snippets.sql # ไฟล์ SQL สำหรับสร้างตาราง community_snippets
│   ├── 📜 init_users.sql        # ไฟล์ SQL สำหรับทดสอบผู้ใช้เริ่มต้น
│   ├── 📜 password_reset_tokens.sql # ไฟล์ SQL สำหรับตารางรีเซ็ตรหัสผ่าน
│   └── 📜 user_feedback.sql     # ไฟล์ SQL สำหรับสร้างตาราง user_feedback
│
├── 📂 markdowns/                # โฟลเดอร์เก็บคู่มือและกฎเกณฑ์ต่างๆ ของโปรเจกต์
│   ├── 📜 AboutProject.md       # เอกสารสรุปโครงสร้างและรายละเอียดโปรเจกต์
│   ├── 📜 CSSCodingGuide.md     # คู่มือมาตรฐานการเขียน CSS
│   ├── 📜 DEBUG.md              # คู่มือดีแบ๊กและแนวทางสำหรับ AI Agents
│   ├── 📜 DESIGN.md             # ระบบดีไซน์ สไตล์สี และสถาปัตยกรรม UI
│   ├── 📜 DeMorgansLaws.md      # คู่มือ De Morgan's Laws สำหรับการเขียน Boolean logic
│   ├── 📜 HTMLCodingGuide.md    # คู่มือมาตรฐานการเขียน HTML5
│   ├── 📜 JavascriptCodingGuide.md # คู่มือมาตรฐานการเขียน JavaScript
│   ├── 📜 LOG.md                # บันทึกประวัติการพัฒนาและ Refactoring
│   ├── 📜 NodeJSCodingGuide.md  # คู่มือมาตรฐานการเขียน Node.js (Express ESM)
│   ├── 📜 PHPCodingGuide.md     # คู่มือมาตรฐานการเขียน PHP
│   ├── 📜 PROJECT.md            # ภาพรวมเป้าหมายและฟีเจอร์ของโปรเจกต์
│   ├── 📜 REACTCodingGuide.md   # คู่มือมาตรฐานการเขียน React
│   ├── 📜 REFACTORCODE.md       # กฎเหล็ก 15 ข้อในการ Refactor โค้ด
│   ├── 📜 SECURITY.md           # คู่มือความปลอดภัยและระบบสแกนโค้ด
│   ├── 📜 SQLCodingGuide.md     # คู่มือมาตรฐานการเขียน SQL (PostgreSQL)
│   ├── 📜 TECHSTACK.md          # ตารางสรุปเวอร์ชันและเทคโนโลยีทั้งหมด
│   ├── 📜 TailwindCodingGuide.md# คู่มือมาตรฐานการเขียน Tailwind CSS v4
│   ├── 📜 TypeScriptCodingGuide.md # คู่มือมาตรฐานการเขียน TypeScript
│   └── 📜 feedback-review-tab-design.md # เอกสารออกแบบแท็บ Feedback Review
│
├── 📂 src/                      # โค้ดส่วนหน้าบ้าน React + TypeScript
│   ├── 📂 assets/               # รูปภาพ โลโก้ และไอคอน SVG
│   ├── 📂 components/           # Reusable Component กลาง (DevNoteLogo.tsx, CustomSelect.tsx, CodeCardExportModal.tsx)
│   ├── 📂 constants/            # ค่าคงที่กลางของระบบ (index.ts)
│   ├── 📂 features/             # โมดูลฟีเจอร์แยกตามโดเมน
│   │   ├── 📂 admin/            # โมดูล Admin Dashboard (OverviewTab, FeedbackTab, ModerationTab, UsersTab)
│   │   ├── 📂 auth/             # ฟีเจอร์ยืนยันตัวตน (IdleTimeoutModal, SocialLogins)
│   │   ├── 📂 community/        # ฟีเจอร์ Community Hub (ShareSnippetModal, SnippetDetailModal, YourNotesModal)
│   │   ├── 📂 devnote/          # ฟีเจอร์หลัก DevNote App (Editor, Sidebar, Modals, Settings)
│   │   └── 📂 landing/          # หน้า Landing Page (Hero, Docs, Pricing, Footer)
│   ├── 📂 pages/                # React Components หลักแยกตามหน้า HTML
│   ├── 📂 styles/               # CSS Stylesheets (theme.css, fonts.css, devnote.css)
│   ├── 📂 types/                # Type Definitions กลาง
│   └── 📂 utils/                # ยูทิลิตี้กลาง (apiClient, detectLanguage, securityScanner, syntaxHighlight)
│
├── 📂 vscode-extension/         # โฟลเดอร์ซอร์สโค้ดส่วนขยาย VS Code Extension
│   ├── 📂 out/                  # ผลลัพธ์โค้ดที่ผ่านการคอมไพล์ TypeScript แล้ว (ละเว้นใน .gitignore และ .antigravityignore)
│   ├── 📂 resources/            # ไฟล์ไอคอนแบรนด์ (icon.svg สำหรับ Activity Bar, icon.png สำหรับ Extension Details)
│   ├── 📂 src/                  # ซอร์สโค้ด TypeScript
│   │   ├── 📂 editors/          # Virtual FileSystem Provider (noteFileSystemProvider.ts สำหรับ devnote://)
│   │   ├── 📂 services/         # บริการสื่อสาร API และ Auth (apiService.ts, authService.ts)
│   │   ├── 📂 treeView/         # โครงสร้าง TreeDataProvider สำหรับ Sidebar (devNoteProvider.ts, treeItem.ts)
│   │   ├── 📂 types/            # อินเทอร์เฟซประเภทข้อมูล (index.ts)
│   │   └── 📜 extension.ts      # ไฟล์ Entry Point หลักและการลงทะเบียนคำสั่ง
│   ├── 📜 .vscodeignore         # ไฟล์กำหนดการกรองซอร์สโค้ดส่วนเกินออกจาก VSIX Package
│   ├── 📜 devnote-vscode-1.0.2.vsix # ไฟล์แพ็กเกจ VSIX บิลด์สำเร็จสำหรับติดตั้งใน 1 คลิก
│   ├── 📜 package.json          # ไฟล์ Manifest ของ VS Code Extension
│   ├── 📜 README.md             # คู่มือการติดตั้งและการใช้งานภาษาไทย
│   └── 📜 tsconfig.json         # ตั้งค่า TypeScript Compiler สำหรับ Extension
│
├── 📜 .antigravityignore        # ไฟล์กำหนดการยกเว้นไฟล์/โฟลเดอร์สำหรับ AI Agents (Antigravity/Gemini)
├── 📜 .gitignore                # ไฟล์กำหนดการยกเว้นไฟล์สำหรับ Git Version Control
├── 📜 index.html                # หน้า Landing Page
├── 📜 devnote.html              # หน้า Workspace จดโน้ตหลัก
├── 📜 community.html            # หน้า Community Hub หลัก
├── 📜 admin.html                # หน้า Admin Dashboard หลัก
├── 📜 login.html                # หน้า Login
├── 📜 register.html             # หน้า Register
├── 📜 forgot-password.html      # หน้าลืมรหัสผ่าน
├── 📜 reset-password.html       # หน้าตั้งรหัสผ่านใหม่
├── 📜 package.json              # รายการ dependencies และสคริปต์รันโปรเจกต์หลัก
└── 📜 vercel.json               # การตั้งค่า Vercel Rewrite และ Serverless Router
```