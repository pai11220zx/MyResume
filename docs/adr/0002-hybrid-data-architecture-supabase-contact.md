# ADR 0002: สถาปัตยกรรมข้อมูลแบบ Hybrid (Static Data Layer + Supabase Contact Messages)

## สถานะ (Status)
**Approved** (เห็นชอบแล้ว)

## บริบท (Context)
เว็บไซต์ต้องการความเร็วในการโหลดสูงที่สุด (Zero-latency) สำหรับข้อมูลประวัติและผลงาน ขณะเดียวกันก็ต้องการระบบบันทึกข้อความจากแบบฟอร์มติดต่อ (Contact Form) ที่ปลอดภัยและสามารถดูข้อมูลย้อนหลังได้

## การตัดสินใจ (Decision)
เราตัดสินใจใช้สถาปัตยกรรมข้อมูลแบบ **Hybrid**:
1. **Static Data Layer (`src/data/*.js`):** เก็บข้อมูล Projects, Skills, Experience, Education ในรูปแบบ JavaScript Object/Array เพื่อให้ Vite รวมเข้ากับ Bundle และเรนเดอร์ได้ทันทีโดยไม่ต้องรอ Query ฐานข้อมูล
2. **Dynamic Database Layer (Supabase PostgreSQL):** ใช้สำหรับจัดเก็บบันทึกข้อความติดต่อจากแบบฟอร์ม (`contact_messages`) ผ่าน Supabase JavaScript Client (`@supabase/supabase-js`)
3. **Database Security & Simplicity:**
   - ใช้ตารางเดี่ยวที่มีโครงสร้างและชื่อฟิลด์ภาษาอังกฤษที่เข้าใจง่าย (`contact_messages`: `id`, `name`, `email`, `subject`, `message`, `created_at`)
   - เปิดใช้งาน **Row Level Security (RLS)** อนุญาตเฉพาะการ `INSERT` แบบ Anonymous

## ผลลัพธ์และข้อดี (Consequences)
- **ข้อดี:**
  - ความเร็วในการโหลดหน้าแรกระดับสูงสุด (Lighthouse Performance Score สูง)
  - ไม่มีความเสี่ยงเรื่อง Database Connection Pool เต็มในหน้าแรก
  - ข้อความติดต่อถูกบันทึกอย่างปลอดภัยใน PostgreSQL บนระบบคลาวด์
