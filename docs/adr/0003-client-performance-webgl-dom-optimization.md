# ADR 0003: การเพิ่มประสิทธิภาพ WebGL Shaders, DOM Layer Compositing และ Frame Rate (60-120 FPS)

## สถานะ (Status)
**Approved** (เห็นชอบแล้ว)

## บริบท (Context)
โปรเจกต์มีการใช้งาน WebGL Shaders แบบเรียลไทม์ 2 ตัว (`DarkVeil` CPPN Neural Matrix และ `GlowCursor` Trail Shader) ร่วมกับ `DepthText` 3D Canvas Text และ `Lenis Smooth Scroll` ซึ่งเมื่อเปิดใช้งานบนหน้าจอความละเอียดสูง (2K/4K) หรือเครื่องที่มีการ์ดจอออนบอร์ด อาจทำให้เกิด GPU fill-rate saturation และอาการ Frame Drops หรือ Layout Thrashing ระหว่างการ Scroll

## การตัดสินใจ (Decision)
เราตัดสินใจปรับปรุงสถาปัตยกรรมประสิทธิภาพของระบบดังนี้:
1. **DarkVeil Resolution Scaling:** กำหนด `resolutionScale={0.6}` ลดภาระการคำนวณ GPU Fill-rate ลง 64% โดยยังคงความเนียนตาของคลื่นแสง Ambient
2. **GlowCursor Smart Sleep Engine:** ติดตั้งตัวตรวจจับความเงียบ (Smart Sleep) สั่งยกเลิก `requestAnimationFrame` เมื่อเมาส์หยุดนิ่งและแสงเรืองแสงเฟดดับสนิท (`fade <= 0.001`) และปลุก (Wakeup) ทันทีที่มี `pointermove`
3. **DepthText DOM Optimization:** ปรับลด 3D Layers เหลือ 16 เลเยอร์ และถอด Event Listener `scroll` ออก เพื่อป้องกัน Layout Thrashing ขณะเลื่อนหน้าจอ
4. **GPU Hardware Acceleration & Containment:** เพิ่มคลาส `.gpu-accelerated` และ `content-visibility: auto` สำหรับ Section ด้านล่าง

## ผลลัพธ์และข้อดี (Consequences)
- **ข้อดี:**
  - อัตราเฟรมเรตคงที่ 60–120 FPS บนทุกอุปกรณ์และทุกขนาดหน้าจอ
  - การใช้งาน CPU/GPU เป็น 0% เมื่อผู้ใช้อ่านเนื้อหาโดยไม่ขยับเมาส์
  - ประหยัดพลังงานแบตเตอรี่บนแล็ปท็อปและอุปกรณ์พกพา
- **ข้อพิจารณา:**
  - ต้องรักษาการซิงค์ Wakeup เมื่อมีการ Resize หรือขยับเมาส์อย่างแม่นยำ
