# Sequence Diagram


```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant NextAuth
    participant Database
    participant OAuthProvider
    participant Middleware

    %% Sign In Process
    User->>Frontend: Enter login details / click on OAuth provider
    Frontend->>NextAuth: Send sign in request
    NextAuth->>OAuthProvider: Redirect to OAuth Provider
    OAuthProvider-->>User: Prompt for authentication
    User->>OAuthProvider: Provide credentials
    OAuthProvider-->>NextAuth: Return access token and user info

    %% Middleware Process
    NextAuth->>Middleware: Check for security, validate token
    Middleware-->>NextAuth: Proceed to user verification

    %% Check in Database
    NextAuth->>Database: Check if providerUserId exists
    alt Provider User ID exists
        Database-->>NextAuth: Return existing user
    else Provider User ID not found
        NextAuth->>Database: Create new authentication_provider and link to user
        Database-->>NextAuth: Confirmation
    end

    %% Login Process
    NextAuth-->>Frontend: Return session token
    Frontend-->>User: Grant access to logged-in user

```
## ขั้นตอนการทำงานของระบบ

### Sign In Process
 - User กรอกข้อมูลลงในแบบฟอร์มเพื่อเข้าสู่ระบบหรือเลือกใช้ OAuth provider (เช่น Google, Facebook).
 - Frontend ส่งคำขอเข้าสู่ระบบ (Sign In) ไปยัง NextAuth.
 - NextAuth ส่งการเชื่อมโยงไปยัง OAuthProvider เพื่อให้ผู้ใช้ทำการยืนยันตัวตน.
 - OAuthProvider แสดงหน้าต่างการยืนยันตัวตนให้กับผู้ใช้.
 - User ให้ข้อมูลรับรอง (เช่น ชื่อผู้ใช้และรหัสผ่าน) ให้กับ OAuthProvider.
 - OAuthProvider ส่งข้อมูลการเข้าถึง (access token) และข้อมูลผู้ใช้กลับไปยัง NextAuth.
 - NextAuth ใช้ Middleware เพื่อตรวจสอบและดำเนินการก่อนการเข้าถึงข้อมูลผู้ใช้.
 - Middleware ตรวจสอบข้อมูล เช่น ความปลอดภัยหรือการยืนยันตัวตนเบื้องต้น แล้วส่งข้อมูลที่เกี่ยวข้องไปยัง NextAuth.
 - NextAuth ตรวจสอบใน Database ว่ามี providerUserId ของผู้ใช้ที่เกี่ยวข้องหรือไม่.

    1. หากมี providerUserId ในฐานข้อมูลแล้ว, Database จะส่งผู้ใช้ที่มีอยู่กลับไปยัง NextAuth.
    2. หากไม่พบ providerUserId, NextAuth จะสร้างการเชื่อมโยงกับ authentication_provider และเชื่อมโยงกับผู้ใช้ใหม่ใน Database.

### Login Process
 - หลังจากที่ผู้ใช้เข้าสู่ระบบแล้ว, NextAuth ส่ง session token กลับไปยัง Frontend.
 - Frontend รับ session token และให้สิทธิ์การเข้าถึงแก่ผู้ใช้ที่เข้าสู่ระบบสำเร็จ (Login).