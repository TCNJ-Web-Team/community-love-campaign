import { useState, useEffect, useRef } from "react";
import "../styles/accordion-styles.scss";

export default function Accodion({
  children,
  header,
  idName,
  startOpen,
  scholarship,
}) {
  const [open, setOpen] = useState(startOpen);
  const headerRef = useRef(null);

  useEffect(() => {
    if (scholarship && headerRef.current) {
      const headerElement = headerRef.current;
      const words = headerElement.textContent.split(" ");
      headerElement.innerHTML = `<span class="first-word">${words.shift()}</span> ${words.join(
        " "
      )}`;
    }
  }, [scholarship]);
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
        <span ref={headerRef} id={`${scholarship ? "scholarship-header" : ""}`}>
          {header}
        </span>
        <span className="arrow">
          {open ? (
            <img
              src="https://tcnj.edu/custom/campaigns/images/minus.svg"
              alt="close"
              style={{ marginBottom: "5px" }}
            />
          ) : (
            <img
              src="https://tcnj.edu/custom/campaigns/images/plus.svg"
              alt="open"
            />
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
