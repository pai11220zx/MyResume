# 🛡️ มาตรการความปลอดภัยของระบบ (Frontend & Cloud Application Security)

เอกสารนี้ระบุแนวทางและมาตรการด้านความปลอดภัย (Security Best Practices) สำหรับโปรเจกต์ **Developer Portfolio Website** ครอบคลุม Frontend, ระบบฐานข้อมูล **Supabase (PostgreSQL)** และการ Deploy บน **Vercel**

---

## 1. การป้องกันช่องโหว่ XSS (Cross-Site Scripting Prevention)

การโจมตีแบบ XSS เกิดจากการที่ผู้ไม่ประสงค์ดีแทรกโค้ดอันตราย (JavaScript) เข้ามาในหน้าเว็บ

### แนวทางปฏิบัติ:
- **ใช้กลไกของ React:** React มีระบบ Escape อักขระพิเศษใน JSX อัตโนมัติ จึงปลอดภัยจากการแทรกโค้ดทั่วไป
- **ข้อห้ามเด็ดขาด:** ห้ามใช้ `dangerouslySetInnerHTML` ในการแสดงผลข้อความหรือข้อมูลจากภายนอก หากจำเป็นต้อง Render Markdown หรือ HTML ให้ใช้ไลบรารี Sanitization เช่น `DOMPurify` ก่อนเสมอ
- **หลีกเลี่ยงการเข้าถึง DOM โดยตรง:** ไม่ใช้ `element.innerHTML` หรือ `document.write()`

```jsx
// ❌ ไม่ปลอดภัย (Bad Practice)
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ ปลอดภัย (Good Practice)
<div>{userInput}</div>
```

---

## 2. ความปลอดภัยของลิงก์ภายนอก (Secure External Links)

ลิงก์ที่เปิดไปยังเว็บไซต์ภายนอก (เช่น GitHub, LinkedIn, Live Demo) เสี่ยงต่อการถูกโจมตีแบบ Tabnabbing หรือการเข้าถึง `window.opener`

### แนวทางปฏิบัติ:
ทุกลิงก์ที่มี `target="_blank"` ต้องแนบคุณสมบัติ `rel="noopener noreferrer"` เสมอ:

```jsx
// ✅ ปลอดภัย
<a 
  href="https://github.com/pai11220zx" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-purple-400 hover:underline"
>
  GitHub Profile
</a>
```

---

## 3. การตรวจสอบข้อมูลในแบบฟอร์ม (Form Validation & Sanitization)

ในส่วนของแบบฟอร์มติดต่อ (Contact Form):
- **Client-Side Validation:**
  - ตรวจสอบรูปแบบอีเมล (Email format regex)
  - กำหนดความยาวต่ำสุดและสูงสุดของข้อความ (e.g. `minLength={3}`, `maxLength={1000}`)
  - ป้องกันการส่งฟอร์มเปล่า (`required`)
- **Rate Limiting / Spam Protection:**
  - เพิ่มปุ่ม Disable ชั่วคราวหลังกดส่ง (`isSubmitting`) เพื่อป้องกันการกดรัวซ้ำๆ (Double Submission Prevention)

```jsx
// ตัวอย่าง State ป้องกันการกดส่งซ้ำ
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;
  
  setIsSubmitting(true);
  try {
    const { error } = await supabase.from('contact_messages').insert([formData]);
    if (error) throw error;
    alert('ส่งข้อความสำเร็จ');
  } catch (err) {
    console.error('Error submitting form:', err);
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 4. ความปลอดภัยของฐานข้อมูล Supabase และ Row Level Security (RLS)

ฐานข้อมูล Supabase เป็น PostgreSQL บนระบบคลาวด์ ต้องปฏิบัติตามกฎความปลอดภัยดังนี้:

### 🔑 4.1 การจัดการ API Keys:
- **`anon public key`:** อนุญาตให้ใช้ในฝั่ง Client/Frontend ได้ เพื่อเรียกใช้ API ภายใต้สิทธิ์ RLS
- **`service_role key`:** ❌ **ห้ามนำมาใส่ในโค้ดฝั่ง Frontend หรือ Git เด็ดขาด** เพราะมีสิทธิ์ Bypass ทุกนโยบายความปลอดภัย

### 🛡️ 4.2 บังคับเปิดใช้งาน Row Level Security (RLS) ทุกตาราง:
ทุกตารางที่สร้างขึ้นใน Supabase ต้องเปิด RLS และกำหนดนโยบาย (Policies) ที่รัดกุมเสมอ:

```sql
-- 1. บังคับเปิด RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- 2. อนุญาตให้เฉพาะ Anonymous ส่งข้อความเข้าได้ (INSERT)
CREATE POLICY "Allow public insert"
ON contact_messages
FOR INSERT
TO anon
WITH CHECK (true);

