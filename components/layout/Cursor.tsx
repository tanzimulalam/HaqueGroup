import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setRingPosition({ x: e.clientX, y: e.clientY });
      }, 40);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: position.x, top: position.y }}
      />
      <div
        className="cursor-ring"
        style={{ left: ringPosition.x, top: ringPosition.y }}
      />
    </>
  );
}

