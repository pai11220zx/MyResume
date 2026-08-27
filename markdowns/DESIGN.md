# 🎨 ระบบการออกแบบ (Design System & Guidelines)

เอกสารนี้ระบุมาตรฐานด้านภาพ (Visual Design), ชุดสี (Color Palette), Typography, Spacing, Animation Principles และ Accessibility สำหรับโปรเจกต์ **Developer Portfolio Website** ตามข้อกำหนดใน [`PROJECT_SPEC.md.md`](file:///c:/xampp/htdocs/Resume/PROJECT_SPEC.md.md)

---

## 1. ทิศทางการออกแบบ (Design Direction)

- **สไตล์หลัก:** **Modern Developer Portfolio**
- **ความรู้สึกโดยรวม (Vibe):** Modern + Clean + Professional + Interactive + Developer-focused
- **ธีมหลัก:** **Dark Theme** เป็นธีมตั้งต้น เพื่อเน้นความคมชัดของ Code Elements, Accent Colors และความสบายตา

---

## 2. ชุดสีและ Color Tokens (Color Palette)

โครงสร้างชุดสีหลักที่กำหนดไว้สำหรับโปรเจกต์:

| Token Name | Hex Code | คำอธิบายการใช้งาน |
|---|---|---|
| **Background** | `#0F1117` | สีพื้นหลังหลักของเว็บไซต์ (Main Dark Background) |
| **Surface / Card** | `#171A21` | สีพื้นหลังของการ์ด, กล่องข้อความ, Container |
| **Surface Hover** | `#1E222D` | สีพื้นหลังการ์ดเมื่อนำเมาส์ไปชี้ (Hover State) |
| **Primary Text** | `#FFFFFF` | สีข้อความหลัก หัวข้อ (High Contrast Text) |
| **Secondary Text** | `#A1A1AA` | สีข้อความรอง รายละเอียด คำอธิบายย่อย |
| **Accent / Brand** | `#8B5CF6` | สีไฮไลต์ (Purple/Violet), ปุ่ม CTA, ไอคอนเด่น, ลิงก์ |
| **Accent Glow** | `rgba(139, 92, 246, 0.15)` | แสงฟุ้งรอบปุ่มหรือการ์ดเมื่อ Hover |
| **Border** | `#272A33` | เส้นขอบการ์ดและเส้นคั่น (Subtle Border) |

> 📌 **กฎการใช้เส้นขอบ (Uniform Border Standard):**  
> ห้ามใช้เส้นขอบหนาเฉพาะฝั่งใดฝั่งหนึ่ง เช่น `border-l-4` บน Callout/Card ให้ใช้เส้นขอบรอบด้านแบบสม่ำเสมอ (`border border-[#272A33]`) ร่วมกับ `rounded-xl` เพื่อความสะอาดตา

---

## 3. Developer Visual Elements

เพื่อสะท้อนอัตลักษณ์ของ Developer สามารถใช้องค์ประกอบทางสัญลักษณ์ต่อไปนี้เป็นของตกแต่ง:
- สัญลักษณ์ Syntax: `< / >`, `{ }`, `=>`
- โค้ดตกแต่ง: `console.log()`, `npm install`, `git commit`
- **ข้อพึงระวัง:** ใช้เป็น Visual Decoration เท่านั้น ห้ามใส่มากเกินไปจนทำให้หน้าเว็บดูรกหรือดูเหมือนเว็บสอนเขียนโค้ด

---

## 4. ระบบแอนิเมชัน (Animation System with Framer Motion)

แอนิเมชันต้องมีความลื่นไหล เป็นธรรมชาติ และช่วยส่งเสริมการอ่าน (Enhance UX) ไม่ทำให้ผู้ใช้เสียเวลารอ

### ⏱️ มาตรฐานระยะเวลา (Duration Guidelines):
- **Micro Interactions (ปุ่ม, ไอคอน, ลิงก์):** `0.15s – 0.25s`
- **Normal Transitions (การเปิด/ปิดเมนู, Modal):** `0.3s – 0.5s`
- **Section & Card Reveal (เมื่อ Scroll เข้ามา):** `0.5s – 0.8s`

### 🎭 รูปแบบ Animation ที่ใช้:
1. **Fade In & Slide Up:** ใช้กับ Hero Section, Section Headings และ Card Entrance
2. **Stagger Children:** การ์ดสกิล, การ์ดโปรเจกต์ และ Timeline Items จะทยอยแสดงผลทีละชิ้นตามลำดับ
3. **Card Hover Effect:** ขยายขนาดเล็กน้อย (`scale: 1.02`), มีแสงเงา Glow อ่อนๆ และไอคอนลูกศรขยับเล็กน้อย
4. **Smooth Scroll & Active Link Indicator:** แถบเนวิเกชันมีตัวบอกตำแหน่ง Section ที่กำลังอ่านอยู่

---

## 5. การออกแบบที่รองรับทุกอุปกรณ์ (Responsive Design: Mobile-First)

กำหนด Breakpoints และการปรับเลย์เอาต์ตามขนาดหน้าจอ:

| Breakpoint | ขนาดหน้าจอ | พฤติกรรมของ UI |
|---|---|---|
| **Mobile (`< 768px`)** | สมาร์ตโฟน | Navigation ยุบเป็น Hamburger Menu, แสดงผล 1 คอลัมน์ (Single Column), ลดขนาดฟอนต์และ Spacing |
| **Tablet (`768px - 1024px`)** | แท็บเล็ต | กริดแสดงผล 2 คอลัมน์, จัดระยะห่างให้อ่านสบายตา |
| **Desktop (`> 1024px`)** | เดสก์ท็อป | เมนูเต็มรูปแบบ (Full Nav with Resume button), กริดแสดงผล 2-3 คอลัมน์, มี Interactive Effects ครบถ้วน |

---

## 6. การเข้าถึงและการรองรับการเคลื่อนไหวลดลง (Accessibility & Reduced Motion)

- **Semantic Elements:** ใช้ `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Contrast Ratio:** รักษาความต่างของสีตัวอักษรและพื้นหลังให้อ่านง่ายตามเกณฑ์ WCAG
- **Alt Text:** รูปภาพและไอคอนทั้งหมดต้องมี `alt` หรือ `aria-label`
- **Keyboard Navigation:** รองรับการกด `Tab` โดยมี Focus Ring (`focus-visible:ring-2 focus-visible:ring-[#8B5CF6]`) ชัดเจน ห้ามปิด `outline` โดยไม่มีสไตล์ทดแทน
- **Prefers Reduced Motion:** หากผู้ใช้ตั้งค่าลดการเคลื่อนไหวในระบบปฏิบัติการ ระบบจะปิด Parallax/Animation ที่ซับซ้อน และเปลี่ยนเป็นการแสดงผลทันที เพื่อไม่ให้กระทบต่อสุขภาพของผู้ใช้งาน
