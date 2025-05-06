"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type CursorPositionType = {
  x: number;
  y: number;
};

export function AnimatedCursor() {
  const [position, setPosition] = useState<CursorPositionType>({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 pointer-events-none z-[999] transition-opacity",
        hidden && "opacity-0"
      )}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: "transform 0.1s ease-out", // Smooth movement
      }}
    >
      <div
        className={cn(
          "relative flex items-center justify-center",
          "transition-transform duration-150 ease-out"
        )}
      >
        {/* Outer Circle */}
        <div
              className={cn(
                "absolute rounded-full w-12 h-12 transform transition-transform ease-out",
                "bg-transparent border-2 border-green-500",
                clicked && "scale-40",
                linkHovered && "scale-[1.3]"
              )}
        ></div>

        {/* Center Dot */}
        <div
          className={cn(
            "absolute bg-green-500 rounded-full w-2 h-2",
            linkHovered && "bg-green-400"
          )}
        ></div>
      </div>
    </div>
  );
}
