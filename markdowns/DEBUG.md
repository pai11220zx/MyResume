# 🐞 คู่มือการแก้ปัญหาและดีบักสำหรับ AI Agents (Debugging & Troubleshooting Guide)

เอกสารนี้รวบรวมแนวทางและวิธีแก้ไขปัญหาทางเทคนิคที่พบบ่อย (Common Issues & Solutions) สำหรับ **AI Agents และนักพัฒนา** ในการตรวจสอบและแก้ปัญหาโปรเจกต์ **Developer Portfolio Website** (React 18 + Tailwind CSS + Framer Motion + WebGL + Vite + Vercel + Supabase)

---

## 🤖 1. ข้อกำหนดสำคัญสำหรับ AI Agents ในการดีบัก

1. **ห้ามรันคำสั่งแก้ Database โดยตรง (Rule 10):** หากพบปัญหาเรื่องตารางฐานข้อมูล ให้ตรวจสอบและแก้ไขในไฟล์ `database/schema.sql` เพื่อให้ผู้ใช้นำไปรันเองบน Supabase SQL Editor
2. **ห้ามรัน Git Push / Commit (Rule 11):** ให้ปล่อยให้ผู้ใช้เป็นผู้จัดการ Git เอง
3. **ตรวจสอบ Build เสมอ:** หลังแก้ไขโค้ด ให้สั่งรัน `npm run build` เพื่อพิสูจน์ว่าไม่มี Syntax Error หรือ Missing Import
4. **รักษาหลักการ DRY และ 1 Component ต่อ 1 ไฟล์:** หากพบคอมโพเนนต์ยาวหรือมีความซ้ำซ้อน ให้แยกโมดูลย่อยและแยกไฟล์ `.css` ให้เป็นระเบียบ

---

## 2. ปัญหาและวิธีแก้ปัญหาเกี่ยวกับ Vite & Rollup Bundling

