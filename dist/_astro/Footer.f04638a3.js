import { j as t } from "./jsx-runtime.b9e88e07.js";
import "./index.03be2d59.js";
function n({ children: r }) {
  const o = new Date().getFullYear();
  return t.jsxs("footer", {
    id: "footer",
    children: [
      r,
      t.jsx("hr", {}),
      t.jsx("img", {
        src: "https://tcnj.edu/custom/campaigns/images/tcnj-logo-footer.png",
        alt: "TCNJ",
      }),
      t.jsxs("span", { children: ["Copyright ©", o] }),
    ],
  });
}
export { n as default };