-- 3. ไม่อนุญาตให้ Anonymous หรือ Public อ่านข้อความคนอื่น (SELECT)
-- (ข้อความติดต่อจะอ่านได้เฉพาะ Admin / Dashboard เจ้าของโปรเจกต์เท่านั้น)
```

---

## 5. การจัดการความลับและตัวแปรแวดล้อมบน Vercel (Environment Variables & Secrets)

- โค้ดฝั่ง Frontend (Vite) จะส่งตัวแปรที่ขึ้นต้นด้วย `VITE_` ไปยังเบราว์เซอร์ของผู้ใช้
- **การจัดเก็บไฟล์ `.env`:**
  - `.env` และ `.env.local` ต้องถูกเพิ่มไว้ใน `.gitignore` เสมอ
  - ให้สร้าง `.env.example` เป็นตัวอย่างโครงสร้างโดยไม่มีค่าจริง:
    ```env
    # .env.example
    VITE_SUPABASE_URL=https://your-project.supabase.co
    VITE_SUPABASE_ANON_KEY=your-anon-key
    ```
- **การตั้งค่าบน Vercel:** ให้กำหนดค่าผ่านหน้าแดชบอร์ด **Vercel Project Settings > Environment Variables** โดยตรงสำหรับการ Deploy

---

## 6. การตรวจสอบความปลอดภัยของ Dependencies (Dependency Security)

- ดำเนินการตรวจสอบช่องโหว่ของ Third-party Packages เป็นประจำด้วยคำสั่ง:
  ```bash
  npm audit
  ```
- อัปเดตแพ็กเกจที่มีช่องโหว่ความปลอดภัยทันทีเมื่อมี Patch ใหม่ออกมา

---

## 7. มาตรฐาน HTTP Security Headers บน Vercel และ HTML (Security Headers Compliance)

เพื่อป้องกันการโจมตีทางเว็บและผ่านการตรวจสอบ Security Headers (เช่น Mozilla Observatory / SecurityHeaders.com):

1. **`Content-Security-Policy` (CSP):**
   - บังคับใช้ `default-src 'self'`, `script-src 'self'`, `style-src 'self' 'unsafe-inline'`, `connect-src 'self' https://*.supabase.co`, `object-src 'none'`, `frame-ancestors 'none'`
   - **ปราศจาก `'unsafe-eval'` ใน `script-src`** เพื่อความปลอดภัยสูงสุด
2. **`Permissions-Policy`:**
   - ปิดการเข้าถึงฮาร์ดแวร์และ API ที่ไม่ได้ใช้งานในเบราว์เซอร์: `camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()`
3. **`Referrer-Policy`:**
   - ใช้ค่ามาตรฐานสากล: `strict-origin-when-cross-origin` เพื่อป้องกันข้อมูล URL รั่วไหลข้ามโดเมนที่ไม่ปลอดภัย
4. **`X-Content-Type-Options`:** `nosniff` (ป้องกัน MIME Type Sniffing)
5. **`X-Frame-Options`:** `DENY` (ป้องกัน Clickjacking)
6. **`X-XSS-Protection`:** `1; mode=block`
7. **`Strict-Transport-Security` (HSTS):** `max-age=31536000; includeSubDomains; preload`

