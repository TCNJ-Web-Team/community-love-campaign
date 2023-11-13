export default function Footer({ children }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      {children}
      <hr />
      <img
        src="https://tcnj.edu/custom/campaigns/images/tcnj-logo-footer.png"
        alt="TCNJ"
      />
      <span>Copyright ©{currentYear}</span>
    </footer>
  );
}
