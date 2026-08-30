-- ============================================================
-- SQL Schema for Developer Portfolio
-- Table: contact_messages (ตารางบันทึกข้อความจาก Contact Form)
-- รองรับ: pgAdmin 4 (Local PostgreSQL) และ Supabase Cloud 100%
-- ============================================================

-- 1. เปิดใช้งาน Extension สำหรับสร้าง UUID (จำเป็นสำหรับ pgAdmin 4 / PostgreSQL)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. สร้างตาราง contact_messages
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) DEFAULT 'General Inquiry',
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. สร้าง Index เพื่อเพิ่มความเร็วในการสืบค้นข้อมูลตามวันเวลาและอีเมล
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- ============================================================
-- สำหรับ pgAdmin 4 (Local PostgreSQL ทั่วไป)
-- ไม่จำเป็นต้องใช้ RLS Role ของ Supabase (anon/authenticated)
-- สามารถรันคำสั่งด้านล่างนี้ได้ทันที:
-- ============================================================
-- ให้สิทธิ์ผู้ใช้ทั่วไปสามารถเพิ่มข้อมูลลงตารางได้
GRANT ALL ON TABLE contact_messages TO public;

-- ============================================================
-- (เฉพาะกรณีรันบน Supabase Cloud เท่านั้น)
-- หากนำไปรันบน Supabase SQL Editor ให้คัดลอกบล็อกด้านล่างนี้ไปรันเพิ่ม:
-- ============================================================
/*
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public insert messages" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticated select messages" ON contact_messages;

CREATE POLICY "Allow public insert messages"
ON contact_messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Allow authenticated select messages"
ON contact_messages
FOR SELECT
TO authenticated
USING (true);
*/
