import React, { useRef, useEffect } from "react";

const ClickOutside = ({ children, exceptionRef, onClick, className }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickListener = (event) => {
      let clickedInside = false;

      if (exceptionRef && exceptionRef.current) {
        // ตรวจสอบการคลิกที่ exceptionRef หรือภายใน wrapperRef
        clickedInside =
          (wrapperRef.current && wrapperRef.current.contains(event.target)) ||
          (exceptionRef.current && exceptionRef.current === event.target) ||
          (exceptionRef.current && exceptionRef.current.contains(event.target));
      } else {
        // ตรวจสอบแค่คลิกภายใน wrapperRef เท่านั้น
        clickedInside =
          wrapperRef.current && wrapperRef.current.contains(event.target);
      }

      if (!clickedInside) onClick(); // ถ้าคลิกภายนอก จะเรียก onClick
    };

    document.addEventListener("mousedown", handleClickListener); // ฟังการคลิกที่ document

    return () => {
      document.removeEventListener("mousedown", handleClickListener); // ลบ event listener เมื่อ component ถูกลบ
    };
  }, [exceptionRef, onClick]); // ใช้ exceptionRef และ onClick เพื่อให้ใช้ได้ใน effect

  return (
    <div ref={wrapperRef} className={`${className || ""}`}>
      {children}
    </div>
  );
};

export default ClickOutside;
