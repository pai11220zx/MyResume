# Developer Portfolio Website — Project Specification

## 1. Project Overview

สร้างเว็บไซต์ **Personal Developer Portfolio / Resume Website** สำหรับแสดงตัวตน ความสามารถ ผลงานด้าน Programming, Projects, Experience, Activities, Education และช่องทางการติดต่อ

เว็บไซต์ต้องมีภาพลักษณ์เป็น **Modern Developer Portfolio** ไม่ใช่ Resume แบบเอกสารทั่วไป โดยเน้น:

- Modern UI/UX
- Clean & Professional
- Responsive Design
- Developer / Technology Aesthetic
- Interactive User Experience
- Smooth Animations
- Fast Performance
- Accessibility
- Maintainable Code

เป้าหมายคือให้เว็บไซต์สามารถใช้เป็น:

- Personal Portfolio
- Online Resume
- Project Showcase
- Internship Portfolio
- Job Application Portfolio
- Academic Portfolio

---

# 2. Target Audience

กลุ่มผู้เข้าชมเว็บไซต์ ได้แก่:

- Recruiter
- บริษัทที่กำลังรับ Developer
- อาจารย์
- เพื่อนร่วมงาน
- ผู้ที่สนใจผลงาน
- ผู้ที่ต้องการดู GitHub / Projects

ดังนั้นข้อมูลสำคัญต้องสามารถเข้าใจได้ภายในเวลาไม่กี่วินาที

---

# 3. Technology Stack

## Frontend

- HTML5
- CSS3
- JavaScript
- React

## Styling

- Tailwind CSS

## Animation

- Framer Motion

## Build Tool

- Vite

## Package Manager

- npm

## Icons

- Lucide React

## Version Control

- Git
- GitHub

---

# 4. Technology Roles

แต่ละ Technology มีหน้าที่ดังนี้:

### React

ใช้สำหรับ:

- Component-based UI
- Reusable Components
- Page Structure
- State Management
- Dynamic Content

### Tailwind CSS

ใช้สำหรับ:

- Layout
- Responsive Design
- Typography
- Spacing
- Colors
- Component Styling

ไม่ควรเขียน CSS ซ้ำซ้อนหากสามารถใช้ Tailwind CSS ได้

### Framer Motion

ใช้สำหรับ:

- Page Entrance Animation
- Scroll Animation
- Hover Animation
- Card Animation
- Stagger Animation
- Modal Animation
- Navigation Animation
- Section Reveal
- Micro Interaction

### Vite

ใช้สำหรับ:

- Development Server
- Project Build
- Frontend Development Environment

### npm

ใช้สำหรับ:

- Package Management
- Installing Dependencies
- Running Scripts

### Lucide React

ใช้สำหรับ:

- UI Icons
- Navigation Icons
- Social Icons
- Action Icons

ควรใช้ Icon Library แทนการวาด SVG เองในกรณีที่มี Icon ที่เหมาะสมอยู่แล้ว

---

# 5. Project Structure

แนะนำโครงสร้าง Project ดังนี้:

```text
portfolio/
│
├── public/
│   ├── images/
│   └── assets/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Activities.jsx
│   │   ├── Education.jsx
│   │   ├── GitHubActivity.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── activities.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── ProjectDetail.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── README.md
├── PROJECT_SPEC.md
└── vite.config.js
```

---

# 6. Website Sitemap

เว็บไซต์ควรมีโครงสร้าง:

```text
Home
│
├── About
├── Skills
├── Projects
│   └── Project Detail
├── Experience
├── Activities
├── Education
├── GitHub Activity
└── Contact
```

Navbar:

```text
Home
About
Skills
Projects
Experience
Contact
Resume
```

Navbar ไม่ควรมี Menu มากเกินไป

---

# 7. Home / Index Page

หน้า Index เป็นหน้าหลักและต้องทำหน้าที่เป็น Landing Page ของ Developer

ลำดับ Section:

```text
Navbar
↓
Hero
↓
About Me
↓
Tech Stack
↓
Featured Projects
↓
Experience & Activities
↓
Education
↓
GitHub Activity
↓
Contact CTA
↓
Footer
```

---

# 8. Navbar

Navbar ต้องมี:

- Logo / Name
- Navigation Menu
- Resume Button
- Mobile Menu

Desktop:

```text
PAI     Home   About   Skills   Projects   Experience   Contact   Resume
```

Mobile:

```text
PAI                              ☰
```

เมื่อกด Mobile Menu ให้แสดง Navigation แบบ Animated Menu

