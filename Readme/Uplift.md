# 🚀 CMS Project Overview / ภาพรวมโปรเจกต์ CMS

## 💻 Technology Stack / เทคโนโลยีที่ใช้

### Frontend Technologies / เทคโนโลยีฝั่งหน้าบ้าน
| Technology | Purpose / วัตถุประสงค์ |
|------------|----------------------|
| React + Next.js | Server-Side Rendering (SSR), Static Site Generation (SSG) with App Router in src directory / การสร้างเว็บแบบ SSR และ SSG พร้อม App Router |
| Tailwind CSS + DaisyUI | Responsive UI design / การออกแบบ UI ที่ยืดหยุ่น |
| Storybook | UI component testing / การทดสอบ UI components |

### Backend Technologies / เทคโนโลยีฝั่งหลังบ้าน
| Technology | Purpose / วัตถุประสงค์ |
|------------|----------------------|
| Prisma + PostgreSQL | Database management / การจัดการฐานข้อมูล |
| NextAuth.js | Authentication system / ระบบยืนยันตัวตน |
| OOP Concepts | Code organization / การจัดระเบียบโค้ด |

## 🎯 Key Features / ฟีเจอร์หลัก

### 🔒 Role-Based Access Control / ระบบจัดการสิทธิ์การเข้าถึง
- User roles: Admin, Editor, Viewer / บทบาทผู้ใช้: ผู้ดูแล, บรรณาธิการ, ผู้อ่าน
- Implementation: NextAuth.js + Prisma / การพัฒนาด้วย NextAuth.js และ Prisma

### 📁 File Upload System / ระบบอัปโหลดไฟล์
- Support for images and documents / รองรับการอัปโหลดรูปภาพและเอกสาร
- Storage: AWS S3 or local server / จัดเก็บด้วย AWS S3 หรือเซิร์ฟเวอร์

### 🔍 Search and Filtering / การค้นหาและกรองข้อมูล
- Content search by keywords, categories, tags / ค้นหาตามคำค้น, ประเภท, แท็ก
- Implementation: Prisma Query or Elasticsearch / ใช้ Prisma Query หรือ Elasticsearch

### 📚 Version Control / ระบบจัดการเวอร์ชัน
- Content version history / ประวัติการแก้ไขเนื้อหา
- Implementation: Prisma version tracking / ระบบติดตามเวอร์ชันด้วย Prisma

### 🌐 Cross-Platform Testing / การทดสอบข้ามแพลตฟอร์ม
- Browser compatibility testing / ทดสอบความเข้ากันได้กับเบราว์เซอร์
- Mobile responsiveness / การทดสอบบนอุปกรณ์มือถือ
- Tools: BrowserStack / ใช้เครื่องมือ BrowserStack

### 🌍 Internationalization / การรองรับหลายภาษา
- Multi-language support / รองรับการแสดงผลหลายภาษา
- Implementation: next-i18next or react-i18next / ใช้ next-i18next หรือ react-i18next