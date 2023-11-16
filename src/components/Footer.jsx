export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <p id="contact-info" className="wrapper">
        <strong> Contact us: </strong>
        <a href="mailto:tcnjfund@tcnj.edu">tcnjfund@tcnj.edu </a>
        or
        <a href="tel:+16097712218"> 609.771.2218 </a>/
        <a href="tel:+18003479621"> 800.347.9621</a>
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
