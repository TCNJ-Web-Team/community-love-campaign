import React from "react";
import { motion } from "framer-motion";

const GiveBanner = ({ children, scholarship }) => {
  return (
    <div className="banner">
      <motion.div
        className={`wrapper ${scholarship ? "scholarship" : ""}`}
        id="opportunties"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25 }}
        viewport={{ once: true }}
      >
        {children}
        {/* <h4>View the full list of naming opportunities +</h4> */}
      </motion.div>
    </div>
  );
};

export default GiveBanner;
