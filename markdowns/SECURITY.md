# 🛡️ มาตรการความปลอดภัยของระบบ (Frontend & Application Security)

เอกสารนี้ระบุแนวทางและมาตรการด้านความปลอดภัย (Security Best Practices) สำหรับโปรเจกต์ **Developer Portfolio Website** เพื่อป้องกันช่องโหว่และปกป้องข้อมูลของผู้ใช้

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
  - เพิ่มปุ่ม Disable ชั่วคราวหลังกดส่ง (`isSubmitting`) เพื่อป้องกันการกดรัวซ้ำๆ (Spamming)
  - หากเชื่อมต่อกับ Form Service (เช่น Formspree, EmailJS) ให้เปิดใช้งานฟีเจอร์ Honeypot หรือ reCAPTCHA

```jsx
// ตัวอย่าง State ป้องกันการกดส่งซ้ำ
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;
  
  setIsSubmitting(true);
  try {
    // ส่งข้อมูลแบบฟอร์ม...
  } finally {
    setIsSubmitting(false);
  }
};
```

---

## 4. การจัดการความลับและตัวแปรแวดล้อม (Environment Variables & Secrets)

- **กฎสำคัญ:** โค้ดฝั่ง Frontend (Vite/React) จะถูก Build และส่งไปยังเบราว์เซอร์ของผู้ใช้ทั้งหมด ดังนั้น **ห้ามเก็บ Secret Key, Private Database Credentials, หรือ Private API Keys ไว้ในโค้ดฝั่ง Client เด็ดขาด**
- การใช้ตัวแปรใน Vite ต้องขึ้นต้นด้วย `VITE_` และต้องเป็นเพียง Public Config เท่านั้น (เช่น Public Key, Service ID):
  ```env
  # .env.example (Public Configuration)
  VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
  VITE_APP_URL=https://pai-portfolio.dev
  ```
- เพิ่ม `.env` และ `.env.local` ลงใน `.gitignore` เสมอ เพื่อป้องกันการอัปโหลดไฟล์ที่มีข้อมูลส่วนตัวขึ้น Git

---

## 5. การตรวจสอบความปลอดภัยของ Dependencies (Dependency Security)

- ดำเนินการตรวจสอบช่องโหว่ของ Third-party Packages เป็นประจำด้วยคำสั่ง:
  ```bash
  npm audit
  ```
- อัปเดตแพ็กเกจที่มีช่องโหว่ความปลอดภัยทันทีเมื่อมี Patch ใหม่ออกมา