Navbar ควรมี:

- Sticky / Fixed Position
- Background Blur
- Smooth Transition
- Active Section Indicator
- Responsive Design

---

# 9. Hero Section

Hero เป็น Section ที่สำคัญที่สุด

ต้องแสดงข้อมูล:

- Greeting
- Name
- Role
- Short Introduction
- Profile Image
- CTA Buttons
- Social Links

ตัวอย่าง Content:

```text
HELLO, I'M

PAI

Computer Science Student
& Aspiring Software Developer

I build websites, applications and
explore modern technologies.

[ View Projects ]
[ Download Resume ]
```

Social:

- GitHub
- LinkedIn
- Facebook
- Email

---

# 10. Hero Animation

Hero ต้องมี Animation แต่ต้องไม่รบกวนการอ่าน

แนะนำ:

- Fade In
- Slide Up
- Stagger Animation
- Floating Elements
- Animated Gradient
- Subtle Code Elements
- Hover Interaction

ตัวอย่าง:

```text
HELLO, I'M
     ↓
Fade In

PAI
     ↓
Slide Up

Description
     ↓
Fade In

Buttons
     ↓
Stagger
```

Animation ต้องมีความลื่นไหลและ Professional

ไม่ควรใช้ Animation ที่เร็วหรือรุนแรงเกินไป

---

# 11. About Me

แสดง:

- Introduction
- Education
- Career Interest
- Programming Interest
- Personal Development

ควรมี Summary Cards:

```text
Education
Computer Science

Focus
Web Development

Interest
Software Development

Goal
Frontend / Software Developer
```

ข้อมูลต้องอ่านง่ายและไม่ยาวเกินไป

---

# 12. Tech Stack / Skills

แบ่ง Skills เป็นหมวด:

## Programming

- C
- C++
- Java
- Python
- JavaScript

## Web Development

- HTML
- CSS
- JavaScript
- React
- PHP

## Database

- MySQL
- PostgreSQL
- Firebase

## Tools

- Git
- GitHub
- VS Code
- Figma

ไม่จำเป็นต้องใส่ Technology ทั้งหมด หากไม่ได้ใช้งานจริง

ควรแสดงเฉพาะ Technology ที่สามารถอธิบายหรือแสดง Project ที่เกี่ยวข้องได้

---

# 13. Skills Animation

เมื่อ Scroll เข้ามาถึง Skills:

- Skill Cards Fade In
- Cards Stagger
- Icons Scale In
- Hover Effect

หลีกเลี่ยง Progress Bar ที่ระบุเปอร์เซ็นต์ Skill เช่น:

```text
JavaScript 90%
React 80%
```

เพราะเปอร์เซ็นต์ดังกล่าววัดได้ยาก

แนะนำให้ใช้:

```text
Beginner
Intermediate
Advanced
```

หรือแสดงผ่าน Projects ที่ใช้งาน Technology นั้นจริง

---

# 14. Featured Projects

นี่คือ Section สำคัญที่สุดรองจาก Hero

แสดง Project ที่ดีที่สุดประมาณ 3–4 Projects

แต่ละ Project Card ต้องมี:

- Project Image
- Project Name
- Description
- Technology
- Year
- Project Type
- View Project
- GitHub
- Live Demo

ตัวอย่าง:

```text
Smart Hotel Booking System

ระบบจองห้องพักออนไลน์สำหรับจัดการ
ห้องพัก ลูกค้า และข้อมูลการจอง

HTML
CSS
JavaScript
PHP
MySQL

[ View Project ]
[ GitHub ]
```

---

# 15. Project Card Animation

Project Card ต้องมี:

### On Scroll

- Fade In
- Slide Up
- Stagger

### On Hover

- Slight Scale
- Image Zoom
- Shadow / Glow
- Technology Badge Animation
- Arrow Movement

Animation ต้องไม่ทำให้ Layout กระโดด

---

# 16. Project Detail Page

เมื่อกด Project ให้สามารถดูรายละเอียดเพิ่มเติม

ข้อมูล:

```text
Project Name
Project Overview
Problem
Solution
Features
Technology Stack
Screenshots
Development Process
Challenges
What I Learned
GitHub
Live Demo
```

ควรมีปุ่ม:

```text
← Back to Projects
```

---

# 17. Experience & Activities

หากยังไม่มีประสบการณ์ทำงานจริง ให้ใช้:

**Experience & Activities**

แสดงเป็น Timeline

ตัวอย่าง:

