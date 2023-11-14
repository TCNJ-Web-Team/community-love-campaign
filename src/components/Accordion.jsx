import { useState } from "react";
import "../styles/accordion-styles.scss";

export default function Accodion({ children, header, idName, startOpen }) {
  const [open, setOpen] = useState(startOpen);

  const onAccordionClick = () => {
    // console.log(event);
    setOpen(!open);
  };
  return (
    <div className="accordion" id={idName}>
      <h2
        className={`${
          open ? "accordion-header start-open active" : "accordion-header"
        }`}
        onClick={onAccordionClick}
      >
        <span>{header}</span>
        <span className="arrow">
          {open ? (
            <img
              src="./images/minus.svg"
              alt="close"
              style={{ marginBottom: "5px" }}
            />
          ) : (
            <img src="./images/plus.svg" alt="open" />
          )}
        </span>
      </h2>
      <div
        className={`${
          open ? "accordion-content start-open active" : "accordion-content"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