### 🔴 ปัญหาที่ 2.1: Warning ขนาด Chunk เกิน 500 kB (Some chunks are larger than 500 kB)
- **สาเหตุ:** Third-party Libraries (React, Framer Motion, OGL, Lenis) ถูกรวมไว้ใน Single Bundle ก้อนเดียว
- **วิธีแก้:** ตรวจสอบและตั้งค่า `manualChunks` ใน [`vite.config.js`](file:///c:/xampp/htdocs/Resume/vite.config.js):
  ```javascript
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', 'ogl', 'lenis'],
          'icons-vendor': ['lucide-react']
        }
      }
    }
  }
  ```

### 🔴 ปัญหาที่ 2.2: โมดูลหรือไอคอนจาก Lucide หาย (`export 'Github' was not found in 'lucide-react'`)
- **สาเหตุ:** `lucide-react` ไม่มีไอคอนสำหรับแบรนด์โซเชียลมีเดียบางตัว (เช่น Github, Linkedin)
- **วิธีแก้:** ให้ดึงไอคอนจากคอมโพเนนต์ SVG ภายในโปรเจกต์ [`src/components/Icons.jsx`](file:///c:/xampp/htdocs/Resume/src/components/Icons.jsx) แทน:
  ```jsx
  import { GithubIcon, LinkedinIcon } from './Icons';
  ```

### 🔴 ปัญหาที่ 2.3: `ReferenceError: [IconName] is not defined` ใน `Skills.jsx`
- **สาเหตุ:** มีการระบุชื่อไอคอนในอ็อบเจกต์ `iconLookup` แต่ลืมระบุในคำสั่ง `import { ... } from 'lucide-react'`
- **วิธีแก้:** สแกนชื่อไอคอนใน `iconLookup` ทุกตัว และ Import เข้ามาจาก `lucide-react` ให้ครบถ้วน

---

## 3. ปัญหาเกี่ยวกับ WebGL Shaders & Canvas (`DarkVeil`, `GlowCursor`, `ogl`)

### 🔴 ปัญหาที่ 3.1: WebGL Context Lost หรือแคนวาสไม่เรนเดอร์บนอุปกรณ์บางประเภท
- **สาเหตุ:** Browser ไม่รองรับ WebGL2 หรือ GPU driver ถูกบล็อก
- **วิธีแก้:** ใน `DarkVeil.jsx` และ `GlowCursor.jsx` มีฟังก์ชันตรวจสอบ WebGL Context และมี Fallback สไตล์ CSS เสมอ หากแคนวาสเปิดไม่ติดระบบจะใช้สีพื้นหลัง `#0F1117` โดยอัตโนมัติ

### 🔴 ปัญหาที่ 3.2: GlowCursor หรือ DarkVeil ส่งผลต่อการคลิก Element เบื้องหลัง (Pointer Events Blocking)
- **สาเหตุ:** Canvas เลเยอร์บนบังพื้นที่การกดของปุ่มหรือลิงก์
- **วิธีแก้:** ทุก Canvas และ Container ที่เป็นพื้นหลังหรือ Trail ต้องใส่คลาส `pointer-events-none` และ `aria-hidden="true"` เสมอ

---

## 4. ปัญหาเกี่ยวกับ Lenis Smooth Scrolling & Modal Body Scroll Lock

### 🔴 ปัญหาที่ 4.1: หน้าเว็บยังเลื่อนได้เบื้องหลังขณะเปิด ProjectModal
- **สาเหตุ:** Lenis ควบคุม Scroll Event แบบ Virtual Scroll ทำให้ `overflow: hidden` บน `body` อย่างเดียวอาจไม่หยุดการเลื่อน
- **วิธีแก้:** ใน [`SmoothScroll.jsx`](file:///c:/xampp/htdocs/Resume/src/components/common/SmoothScroll.jsx) มีการผูก Lenis instance ไว้ที่ `window.__lenis` และใน [`ProjectModal.jsx`](file:///c:/xampp/htdocs/Resume/src/components/ProjectModal.jsx) จะสั่ง `window.__lenis?.stop()` เมื่อเปิด และ `window.__lenis?.start()` เมื่อปิด

### 🔴 ปัญหาที่ 4.2: การเลื่อนในกล่อง Modal ติดขัด
- **วิธีแก้:** กล่อง Modal ที่มี Scrollable Content ต้องใส่ `data-lenis-prevent` หรือให้ Lenis หยุดทำงานระหว่างเปิด Modal

---

## 5. ปัญหาเกี่ยวกับ CSS, Typography, Borders และการแสดงผล

### 🔴 ปัญหาที่ 5.1: เกิด Horizontal Scrollbar บนอุปกรณ์พกพา
- **สาเหตุ:** แอนิเมชัน `x: 100` หรือ Element ที่มีความกว้างคงที่ล้นหน้าจอ
- **วิธีแก้:** ตรวจสอบว่าใน `index.html` หรือ Root Container มีคลาส `overflow-x-hidden` กำกับไว้เสมอ

### 🔴 ปัญหาที่ 5.2: สไตล์ Scrollbar ไม่เป็นสีม่วงตามธีมแบรนด์ (Rule 11)
- **วิธีแก้:** ตรวจสอบว่าใน `src/index.css` มีการกำหนด `::-webkit-scrollbar-thumb` เป็น `rgba(139, 92, 246, 0.35)` และ `scrollbar-color` สำหรับ Firefox

### 🔴 ปัญหาที่ 5.3: ตรวจพบ `border-l-4` หรือเส้นขอบหนาไม่เท่ากัน (Rule 16)
- **วิธีแก้:** ห้ามใช้ `border-l-4` หรือเส้นขอบเฉพาะด้าน ทุก Card/Container ต้องใช้เส้นขอบ 1px รอบด้านอย่างสม่ำเสมอ (`border border-[#272A33]`)

### 🔴 ปัญหาที่ 5.4: ข้อความอ่านยากเมื่ออยู่บน WebGL Background
- **วิธีแก้:** ใช้ Utility Classes กลางใน `src/index.css`:
  - `.text-title-readable` สำหรับหัวข้อ
  - `.text-secondary-readable` สำหรับเนื้อหาหลัก
  - `.text-muted-readable` สำหรับข้อความย่อย

---

## 6. ปัญหาเกี่ยวกับ Modal Dialog & Event Bubbling

### 🔴 ปัญหาที่ 6.1: ป๊อปอัป Modal ปิดตัวเองเมื่อคลิกเนื้อหาข้างใน
- **สาเหตุ:** Event `onClick` จากเนื้อหาข้างในลอยขึ้นไปกระทบ Outer Backdrop (Event Bubbling)
- **วิธีแก้:** ใส่ `onClick={(e) => e.stopPropagation()}` ที่กล่องเนื้อหาภายใน (Inner Content Box) ตามกฎข้อ 13 ของ `REFACTORCODE.md`

### 🔴 ปัญหาที่ 6.2: การควบคุมการเข้าถึงด้วยคีย์บอร์ด (Accessibility)
- **วิธีแก้:** ใน `ProjectModal.jsx` ต้องมี `useEffect` ดักจับปุ่ม `Escape` และมี `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-project-title"` เสมอ

---

## 7. ปัญหาเกี่ยวกับข้อมูลโปรเจกต์ ลิงก์ และการโหลดรูปภาพ (Image Optimization)

### 🔴 ปัญหาที่ 7.1: ปุ่ม Live Demo ไม่แสดงแม้มี URL
- **สาเหตุ:** `projects.js` กำหนดคีย์ `liveUrl` แต่คอมโพเนนต์ตรวจสอบเฉพาะ `project.demoUrl`
- **วิธีแก้:** ใช้เงื่อนไข `(project.demoUrl || project.liveUrl)` ในทั้ง `Projects.jsx`, `ProjectCard.jsx`, และ `ProjectModal.jsx`

### 🔴 ปัญหาที่ 7.2: รูปภาพโหลดช้าหรือไฟล์ PNG มีขนาดใหญ่เกินไป
- **สาเหตุ:** ไฟล์ภาพต้นฉบับไม่ได้ถูกบีบอัด หรือไม่ได้แปลงเป็น WebP
- **วิธีแก้:** รันคำสั่งแปลงไฟล์อัตโนมัติด้วย `sharp`:
  ```bash
  npm run optimize:images
  ```
  สคริปต์ [scripts/convert-webp.js](file:///c:/xampp/htdocs/Resume/scripts/convert-webp.js) จะสแกนและแปลงภาพ PNG ใน `public/projects/` เป็น `.webp` คุณภาพสูงและประหยัดพื้นที่ลง 70-90% ทันที

### 🔴 ปัญหาที่ 7.3: แอนิเมชันเมาส์ GlowCursor เปลืองทรัพยากรบนมือถือ
- **สาเหตุ:** หน้าจอมือถือไม่มีตัวชี้เมาส์จริง
- **วิธีแก้:** ใน `GlowCursor.jsx` มีฟังก์ชัน `isTouchOrMobile()` ตรวจจับ `(hover: none) and (pointer: coarse)` หรือจอ `<= 768px` เพื่อข้ามการสร้าง WebGL Context และยกเลิก `requestAnimationFrame` ทันที พร้อม CSS `display: none !important;`

---

## 8. ปัญหาเกี่ยวกับการเชื่อมต่อ Supabase & Vercel Deployment

### 🔴 ปัญหาที่ 8.1: Error: `new row violates row-level security policy`
- **สาเหตุ:** ตารางใน Supabase เปิดใช้งาน RLS แต่ยังไม่ได้อนุญาตให้ผู้ใช้ทั่วไปส่งข้อความ (`INSERT`)
- **วิธีแก้:** ตรวจสอบสคริปต์ใน `database/schema.sql` และแจ้งผู้ใช้ให้นำสคริปต์นี้ไปรันบน Supabase SQL Editor:
  ```sql
  CREATE POLICY "Allow public insert contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);
  ```

### 🔴 ปัญหาที่ 8.2: หน้าเว็บ 404 เมื่อ Refresh บน Vercel
- **สาเหตุ:** ขาดการตั้งค่า Rewrites สำหรับ SPA Routing
- **วิธีแก้:** ตรวจสอบว่ามีไฟล์ [`vercel.json`](file:///c:/xampp/htdocs/Resume/vercel.json) อยู่ที่ Root:
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

---

## 9. ตาราง Checklist ตรวจสอบด่วนสำหรับ AI Agents (Quick Audit Checklist)

| ข้อที่ | รายการตรวจสอบ | วิธีการตรวจ |
|---|---|---|
| 1 | **Production Build** | รัน `npm run build` ต้องผ่าน 0 Errors / 0 Warnings |
| 2 | **Uniform Border (Rule 16)** | Grep `border-l-4` ใน `src/` ต้องเป็น 0 |
| 3 | **Modal Bubbling Guard (Rule 13)** | ตรวจสอบ `e.stopPropagation()` ใน `ProjectModal.jsx` |
| 4 | **External Link Security (Rule 14)** | ทุก `target="_blank"` ต้องมี `rel="noopener noreferrer"` |
| 5 | **Strict Equality (Rule 12)** | ห้ามใช้ `==` หรือ `!=` ให้ใช้ `===` และ `!==` |
| 6 | **Offline Assets (Rule 4)** | ห้ามมี URL CDN ภายนอกใน `index.html` หรือคอมโพเนนต์ |
| 7 | **Database Safety (Rule 10)** | ห้ามรัน SQL อัตโนมัติ จัดเตรียมใน `database/schema.sql` เท่านั้น |
| 8 | **Git Safety (Rule 11)** | ห้ามรัน `git commit` หรือ `git push` |
| 9 | **Key Stability** | ห้ามใช้ Array index เดี่ยวๆ เป็น key ให้ใช้ Stable ID หรือ Composite Key |
| 10 | **Canvas Accessibility** | ทุกพื้นหลัง Canvas ต้องใส่ `aria-hidden="true"` |

---

## 10. ลำดับคำสั่งตรวจสอบสถานะโปรเจกต์ (Diagnostic Commands)

```bash 
# 1. ทดสอบการรัน Development Server
npm run dev

# 2. ตรวจสอบและทดสอบการ Build ผลลัพธ์ Production
npm run build

# 3. ล้างแคชกรณี Vite แสดงผลไม่อัปเดต
npm run dev -- --force
```

---

## 11. คู่มือการจัดการและดีบักระบบ 2 ภาษา (Bilingual & i18n Troubleshooting)

### 🔴 ปัญหาที่ 11.1: เพิ่มข้อความใหม่แล้วไม่แสดงผลหรือขึ้น Key แทน
- **สาเหตุ:** ไม่ได้ใส่ key ใน [`src/data/translations.js`](file:///c:/xampp/htdocs/Resume/src/data/translations.js) ทั้งฝั่ง `th` และ `en`
- **วิธีแก้:** เพิ่มคู่ Key-Value ให้ตรงกันทั้งสองภาษา เช่น:
  ```javascript
  export const translations = {
    th: { 'feature.new': 'คุณสมบัติใหม่' },
    en: { 'feature.new': 'New Feature' }
  };
  ```

### 🔴 ปัญหาที่ 11.2: ข้อมูลใน `src/data/` แสดงผลเป็น `[object Object]`
- **สาเหตุ:** ฟิลด์ข้อมูลถูกแปลงเป็น `{ th: '...', en: '...' }` แต่คอมโพเนนต์เรียกใช้ตัวแปรตรงๆ โดยไม่ผ่านตัวช่วยแปลงภาษา
- **วิธีแก้:** ใช้ฟังก์ชัน Helper `getLocalized` หรือดึงตาม `language`:
  ```javascript
  const { language } = useLanguage();
  const getLocalized = (obj) => typeof obj === 'object' && obj !== null ? (obj[language] || obj.th || '') : obj;
  ```

### 🔴 ปัญหาที่ 11.3: ข้อความภาษาอังกฤษใช้ศัพท์ยากเกินไป (Non-Beginner-Friendly Vocabulary)
- **สาเหตุ:** มีการใช้คำศัพท์เทคนิคขั้นสูงหรือศัพท์เชิงวิชาการ (Overcomplicated Academic Jargon) ทำให้ผู้เริ่มต้นอ่านทำความเข้าใจได้ยาก
- **วิธีแก้:** ตรวจสอบและแทนที่ด้วยคำศัพท์พื้นฐาน (Beginner-Friendly Basic English) ที่กระชับและตรงไปตรงมา:
  | คำศัพท์เดิมที่ซับซ้อน | คำศัพท์พื้นฐานที่แนะนำ (Beginner-Friendly) |
  |---|---|
  | `Mitigate emergent environmental hazards` | `Handle kitchen fires and challenges` |
  | `Procedural bouncy locomotion` | `Bouncy animation and walking movement` |
  | `Institutional-grade quantitative intelligence` | `Real-time portfolio tracking and profit calculation` |
  | `Stateless JWT enforcement with automated scanner` | `Secure login with JWT and automatic safety scanner` |
  | `Phonetic engine with automated filler-word truncation` | `Speech recognition that understands natural speaking` |
  | `High-stakes state banquet` | `Special banquet event` |

### 🔴 ปัญหาที่ 11.4: มาตรฐานปุ่ม RESUME และตัวสลับภาษาบน Navbar
- **ข้อกำหนด:** 
  1. ปุ่มดาวน์โหลดเรซูเม่บน Navbar ให้แสดงผลคำว่า **`RESUME`** ตลอดเวลาทั้งภาษาไทยและอังกฤษ เพื่อความเป็นสากลและตรงกับแบรนด์
  2. ตัวสลับภาษา `[ TH | EN ]` ต้องใช้ดีไซน์เส้นขอบโปร่งแสง `border border-[#8B5CF6]/40` และไม่มีแสงฟุ้ง (No Bloom Shadow) เพื่อความสบายตา คลีน และกลมกลืนกับปุ่ม RESUME


