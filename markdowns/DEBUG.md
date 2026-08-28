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
- **สาเหตุ:** Third-party Libraries (React, Framer Motion, Supabase JS) ถูกรวมไว้ใน Single Bundle ก้อนเดียว
- **วิธีแก้:** ตรวจสอบและตั้งค่า `manualChunks` ใน [`vite.config.js`](file:///c:/xampp/htdocs/Resume/vite.config.js):
  ```javascript
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'supabase-vendor': ['@supabase/supabase-js'],
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

---

## 3. ปัญหาเกี่ยวกับ CSS, Scrollbar และการแสดงผล

### 🔴 ปัญหาที่ 3.1: เกิด Horizontal Scrollbar บนอุปกรณ์พกพา
- **สาเหตุ:** แอนิเมชัน `x: 100` หรือ Element ที่มีความกว้างคงที่ล้นหน้าจอ
- **วิธีแก้:** ตรวจสอบว่าใน `index.html` หรือ Root Container มีคลาส `overflow-x-hidden` กำกับไว้เสมอ

### 🔴 ปัญหาที่ 3.2: สไตล์ Scrollbar ไม่เป็นสีม่วงตามธีมแบรนด์ (Rule 11)
- **วิธีแก้:** ตรวจสอบว่าใน `src/index.css` มีการกำหนด `::-webkit-scrollbar-thumb` เป็น `rgba(139, 92, 246, 0.35)` และ `scrollbar-color` สำหรับ Firefox

---

## 4. ปัญหาเกี่ยวกับ Modal Dialog & Framer Motion

### 🔴 ปัญหาที่ 4.1: ป๊อปอัป Modal ปิดตัวเองเมื่อคลิกเนื้อหาข้างใน
- **สาเหตุ:** Event `onClick` จากเนื้อหาข้างในลอยขึ้นไปกระทบ Outer Backdrop (Event Bubbling)
- **วิธีแก้:** ใส่ `onClick={(e) => e.stopPropagation()}` ที่กล่องเนื้อหาภายใน (Inner Content Box) ตามกฎข้อ 13 ของ `REFACTORCODE.md`

### 🔴 ปัญหาที่ 4.2: การควบคุมการเข้าถึงด้วยคีย์บอร์ด (Accessibility)
- **วิธีแก้:** ใน `ProjectModal.jsx` ต้องมี `useEffect` ดักจับปุ่ม `Escape` และมี `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-project-title"` เสมอ

---

## 5. ปัญหาเกี่ยวกับการเชื่อมต่อ Supabase & Vercel Deployment

### 🔴 ปัญหาที่ 5.1: Error: `new row violates row-level security policy`
- **สาเหตุ:** ตารางใน Supabase เปิดใช้งาน RLS แต่ยังไม่ได้อนุญาตให้ผู้ใช้ทั่วไปส่งข้อความ (`INSERT`)
- **วิธีแก้:** ตรวจสอบสคริปต์ใน `database/schema.sql` และแจ้งผู้ใช้ให้นำสคริปต์นี้ไปรันบน Supabase SQL Editor:
  ```sql
  CREATE POLICY "Allow public insert contact messages"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);
  ```

### 🔴 ปัญหาที่ 5.2: หน้าเว็บ 404 เมื่อ Refresh บน Vercel
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

## 6. ลำดับคำสั่งตรวจสอบสถานะโปรเจกต์ (Diagnostic Commands)

```bash
# 1. ทดสอบการรัน Development Server
npm run dev

# 2. ตรวจสอบและทดสอบการ Build ผลลัพธ์ Production
npm run build

# 3. ล้างแคชกรณี Vite แสดงผลไม่อัปเดต
npm run dev -- --force
```
