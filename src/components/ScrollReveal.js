"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  className = "", 
  as = "div" 
}) {
  // Dynamically select the HTML tag (div, li, section, etc.)
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      className={className}
      // Starts slightly lower, transparent, and blurred
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      // Animates to exact position, full opacity, and sharp focus
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      // Triggers slightly before the element enters the screen
      viewport={{ once: true, margin: "-50px" }}
      // The easing curve [0.16, 1, 0.3, 1] is the industry standard for "buttery smooth"
      transition={{ 
        duration: 1.2, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
      {children}
    </MotionComponent>
  );
}