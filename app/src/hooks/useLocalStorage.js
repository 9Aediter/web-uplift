"use client";

import { useState, useEffect } from "react";

/**
 * Custom Hook สำหรับจัดการ localStorage
 * @param {string} key - คีย์ใน localStorage
 * @param {any} initialValue - ค่าเริ่มต้น ถ้าไม่มีค่าใน localStorage
 * @returns {[any, function]} - ค่าปัจจุบันและฟังก์ชันสำหรับอัปเดตค่า
 */
function useLocalStorage(key, initialValue) {
  // 1. ใช้ useState เพื่อจัดเก็บค่าปัจจุบันใน State
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // 2. ดึงค่าจาก localStorage
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue; // คืนค่า JSON ที่แปลงกลับมา หรือใช้ initialValue
      }
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // 3. ใช้ useEffect เพื่ออัปเดตค่าใน localStorage เมื่อ State เปลี่ยน
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.error("Error writing to localStorage key:", key, error);
    }
  }, [key, storedValue]); // ทำงานเมื่อ key หรือ storedValue เปลี่ยน

  // 4. คืนค่า storedValue (State) และ setStoredValue (อัปเดต State)
  return [storedValue, setStoredValue];
}

export default useLocalStorage;
