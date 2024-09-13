export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <p id="contact-info" className="wrapper">
        {/* <strong> Contact us: </strong>
        <a href="mailto:tcnjfund@tcnj.edu">
          <u>tcnjfund@tcnj.edu</u>{" "}
        </a>
        or&nbsp;
        <a href="tel:+16097712218">
          <u>609.771.2218</u>&nbsp;
        </a>
        /
        <a href="tel:+18003479621">
          &nbsp;<u>800.347.9621</u>
        </a> */}
        <strong>
          For information on individual opportunities for support, please
          contact Wendell Collins,
          <a href="mailto:collinsu@tcnj.edu">
            {" "}
            <u>collinsu@tcnj.edu</u>
          </a>
        </strong>
        <br />
        <br />{" "}
        <strong>
          For corporate and foundation opportunities, please contact Jennifer
          Kosakowski,{" "}
          <a href="mailto:kosakowj@tcnj.edu">
            <u>kosakowj@tcnj.edu</u>
          </a>
        </strong>
      </p>
      <hr />
      <img
        src="https://tcnj.edu/custom/campaigns/images/campaign-logo.svg"
        alt="TCNJ"
      />
      <span>Copyright ©{currentYear}</span>
    </footer>
  );
}