```text
2026
│
├── Portfolio Website
│   Frontend Development
│
2025
│
├── University Project
│   Database System
│
├── Web Development Workshop
│
2024
│
└── Computer Science Student
```

สามารถใส่:

- Internship
- University Project
- Workshop
- Competition
- Hackathon
- Club
- Volunteer Activity
- Academic Activity

---

# 18. Timeline Animation

เมื่อ Scroll:

- Timeline Line ค่อย ๆ แสดง
- Timeline Item Fade In
- Item Slide From Left / Right
- Year Highlight

Animation ต้องทำงานอย่าง Smooth

---

# 19. Activities & Achievements

แสดงกิจกรรมที่เกี่ยวข้องกับ:

- Programming
- Technology
- University
- Competition
- Workshop
- Hackathon
- Certificate
- Academic Activities

แต่ละ Card สามารถมี:

```text
Activity Name
Date
Organization
Description
Image
Certificate
```

---

# 20. Education

แสดง:

```text
Bachelor of Computer Science

Faculty of Information Technology
Phetchaburi Rajabhat University

Expected Graduation:
202X
```

สามารถเพิ่ม:

- GPA
- Relevant Coursework
- Academic Projects

---

# 21. GitHub Activity

สร้าง Section สำหรับ Developer Activity

แสดงข้อมูล เช่น:

```text
Repositories
Projects
Contributions
Languages
```

และสามารถแสดง:

- GitHub Contribution Graph
- Latest Repository
- Popular Repository
- GitHub Profile

หากยังไม่มี API Integration ให้ใช้ Static Data ก่อน และออกแบบ Component ให้สามารถเชื่อม API ภายหลังได้

---

# 22. Contact Section

สร้าง CTA:

```text
Let's Work Together

Interested in working together
or want to know more about me?

[ Contact Me ]
```

ข้อมูล:

- Email
- GitHub
- LinkedIn
- Social Media

หากมี Contact Form:

```text
Name
Email
Subject
Message

[ Send Message ]
```

Form ต้องมี Validation

---

# 23. Footer

Footer ควรมี:

```text
PAI

Computer Science Student
& Aspiring Developer

Home
About
Projects
Contact

GitHub
LinkedIn
Facebook
Email

© 2026 PAI. All Rights Reserved.
```

---

# 24. Visual Design

Design Direction:

**Modern Developer Portfolio**

แนะนำ Dark Theme เป็นหลัก

ตัวอย่าง Palette:

```text
Background:
#0F1117

Surface:
#171A21

Primary Text:
#FFFFFF

Secondary Text:
#A1A1AA

Accent:
#8B5CF6

Border:
#272A33
```

สามารถปรับ Accent Color ได้ตามความเหมาะสม

---

# 25. Developer Visual Elements

สามารถใช้องค์ประกอบเกี่ยวกับ Programming เช่น:

```text
< / >
{ }
console.log()
npm install
git commit
function()
```

แต่ควรใช้เป็น Visual Decoration เท่านั้น

ไม่ควรทำให้ Website ดูรกหรือเหมือน Coding Tutorial

---

# 26. Animation System

Animation เป็นหนึ่งในจุดเด่นของ Website

ต้องใช้ **Framer Motion** เป็น Animation Framework หลัก

Animation ที่ควรมี:

## Page Animation

- Page Fade
- Page Transition

## Section Animation

- Fade In
- Slide Up
- Slide Left
- Slide Right

## Card Animation

- Hover Scale
- Image Zoom
- Shadow Transition

## Navigation

- Mobile Menu
- Active Indicator

## Micro Interaction

- Button Hover
- Icon Hover
- Link Hover

## Stagger

ใช้กับ:

- Skill Cards
- Project Cards
- Timeline
- Social Icons

---

# 27. Animation Principles

Animation ต้อง:

- Smooth
- Fast enough
- Professional
- ไม่รบกวน Content
- ไม่ทำให้ User รอ
- ไม่ทำให้ Layout Shift

ควรใช้ Duration โดยประมาณ:

```text
Micro Interaction:
0.15–0.25s

Normal Transition:
0.3–0.5s

Section Reveal:
0.5–0.8s
```

หลีกเลี่ยง Animation ที่เกินความจำเป็น

---

# 28. Accessibility

เว็บไซต์ต้องรองรับ Accessibility

ต้องมี:

- Semantic HTML
- Proper Heading Hierarchy
- Alt Text
- Keyboard Navigation
- Focus State
- Sufficient Color Contrast
- Accessible Buttons
- Accessible Links

