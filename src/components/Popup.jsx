import { useEffect } from "react";
import "../styles/popup-styles.scss";

export default function Popup({ popupStatus, togglePopup, children }) {
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        // console.log("esc key pressed");
        togglePopup();
      }
    };

    if (popupStatus) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [popupStatus, togglePopup]);

  return (
    popupStatus && (
      <div id="popup">
        <div id="popup-container">
          {children}
          <img
            src="https://tcnj.edu/custom/icon-library/micro/micro-close.svg"
            id="pop-up-close-button"
            alt="close"
            onClick={togglePopup}
          />
        </div>
        <div id="popup-background-blur" onClick={togglePopup}></div>
      </div>
    )
  );
}
