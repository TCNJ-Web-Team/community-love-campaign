import "../styles/takeover-bar-styles.scss";
import Popup from "../components/Popup";

export default function TopTakeoverBar() {
  return (
    <div id="top-takeover-bar">
      <p>
        Join the challenge match today and help make the TCNJ Pavilion a
        reality!
      </p>
      <a>Learn More</a>
      <Popup>
        <h2>Help us meet the challenge</h2>
        <p>
          You have the chance to have an enormous impact on the TCNJ campus.
          Your support of the TCNJ Pavilion will be matched 50 cents on the
          dollar — up to $1 million — thanks to a generous contribution from Dr.
          Buddy Mayo, TCNJ professor emeritus.{" "}
        </p>
        <a href="#">Show your support</a>
      </Popup>
    </div>
  );
}
