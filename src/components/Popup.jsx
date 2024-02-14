// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "../styles/popup-styles.scss";
export default function Popup({ children }) {
  const [menuStatus, setMenustatus] = useState(false);

  return (
    <div id="popup">
      <div id="popup-container">
        {children}
        <img
          src="https://tcnj.edu/custom/icon-library/micro/micro-close.svg"
          id="pop-up-close-button"
          alt="close"
        />
      </div>
      <div id="popup-background-blur"></div>
    </div>
  );
}
