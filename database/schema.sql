-- ============================================================
-- SQL Schema for Developer Portfolio
-- Table: contact_messages (ตารางบันทึกข้อความจาก Contact Form)
-- รองรับทั้ง pgAdmin 4 (Local PostgreSQL) และ Supabase Cloud
-- ============================================================

-- 1. สร้างตาราง contact_messages
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. เปิดใช้งาน Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- 3. ลบ Policy เดิมออกก่อน (ถ้ามี) เพื่อป้องกันการสร้างซ้ำ
DROP POLICY IF EXISTS "Allow public insert messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow public select messages" ON contact_messages;

-- 4. กำหนดสิทธิ์ให้ผู้ใช้ทั่วไป (Public / Anon) สามารถกดส่งข้อความได้ (INSERT)
CREATE POLICY "Allow public insert messages"
ON contact_messages
FOR INSERT
TO public
WITH CHECK (true);

-- 5. กำหนดสิทธิ์ให้อ่านข้อมูลข้อความได้ (SELECT)
CREATE POLICY "Allow public select messages"
ON contact_messages
FOR SELECT
TO public
USING (true);
