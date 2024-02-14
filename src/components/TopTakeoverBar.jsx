import "../styles/takeover-bar-styles.scss";
import Popup from "../components/Popup";
import { useState } from "react";
export default function TopTakeoverBar() {
  const [popupStatus, setPopupStatus] = useState(false);
  const togglePopup = () => {
    // console.log("toggling popup");
    setPopupStatus(!popupStatus);
  };
  return (
    <div id="top-takeover-bar">
      <p>
        Join the challenge match today and help make the Pavilion at TCNJ a
        reality!
      </p>
      <a onClick={togglePopup}>Learn More</a>
      <Popup popupStatus={popupStatus} togglePopup={togglePopup}>
        <h2>Help us meet the challenge</h2>
        <p>
          You have the chance to have an enormous impact on the TCNJ campus.
          Your support of the Pavilion at TCNJ will be matched 50 cents on the
          dollar — up to $1 million — thanks to a generous contribution from Dr.
          Buddy Mayo, TCNJ professor emeritus.{" "}
        </p>
        <a href="https://give.tcnj.edu/invest-in-community/">
          Show your support
        </a>
      </Popup>
    </div>
  );
}
