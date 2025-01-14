
import { useEffect } from "react";
import { useRouter } from "next/router";

const AutoRefreshOnBack = () => {
  const router = useRouter();

  useEffect(() => {
    // ฟังเหตุการณ์การเปลี่ยนแปลงของ router
    const handleRouteChange = (url) => {
      // ตรวจสอบว่า URL ที่เปลี่ยนแปลงนั้นเป็นการย้อนกลับ (back) หรือไม่
      if (window.performance && window.performance.navigation.type === 2) {
        // เมื่อย้อนกลับให้ทำการรีเฟรช
        router.reload();
      }
    };

    // เรียกใช้เมื่อมีการเปลี่ยนแปลงเส้นทาง
    router.events.on("routeChangeStart", handleRouteChange);

    // Cleanup เมื่อ unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return null; // ไม่มีการแสดงผลอะไร
};

export default AutoRefreshOnBack;
