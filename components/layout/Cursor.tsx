import { useEffect, useRef, useState } from "react";

const LERP = 0.18;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fineCursor = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      const useCustom = fineCursor.matches && !reduceMotion.matches;
      setEnabled(useCustom);
      document.body.classList.toggle("custom-cursor", useCustom);
    };

    updateEnabled();
    fineCursor.addEventListener("change", updateEnabled);
    reduceMotion.addEventListener("change", updateEnabled);

    return () => {
      fineCursor.removeEventListener("change", updateEnabled);
      reduceMotion.removeEventListener("change", updateEnabled);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * LERP;
      ringPos.current.y += (target.current.y - ringPos.current.y) * LERP;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    const onEnterInteractive = () => {
      ringRef.current?.classList.add("is-hover");
    };
    const onLeaveInteractive = () => {
      ringRef.current?.classList.remove("is-hover");
    };

    window.addEventListener("mousemove", onMove);
    rafId.current = requestAnimationFrame(tick);

    const interactive = document.querySelectorAll<HTMLElement>(
      "a, button, [role='button'], input, textarea, select, label"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
