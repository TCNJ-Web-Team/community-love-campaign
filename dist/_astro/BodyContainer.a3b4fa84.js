import { j as p } from "./jsx-runtime.b9e88e07.js";
import { r as u } from "./index.03be2d59.js";
import {
  i as b,
  a as y,
  s as j,
  u as E,
  b as I,
  m as h,
} from "./motion.28893b4b.js";
function S(t, s, e) {
  var n;
  if (typeof t == "string") {
    let i = document;
    s && (b(!!s.current), (i = s.current)),
      e
        ? (((n = e[t]) !== null && n !== void 0) ||
            (e[t] = i.querySelectorAll(t)),
          (t = e[t]))
        : (t = i.querySelectorAll(t));
  } else t instanceof Element && (t = [t]);
  return Array.from(t || []);
}
function V(t) {
  t.values.forEach((s) => s.stop());
}
function W() {
  const t = new Set(),
    s = {
      subscribe(e) {
        return t.add(e), () => void t.delete(e);
      },
      start(e, n) {
        const i = [];
        return (
          t.forEach((r) => {
            i.push(y(r, e, { transitionOverride: n }));
          }),
          Promise.all(i)
        );
      },
      set(e) {
        return t.forEach((n) => {
          j(n, e);
        });
      },
      stop() {
        t.forEach((e) => {
          V(e);
        });
      },
      mount() {
        return () => {
          s.stop();
        };
      },
    };
  return s;
}
function k() {
  const t = E(W);
  return I(t.mount, []), t;
}
const w = k,
  A = { some: 0, all: 1 };
function Q(t, s, { root: e, margin: n, amount: i = "some" } = {}) {
  const r = S(t),
    a = new WeakMap(),
    d = (l) => {
      l.forEach((o) => {
        const m = a.get(o.target);
        if (o.isIntersecting !== !!m)
          if (o.isIntersecting) {
            const f = s(o);
            typeof f == "function" ? a.set(o.target, f) : c.unobserve(o.target);
          } else m && (m(o), a.delete(o.target));
      });
    },
    c = new IntersectionObserver(d, {
      root: e,
      rootMargin: n,
      threshold: typeof i == "number" ? i : A[i],
    });
  return r.forEach((l) => c.observe(l)), () => c.disconnect();
}
function B(t, { root: s, margin: e, amount: n, once: i = !1 } = {}) {
  const [r, a] = u.useState(!1);
  return (
    u.useEffect(() => {
      if (!t.current || (i && r)) return;
      const d = () => (a(!0), i ? void 0 : () => a(!1)),
        c = { root: (s && s.current) || void 0, margin: e, amount: n };
      return Q(t.current, d, c);
    }, [s, t, e, i]),
    r
  );
}
function L({ children: t, idName: s, scholarship: e }) {
  const n = e
      ? [
          {
            src: "./images/group-mobile.jpg",
            mediaQuery: "(max-width: 850px)",
          },
          { src: "./images/group-full.jpg", mediaQuery: "(max-width: 1050px)" },
          { src: "./images/group.png" },
        ]
      : [
          {
            src: "./images/walkthrough-mobile.jpg",
            mediaQuery: "(max-width: 850px)",
          },
          {
            src: "./images/walkthrough-full.jpg",
            mediaQuery: "(max-width: 1050px)",
          },
          { src: "./images/walkthrough.png" },
        ],
    i = u.useRef(null),
    r = B(i, { once: !0 }),
    a = w(),
    d = w(),
    c = w(),
    [l, o] = u.useState(n[n.length - 1].src),
    [m, f] = u.useState(!1);
  return (
    u.useEffect(() => {
      const v = () => {
          for (const g of n)
            if (g.mediaQuery && window.matchMedia(g.mediaQuery).matches) {
              o(g.src);
              return;
            }
          o(n[n.length - 1].src);
        },
        x = () => {
          window.innerWidth <= 1050 ? f(!0) : f(!1), v();
        };
      return (
        v(),
        window.addEventListener("resize", x),
        () => {
          window.removeEventListener("resize", x);
        }
      );
    }, []),
    u.useEffect(() => {
      r &&
        (a.start("visible"),
        d.start("visibleShield"),
        c.start("visibleYellow"));
    }, [r]),
    p.jsxs("div", {
      className: "wrapper",
      id: s,
      ref: i,
      children: [
        p.jsx(h.div, {
          variants: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
          initial: "hidden",
          animate: a,
          transition: { duration: 1, delay: 0.3 },
          className: "text-container",
          children: t,
        }),
        p.jsxs("div", {
          className: "overlay-container",
          children: [
            p.jsx(h.img, {
              src: l,
              alt: "Pavillion Rendering Walkthrough",
              id: "shield-image",
              variants: {
                hidden: { opacity: 0, x: -25 },
                visibleShield: { opacity: 1, x: 0 },
              },
              initial: "hidden",
              animate: d,
              transition: { duration: 0.75, delay: 0.9 },
            }),
            !m &&
              p.jsx(h.img, {
                src: "./images/yellow-bg-small.jpg",
                alt: "yellow background",
                id: "yellow-bg",
                variants: {
                  hidden: { opacity: 0, x: 95 },
                  visibleYellow: { opacity: 1, x: 0 },
                },
                initial: "hidden",
                animate: c,
                transition: { duration: 0.75, delay: 0.6 },
              }),
          ],
        }),
      ],
    })
  );
}
export { L as default };
