npx create-next-app@14.2.22 App

# Git Commands / คำสั่ง Git พื้นฐาน

## Initializing a Repository
```sh
git init
```
- Creates a new Git repository in the local directory.
- สร้าง Git repository ใหม่ในเครื่อง

## Staging and Committing Files
```sh
git add .
```
- Adds all files to the staging area.
- เพิ่มไฟล์ทั้งหมดไปยังพื้นที่ staging

```sh
git commit -m "commit message"
```
- Commits the staged files with a commit message.
- บันทึกไฟล์ที่อยู่ใน staging พร้อมข้อความอธิบาย

## Viewing Commit History
```sh
git log
```
- Displays the commit history.
- แสดงประวัติการบันทึกการเปลี่ยนแปลง

gh auth login

## Uploading to GitHub for the First Time
```sh
gh repo create web-uplift --public --source=. --push

git remote add origin https://github.com/username/repository-name.git

```
- Creates a new public repository on GitHub and pushes the local repository to it.
- สร้าง repository สาธารณะใหม่บน GitHub และอัปโหลด repository ท้องถิ่นไปยัง GitHub

```sh
git remote -v
```
- Verifies the remote repository URLs.
- ตรวจสอบ URL ของ repository ระยะไกล

## Subsequent Uploads to GitHub
```sh
git add .
```
- Adds all files to the staging area.
- เพิ่มไฟล์ทั้งหมดไปยังพื้นที่ staging

```sh
git commit -m "Initial commit"
```
- Commits the staged files with a commit message.
- บันทึกไฟล์ที่อยู่ใน staging พร้อมข้อความอธิบาย

```sh
git push
```
- Pushes the committed changes to the remote repository.
- อัปโหลดการเปลี่ยนแปลงที่บันทึกไปยัง repository ระยะไกล


npm install prisma --save-dev
npm install @prisma/client

docker-compose up -d

npm install -D tailwindcss
npx tailwindcss init