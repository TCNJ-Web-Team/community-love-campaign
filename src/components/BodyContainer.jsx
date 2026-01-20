import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function BodyContainer({ children, idName, scholarship }) {
  const imageSources = !scholarship
    ? [
        {
          src: "https://tcnj.edu/custom/campaigns/new-pavilion-images/walkthrough-2026.jpg",
          mediaQuery: "(max-width: 600px)",
        },
        {
          src: "https://tcnj.edu/custom/campaigns/new-pavilion-images/walkthrough-2026-full.jpg",
          mediaQuery: "(max-width: 1050px)",
        },
        {
          src: "https://tcnj.edu/custom/campaigns/new-pavilion-images/walkthrough-2026.png",
        }, // Default source
      ]
    : [
        {
          src: "https://tcnj.edu/custom/campaigns/images/group-mobile.jpg",
          mediaQuery: "(max-width: 600px)",
        },
        {
          src: "https://tcnj.edu/custom/campaigns/images/group-full.jpg",
          mediaQuery: "(max-width: 1050px)",
        },
        { src: "https://tcnj.edu/custom/campaigns/images/group.png" }, // Default source
      ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const image1Controls = useAnimation();
  const image2Controls = useAnimation();
  const [source, setSource] = useState(
    imageSources[imageSources.length - 1].src
  );
  const [isWindowBelow1050, setIsWindowBelow1050] = useState(false);

  useEffect(() => {
    const updateSource = () => {
      for (const source of imageSources) {
        if (source.mediaQuery && window.matchMedia(source.mediaQuery).matches) {
          setSource(source.src);
          return;
        }
      }
      setSource(imageSources[imageSources.length - 1].src);
    };

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      windowWidth <= 1050
        ? setIsWindowBelow1050(true)
        : setIsWindowBelow1050(false);
      // setIsWindowBelow1050(windowWidth <= 1050);
      updateSource();
    };

    // Make the initial source selection and listen for window resize events
    updateSource();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      // console.log("in view");
      mainControls.start("visible");
      image1Controls.start("visibleShield");
      image2Controls.start("visibleYellow");
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
      <div className="overlay-container">
        <motion.img
          src={source}
          alt="Pavillion Rendering Walkthrough"
          id="shield-image"
          variants={{
            hidden: { opacity: 0, x: -25 },
            visibleShield: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={image1Controls}
          transition={{ duration: 0.75, delay: 0.6 }}
        />
        {!isWindowBelow1050 && (
          <motion.img
            src="https://tcnj.edu/custom/campaigns/images/yellow-bg-small.jpg"
            alt="yellow background"
            id="yellow-bg"
            variants={{
              hidden: { opacity: 0, x: 95 },
              visibleYellow: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={image2Controls}
            transition={{ duration: 0.75, delay: 0.9 }}
          />
        )}
      </div>
    </div>
  );
}
