# 🐞 คู่มือการแก้ปัญหาและดีบักสำหรับ AI Agents (Debugging & Troubleshooting Guide)

เอกสารนี้รวบรวมแนวทางและวิธีแก้ไขปัญหาทางเทคนิคที่พบบ่อย (Common Issues & Solutions) สำหรับ **AI Agents และนักพัฒนา** ในการตรวจสอบและแก้ปัญหาโปรเจกต์ **Developer Portfolio Website** (React 18 + Tailwind CSS + Framer Motion + Vite + Vercel + Supabase)

---

## 🤖 1. ข้อกำหนดสำคัญสำหรับ AI Agents ในการดีบัก

1. **ห้ามรันคำสั่งแก้ Database โดยตรง (Rule 10):** หากพบปัญหาเรื่องตารางฐานข้อมูล ให้ตรวจสอบและแก้ไขในไฟล์ `database/schema.sql` เพื่อให้ผู้ใช้นำไปรันเองบน Supabase SQL Editor
2. **ห้ามรัน Git Push / Commit (Rule 11):** ให้ปล่อยให้ผู้ใช้เป็นผู้จัดการ Git เอง
3. **ตรวจสอบ Build เสมอ:** หลังแก้ไขโค้ด ให้สั่งรัน `npm run build` เพื่อพิสูจน์ว่าไม่มี Syntax Error หรือ Missing Import

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
- **วิธีแก้:** ใน [`SmoothScroll.jsx`](file:///c:/xampp/htdocs/Resume/src/components/common/SmoothScroll.jsx) มีการผูก Lenis instance ไว้ที่ `window.__lenisInstance` และใน [`ProjectModal.jsx`](file:///c:/xampp/htdocs/Resume/src/components/ProjectModal.jsx) จะสั่ง `lenis.stop()` เมื่อเปิด และ `lenis.start()` เมื่อปิด

### 🔴 ปัญหาที่ 4.2: การเลื่อนในกล่อง Modal ติดขัด
- **วิธีแก้:** กล่อง Modal ที่มี Scrollable Content ต้องใส่ `data-lenis-prevent` หรือให้ Lenis หยุดทำงานระหว่างเปิด Modal

---

## 5. ปัญหาเกี่ยวกับ CSS, Borders และการแสดงผล

### 🔴 ปัญหาที่ 5.1: เกิด Horizontal Scrollbar บนอุปกรณ์พกพา
- **สาเหตุ:** แอนิเมชัน `x: 100` หรือ Element ที่มีความกว้างคงที่ล้นหน้าจอ
- **วิธีแก้:** ตรวจสอบว่าใน `index.html` หรือ Root Container มีคลาส `overflow-x-hidden` กำกับไว้เสมอ

### 🔴 ปัญหาที่ 5.2: สไตล์ Scrollbar ไม่เป็นสีม่วงตามธีมแบรนด์ (Rule 11)
- **วิธีแก้:** ตรวจสอบว่าใน `src/index.css` มีการกำหนด `::-webkit-scrollbar-thumb` เป็น `rgba(139, 92, 246, 0.35)` และ `scrollbar-color` สำหรับ Firefox

### 🔴 ปัญหาที่ 5.3: ตรวจพบ `border-l-4` หรือเส้นขอบหนาไม่เท่ากัน (Rule 16)
- **วิธีแก้:** ห้ามใช้ `border-l-4` หรือเส้นขอบเฉพาะด้าน ทุก Card/Container ต้องใช้เส้นขอบ 1px รอบด้านอย่างสม่ำเสมอ (`border border-[#272A33]`)

---

## 6. ปัญหาเกี่ยวกับ Modal Dialog & Event Bubbling

### 🔴 ปัญหาที่ 6.1: ป๊อปอัป Modal ปิดตัวเองเมื่อคลิกเนื้อหาข้างใน
- **สาเหตุ:** Event `onClick` จากเนื้อหาข้างในลอยขึ้นไปกระทบ Outer Backdrop (Event Bubbling)
- **วิธีแก้:** ใส่ `onClick={(e) => e.stopPropagation()}` ที่กล่องเนื้อหาภายใน (Inner Content Box) ตามกฎข้อ 13 ของ `REFACTORCODE.md`

### 🔴 ปัญหาที่ 6.2: การควบคุมการเข้าถึงด้วยคีย์บอร์ด (Accessibility)
- **วิธีแก้:** ใน `ProjectModal.jsx` ต้องมี `useEffect` ดักจับปุ่ม `Escape` และมี `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-project-title"` เสมอ

---

## 7. ปัญหาเกี่ยวกับข้อมูลโปรเจกต์ & ลิงก์

### 🔴 ปัญหาที่ 7.1: ปุ่ม Live Demo ไม่แสดงแม้มี URL
- **สาเหตุ:** `projects.js` กำหนดคีย์ `liveUrl` แต่คอมโพเนนต์ตรวจสอบเฉพาะ `project.demoUrl`
- **วิธีแก้:** ใช้เงื่อนไข `(project.demoUrl || project.liveUrl)` ในทั้ง `Projects.jsx` และ `ProjectModal.jsx`

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
