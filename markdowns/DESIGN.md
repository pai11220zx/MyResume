# 🎨 ระบบการออกแบบ (Design System & Guidelines)

เอกสารนี้ระบุมาตรฐานด้านภาพ (Visual Design), ชุดสี (Color Palette), Typography, Spacing, Animation Principles, โครงสร้าง Section มาตรฐาน และ Accessibility สำหรับโปรเจกต์ **Developer Portfolio Website**

---

## 1. ทิศทางการออกแบบ (Design Direction)

- **สไตล์หลัก:** **Modern Developer Portfolio & Minimalist Editorial**
- **ความรู้สึกโดยรวม (Vibe):** Modern + Clean + Professional + Interactive + Developer-focused
- **ธีมหลัก:** **Dark Theme** ผสานฉากหลัง WebGL Dynamic Shaders (`DarkVeil` + `GlowCursor`) ให้ความสว่าง นุ่มนวล ลึกลับ และสบายตา

---

## 2. ชุดสีและ Color Tokens (Color Palette)

โครงสร้างชุดสีหลักที่กำหนดไว้สำหรับโปรเจกต์:

| Token Name | Hex / Class Code | คำอธิบายการใช้งาน |
|---|---|---|
| **Background WebGL** | `#05060A` / `#07090E` | พื้นหลังสีมืดสนิทที่รองรับ WebGL Canvas |
| **Surface / Card** | `#171A21` / `bg-[#171A21]/70` | สีพื้นหลังของการ์ด, กล่องข้อความ, Glassmorphic Container |
| **Surface Hover** | `#1E222D` / `hover:bg-[#1E222D]/80` | สีพื้นหลังการ์ดเมื่อนำเมาส์ไปชี้ (Hover State) |
| **Primary Text** | `#FFFFFF` (`.text-title-readable`) | สีข้อความหลัก หัวข้อ (High Contrast Text) |
| **Secondary Text** | `#E2E8F0` (`.text-secondary-readable`) | สีข้อความรอง รายละเอียด คำอธิบายย่อยที่อ่านง่าย |
| **Muted Text** | `#94A3B8` / `#CBD5E1` (`.text-muted-readable`) | สีข้อความกำกับย่อย ป้ายบอกสถานะ และ Subtitle |
| **Accent / Brand** | `#8B5CF6` | สีไฮไลต์ม่วง (Purple/Violet), ปุ่ม CTA, ไอคอนเด่น, ลิงก์ |
| **Accent Glow** | `rgba(139, 92, 246, 0.15)` | แสงฟุ้งรอบปุ่มหรือการ์ดเมื่อ Hover |
| **Border Standard** | `#272A33` / `#272A33/40` | เส้นขอบการ์ดและเส้นคั่นแบ่ง Section (Subtle Border) |

> 📌 **กฎการใช้เส้นขอบ (Uniform Border Standard):**  
> ห้ามใช้เส้นขอบหนาเฉพาะฝั่งใดฝั่งหนึ่ง เช่น `border-l-4` บน Callout/Card ให้ใช้เส้นขอบรอบด้านแบบสม่ำเสมอ (`border border-[#272A33]`) ร่วมกับ `rounded-xl` เพื่อความสะอาดตา

---

## 3. Developer Visual Elements & Reusable Components

เพื่อรักษา Visual Consistency และความเป็นระเบียบเรียบร้อย:
- **`IconBox.jsx`:** กล่องไอคอนสีม่วงโปร่งแสงมาตรฐาน (`bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#8B5CF6]`)
- **`Badge.jsx`:** ป้ายกำกับเทคโนโลยีและสถานะโปรเจกต์
- **`Toast.jsx`:** กล่องแจ้งเตือนสถานะการคัดลอกหรือแจ้งเตือนระบบแบบ Portal
- **สัญลักษณ์ Syntax ตกแต่ง:** `< / >`, `{ }`, `=>` (ใช้เป็น Visual Decoration เล็กน้อยอย่างพอดี ห้ามใส่มากจนรก)

---

## 4. ระบบแอนิเมชันและการเลื่อนหน้าจอ (Animation & Physics Smooth Scroll)

- **Lenis Smooth Scroll (`SmoothScroll.jsx`):** ขับเคลื่อนการเลื่อนหน้าจอด้วย Inertia Physics ที่นุ่มนวล พร้อมล็อก Scrollbar อัตโนมัติเมื่อเปิด Modal
- **Framer Motion Micro-Interactions:**
  - **Micro Interactions (ปุ่ม, ไอคอน, ลิงก์):** `0.15s – 0.25s`
  - **Normal Transitions (Modal, Toast, Drawer):** `0.3s – 0.5s`
  - **Hover Effects:** ขยายขนาดเล็กน้อย (`scale: 1.02`), มีแสงเงา Glow อ่อนๆ
- **Content-First Scroll:** หลีกเลี่ยง Fade-in บดบังสายตา เพื่อให้ผู้ใช้เข้าถึงเนื้อหาได้ทันที

---

## 5. การออกแบบที่รองรับทุกอุปกรณ์ (Responsive Design: Mobile-First)

| Breakpoint | ขนาดหน้าจอ | พฤติกรรมของ UI |
|---|---|---|
| **Mobile (`< 768px`)** | สมาร์ตโฟน | Navigation ยุบเป็น Mobile Drawer, แสดงผล 1 คอลัมน์, ปิด WebGL GlowCursor เพื่อประหยัดแบตเตอรี่ |
| **Tablet (`768px - 1024px`)** | แท็บเล็ต | กริดแสดงผล 2 คอลัมน์, จัดระยะห่างให้อ่านสบายตา |
| **Desktop (`> 1024px`)** | เดสก์ท็อป | เมนูเต็มรูปแบบ (Full Nav with Resume button), กริดแสดงผล 2-3 คอลัมน์, มี Interactive Shader Effects ครบถ้วน |

