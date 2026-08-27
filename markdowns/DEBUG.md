# 🐞 คู่มือการแก้ปัญหาและดีบัก (Debugging & Troubleshooting Guide)

เอกสารนี้รวบรวมแนวทางและวิธีแก้ไขปัญหาทางเทคนิคที่พบบ่อย (Common Issues & Solutions) สำหรับโปรเจกต์ **Developer Portfolio Website** (React + Tailwind CSS + Framer Motion + Vite)

---

## 1. ปัญหาเกี่ยวกับสภาพแวดล้อมและการ Build (Vite & npm)

### 🔴 ปัญหาที่ 1.1: พอร์ตชนกันหรือเซิร์ฟเวอร์ไม่เริ่มทำงาน (Port Already in Use)
- **อาการ:** รัน `npm run dev` แล้วเกิดข้อผิดพลาดพอร์ต `5173` ถูกใช้งานอยู่
- **วิธีแก้:**
  1. ระบุพอร์ตใหม่ใน `package.json` หรือ `vite.config.js` เช่น `--port 3000`
  2. หรือปิดโปรเซสเดิมที่ค้างอยู่ผ่าน Task Manager / PowerShell

### 🔴 ปัญหาที่ 1.2: ค้างแคชของ Vite ทำให้โค้ดไม่อัปเดต (Stale Cache)
- **อาการ:** แก้ไขโค้ดแล้วแต่หน้าเว็บไม่แสดงผลตามที่เปลี่ยน
- **วิธีแก้:**
  1. สั่งรัน dev server พร้อมล้างแคช:
     ```bash
     npm run dev -- --force
     ```
  2. หรือลบโฟลเดอร์ `node_modules/.vite` แล้วรันใหม่

### 🔴 ปัญหาที่ 1.3: Build Production ล้มเหลว (Build Failed)
- **อาการ:** รัน `npm run build` แล้วฟ้อง Error จาก Rollup หรือโมดูลไม่พบ
- **วิธีแก้:**
  1. ตรวจสอบการ Import ชื่อไฟล์ (ตัวพิมพ์เล็ก-พิมพ์ใหญ่ Case-sensitivity บน Linux/Windows)
  2. ตรวจสอบว่ามีตัวแปรหรือคอมโพเนนต์ที่ไม่ได้ประกาศ (`undefined variable`) หรือไม่

---

## 2. ปัญหาเกี่ยวกับสไตล์และการแสดงผล (Tailwind CSS)

### 🔴 ปัญหาที่ 2.1: คลาส Tailwind CSS ไม่ทำงาน
- **สาเหตุ:** พาธไฟล์ใน `tailwind.config.js` ไม่ครอบคลุมไฟล์คอมโพเนนต์
- **วิธีแก้:** ตรวจสอบส่วน `content` ใน `tailwind.config.js` ให้แน่ใจว่าครอบคลุมโฟลเดอร์ `src`:
  ```javascript
  // tailwind.config.js
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // ...
  }
  ```

### 🔴 ปัญหาที่ 2.2: เกิด Scrollbar แนวนอนบนจอมือถือ (Horizontal Overflow Bug)
- **สาเหตุ:** มี Element หรือ Animation ที่เคลื่อนที่หลุดออกนอกขอบจอ (เช่น `x: 100`) โดยไม่มี Container ควบคุม
- **วิธีแก้:**
  1. เพิ่มคลาส `overflow-x-hidden` ในระดับ Root Container หรือ Section นั้นๆ
  2. หลีกเลี่ยงการกำหนดความกว้างแบบตายตัว (Fixed width เช่น `w-[500px]`) บนจอมือถือ ให้ใช้ `w-full max-w-lg` แทน

---

## 3. ปัญหาเกี่ยวกับแอนิเมชัน (Framer Motion)

### 🔴 ปัญหาที่ 3.1: แอนิเมชันทำให้เกิดการกระตุกหรือ Layout Shift
- **สาเหตุ:** การ Animate ความกว้าง/ความสูง (`width`, `height`, `top`, `left`) ซึ่งบังคับให้เบราว์เซอร์ทำการ Re-layout
- **วิธีแก้:** ใช้เฉพาะคุณสมบัติที่ใช้ GPU Acceleration เช่น `transform` (`x`, `y`, `scale`, `rotate`) และ `opacity` เสมอ:
  ```jsx
  // ❌ แย่: ทำให้ Layout กระตุก
  <motion.div animate={{ left: 100, height: 200 }} />

  // ✅ ดี: ลื่นไหล ไม่กระตุก
  <motion.div animate={{ x: 100, scale: 1.1, opacity: 1 }} />
  ```

### 🔴 ปัญหาที่ 3.2: Animation ไม่หยุดเมื่อผู้ใช้เปิด Prefers-reduced-motion
- **วิธีแก้:** ตรวจสอบผ่าน Hook `useReducedMotion()` ของ Framer Motion:
  ```jsx
  import { useReducedMotion, motion } from "framer-motion";

  function Component() {
    const shouldReduceMotion = useReducedMotion();
    
    return (
      <motion.div 
        animate={shouldReduceMotion ? { opacity: 1 } : { x: 100, opacity: 1 }}
      />
    );
  }
  ```

---

## 4. ปัญหาเกี่ยวกับ React State & Rendering

### 🔴 ปัญหาที่ 4.1: Infinite Re-render Loop
- **สาเหตุ:** เรียกฟังก์ชันเซ็ต State ภายใน Function Body ของ Component โดยตรง หรือใส่ State เข้าไปใน Dependency Array ของ `useEffect` ที่มีการอัปเดต State นั้น
- **วิธีแก้:**
  1. ย้ายการอัปเดต State เข้าไปใน Event Handler (เช่น `onClick`)
  2. ตรวจสอบ Dependency Array ของ `useEffect` ให้รัดกุม

---

## 5. รายการตรวจสอบก่อนส่งมอบงาน (Pre-launch Checklist)

- [ ] รัน `npm run build` ผ่านโดยไม่มีข้อผิดพลาด (Zero errors)
- [ ] ทดสอบ Responsive บน Chrome DevTools ครบทั้งขนาด Mobile (375px), Tablet (768px), Desktop (1280px)
- [ ] ลิงก์ภายนอกทั้งหมด (GitHub, LinkedIn, Demo) สามารถเปิดในแท็บใหม่ได้อย่างถูกต้อง
- [ ] ฟอร์มติดต่อมีระบบตรวจสอบความถูกต้อง และปุ่มไม่สามารถกดส่งซ้ำรัวๆ ได้
- [ ] รูปภาพทั้งหมดมี `alt` และแสดงผลได้อย่างสมบูรณ์
- [ ] แอนิเมชันทำงานราบรื่นและไม่ทำให้เนื้อหาอ่านยาก
