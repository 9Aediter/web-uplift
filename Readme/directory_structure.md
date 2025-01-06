# PROJECT DIRECTORY STRUCTURE

src/
├── app/
│   ├── (public)/            # หน้าเว็บสาธารณะ (ไม่ต้องล็อกอิน)
│   │   ├── page.tsx         # หน้าแรก (Home)
│   │   ├── about/           
│   │   │   └── page.tsx     # เกี่ยวกับเรา
│   │   ├── services/
│   │   │   └── page.tsx     # บริการ
│   │   ├── blog/
│   │   │   ├── page.tsx     # บทความทั้งหมด
│   │   │   └── [slug]/      # บทความเฉพาะ
│   │   │       └── page.tsx # บทความแบบไดนามิก
│   ├── (protected)/         # หน้าเว็บสำหรับผู้ใช้ที่ล็อกอิน
│   │   ├── dashboard/
│   │   │   ├── page.tsx     # แดชบอร์ดหลัก
│   │   │   ├── settings/
│   │   │   │   └── page.tsx # การตั้งค่าผู้ใช้
│   │   │   ├── admin/
│   │   │   │   └── page.tsx # แผงควบคุมผู้ดูแลระบบ
│   │   ├── special-content/ 
│   │   │   └── page.tsx     # เนื้อหาพิเศษสำหรับสมาชิก
│   ├── api/                 # API routes ของ Next.js
│   │   ├── auth/            # Routes สำหรับการยืนยันตัวตน เช่น login, register
│   │   ├── posts/           # Routes สำหรับจัดการบทความ
│   │   ├── users/           # Routes สำหรับจัดการผู้ใช้
│   │   ├── categories/      # Routes สำหรับจัดการหมวดหมู่
│   │   └── media/           # Routes สำหรับจัดการไฟล์มีเดีย
├── components/              # ส่วนประกอบ UI ที่ใช้ซ้ำ
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BlogCard.tsx
│   ├── DashboardWidget.tsx
├── stories/                 # ไฟล์สำหรับจัดการ Storybook
│   ├── Header.stories.tsx   # Story ของ Header
│   ├── Footer.stories.tsx   # Story ของ Footer
│   ├── BlogCard.stories.tsx # Story ของ BlogCard
│   ├── DashboardWidget.stories.tsx # Story ของ DashboardWidget
├── styles/                  # ไฟล์ CSS หรือการตั้งค่า Tailwind
│   ├── globals.css
│   ├── tailwind.config.ts
├── utils/                   # ฟังก์ชันช่วยเหลือ
│   ├── auth.ts              # ฟังก์ชันเกี่ยวกับการยืนยันตัวตน
│   ├── api.ts               # ฟังก์ชันเรียก API
│   ├── formatDate.ts        # ฟังก์ชันจัดการวันที่
├── middleware.ts            # Middleware สำหรับการยืนยันตัวตนและการควบคุมการเข้าถึง
├── prisma/                  # การตั้งค่าและสคีมาของ Prisma
│   ├── schema.prisma
├── lib/                     # ไฟล์การตั้งค่าสำหรับเครื่องมืออื่นๆ
│   ├── analytics.ts         # การตั้งค่าสำหรับ Google Analytics
│   ├── seo.ts               # การตั้งค่าสำหรับ Metadata และ SEO
│   ├── next-auth.ts         # การตั้งค่าสำหรับ NextAuth.js