รูปภาพทุกภาพต้องมี `alt`

---

# 29. Responsive Design

เว็บไซต์ต้องรองรับ:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Breakpoints ต้องถูกออกแบบให้เหมาะกับ Content ไม่ใช่ยึดเฉพาะ Device

Mobile ต้อง:

- Navigation เป็น Hamburger Menu
- Grid เปลี่ยนเป็น Single Column
- Typography ลดขนาด
- Buttons ปรับขนาด
- Image Responsive
- Spacing ลดลง
- Animation ลดความซับซ้อน

---

# 30. Performance

ต้องให้ความสำคัญกับ Performance

แนวทาง:

- Optimize Images
- ใช้ WebP/AVIF เมื่อเหมาะสม
- Lazy Load รูปภาพ
- หลีกเลี่ยง Animation ที่ใช้ทรัพยากรมาก
- ลด Unnecessary Re-render
- ใช้ React Component อย่างเหมาะสม
- ไม่ติดตั้ง Package ที่ไม่จำเป็น

---

# 31. Reduced Motion

เว็บไซต์ต้องรองรับ:

```text
prefers-reduced-motion
```

หากผู้ใช้เปิด Reduce Motion:

- ลด Animation
- ปิด Parallax
- ลด Transition
- ไม่ใช้ Animation ที่ต่อเนื่อง

เว็บไซต์ต้องยังใช้งานได้สมบูรณ์โดยไม่มี Animation

---

# 32. Component Principles

Component ต้อง:

- Reusable
- Small
- Maintainable
- Easy to Modify

หลีกเลี่ยง Component ที่มีขนาดใหญ่เกินไป

ตัวอย่าง:

```text
ProjectCard
SkillCard
SocialButton
SectionTitle
TimelineItem
Button
```

ควรแยก Component ที่สามารถนำกลับมาใช้ซ้ำได้

---

# 33. Data Management

ข้อมูล Project, Skills และ Experience ไม่ควร Hard-code อยู่ใน UI Component ทั้งหมด

แนะนำ:

```text
src/data/projects.js
src/data/skills.js
src/data/experience.js
src/data/activities.js
```

ตัวอย่าง:

```javascript
const projects = [
  {
    id: 1,
    title: "Smart Hotel Booking System",
    description: "...",
    year: 2026,
    technologies: ["React", "PHP", "MySQL"],
    image: "/images/hotel.png",
    github: "...",
    demo: "..."
  }
];
```

จากนั้นให้ Component อ่านข้อมูลจาก Data

---

# 34. Code Quality

ต้องปฏิบัติตาม:

- Clean Code
- Consistent Naming
- Reusable Components
- Avoid Duplicate Code
- Meaningful Variable Names
- Meaningful Component Names
- Comments เฉพาะจุดที่จำเป็น

ไม่ควรเขียน Comment อธิบาย Code ที่สามารถเข้าใจได้จากตัว Code เอง

---

# 35. Git Workflow

ใช้ Git สำหรับ Version Control

ตัวอย่าง Commit:

```text
feat: add hero section
feat: add project showcase
feat: add scroll animations
feat: add responsive navbar
style: improve portfolio layout
fix: mobile navigation issue
perf: optimize project images
```

ควร Commit เป็น Feature ย่อย ๆ

---

# 36. Recommended npm Packages

ติดตั้งเฉพาะ Package ที่จำเป็น

หลัก ๆ:

```bash
npm install
```

สำหรับ Animation:

```bash
npm install framer-motion
```

สำหรับ Icons:

```bash
npm install lucide-react
```

Tailwind CSS และ Vite ให้ติดตั้งตาม Version ที่เหมาะสมกับ Project Environment

ห้ามติดตั้ง Package เพิ่มโดยไม่มีเหตุผล

---

# 37. Development Priorities

ให้ AI Agent ทำงานตามลำดับ:

### Phase 1 — Project Setup

- [ ] Setup Vite
- [ ] Setup React
- [ ] Setup Tailwind CSS
- [ ] Setup Project Structure
- [ ] Install Required Dependencies

### Phase 2 — Core UI

- [ ] Navbar
- [ ] Hero
- [ ] About
- [ ] Skills
- [ ] Projects
- [ ] Experience
- [ ] Activities
- [ ] Education
- [ ] Contact
- [ ] Footer

### Phase 3 — Responsive

- [ ] Mobile
- [ ] Tablet
- [ ] Desktop
- [ ] Mobile Navigation

### Phase 4 — Animation

