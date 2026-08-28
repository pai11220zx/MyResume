# ADR 0001: สถาปัตยกรรม Single Page Application (SPA) ร่วมกับ Animated Modal สำหรับ Project Details

## สถานะ (Status)
**Approved** (เห็นชอบแล้ว)

## บริบท (Context)
เว็บไซต์ Developer Portfolio ต้องการแสดงข้อมูล 11 ส่วนอย่างต่อเนื่อง และมีเนื้อหารายละเอียดของผลงานโปรเจกต์เชิงลึก (เช่น ปัญหา, วิธีแก้ไข, สถาปัตยกรรม และสิ่งที่ได้เรียนรู้) โดยต้องการให้ผู้เข้าชมเว็บไซต์ (Recruiters และ Tech Leads) ได้รับประสบการณ์ที่ลื่นไหล รวดเร็ว และไม่มีการโหลดหน้าใหม่

## การตัดสินใจ (Decision)
เราตัดสินใจใช้สถาปัตยกรรม **Single Page Application (SPA)** โดย:
1. รวม Section ทั้ง 11 ส่วนไว้ในหน้าเดียว (`Home.jsx`) และใช้ Smooth Scroll Navigation
2. ใช้ **Animated Modal (Framer Motion)** สำหรับเปิดแสดงรายละเอียดเชิงลึกของโปรเจกต์ (Project Detail Modal) เมื่อผู้ใช้คลิกการ์ดผลงาน

## ผลลัพธ์และข้อดี (Consequences)
- **ข้อดี:**
  - ประสิทธิภาพการตอบสนองเร็วที่สุด (Instant UI Feedback)
  - ไม่เกิดการกระตุกหรือสะดุดจากการโหลดหน้าใหม่
  - การเคลื่อนไหวของ Modal เข้ากันได้กับ Animation System ของ Framer Motion
- **ข้อพิจารณา:**
  - ต้องจัดการ Event การปิด Modal (เช่น คลิกพื้นหลัง Backdrop หรือกดปุ่ม Escape) อย่างรัดกุม
