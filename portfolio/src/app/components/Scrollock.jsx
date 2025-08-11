// components/ScrollLock.jsx
'use client';
import { useEffect } from "react";

export default function ScrollLock() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return null; // ไม่มี UI อะไรเลย
}

