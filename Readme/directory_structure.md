# PROJECT DIRECTORY STRUCTURE

## overview 

Uplift-Website/
├── prisma/                     # Prisma schema และ migration files
├── public/                     # ไฟล์ Static assets เช่น รูปภาพ, ไอคอน
├── src/
│   ├── app/                    # App directory สำหรับ Next.js
│   │   ├── (public)/           # หน้าเว็บสาธารณะ (Home, About, Blog)
│   │   ├── (protected)/        # หน้าเว็บสำหรับผู้ใช้ที่ล็อกอิน (Dashboard, Settings)
│   │   ├── api/                # API routes (Auth, Posts, Users)
│   ├── components/             # UI Components เช่น Header, Footer
│   ├── fonts/                  # ไฟล์ Font ที่ใช้
│   ├── style/                  # ไฟล์ CSS หรือ Tailwind Config
│   ├── utils/                  # ฟังก์ชันช่วยเหลือ
├── .env                        # Environment Variables
├── tailwind.config.js          # Tailwind CSS Configuration
├── next.config.mjs             # Next.js Configuration
├── package.json                # Package dependencies
├── README.md                   # โปรเจกต์ README

## public

src/
├── app/
│   ├── (public)/                 # หน้าเว็บสาธารณะ (ไม่ต้องล็อกอิน)
│   │   ├── page.js               # หน้าแรก (Home Page)
│   │   ├── about/
│   │   │   └── page.js           # หน้าเกี่ยวกับเรา
│   │   ├── blog/
│   │   │   ├── page.js           # หน้าแสดงบทความทั้งหมด (Public View)
│   │   │   └── [slug]/           # รายละเอียดบทความ (Public View)

## user

src/
├── app/
│   ├── (user)/                   # หน้าเว็บสำหรับผู้ใช้ที่ล็อกอิน
│   │   ├── profile/              # หน้าจัดการโปรไฟล์
│   │   │   └── page.js           # หน้าโปรไฟล์ผู้ใช้
│   │   ├── blog/
│   │   │   ├── page.js           # หน้าแสดงบทความ (พร้อม Special Posts)
│   │   │   └── [slug]/           # รายละเอียดบทความ (Logged-in View)

## admin

src/
├── app/
│   ├── (admin)/                  # หน้าเว็บสำหรับ Admin
│   │   ├── dashboard/
│   │   │   ├── page.js           # Dashboard ของ Admin
│   │   ├── posts/
│   │   │   ├── page.js           # จัดการบทความทั้งหมด
│   │   │   └── create/
│   │   │       └── page.js       # สร้างบทความใหม่
│   │   ├── users/
│   │   │   ├── page.js           # จัดการผู้ใช้ทั้งหมด


## tests

src/
├── tests/
│   ├── components/          # ทดสอบ UI Components
│   ├── api/                 # ทดสอบ API
│   ├── utils/               # ทดสอบฟังก์ชันช่วยเหลือ

## hooks

src/
├── hooks/
│   ├── useAuth.ts           # Custom Hook สำหรับ Authentication
│   ├── useFetch.ts          # Custom Hook สำหรับดึงข้อมูล

## config

src/
├── config/
│   ├── tailwind.config.js   # Tailwind Config
│   ├── prisma.config.js     # Prisma Config
│   ├── seo.config.js        # SEO Config