---

## 6. การเข้าถึงและการรองรับการเคลื่อนไหวลดลง (Accessibility & Reduced Motion)

- **Semantic Elements:** ใช้ `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- **Contrast Ratio:** รักษาความต่างของสีตัวอักษรและพื้นหลังให้อ่านง่ายตามเกณฑ์ WCAG AA+
- **Alt Text & ARIA:** รูปภาพและไอคอนทั้งหมดต้องมี `alt` หรือ `aria-label`
- **Keyboard Navigation:** รองรับการกด `Tab` โดยมี Focus Ring (`focus-visible:ring-2 focus-visible:ring-[#8B5CF6]`) ชัดเจน ห้ามปิด `outline` โดยไม่มีสไตล์ทดแทน
- **Prefers Reduced Motion:** หากผู้ใช้ตั้งค่าลดการเคลื่อนไหว ระบบจะปิด Animation ที่ซับซ้อนทันที

---

## 7. 🏛️ มาตรฐานโครงสร้าง Section และพื้นหลังโปร่งแสง (Standard Section Architecture & Frameless Canvas)

เพื่อให้การแสดงผลของเว็บไซต์มีความเป็นเอกภาพและสวยงามต่อเนื่อง ทุก Section หลักในเว็บไซต์ต้องปฏิบัติตามมาตรฐานดังต่อไปนี้:

### 📐 กฎโครงสร้าง Section Container:
1. **คลาสมาตรฐานของ Section Wrapper:**  
   ต้องใช้คลาส:  
   ```jsx
   className="py-24 relative z-10 border-t border-[#272A33]/40"
   ```
2. **คลาสมาตรฐานของ Inner Container:**  
   ต้องใช้คลาส:  
   ```jsx
   className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
   ```
3. **การใช้งาน Section Heading:**  
   ต้องใช้คอมโพเนนต์ [`SectionHeading.jsx`](file:///c:/xampp/htdocs/Resume/src/components/common/SectionHeading.jsx) ในการแสดงหัวข้อหลัก:
   ```jsx
   <SectionHeading
     tag={t('projects.tag')}           // เช่น "Projects & Applications"
     title={t('projects.title')}       // เช่น "Projects & Applications"
     description={t('projects.subtitle')} // เช่น "Software projects, web applications, developer tools, and games I have created."
   />
   ```

### 🚫 กฎพื้นหลังโปร่งแสง (No Solid Background Rule):
- **ห้ามใส่สีพื้นหลังทึบที่ตัว `<section>` เด็ดขาด** (เช่น ห้ามใส่ `bg-[#0F1117]`, `bg-[#171A21]`, `bg-black` บนแท็ก `<section>`)
- ตัว Section ต้องโปร่งแสง (Transparent) เพื่อให้ฉากหลัง WebGL Shader (`DarkVeil` และ `GlowCursor`) สามารถเรนเดอร์ทะลุผ่านได้อย่างเรียบเนียน ไร้รอยต่อ และเป็น Frameless Canvas เดียวกันทั้งหน้าเว็บ

---

## 8. ❓ กฎการสอบถามความชัดเจนก่อนเริ่มงาน (Clarification Mandate: Ask Before Proceeding When Uncertain)

> [!IMPORTANT]
> **กฎเหล็กสำหรับ AI Agents และนักพัฒนา (Clarification Protocol):**  
> หากมีข้อสงสัย ไม่แน่ใจในข้อกำหนด ความต้องการของดีไซน์ โครงสร้างเลย์เอาต์ หรือตำแหน่งของคอนเทนต์ **ห้ามคาดเดาหรือตัดสินใจแทนผู้ใช้เองโดยพลการ ให้หยุดและสอบถามผู้ใช้เพื่อความชัดเจนก่อนเริ่มลงมือปฏิบัติการเสมอ**

---

## 9. 🪟 กฎการจัดวางเนื้อหาแบบไร้กรอบและไร้พื้นหลังทึบ (Frameless Minimalist Content Layout Rule)

เพื่อให้เว็บไซต์มีความโปร่งตา เรียบหรู และทันสมัยระดับ Modern Developer Portfolio:

1. **ห้ามใส่กล่องพื้นหลังสีเทาทึบและการ์ดกรอบหนาซ้ำซ้อน:**  
   - ห้ามใส่ `bg-[#0F1117]`, `bg-[#171A21]` หรือกรอบกล่อง `border border-[#272A33]/60` ล้อมรอบรายการข้อมูลหรือไทม์ไลน์ใน Section
   - ให้ปล่อยเนื้อหาลอยอยู่บนฉากหลังโปร่งแสงของ WebGL Canvas อย่างเป็นธรรมชาติ
2. **การจัดระเบียบโครงสร้างเนื้อหา (Content Structure):**  
   - ใช้เพียงเส้นแบ่งเนื้อหาบางๆ (`border-b border-[#272A33]/30`), ระยะห่าง Spacing ที่ลงตัว (`space-y-4` หรือ `py-4`), ไอคอนสื่อความหมาย, และ Semantic Badges ในการบอกลำดับขั้น
3. **การนำไปปฏิบัติใช้ทั่วทั้งโปรเจกต์:**  
   - ทุก Section (`Experience & Journey`, `Activities & Certificates`, `Education`, `GitHub Activity`, `Contact`, `About`) ต้องใช้รูปแบบ Frameless Minimalist เหมือนกันทั้งหมด 100%
