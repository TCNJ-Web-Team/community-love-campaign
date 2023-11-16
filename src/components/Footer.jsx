export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <p id="contact-info" className="wrapper">
        <strong> Contact us: </strong>&nbsp;
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
        </a>
      </p>
      <hr />
      <img
        src="https://tcnj.edu/custom/campaigns/images/tcnj-logo-footer.png"
        alt="TCNJ"
      />
      <span>Copyright ©{currentYear}</span>
    </footer>
  );
}
