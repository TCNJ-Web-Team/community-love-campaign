import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function QuoteBody({ children, idName, scholarship }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // console.log("in view");
      mainControls.start("visible");
      // image1Controls.start("visibleShield");
      // image2Controls.start("visibleYellow");
    }
  }, [isInView]);

  return (
    <div className="wrapper" id={idName} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-container"
      >
        {children}
      </motion.div>
    </div>
  );
}
