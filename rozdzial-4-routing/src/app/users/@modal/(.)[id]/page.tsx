"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") router.back();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [router]);

  function onOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) {
      router.back();
    }
  }

  return (
    <div
      ref={overlayRef}
      onClick={onOverlayClick}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={() => router.back()}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
          aria-label="Zamknij"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}