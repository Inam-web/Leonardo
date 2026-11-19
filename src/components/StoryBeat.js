"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StoryBeat({ step, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="story-beat-wrapper" 
      onClick={() => setIsOpen(!isOpen)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen); }}
    >
      <div className="story-beat">
        <span className="story-beat__number">{String(index + 1).padStart(2, "0")}</span>
        
        <div className="story-beat__copy">
          <h3>{step.title}</h3>
          
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: "hidden" }}
              >
                <p className="story-beat__body">{step.body}</p>
                {step.expanded && (
                  <p className="story-beat__body" style={{ marginTop: "1rem" }}>
                    {step.expanded}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <motion.span 
          className="story-beat__arrow" 
          aria-hidden="true"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ↗
        </motion.span>
      </div>
    </div>
  );
}