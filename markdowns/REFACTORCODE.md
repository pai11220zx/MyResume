# 🔄 กฎและแนวทางการ Refactor โค้ด (Code Refactoring & Project Standards)

**ข้อกำหนดและแนวทางปฏิบัติในการปรับปรุงและรักษาคุณภาพโค้ด:**

1. **Technology Stack:**
   - **Frontend:** React + Vite (สมัยใหม่), Tailwind CSS, Radix UI
   - **Backend:** Node.js (Express, API Services)
   - **Database:** PostgreSQL

2. **Component & File Structure (1 Feature per Module):**
   - การสร้างฟีเจอร์หรือ Component ใหม่ จะต้องแยกไฟล์ให้ชัดเจน 1 ฟังก์ชัน/1 Component ต่อ 1 ไฟล์เท่านั้น เพื่อความง่ายในการแก้ไขและค้นหา
   - แยกลอจิกและ UI ออกจากกันให้ชัดเจน
   - หากมีการใช้ CSS พิเศษที่นอกเหนือจาก Tailwind ให้แยกไฟล์ `.css` หรือใช้ CSS module

3. **DRY (Don't Repeat Yourself):**
   - ตรวจสอบจุดที่มีการเขียนโค้ดซ้ำซ้อนกัน แล้วดึงออกมาสร้างเป็น Custom Hook หรือ React Component ที่เรียกใช้ซ้ำได้ เพื่อลดความยาวของโค้ดและทำให้โค้ดสะอาดขึ้น

4. **Local Assets (Fonts & Icons):**
   - ปรับโค้ดให้ไปเรียกใช้งาน Fonts แบบ Local (เช่น โฟลเดอร์ `public/assets/` หรือ `src/assets/`)
   - **สำหรับ Icons:** อนุญาตและแนะนำให้ใช้ `lucide-react` ต่อไปได้เลยเนื่องจากเป็นการโหลดผ่าน Local Dependency (ห้ามใช้ Emoji เป็นไอคอน และหลีกเลี่ยง CDN ภายนอก)

5. **Database & API Rules:**
   - การเชื่อมต่อฐานข้อมูล PostgreSQL ผ่าน Node.js จะต้องตั้งค่าการเชื่อมต่อให้รองรับ `UTF-8` เสมอ เพื่อป้องกันปัญหาภาษาไทยกลายเป็นภาษาต่างดาว
   - ห้ามแก้ไขหรือสร้างตาราง (Table) ฐานข้อมูลด้วยโค้ดรันคำสั่งเด็ดขาด! ให้เขียนไฟล์ `.sql` เตรียมไว้เพื่อให้ผู้ใช้เป็นคนรันด้วยตัวเองผ่านโปรแกรมจัดการฐานข้อมูล เช่น **pgAdmin4** หรือ **Supabase** เท่านั้น
   - **Database Naming Convention:** การตั้งชื่อ Table และ Column จะต้องสื่อความหมายชัดเจน ตรงตัว เข้าใจง่าย และใช้รูปแบบ `snake_case` ทั้งหมด (เช่น `user_id`, `display_name`, `note_history_logs`) ห้ามตั้งชื่อย่อที่อ่านแล้วตีความไม่ได้
   - **Schema Sync Rule:** ทุกครั้งที่มีการแก้ไขโครงสร้างตารางบนแพลตฟอร์ม Database (เช่น Supabase หรือ pgAdmin) จะต้องนำโครงสร้างเหล่านั้นกลับมาอัปเดตให้ตรงกันในไฟล์ `database/schema.sql` เสมอ เพื่อใช้เป็นเอกสารอ้างอิงและ Backup ของโปรเจกต์

6. **Application Architecture (MPA):**
   - โปรเจกต์นี้ใช้โครงสร้างแบบ **Multi-Page Application (MPA)** ที่มีไฟล์ `.html` หลายไฟล์ (เช่น `index.html`, `login.html`, `register.html` ฯลฯ) 
   - การเปลี่ยนหน้า (Navigation) ระหว่างหน้า Auth หรือ App จะใช้แท็ก `<a>` (เช่น `href="/login.html"`) เป็นหลัก ห้ามเปลี่ยนโครงสร้างนี้ให้เป็น Single Page Application (SPA) ด้วย React Router โดยพลการ

7. **Node.js ES Modules (ESM) Rule:**
   - เนื่องจากโปรเจกต์ตั้งค่า `"type": "module"` ใน `package.json` การเขียน Backend ด้วย Node.js จะต้องบังคับใส่สเปกไฟล์ `.js` ต่อท้ายเสมอเวลาที่ Import ไฟล์ที่เขียนขึ้นเองในโปรเจกต์ (Local Imports) 
   - ตัวอย่างเช่น: บังคับเขียน `import authRoutes from './routes/auth.js';` (ห้ามละเว้นนามสกุลไฟล์) เพื่อป้องกันปัญหา `ERR_MODULE_NOT_FOUND` ตอน Deploy ขึ้นแพลตฟอร์มอย่าง Vercel

8. **UI & Branding Design Standard:**
   - การออกแบบโลโก้ (Logo) และ Branding ทั้งหมดในโปรเจกต์จะต้องใช้ดีไซน์ **"DevNote"** (ไม่มี s ต่อท้ายเด็ดขาด) ที่มีไอคอน `Terminal` สีขาวบนพื้นหลังไล่สีม่วง และมีเคอร์เซอร์แอนิเมชันกะพริบ (อ้างอิงรูปแบบโครงสร้าง HTML/คลาส `flex items-center gap-2.5 shrink-0 mr-8 group` แบบเดียวกับหน้า Index/Landing Page) เป็นมาตรฐานเดียวกันทั้งหมด
   - ห้ามใช้ชื่อโปรเจกต์อื่น (เช่น SnippetForge) หรือไอคอนอื่น (เช่น รูปสายฟ้า Zap) ปะปนในหน้าอื่นๆ เด็ดขาด เพื่อคุมโทน (Consistency) ของแบรนด์ให้ไปในทิศทางเดียวกัน

9. **Language-Specific Coding Guidelines:**
   - ทุกครั้งที่มีการเขียนฟีเจอร์ใหม่ แก้ไข หรือ Refactor โค้ด **จะต้องตรวจสอบโครงสร้างและรูปแบบการเขียนให้ตรงตามกฎของแต่ละภาษา** ที่ระบุไว้ในโฟลเดอร์ `markdowns/` เสมอ
   - อ้างอิงไฟล์ไกด์ไลน์ต่อไปนี้ (หากเกี่ยวข้องกับงาน):
     - `TypeScriptCodingGuide.md`
     - `SQLCodingGuide.md`
     - `REACTCodingGuide.md`
     - `NodeJSCodingGuide.md`
     - `JavascriptCodingGuide.md`
     - `HTMLCodingGuide.md`
     - `CSSCodingGuide.md`
     - `TailwindCodingGuide.md`
     - `DeMorgansLaws.md`

10. **Note Data Preservation & Alien Language Prevention Standard (กฎทองคำปกป้องข้อมูลโน้ต):**
    - ข้อมูลโน้ตคือทรัพย์สินสำคัญที่สุดของโปรเจกต์ ห้ามมิให้โค้ดส่วนใดทำลายหรือแก้ไขไบต์ข้อมูลโน้ตจนเกิดปัญหาภาษา Alien / Mojibake เด็ดขาด
    - **Safe Decompression Mandatory:** ก่อนนำเนื้อหาโน้ต (`content`) ไปบีบอัดผ่าน `zlib.deflateSync` จะต้องตรวจสอบและคลายการบีบอัด `Buffer` เดิมออกเป็น UTF-8 Text String ภาษาไทยที่สมบูรณ์ก่อนเสมอ ห้ามส่งไบนารี `Buffer` ที่ยังไม่คลายบีบอัดเข้า `Buffer.from(..., 'utf8')` เด็ดขาด
    - **Use `safeDecompressContent` Helper Only:** การอ่านและแปลงคอลัมน์ `content` ใน Backend จะต้องเรียกใช้ฟังก์ชัน `safeDecompressContent` กลางเสมอ เพื่อการันตี UTF-8 Encoding สมบูรณ์ 100%
    - **Frontend Complete Payload Standard:** เมื่อฝั่ง Frontend ทำการอัปเดตสถานะโน้ต (เช่น `toggleFavorite`, `moveNoteToFolder`) จะต้องแนบฟิลด์ `code` (เนื้อหาข้อความ) และ `name` ส่งไปยัง API เสมอ เพื่อรักษาความสมบูรณ์และฟื้นฟูข้อมูลในฐานข้อมูลให้ถูกต้องตลอดเวลา

11. **Scrollbar Brand Theme Consistency Standard (มาตรฐาน Scrollbar เฉดสีธีมแบรนด์):**
    - แถบเลื่อน (Scrollbar) ทุกจุดในแอปพลิเคชัน จะต้องออกแบบให้ตรงตามเฉดสีม่วงธีมแบรนด์ DevNote (`#8b5cf6`) เท่านั้น ห้ามปล่อยให้เบราว์เซอร์แสดงผลเป็นสีเทา หรือใช้คลาสซ่อนแถบเลื่อนจนกระทบ UX
    - **CSS Rules:** ใช้คลาส `.scrollbar-thin` หรือตั้งค่า `::-webkit-scrollbar` และ `scrollbar-color` ใน `src/styles/theme.css` กำหนดสี `rgba(139, 92, 246, 0.35)` สำหรับ Thumb และสีม่วงสด `#8b5cf6` เมื่อ Hover เสมอ

12. **Vercel Serverless Architecture & Event Loop Safety Standard (กฎเหล็กสำหรับ Vercel Serverless):**
    - **Explicit `.js` Extension Mandatory:** การ Import ไฟล์ Local ในโฟลเดอร์ `api/` และ `backend/` ทุกจุดต้องระบุนามสกุล `.js` ต่อท้ายเสมอ (เช่น `import app from '../backend/server.js';`) ป้องกันปัญหา `ERR_MODULE_NOT_FOUND` ตอนรันบน Node.js ES Modules (ESM)
    - **Vercel Rewrites Destination:** ใน `vercel.json` ปลายทาง Rewrite สำหรับ API ให้ระบุเป็น `"destination": "/api/index"` (ห้ามระบุ `.ts` ต่อท้าย) เพื่อเปิดใช้งาน Serverless Function 
    - **No Top-Level Blocking Socket / Event Loop Leaks:** ห้ามเรียกใช้ `pool.connect()` แบบค้างสาย หรือรัน `setInterval` / `cron.schedule()` ที่ระดับ Top-level นอก Request Handler บน Serverless Function เพราะจะทำให้เกิด Event Loop Leak และ Vercel สั่งยุติตัวประมวลผลกะทันหัน (`Status: 0`)
    - **Dual Route Prefix Support:** ใน Express `server.ts` จะต้องแมปเส้นทางรับคำขอทั้งแบบ `/api/auth` และ `/auth` (รวมถึง `/api/folders` & `/folders`, `/api/notes` & `/notes`) เพื่อรองรับการ Rewrite และ URL Stripping ของ Vercel

13. **Backdrop Click Close Standard for Pop-up Modals (กฎเหล็กระบบปิด Pop-up เมื่อกดฉากหลังเบลอ):**
    - **Backdrop Event Mandatory:** ทุก Pop-up Modal ทั้งหมดในโปรเจกต์ (เช่น `SnippetDetailModal`, `ShareSnippetModal`, `YourNotesModal`, `AuthGuardModal`, `SettingsModal`, `WelcomePopup`, `CreateMenuPopup`, `StorageLimitModal`, `TrashManagerModal`, `IdleTimeoutModal`) จะต้องกำหนด Event Handler `onClick={onClose}` (หรือฟังก์ชันปิดที่เกี่ยวข้อง) และคลาส `cursor-pointer` บนกล่องฉากหลังเบลอภายนอก (Outer Backdrop Overlay)
    - **Content Box Propagation Guard Mandatory:** กล่องเนื้อหาภายใน (Inner Content Box) จะต้องใส่ Event Handler `onClick={(e) => e.stopPropagation()}` และคลาส `cursor-default` เสมอ เพื่อป้องกันไม่ให้การคลิกอ่านหรือกรอกข้อมูลภายในป๊อปอัปส่งผลกระทบให้ป๊อปอัปปิดตัวลงโดยไม่ตั้งใจ

14. **Custom Floating Card Dropdown Standard for Select Options (กฎเหล็กมาตรฐาน CustomSelect):**
    - **No Native Select Tags:** ห้ามใช้แท็ก `<select>` และ `<option>` ดั้งเดิมของระบบปฏิบัติการ (OS native drop-down controls) สำหรับตัวเลือกดรอปดาวน์หมวดหมู่ ภาษา หรือการกรองข้อมูลในแอปพลิเคชันเด็ดขาด เพราะเบราว์เซอร์บน Windows/Chrome จะแสดงผลพื้นหลังสีขาว/เทาสว่างขัดกับ Dark Theme ของ DevNotes
    - **Use `CustomSelect` Component Only:** AI Agents ทุกตัวต้องเรียกใช้ Component กลาง [`src/components/common/CustomSelect.tsx`](file:///c:/xampp/htdocs/DevNotes/src/components/common/CustomSelect.tsx) ในการสร้างตัวเลือก Dropdown เสมอ
    - **Visual Styling Specification:** ตัวเลือกดรอปดาวน์เมนูห้อยลงมาต้องเป็นการ์ดลอย (Custom Floating Card) ธีมสีเข้ม `#13131a`, ขอบเรืองแสงสีม่วง `rgba(139, 92, 246, 0.4)`, ลูกศรหมุน `ChevronDown`, ป้ายแสดงสถานะ `Check` สีม่วงเมื่อเลือกรายการ, และมีแอนิเมชันเปิดปิด Smooth 100%

15. **VS Code Extension Architecture & Branding Standard (กฎเหล็กสถาปัตยกรรมและการออกแบบ VS Code Extension):**
    - **Strict Project Branding:** ชื่อโครงการของ Extension บังคับใช้ **"DevNote"** (ไม่มี s ต่อท้ายเด็ดขาด) ทั้งใน `package.json` (`name: "devnote-vscode"`, `displayName: "DevNote - Code Snippets & Notes Manager"`), ข้อความแจ้งเตือน Notification, Command Palette, และ Virtual Scheme (`devnote://`)
    - **Dual Icon Assets Specification:**
      - **Activity Bar Icon (`resources/icon.svg`):** ต้องเป็นไฟล์ SVG แบบ **Transparent Background (พื้นหลังโปร่งใส)** เท่านั้น ใช้เส้นรอบนอก (Stroke/Fill Vector) พร้อม `fill="currentColor"` ห้ามใส่กล่องสี่เหลี่ยมทึบแสง `<rect fill="...">` เด็ดขาด เพื่อให้ VS Code ทำ Mask/Tint สลับสีตามธีมปุ่มบน Activity Bar ได้ถูกต้อง
      - **Extension Details / Marketplace Icon (`resources/icon.png`):** ต้องเป็นไฟล์ภาพ PNG แบบ 32-bit RGBA ความละเอียดสูงอย่างน้อย **512x512 พิกเซล** มีภาพสี่เหลี่ยมมุมมน Gradient สีม่วง `#7c18d9` -> `#A855F7` พร้อมสัญลักษณ์ Terminal `>_` สีขาวเด่นชัด และมี PNG Magic Header (`89 50 4E 47`) แท้ 100%
    - **SecretStorage & Credentials Safety:** การจัดเก็บ JWT Token จะต้องจัดเก็บผ่าน VS Code `context.secrets` (SecretStorage) อย่างปลอดภัยเท่านั้น ห้ามจัดเก็บบนไฟล์ plaintext หรือ globalState ธรรมดา
    - **Virtual FileSystem Provider Scheme:** การเปิดดูและแก้ไขเนื้อหาโน้ตจะต้องลงทะเบียน FileSystemProvider ผ่าน Scheme `devnote://` (เช่น `devnote:///{noteId}/{filename}`) เพื่อให้รองรับการแก้ไขโค้ดและบันทึกข้อมูลย้อนกลับไปยัง DevNote API ด้วยปุ่ม `Ctrl + S` / `Cmd + S`
    - **Smart Dual Port Fallback Engine:** ใน `apiService.ts` จะต้องลำดับการลองเชื่อมต่อ URL ชี้ไปยัง `http://127.0.0.1:3000` (IPv4) เป็นอันดับแรกก่อน `localhost` เพื่อป้องกันปัญหา `fetch failed` บน Windows Node.js ที่พยายาม resolve ไปยัง IPv6 `::1`
    - **VSIX Packaging Exclusion (`.vscodeignore`):** ในโฟลเดอร์ `vscode-extension/` จะต้องรักษากฎในไฟล์ `.vscodeignore` เพื่อกรองไฟล์พัฒนา (`src/`, `tsconfig.json`, `.vscode/`) ออกจากแพ็กเกจ `.vsix` เสมอ เพื่อลดขนาดไฟล์และปกป้องซอร์สโค้ด

16. **Clean Background & Uniform Border Standard (กฎเหล็กมาตรฐานการตกแต่งพื้นหลังและขอบคอนเทนเนอร์ ห้ามใช้เส้นขอบหนาเฉพาะฝั่งหัว/ฝั่งซ้าย):**
    - **ข้อห้ามเด็ดขาด (Strict Prohibition):** ห้ามใช้เส้นขอบหนาสีม่วงหรือสีอื่นที่หัว/ฝั่งซ้ายของพื้นหลัง เช่น `border-l-4 border-[#8B5CF6]`, `border-l-4 border-emerald-500`, `border-l-4 border-purple-500`, `border-l-2` บนกล่องแจ้งเตือน (Alert / Callout Boxes), กล่องคำพูด (Quote Boxes), หรือ Container Cards ต่างๆ ในโปรเจกต์นี้โดยเด็ดขาด
    - **มาตรฐานการออกแบบที่ถูกต้อง (Standard Practice):** ให้ใช้การตกแต่งพื้นหลังและขอบแบบ **Clean Uniform Border** (เส้นขอบรอบด้าน 1px ที่สม่ำเสมอ เช่น `border border-[#1E1E26]` หรือ `border border-purple-900/30` ร่วมกับพื้นหลังแบบ Solid/Subtle Glassmorphism เช่น `bg-[#080810]` / `bg-[#0A0A12]`) และสื่อความหมายด้วย Icon Badge หรือ Status Indicator ภายในกล่องแทนการใช้เส้นหนาที่ขอบ เพื่อความสะอาด สบายตา ดูเป็นทางการ และรักษาความสม่ำเสมอของ UI ทั้งระบบ