- [ ] Hero Animation
- [ ] Scroll Reveal
- [ ] Stagger Animation
- [ ] Card Hover
- [ ] Timeline Animation
- [ ] Page Transition
- [ ] Micro Interactions

### Phase 5 — Optimization

- [ ] Image Optimization
- [ ] Accessibility
- [ ] Reduced Motion
- [ ] Performance
- [ ] SEO
- [ ] Code Cleanup

### Phase 6 — Testing

- [ ] Test Desktop
- [ ] Test Tablet
- [ ] Test Mobile
- [ ] Test Navigation
- [ ] Test Buttons
- [ ] Test Links
- [ ] Test Animations
- [ ] Test Accessibility

---

# 38. SEO

เว็บไซต์ควรมี:

- Meaningful `<title>`
- Meta Description
- Open Graph Metadata
- Semantic HTML
- Proper Heading Structure
- Descriptive Links
- Image Alt Text

ตัวอย่าง:

```text
Title:
Pai — Computer Science Student & Developer

Description:
Personal portfolio of Pai, a Computer Science student showcasing projects, programming skills, experience and activities.
```

---

# 39. AI Agent Rules

AI Agent ต้องปฏิบัติตามกฎต่อไปนี้:

1. ใช้ React เป็น Frontend Framework หลัก
2. ใช้ Tailwind CSS สำหรับ Styling
3. ใช้ Framer Motion สำหรับ Animation
4. ใช้ Vite เป็น Build Tool
5. ใช้ npm สำหรับ Package Management
6. ใช้ Lucide React สำหรับ Icons
7. เขียน Component ให้ Reusable
8. รองรับ Responsive Design
9. ให้ความสำคัญกับ Mobile First
10. ไม่ติดตั้ง Package ที่ไม่จำเป็น
11. ไม่สร้าง Code ซ้ำโดยไม่มีเหตุผล
12. ไม่ใช้ Animation มากเกินไปจนรบกวน UX
13. รองรับ `prefers-reduced-motion`
14. ให้ความสำคัญกับ Accessibility
15. ให้ความสำคัญกับ Performance
16. ใช้ Semantic HTML
17. หลีกเลี่ยง Inline Style หาก Tailwind CSS สามารถทำได้
18. แยก Data ออกจาก UI Component
19. ก่อนสร้าง Component ใหม่ ให้ตรวจสอบว่ามี Component ที่นำกลับมาใช้ได้หรือไม่
20. ก่อนแก้ไข Code ต้องเข้าใจโครงสร้าง Project ปัจจุบันก่อน
21. ห้ามลบ Feature เดิมโดยไม่ได้รับอนุญาต
22. หากมีหลายวิธีในการ Implement ให้เลือกวิธีที่ Maintainable และเรียบง่ายที่สุด
23. หลังแก้ไขต้องตรวจสอบว่า Project Build ได้
24. ต้องตรวจสอบ Responsive หลังสร้าง UI
25. ต้องรักษา Visual Consistency ของทั้งเว็บไซต์

---

# 40. Definition of Done

Project จะถือว่าเสร็จเมื่อ:

- เว็บไซต์สามารถ Run ได้
- `npm run dev` ทำงานได้
- Production Build สำเร็จ
- ไม่มี Critical Error
- ทุก Section ทำงานได้
- Navigation ทำงานได้
- Project Detail ทำงานได้
- Responsive ครบ Mobile / Tablet / Desktop
- Animation ทำงาน Smooth
- Reduced Motion ทำงาน
- Accessibility พื้นฐานผ่าน
- Images ถูก Optimize
- Code มีโครงสร้างชัดเจน
- Components สามารถ Reuse ได้
- ไม่มี Unnecessary Dependencies
- Git Repository มี Commit ที่มีความหมาย

---

# 41. Final Design Goal

เว็บไซต์ต้องให้ความรู้สึกว่า:

> "นี่คือ Portfolio ของ Developer ที่สร้าง Software จริง"

ไม่ใช่:

> "นี่คือเว็บไซต์ที่ใส่ Animation เยอะ ๆ"

ลำดับความสำคัญ:

```text
Content
   ↓
UX
   ↓
Visual Design
   ↓
Animation
   ↓
Performance
```

Animation เป็นตัวช่วยเสริมประสบการณ์ ไม่ใช่สิ่งที่สำคัญกว่า Content และ Usability

เว็บไซต์สุดท้ายควรมีความรู้สึก:

**Modern + Clean + Professional + Interactive + Developer-focused**