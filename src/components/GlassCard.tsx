"use client";

import { motion } from "framer-motion";
import { MouseEvent, useRef, useState } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "accent";
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  glowColor = "blue",
  delay = 0,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const getGlowClass = () => {
    switch (glowColor) {
      case "purple":
        return "rgba(139, 92, 246, 0.12)";
      case "accent":
        return "rgba(168, 85, 247, 0.12)";
      case "blue":
      default:
        return "rgba(59, 130, 246, 0.12)";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl border border-white/8 bg-card-glass/75 p-6 backdrop-blur-md overflow-hidden transition-all duration-300 ${className}`}
      style={{
        boxShadow: isFocused ? `0 0 25px ${getGlowClass()}` : "none",
      }}
    >
      {/* Light Reflection Spotlight Layer */}
      {isFocused && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.05), transparent 80%)`,
          }}
        />
      )}

      {/* Border Glow Highlight Layer */}
      {isFocused && (
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, ${
              glowColor === "blue"
                ? "rgba(59, 130, 246, 0.3)"
                : glowColor === "purple"
                ? "rgba(139, 92, 246, 0.3)"
                : "rgba(168, 85, 247, 0.3)"
            }, transparent 70%)`,
            zIndex: 0,
            padding: "1px",
            maskImage: "linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
