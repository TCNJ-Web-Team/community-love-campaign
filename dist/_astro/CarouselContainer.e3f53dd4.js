import { j as L } from "./jsx-runtime.b9e88e07.js";
import { r as O, R as _ } from "./index.03be2d59.js";
/* empty css                       */ function ge(t) {
  return (
    t !== null &&
    typeof t == "object" &&
    "constructor" in t &&
    t.constructor === Object
  );
}
function me(t, e) {
  t === void 0 && (t = {}),
    e === void 0 && (e = {}),
    Object.keys(e).forEach((i) => {
      typeof t[i] > "u"
        ? (t[i] = e[i])
        : ge(e[i]) &&
          ge(t[i]) &&
          Object.keys(e[i]).length > 0 &&
          me(t[i], e[i]);
    });
}
const Ce = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function W() {
  const t = typeof document < "u" ? document : {};
  return me(t, Ce), t;
}
const Re = {
  document: Ce,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  },
};
function N() {
  const t = typeof window < "u" ? window : {};
  return me(t, Re), t;
}
function ke(t) {
  return (
    t === void 0 && (t = ""),
    t
      .trim()
      .split(" ")
      .filter((e) => !!e.trim())
  );
}
function Fe(t) {
  const e = t;
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null;
    } catch {}
    try {
      delete e[i];
    } catch {}
  });
}
function ce(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function $() {
  return Date.now();
}
function $e(t) {
  const e = N();
  let i;
  return (
    e.getComputedStyle && (i = e.getComputedStyle(t, null)),
    !i && t.currentStyle && (i = t.currentStyle),
    i || (i = t.style),
    i
  );
}
function He(t, e) {
  e === void 0 && (e = "x");
  const i = N();
  let s, n, r;
  const o = $e(t);
  return (
    i.WebKitCSSMatrix
      ? ((n = o.transform || o.webkitTransform),
        n.split(",").length > 6 &&
          (n = n
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (r = new i.WebKitCSSMatrix(n === "none" ? "" : n)))
      : ((r =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    e === "x" &&
      (i.WebKitCSSMatrix
        ? (n = r.m41)
        : s.length === 16
        ? (n = parseFloat(s[12]))
        : (n = parseFloat(s[4]))),
    e === "y" &&
      (i.WebKitCSSMatrix
        ? (n = r.m42)
        : s.length === 16
        ? (n = parseFloat(s[13]))
        : (n = parseFloat(s[5]))),
    n || 0
  );
}
function Y(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object"
  );
}
function We(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? t instanceof HTMLElement
    : t && (t.nodeType === 1 || t.nodeType === 11);
}
function G() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    e = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (s != null && !We(s)) {
      const n = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, o = n.length; r < o; r += 1) {
        const l = n[r],
          a = Object.getOwnPropertyDescriptor(s, l);
        a !== void 0 &&
          a.enumerable &&
          (Y(t[l]) && Y(s[l])
            ? s[l].__swiper__
              ? (t[l] = s[l])
              : G(t[l], s[l])
            : !Y(t[l]) && Y(s[l])
            ? ((t[l] = {}), s[l].__swiper__ ? (t[l] = s[l]) : G(t[l], s[l]))
            : (t[l] = s[l]));
      }
    }
  }
  return t;
}
function Z(t, e, i) {
  t.style.setProperty(e, i);
}
function Me(t) {
  let { swiper: e, targetPosition: i, side: s } = t;
  const n = N(),
    r = -e.translate;
  let o = null,
    l;
  const a = e.params.speed;
  (e.wrapperEl.style.scrollSnapType = "none"),
    n.cancelAnimationFrame(e.cssModeFrameID);
  const c = i > r ? "next" : "prev",
    d = (m, p) => (c === "next" && m >= p) || (c === "prev" && m <= p),
    u = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const m = Math.max(Math.min((l - o) / a, 1), 0),
        p = 0.5 - Math.cos(m * Math.PI) / 2;
      let h = r + p * (i - r);
      if ((d(h, i) && (h = i), e.wrapperEl.scrollTo({ [s]: h }), d(h, i))) {
        (e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (e.wrapperEl.style.overflow = ""), e.wrapperEl.scrollTo({ [s]: h });
          }),
          n.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = n.requestAnimationFrame(u);
    };
  u();
}
function j(t, e) {
  return e === void 0 && (e = ""), [...t.children].filter((i) => i.matches(e));
}
function Q(t) {
  try {
    console.warn(t);
    return;
  } catch {}
}
function ee(t, e) {
  e === void 0 && (e = []);
  const i = document.createElement(t);
  return i.classList.add(...(Array.isArray(e) ? e : ke(e))), i;
}
function qe(t, e) {
  const i = [];
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), (t = s);
  }
  return i;
}
function Ye(t, e) {
  const i = [];
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), (t = s);
  }
  return i;
}
function F(t, e) {
  return N().getComputedStyle(t, null).getPropertyValue(e);
}
function ve(t) {
  let e = t,
    i;
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (i += 1);
    return i;
  }
}
function Xe(t, e) {
  const i = [];
  let s = t.parentElement;
  for (; s; ) e ? s.matches(e) && i.push(s) : i.push(s), (s = s.parentElement);
  return i;
}
function se(t, e) {
  function i(s) {
    s.target === t && (e.call(t, s), t.removeEventListener("transitionend", i));
  }
  e && t.addEventListener("transitionend", i);
}
function we(t, e, i) {
  const s = N();
  return i
    ? t[e === "width" ? "offsetWidth" : "offsetHeight"] +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
        ) +
        parseFloat(
          s
            .getComputedStyle(t, null)
            .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
        )
    : t.offsetWidth;
}
let re;
function Ue() {
  const t = N(),
    e = W();
  return {
    smoothScroll:
      e.documentElement &&
      e.documentElement.style &&
      "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in t ||
      (t.DocumentTouch && e instanceof t.DocumentTouch)
    ),
  };
}
function Ie() {
  return re || (re = Ue()), re;
}
let ne;
function Ke(t) {
  let { userAgent: e } = t === void 0 ? {} : t;
  const i = Ie(),
    s = N(),
    n = s.navigator.platform,
    r = e || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = s.screen.width,
    a = s.screen.height,
    c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = r.match(/(iPad).*OS\s([\d_]+)/);
  const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    m = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = n === "Win32";
  let h = n === "MacIntel";
  const v = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !d &&
      h &&
      i.touch &&
      v.indexOf(`${l}x${a}`) >= 0 &&
      ((d = r.match(/(Version)\/([\d.]+)/)),
      d || (d = [0, 1, "13_0_0"]),
      (h = !1)),
    c && !p && ((o.os = "android"), (o.android = !0)),
    (d || m || u) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Ze(t) {
  return t === void 0 && (t = {}), ne || (ne = Ke(t)), ne;
}
let ae;
function Je() {
  const t = N();
  let e = !1;
  function i() {
    const s = t.navigator.userAgent.toLowerCase();
    return (
      s.indexOf("safari") >= 0 &&
      s.indexOf("chrome") < 0 &&
      s.indexOf("android") < 0
    );
  }
  if (i()) {
    const s = String(t.navigator.userAgent);
    if (s.includes("Version/")) {
      const [n, r] = s
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((o) => Number(o));
      e = n < 16 || (n === 16 && r < 2);
    }
  }
  return {
    isSafari: e || i(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      t.navigator.userAgent
    ),
  };
}
function Qe() {
  return ae || (ae = Je()), ae;
}
function et(t) {
  let { swiper: e, on: i, emit: s } = t;
  const n = N();
  let r = null,
    o = null;
  const l = () => {
      !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
    },
    a = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((r = new ResizeObserver((u) => {
          o = n.requestAnimationFrame(() => {
            const { width: m, height: p } = e;
            let h = m,
              v = p;
            u.forEach((w) => {
              let { contentBoxSize: f, contentRect: b, target: g } = w;
              (g && g !== e.el) ||
                ((h = b ? b.width : (f[0] || f).inlineSize),
                (v = b ? b.height : (f[0] || f).blockSize));
            }),
              (h !== m || v !== p) && l();
          });
        })),
        r.observe(e.el));
    },
    c = () => {
      o && n.cancelAnimationFrame(o),
        r && r.unobserve && e.el && (r.unobserve(e.el), (r = null));
    },
    d = () => {
      !e || e.destroyed || !e.initialized || s("orientationchange");
    };
  i("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      a();
      return;
    }
    n.addEventListener("resize", l), n.addEventListener("orientationchange", d);
  }),
    i("destroy", () => {
      c(),
        n.removeEventListener("resize", l),
        n.removeEventListener("orientationchange", d);
    });
}
function tt(t) {
  let { swiper: e, extendParams: i, on: s, emit: n } = t;
  const r = [],
    o = N(),
    l = function (d, u) {
      u === void 0 && (u = {});
      const m = o.MutationObserver || o.WebkitMutationObserver,
        p = new m((h) => {
          if (e.__preventObserver__) return;
          if (h.length === 1) {
            n("observerUpdate", h[0]);
            return;
          }
          const v = function () {
            n("observerUpdate", h[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(v)
            : o.setTimeout(v, 0);
        });
      p.observe(d, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: typeof u.childList > "u" ? !0 : u.childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData,
      }),
        r.push(p);
    },
    a = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const d = Xe(e.hostEl);
          for (let u = 0; u < d.length; u += 1) l(d[u]);
        }
        l(e.hostEl, { childList: e.params.observeSlideChildren }),
          l(e.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      r.forEach((d) => {
        d.disconnect();
      }),
        r.splice(0, r.length);
    };
  i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", a),
    s("destroy", c);
}
var it = {
  on(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    const n = i ? "unshift" : "push";
    return (
      t.split(" ").forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][n](e);
      }),
      s
    );
  },
  once(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
    function n() {
      s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
        o[l] = arguments[l];
      e.apply(s, o);
    }
    return (n.__emitterProxy = e), s.on(t, n, i);
  },
  onAny(t, e) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function") return i;
    const s = e ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const i = e.eventsAnyListeners.indexOf(t);
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
  },
  off(t, e) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        t.split(" ").forEach((s) => {
          typeof e > "u"
            ? (i.eventsListeners[s] = [])
            : i.eventsListeners[s] &&
              i.eventsListeners[s].forEach((n, r) => {
                (n === e || (n.__emitterProxy && n.__emitterProxy === e)) &&
                  i.eventsListeners[s].splice(r, 1);
              });
        }),
      i
    );
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t;
    let e, i, s;
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((e = r[0]), (i = r.slice(1, r.length)), (s = t))
        : ((e = r[0].events), (i = r[0].data), (s = r[0].context || t)),
      i.unshift(s),
      (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((c) => {
            c.apply(s, [a, ...i]);
          }),
          t.eventsListeners &&
            t.eventsListeners[a] &&
            t.eventsListeners[a].forEach((c) => {
              c.apply(s, i);
            });
      }),
      t
    );
  },
};
function st() {
  const t = this;
  let e, i;
  const s = t.el;
  typeof t.params.width < "u" && t.params.width !== null
    ? (e = t.params.width)
    : (e = s.clientWidth),
    typeof t.params.height < "u" && t.params.height !== null
      ? (i = t.params.height)
      : (i = s.clientHeight),
    !((e === 0 && t.isHorizontal()) || (i === 0 && t.isVertical())) &&
      ((e =
        e -
        parseInt(F(s, "padding-left") || 0, 10) -
        parseInt(F(s, "padding-right") || 0, 10)),
      (i =
        i -
        parseInt(F(s, "padding-top") || 0, 10) -
        parseInt(F(s, "padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(t, {
        width: e,
        height: i,
        size: t.isHorizontal() ? e : i,
      }));
}
function rt() {
  const t = this;
  function e(T, E) {
    return parseFloat(T.getPropertyValue(t.getDirectionLabel(E)) || 0);
  }
  const i = t.params,
    { wrapperEl: s, slidesEl: n, size: r, rtlTranslate: o, wrongRTL: l } = t,
    a = t.virtual && i.virtual.enabled,
    c = a ? t.virtual.slides.length : t.slides.length,
    d = j(n, `.${t.params.slideClass}, swiper-slide`),
    u = a ? t.virtual.slides.length : d.length;
  let m = [];
  const p = [],
    h = [];
  let v = i.slidesOffsetBefore;
  typeof v == "function" && (v = i.slidesOffsetBefore.call(t));
  let w = i.slidesOffsetAfter;
  typeof w == "function" && (w = i.slidesOffsetAfter.call(t));
  const f = t.snapGrid.length,
    b = t.slidesGrid.length;
  let g = i.spaceBetween,
    S = -v,
    C = 0,
    I = 0;
  if (typeof r > "u") return;
  typeof g == "string" && g.indexOf("%") >= 0
    ? (g = (parseFloat(g.replace("%", "")) / 100) * r)
    : typeof g == "string" && (g = parseFloat(g)),
    (t.virtualSize = -g),
    d.forEach((T) => {
      o ? (T.style.marginLeft = "") : (T.style.marginRight = ""),
        (T.style.marginBottom = ""),
        (T.style.marginTop = "");
    }),
    i.centeredSlides &&
      i.cssMode &&
      (Z(s, "--swiper-centered-offset-before", ""),
      Z(s, "--swiper-centered-offset-after", ""));
  const A = i.grid && i.grid.rows > 1 && t.grid;
  A ? t.grid.initSlides(d) : t.grid && t.grid.unsetSlides();
  let P;
  const x =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (T) => typeof i.breakpoints[T].slidesPerView < "u"
    ).length > 0;
  for (let T = 0; T < u; T += 1) {
    P = 0;
    let E;
    if (
      (d[T] && (E = d[T]),
      A && t.grid.updateSlide(T, E, d),
      !(d[T] && F(E, "display") === "none"))
    ) {
      if (i.slidesPerView === "auto") {
        x && (d[T].style[t.getDirectionLabel("width")] = "");
        const M = getComputedStyle(E),
          y = E.style.transform,
          z = E.style.webkitTransform;
        if (
          (y && (E.style.transform = "none"),
          z && (E.style.webkitTransform = "none"),
          i.roundLengths)
        )
          P = t.isHorizontal() ? we(E, "width", !0) : we(E, "height", !0);
        else {
          const D = e(M, "width"),
            R = e(M, "padding-left"),
            ie = e(M, "padding-right"),
            K = e(M, "margin-left"),
            V = e(M, "margin-right"),
            B = M.getPropertyValue("box-sizing");
          if (B && B === "border-box") P = D + K + V;
          else {
            const { clientWidth: Be, offsetWidth: je } = E;
            P = D + R + ie + K + V + (je - Be);
          }
        }
        y && (E.style.transform = y),
          z && (E.style.webkitTransform = z),
          i.roundLengths && (P = Math.floor(P));
      } else
        (P = (r - (i.slidesPerView - 1) * g) / i.slidesPerView),
          i.roundLengths && (P = Math.floor(P)),
          d[T] && (d[T].style[t.getDirectionLabel("width")] = `${P}px`);
      d[T] && (d[T].swiperSlideSize = P),
        h.push(P),
        i.centeredSlides
          ? ((S = S + P / 2 + C / 2 + g),
            C === 0 && T !== 0 && (S = S - r / 2 - g),
            T === 0 && (S = S - r / 2 - g),
            Math.abs(S) < 1 / 1e3 && (S = 0),
            i.roundLengths && (S = Math.floor(S)),
            I % i.slidesPerGroup === 0 && m.push(S),
            p.push(S))
          : (i.roundLengths && (S = Math.floor(S)),
            (I - Math.min(t.params.slidesPerGroupSkip, I)) %
              t.params.slidesPerGroup ===
              0 && m.push(S),
            p.push(S),
            (S = S + P + g)),
        (t.virtualSize += P + g),
        (C = P),
        (I += 1);
    }
  }
  if (
    ((t.virtualSize = Math.max(t.virtualSize, r) + w),
    o &&
      l &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      (s.style.width = `${t.virtualSize + g}px`),
    i.setWrapperSize &&
      (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + g}px`),
    A && t.grid.updateWrapperSize(P, m),
    !i.centeredSlides)
  ) {
    const T = [];
    for (let E = 0; E < m.length; E += 1) {
      let M = m[E];
      i.roundLengths && (M = Math.floor(M)),
        m[E] <= t.virtualSize - r && T.push(M);
    }
    (m = T),
      Math.floor(t.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 &&
        m.push(t.virtualSize - r);
  }
  if (a && i.loop) {
    const T = h[0] + g;
    if (i.slidesPerGroup > 1) {
      const E = Math.ceil(
          (t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup
        ),
        M = T * i.slidesPerGroup;
      for (let y = 0; y < E; y += 1) m.push(m[m.length - 1] + M);
    }
    for (let E = 0; E < t.virtual.slidesBefore + t.virtual.slidesAfter; E += 1)
      i.slidesPerGroup === 1 && m.push(m[m.length - 1] + T),
        p.push(p[p.length - 1] + T),
        (t.virtualSize += T);
  }
  if ((m.length === 0 && (m = [0]), g !== 0)) {
    const T =
      t.isHorizontal() && o ? "marginLeft" : t.getDirectionLabel("marginRight");
    d.filter((E, M) =>
      !i.cssMode || i.loop ? !0 : M !== d.length - 1
    ).forEach((E) => {
      E.style[T] = `${g}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let T = 0;
    h.forEach((M) => {
      T += M + (g || 0);
    }),
      (T -= g);
    const E = T - r;
    m = m.map((M) => (M <= 0 ? -v : M > E ? E + w : M));
  }
  if (i.centerInsufficientSlides) {
    let T = 0;
    if (
      (h.forEach((E) => {
        T += E + (g || 0);
      }),
      (T -= g),
      T < r)
    ) {
      const E = (r - T) / 2;
      m.forEach((M, y) => {
        m[y] = M - E;
      }),
        p.forEach((M, y) => {
          p[y] = M + E;
        });
    }
  }
  if (
    (Object.assign(t, {
      slides: d,
      snapGrid: m,
      slidesGrid: p,
      slidesSizesGrid: h,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    Z(s, "--swiper-centered-offset-before", `${-m[0]}px`),
      Z(
        s,
        "--swiper-centered-offset-after",
        `${t.size / 2 - h[h.length - 1] / 2}px`
      );
    const T = -t.snapGrid[0],
      E = -t.slidesGrid[0];
    (t.snapGrid = t.snapGrid.map((M) => M + T)),
      (t.slidesGrid = t.slidesGrid.map((M) => M + E));
  }
  if (
    (u !== c && t.emit("slidesLengthChange"),
    m.length !== f &&
      (t.params.watchOverflow && t.checkOverflow(),
      t.emit("snapGridLengthChange")),
    p.length !== b && t.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && t.updateSlidesOffset(),
    !a && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const T = `${i.containerModifierClass}backface-hidden`,
      E = t.el.classList.contains(T);
    u <= i.maxBackfaceHiddenSlides
      ? E || t.el.classList.add(T)
      : E && t.el.classList.remove(T);
  }
}
function nt(t) {
  const e = this,
    i = [],
    s = e.virtual && e.params.virtual.enabled;
  let n = 0,
    r;
  typeof t == "number"
    ? e.setTransition(t)
    : t === !0 && e.setTransition(e.params.speed);
  const o = (l) => (s ? e.slides[e.getSlideIndexByData(l)] : e.slides[l]);
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((l) => {
        i.push(l);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const l = e.activeIndex + r;
        if (l > e.slides.length && !s) break;
        i.push(o(l));
      }
  else i.push(o(e.activeIndex));
  for (r = 0; r < i.length; r += 1)
    if (typeof i[r] < "u") {
      const l = i[r].offsetHeight;
      n = l > n ? l : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function at() {
  const t = this,
    e = t.slides,
    i = t.isElement
      ? t.isHorizontal()
        ? t.wrapperEl.offsetLeft
        : t.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset =
      (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) -
      i -
      t.cssOverflowAdjustment();
}
function lt(t) {
  t === void 0 && (t = (this && this.translate) || 0);
  const e = this,
    i = e.params,
    { slides: s, rtlTranslate: n, snapGrid: r } = e;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -t;
  n && (o = t),
    s.forEach((a) => {
      a.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass);
    }),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  let l = i.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * e.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < s.length; a += 1) {
    const c = s[a];
    let d = c.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
    const u =
        (o + (i.centeredSlides ? e.minTranslate() : 0) - d) /
        (c.swiperSlideSize + l),
      m =
        (o - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - d) /
        (c.swiperSlideSize + l),
      p = -(o - d),
      h = p + e.slidesSizesGrid[a],
      v = p >= 0 && p <= e.size - e.slidesSizesGrid[a];
    ((p >= 0 && p < e.size - 1) ||
      (h > 1 && h <= e.size) ||
      (p <= 0 && h >= e.size)) &&
      (e.visibleSlides.push(c),
      e.visibleSlidesIndexes.push(a),
      s[a].classList.add(i.slideVisibleClass)),
      v && s[a].classList.add(i.slideFullyVisibleClass),
      (c.progress = n ? -u : u),
      (c.originalProgress = n ? -m : m);
  }
}
function ot(t) {
  const e = this;
  if (typeof t > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    t = (e && e.translate && e.translate * d) || 0;
  }
  const i = e.params,
    s = e.maxTranslate() - e.minTranslate();
  let { progress: n, isBeginning: r, isEnd: o, progressLoop: l } = e;
  const a = r,
    c = o;
  if (s === 0) (n = 0), (r = !0), (o = !0);
  else {
    n = (t - e.minTranslate()) / s;
    const d = Math.abs(t - e.minTranslate()) < 1,
      u = Math.abs(t - e.maxTranslate()) < 1;
    (r = d || n <= 0), (o = u || n >= 1), d && (n = 0), u && (n = 1);
  }
  if (i.loop) {
    const d = e.getSlideIndexByData(0),
      u = e.getSlideIndexByData(e.slides.length - 1),
      m = e.slidesGrid[d],
      p = e.slidesGrid[u],
      h = e.slidesGrid[e.slidesGrid.length - 1],
      v = Math.abs(t);
    v >= m ? (l = (v - m) / h) : (l = (v + h - p) / h), l > 1 && (l -= 1);
  }
  Object.assign(e, { progress: n, progressLoop: l, isBeginning: r, isEnd: o }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
      e.updateSlidesProgress(t),
    r && !a && e.emit("reachBeginning toEdge"),
    o && !c && e.emit("reachEnd toEdge"),
    ((a && !r) || (c && !o)) && e.emit("fromEdge"),
    e.emit("progress", n);
}
function dt() {
  const t = this,
    { slides: e, params: i, slidesEl: s, activeIndex: n } = t,
    r = t.virtual && i.virtual.enabled,
    o = t.grid && i.grid && i.grid.rows > 1,
    l = (u) => j(s, `.${i.slideClass}${u}, swiper-slide${u}`)[0];
  e.forEach((u) => {
    u.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
  });
  let a, c, d;
  if (r)
    if (i.loop) {
      let u = n - t.virtual.slidesBefore;
      u < 0 && (u = t.virtual.slides.length + u),
        u >= t.virtual.slides.length && (u -= t.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${u}"]`));
    } else a = l(`[data-swiper-slide-index="${n}"]`);
  else
    o
      ? ((a = e.filter((u) => u.column === n)[0]),
        (d = e.filter((u) => u.column === n + 1)[0]),
        (c = e.filter((u) => u.column === n - 1)[0]))
      : (a = e[n]);
  a &&
    (a.classList.add(i.slideActiveClass),
    o
      ? (d && d.classList.add(i.slideNextClass),
        c && c.classList.add(i.slidePrevClass))
      : ((d = Ye(a, `.${i.slideClass}, swiper-slide`)[0]),
        i.loop && !d && (d = e[0]),
        d && d.classList.add(i.slideNextClass),
        (c = qe(a, `.${i.slideClass}, swiper-slide`)[0]),
        i.loop && !c === 0 && (c = e[e.length - 1]),
        c && c.classList.add(i.slidePrevClass))),
    t.emitSlidesClasses();
}
const J = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const i = () => (t.isElement ? "swiper-slide" : `.${t.params.slideClass}`),
      s = e.closest(i());
    if (s) {
      let n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
      !n &&
        t.isElement &&
        (s.shadowRoot
          ? (n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((n = s.shadowRoot.querySelector(
                  `.${t.params.lazyPreloaderClass}`
                )),
                n && n.remove());
            })),
        n && n.remove();
    }
  },
  le = (t, e) => {
    if (!t.slides[e]) return;
    const i = t.slides[e].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading");
  },
  ue = (t) => {
    if (!t || t.destroyed || !t.params) return;
    let e = t.params.lazyPreloadPrevNext;
    const i = t.slides.length;
    if (!i || !e || e < 0) return;
    e = Math.min(e, i);
    const s =
        t.params.slidesPerView === "auto"
          ? t.slidesPerViewDynamic()
          : Math.ceil(t.params.slidesPerView),
      n = t.activeIndex;
    if (t.params.grid && t.params.grid.rows > 1) {
      const o = n,
        l = [o - e];
      l.push(...Array.from({ length: e }).map((a, c) => o + s + c)),
        t.slides.forEach((a, c) => {
          l.includes(a.column) && le(t, c);
        });
      return;
    }
    const r = n + s - 1;
    if (t.params.rewind || t.params.loop)
      for (let o = n - e; o <= r + e; o += 1) {
        const l = ((o % i) + i) % i;
        (l < n || l > r) && le(t, l);
      }
    else
      for (let o = Math.max(n - e, 0); o <= Math.min(r + e, i - 1); o += 1)
        o !== n && (o > r || o < n) && le(t, o);
  };
function ct(t) {
  const { slidesGrid: e, params: i } = t,
    s = t.rtlTranslate ? t.translate : -t.translate;
  let n;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u"
      ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2
        ? (n = r)
        : s >= e[r] && s < e[r + 1] && (n = r + 1)
      : s >= e[r] && (n = r);
  return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function ut(t) {
  const e = this,
    i = e.rtlTranslate ? e.translate : -e.translate,
    { snapGrid: s, params: n, activeIndex: r, realIndex: o, snapIndex: l } = e;
  let a = t,
    c;
  const d = (p) => {
    let h = p - e.virtual.slidesBefore;
    return (
      h < 0 && (h = e.virtual.slides.length + h),
      h >= e.virtual.slides.length && (h -= e.virtual.slides.length),
      h
    );
  };
  if ((typeof a > "u" && (a = ct(e)), s.indexOf(i) >= 0)) c = s.indexOf(i);
  else {
    const p = Math.min(n.slidesPerGroupSkip, a);
    c = p + Math.floor((a - p) / n.slidesPerGroup);
  }
  if ((c >= s.length && (c = s.length - 1), a === r && !e.params.loop)) {
    c !== l && ((e.snapIndex = c), e.emit("snapIndexChange"));
    return;
  }
  if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(a);
    return;
  }
  const u = e.grid && n.grid && n.grid.rows > 1;
  let m;
  if (e.virtual && n.virtual.enabled && n.loop) m = d(a);
  else if (u) {
    const p = e.slides.filter((v) => v.column === a)[0];
    let h = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(h) && (h = Math.max(e.slides.indexOf(p), 0)),
      (m = Math.floor(h / n.grid.rows));
  } else if (e.slides[a]) {
    const p = e.slides[a].getAttribute("data-swiper-slide-index");
    p ? (m = parseInt(p, 10)) : (m = a);
  } else m = a;
  Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: c,
    previousRealIndex: o,
    realIndex: m,
    previousIndex: r,
    activeIndex: a,
  }),
    e.initialized && ue(e),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) &&
      (o !== m && e.emit("realIndexChange"), e.emit("slideChange"));
}
function ft(t, e) {
  const i = this,
    s = i.params;
  let n = t.closest(`.${s.slideClass}, swiper-slide`);
  !n &&
    i.isElement &&
    e &&
    e.length > 1 &&
    e.includes(t) &&
    [...e.slice(e.indexOf(t) + 1, e.length)].forEach((l) => {
      !n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l);
    });
  let r = !1,
    o;
  if (n) {
    for (let l = 0; l < i.slides.length; l += 1)
      if (i.slides[l] === n) {
        (r = !0), (o = l);
        break;
      }
  }
  if (n && r)
    (i.clickedSlide = n),
      i.virtual && i.params.virtual.enabled
        ? (i.clickedIndex = parseInt(
            n.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (i.clickedIndex = o);
  else {
    (i.clickedSlide = void 0), (i.clickedIndex = void 0);
    return;
  }
  s.slideToClickedSlide &&
    i.clickedIndex !== void 0 &&
    i.clickedIndex !== i.activeIndex &&
    i.slideToClickedSlide();
}
var pt = {
  updateSize: st,
  updateSlides: rt,
  updateAutoHeight: nt,
  updateSlidesOffset: at,
  updateSlidesProgress: lt,
  updateProgress: ot,
  updateSlidesClasses: dt,
  updateActiveIndex: ut,
  updateClickedSlide: ft,
};
function mt(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this,
    { params: i, rtlTranslate: s, translate: n, wrapperEl: r } = e;
  if (i.virtualTranslate) return s ? -n : n;
  if (i.cssMode) return n;
  let o = He(r, t);
  return (o += e.cssOverflowAdjustment()), s && (o = -o), o || 0;
}
function ht(t, e) {
  const i = this,
    { rtlTranslate: s, params: n, wrapperEl: r, progress: o } = i;
  let l = 0,
    a = 0;
  const c = 0;
  i.isHorizontal() ? (l = s ? -t : t) : (a = t),
    n.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? l : a),
    n.cssMode
      ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
          ? -l
          : -a)
      : n.virtualTranslate ||
        (i.isHorizontal()
          ? (l -= i.cssOverflowAdjustment())
          : (a -= i.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`));
  let d;
  const u = i.maxTranslate() - i.minTranslate();
  u === 0 ? (d = 0) : (d = (t - i.minTranslate()) / u),
    d !== o && i.updateProgress(t),
    i.emit("setTranslate", i.translate, e);
}
function gt() {
  return -this.snapGrid[0];
}
function vt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function wt(t, e, i, s, n) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    s === void 0 && (s = !0);
  const r = this,
    { params: o, wrapperEl: l } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    c = r.maxTranslate();
  let d;
  if (
    (s && t > a ? (d = a) : s && t < c ? (d = c) : (d = t),
    r.updateProgress(d),
    o.cssMode)
  ) {
    const u = r.isHorizontal();
    if (e === 0) l[u ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!r.support.smoothScroll)
        return (
          Me({ swiper: r, targetPosition: -d, side: u ? "left" : "top" }), !0
        );
      l.scrollTo({ [u ? "left" : "top"]: -d, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (r.setTransition(0),
        r.setTranslate(d),
        i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd")))
      : (r.setTransition(e),
        r.setTranslate(d),
        i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (m) {
              !r ||
                r.destroyed ||
                (m.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  i && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var St = {
  getTranslate: mt,
  setTranslate: ht,
  minTranslate: gt,
  maxTranslate: vt,
  translateTo: wt,
};
function bt(t, e) {
  const i = this;
  i.params.cssMode ||
    ((i.wrapperEl.style.transitionDuration = `${t}ms`),
    (i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : "")),
    i.emit("setTransition", t, e);
}
function Oe(t) {
  let { swiper: e, runCallbacks: i, direction: s, step: n } = t;
  const { activeIndex: r, previousIndex: o } = e;
  let l = s;
  if (
    (l || (r > o ? (l = "next") : r < o ? (l = "prev") : (l = "reset")),
    e.emit(`transition${n}`),
    i && r !== o)
  ) {
    if (l === "reset") {
      e.emit(`slideResetTransition${n}`);
      return;
    }
    e.emit(`slideChangeTransition${n}`),
      l === "next"
        ? e.emit(`slideNextTransition${n}`)
        : e.emit(`slidePrevTransition${n}`);
  }
}
function Tt(t, e) {
  t === void 0 && (t = !0);
  const i = this,
    { params: s } = i;
  s.cssMode ||
    (s.autoHeight && i.updateAutoHeight(),
    Oe({ swiper: i, runCallbacks: t, direction: e, step: "Start" }));
}
function xt(t, e) {
  t === void 0 && (t = !0);
  const i = this,
    { params: s } = i;
  (i.animating = !1),
    !s.cssMode &&
      (i.setTransition(0),
      Oe({ swiper: i, runCallbacks: t, direction: e, step: "End" }));
}
var Et = { setTransition: bt, transitionStart: Tt, transitionEnd: xt };
function yt(t, e, i, s, n) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let o = t;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: u,
    rtlTranslate: m,
    wrapperEl: p,
    enabled: h,
  } = r;
  if ((r.animating && l.preventInteractionOnTransition) || (!h && !s && !n))
    return !1;
  const v = Math.min(r.params.slidesPerGroupSkip, o);
  let w = v + Math.floor((o - v) / r.params.slidesPerGroup);
  w >= a.length && (w = a.length - 1);
  const f = -a[w];
  if (l.normalizeSlideIndex)
    for (let g = 0; g < c.length; g += 1) {
      const S = -Math.floor(f * 100),
        C = Math.floor(c[g] * 100),
        I = Math.floor(c[g + 1] * 100);
      typeof c[g + 1] < "u"
        ? S >= C && S < I - (I - C) / 2
          ? (o = g)
          : S >= C && S < I && (o = g + 1)
        : S >= C && (o = g);
    }
  if (
    r.initialized &&
    o !== u &&
    ((!r.allowSlideNext &&
      (m
        ? f > r.translate && f > r.minTranslate()
        : f < r.translate && f < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        f > r.translate &&
        f > r.maxTranslate() &&
        (u || 0) !== o))
  )
    return !1;
  o !== (d || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(f);
  let b;
  if (
    (o > u ? (b = "next") : o < u ? (b = "prev") : (b = "reset"),
    (m && -f === r.translate) || (!m && f === r.translate))
  )
    return (
      r.updateActiveIndex(o),
      l.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      l.effect !== "slide" && r.setTranslate(f),
      b !== "reset" && (r.transitionStart(i, b), r.transitionEnd(i, b)),
      !1
    );
  if (l.cssMode) {
    const g = r.isHorizontal(),
      S = m ? f : -f;
    if (e === 0) {
      const C = r.virtual && r.params.virtual.enabled;
      C &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        C && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[g ? "scrollLeft" : "scrollTop"] = S;
            }))
          : (p[g ? "scrollLeft" : "scrollTop"] = S),
        C &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
          });
    } else {
      if (!r.support.smoothScroll)
        return (
          Me({ swiper: r, targetPosition: S, side: g ? "left" : "top" }), !0
        );
      p.scrollTo({ [g ? "left" : "top"]: S, behavior: "smooth" });
    }
    return !0;
  }
  return (
    r.setTransition(e),
    r.setTranslate(f),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", e, s),
    r.transitionStart(i, b),
    e === 0
      ? r.transitionEnd(i, b)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (S) {
            !r ||
              r.destroyed ||
              (S.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(i, b)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function Pt(t, e, i, s) {
  t === void 0 && (t = 0),
    e === void 0 && (e = this.params.speed),
    i === void 0 && (i = !0),
    typeof t == "string" && (t = parseInt(t, 10));
  const n = this,
    r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let o = t;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
    else {
      let l;
      if (r) {
        const m = o * n.params.grid.rows;
        l = n.slides.filter(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
        )[0].column;
      } else l = n.getSlideIndexByData(o);
      const a = r
          ? Math.ceil(n.slides.length / n.params.grid.rows)
          : n.slides.length,
        { centeredSlides: c } = n.params;
      let d = n.params.slidesPerView;
      d === "auto"
        ? (d = n.slidesPerViewDynamic())
        : ((d = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
          c && d % 2 === 0 && (d = d + 1));
      let u = a - l < d;
      if ((c && (u = u || l < Math.ceil(d / 2)), u)) {
        const m = c
          ? l < n.activeIndex
            ? "prev"
            : "next"
          : l - n.activeIndex - 1 < n.params.slidesPerView
          ? "next"
          : "prev";
        n.loopFix({
          direction: m,
          slideTo: !0,
          activeSlideIndex: m === "next" ? l + 1 : l - a + 1,
          slideRealIndex: m === "next" ? n.realIndex : void 0,
        });
      }
      if (r) {
        const m = o * n.params.grid.rows;
        o = n.slides.filter(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === m
        )[0].column;
      } else o = n.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      n.slideTo(o, e, i, s);
    }),
    n
  );
}
function Ct(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    { enabled: n, params: r, animating: o } = s;
  if (!n) return s;
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
    c = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !c && r.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, t, e, i);
        }),
        !0
      );
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, t, e, i)
    : s.slideTo(s.activeIndex + a, t, e, i);
}
function Mt(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: c,
    } = s;
  if (!a) return s;
  const d = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (c && !d && n.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const u = l ? s.translate : -s.translate;
  function m(f) {
    return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
  }
  const p = m(u),
    h = r.map((f) => m(f));
  let v = r[h.indexOf(p) - 1];
  if (typeof v > "u" && n.cssMode) {
    let f;
    r.forEach((b, g) => {
      p >= b && (f = g);
    }),
      typeof f < "u" && (v = r[f > 0 ? f - 1 : f]);
  }
  let w = 0;
  if (
    (typeof v < "u" &&
      ((w = o.indexOf(v)),
      w < 0 && (w = s.activeIndex - 1),
      n.slidesPerView === "auto" &&
        n.slidesPerGroup === 1 &&
        n.slidesPerGroupAuto &&
        ((w = w - s.slidesPerViewDynamic("previous", !0) + 1),
        (w = Math.max(w, 0)))),
    n.rewind && s.isBeginning)
  ) {
    const f =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(f, t, e, i);
  } else if (n.loop && s.activeIndex === 0 && n.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(w, t, e, i);
      }),
      !0
    );
  return s.slideTo(w, t, e, i);
}
function It(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this;
  return s.slideTo(s.activeIndex, t, e, i);
}
function Ot(t, e, i, s) {
  t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0),
    s === void 0 && (s = 0.5);
  const n = this;
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r),
    l = o + Math.floor((r - o) / n.params.slidesPerGroup),
    a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[l]) {
    const c = n.snapGrid[l],
      d = n.snapGrid[l + 1];
    a - c > (d - c) * s && (r += n.params.slidesPerGroup);
  } else {
    const c = n.snapGrid[l - 1],
      d = n.snapGrid[l];
    a - c <= (d - c) * s && (r -= n.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, n.slidesGrid.length - 1)),
    n.slideTo(r, t, e, i)
  );
}
function Lt() {
  const t = this,
    { params: e, slidesEl: i } = t,
    s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let n = t.clickedIndex,
    r;
  const o = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating) return;
    (r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? n < t.loopedSlides - s / 2 ||
          n > t.slides.length - t.loopedSlides + s / 2
          ? (t.loopFix(),
            (n = t.getSlideIndex(
              j(i, `${o}[data-swiper-slide-index="${r}"]`)[0]
            )),
            ce(() => {
              t.slideTo(n);
            }))
          : t.slideTo(n)
        : n > t.slides.length - s
        ? (t.loopFix(),
          (n = t.getSlideIndex(
            j(i, `${o}[data-swiper-slide-index="${r}"]`)[0]
          )),
          ce(() => {
            t.slideTo(n);
          }))
        : t.slideTo(n);
  } else t.slideTo(n);
}
var zt = {
  slideTo: yt,
  slideToLoop: Pt,
  slideNext: Ct,
  slidePrev: Mt,
  slideReset: It,
  slideToClosest: Ot,
  slideToClickedSlide: Lt,
};
function At(t) {
  const e = this,
    { params: i, slidesEl: s } = e;
  if (!i.loop || (e.virtual && e.params.virtual.enabled)) return;
  const n = () => {
      j(s, `.${i.slideClass}, swiper-slide`).forEach((u, m) => {
        u.setAttribute("data-swiper-slide-index", m);
      });
    },
    r = e.grid && i.grid && i.grid.rows > 1,
    o = i.slidesPerGroup * (r ? i.grid.rows : 1),
    l = e.slides.length % o !== 0,
    a = r && e.slides.length % i.grid.rows !== 0,
    c = (d) => {
      for (let u = 0; u < d; u += 1) {
        const m = e.isElement
          ? ee("swiper-slide", [i.slideBlankClass])
          : ee("div", [i.slideClass, i.slideBlankClass]);
        e.slidesEl.append(m);
      }
    };
  if (l) {
    if (i.loopAddBlankSlides) {
      const d = o - (e.slides.length % o);
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      Q(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    n();
  } else if (a) {
    if (i.loopAddBlankSlides) {
      const d = i.grid.rows - (e.slides.length % i.grid.rows);
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      Q(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    n();
  } else n();
  e.loopFix({
    slideRealIndex: t,
    direction: i.centeredSlides ? void 0 : "next",
  });
}
function _t(t) {
  let {
    slideRealIndex: e,
    slideTo: i = !0,
    direction: s,
    setTranslate: n,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: l,
  } = t === void 0 ? {} : t;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: c,
      allowSlidePrev: d,
      allowSlideNext: u,
      slidesEl: m,
      params: p,
    } = a,
    { centeredSlides: h } = p;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && p.virtual.enabled)
  ) {
    i &&
      (!p.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : p.centeredSlides && a.snapIndex < p.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = d),
      (a.allowSlideNext = u),
      a.emit("loopFix");
    return;
  }
  let v = p.slidesPerView;
  v === "auto"
    ? (v = a.slidesPerViewDynamic())
    : ((v = Math.ceil(parseFloat(p.slidesPerView, 10))),
      h && v % 2 === 0 && (v = v + 1));
  const w = p.slidesPerGroupAuto ? v : p.slidesPerGroup;
  let f = w;
  f % w !== 0 && (f += w - (f % w)),
    (f += p.loopAdditionalSlides),
    (a.loopedSlides = f);
  const b = a.grid && p.grid && p.grid.rows > 1;
  c.length < v + f
    ? Q(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : b &&
      p.grid.fill === "row" &&
      Q(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const g = [],
    S = [];
  let C = a.activeIndex;
  typeof r > "u"
    ? (r = a.getSlideIndex(
        c.filter((y) => y.classList.contains(p.slideActiveClass))[0]
      ))
    : (C = r);
  const I = s === "next" || !s,
    A = s === "prev" || !s;
  let P = 0,
    x = 0;
  const T = b ? Math.ceil(c.length / p.grid.rows) : c.length,
    M = (b ? c[r].column : r) + (h && typeof n > "u" ? -v / 2 + 0.5 : 0);
  if (M < f) {
    P = Math.max(f - M, w);
    for (let y = 0; y < f - M; y += 1) {
      const z = y - Math.floor(y / T) * T;
      if (b) {
        const D = T - z - 1;
        for (let R = c.length - 1; R >= 0; R -= 1)
          c[R].column === D && g.push(R);
      } else g.push(T - z - 1);
    }
  } else if (M + v > T - f) {
    x = Math.max(M - (T - f * 2), w);
    for (let y = 0; y < x; y += 1) {
      const z = y - Math.floor(y / T) * T;
      b
        ? c.forEach((D, R) => {
            D.column === z && S.push(R);
          })
        : S.push(z);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    A &&
      g.forEach((y) => {
        (c[y].swiperLoopMoveDOM = !0),
          m.prepend(c[y]),
          (c[y].swiperLoopMoveDOM = !1);
      }),
    I &&
      S.forEach((y) => {
        (c[y].swiperLoopMoveDOM = !0),
          m.append(c[y]),
          (c[y].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    p.slidesPerView === "auto"
      ? a.updateSlides()
      : b &&
        ((g.length > 0 && A) || (S.length > 0 && I)) &&
        a.slides.forEach((y, z) => {
          a.grid.updateSlide(z, y, a.slides);
        }),
    p.watchSlidesProgress && a.updateSlidesOffset(),
    i)
  ) {
    if (g.length > 0 && A) {
      if (typeof e > "u") {
        const y = a.slidesGrid[C],
          D = a.slidesGrid[C + P] - y;
        l
          ? a.setTranslate(a.translate - D)
          : (a.slideTo(C + P, 0, !1, !0),
            n &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - D),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - D)));
      } else if (n) {
        const y = b ? g.length / p.grid.rows : g.length;
        a.slideTo(a.activeIndex + y, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (S.length > 0 && I)
      if (typeof e > "u") {
        const y = a.slidesGrid[C],
          D = a.slidesGrid[C - x] - y;
        l
          ? a.setTranslate(a.translate - D)
          : (a.slideTo(C - x, 0, !1, !0),
            n &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - D),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - D)));
      } else {
        const y = b ? S.length / p.grid.rows : S.length;
        a.slideTo(a.activeIndex - y, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = d),
    (a.allowSlideNext = u),
    a.controller && a.controller.control && !o)
  ) {
    const y = {
      slideRealIndex: e,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((z) => {
          !z.destroyed &&
            z.params.loop &&
            z.loopFix({
              ...y,
              slideTo: z.params.slidesPerView === p.slidesPerView ? i : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...y,
          slideTo:
            a.controller.control.params.slidesPerView === p.slidesPerView
              ? i
              : !1,
        });
  }
  a.emit("loopFix");
}
function Dt() {
  const t = this,
    { params: e, slidesEl: i } = t;
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return;
  t.recalcSlides();
  const s = [];
  t.slides.forEach((n) => {
    const r =
      typeof n.swiperSlideIndex > "u"
        ? n.getAttribute("data-swiper-slide-index") * 1
        : n.swiperSlideIndex;
    s[r] = n;
  }),
    t.slides.forEach((n) => {
      n.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((n) => {
      i.append(n);
    }),
    t.recalcSlides(),
    t.slideTo(t.realIndex, 0);
}
var Vt = { loopCreate: At, loopFix: _t, loopDestroy: Dt };
function Gt(t) {
  const e = this;
  if (
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0),
    (i.style.cursor = "move"),
    (i.style.cursor = t ? "grabbing" : "grab"),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      });
}
function Nt() {
  const t = this;
  (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode ||
    (t.isElement && (t.__preventObserver__ = !0),
    (t[
      t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
var Bt = { setGrabCursor: Gt, unsetGrabCursor: Nt };
function jt(t, e) {
  e === void 0 && (e = this);
  function i(s) {
    if (!s || s === W() || s === N()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(t);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
  }
  return i(e);
}
function Se(t, e, i) {
  const s = N(),
    { params: n } = t,
    r = n.edgeSwipeDetection,
    o = n.edgeSwipeThreshold;
  return r && (i <= o || i >= s.innerWidth - o)
    ? r === "prevent"
      ? (e.preventDefault(), !0)
      : !1
    : !0;
}
function Rt(t) {
  const e = this,
    i = W();
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  const n = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
    n.pointerId = s.pointerId;
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (n.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    Se(e, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: o, enabled: l } = e;
  if (
    !l ||
    (!r.simulateTouch && s.pointerType === "mouse") ||
    (e.animating && r.preventInteractionOnTransition)
  )
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = s.target;
  if (
    (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const c = !!r.noSwipingClass && r.noSwipingClass !== "",
    d = s.composedPath ? s.composedPath() : s.path;
  c && s.target && s.target.shadowRoot && d && (a = d[0]);
  const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    m = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (m ? jt(u, a) : a.closest(u))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
  (o.currentX = s.pageX), (o.currentY = s.pageY);
  const p = o.currentX,
    h = o.currentY;
  if (!Se(e, s, p)) return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = p),
    (o.startY = h),
    (n.touchStartTime = $()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    r.threshold > 0 && (n.allowThresholdMove = !1);
  let v = !0;
  a.matches(n.focusableElements) &&
    ((v = !1), a.nodeName === "SELECT" && (n.isTouched = !1)),
    i.activeElement &&
      i.activeElement.matches(n.focusableElements) &&
      i.activeElement !== a &&
      i.activeElement.blur();
  const w = v && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || w) &&
    !a.isContentEditable &&
    s.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      e.freeMode &&
      e.animating &&
      !r.cssMode &&
      e.freeMode.onTouchStart(),
    e.emit("touchStart", s);
}
function kt(t) {
  const e = W(),
    i = this,
    s = i.touchEventsData,
    { params: n, touches: r, rtlTranslate: o, enabled: l } = i;
  if (!l || (!n.simulateTouch && t.pointerType === "mouse")) return;
  let a = t;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (s.touchId !== null || a.pointerId !== s.pointerId))
  )
    return;
  let c;
  if (a.type === "touchmove") {
    if (
      ((c = [...a.changedTouches].filter((I) => I.identifier === s.touchId)[0]),
      !c || c.identifier !== s.touchId)
    )
      return;
  } else c = a;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
    return;
  }
  const d = c.pageX,
    u = c.pageY;
  if (a.preventedByNestedSwiper) {
    (r.startX = d), (r.startY = u);
    return;
  }
  if (!i.allowTouchMove) {
    a.target.matches(s.focusableElements) || (i.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, { startX: d, startY: u, currentX: d, currentY: u }),
        (s.touchStartTime = $()));
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (i.isVertical()) {
      if (
        (u < r.startY && i.translate <= i.maxTranslate()) ||
        (u > r.startY && i.translate >= i.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (d < r.startX && i.translate <= i.maxTranslate()) ||
      (d > r.startX && i.translate >= i.minTranslate())
    )
      return;
  }
  if (
    e.activeElement &&
    a.target === e.activeElement &&
    a.target.matches(s.focusableElements)
  ) {
    (s.isMoved = !0), (i.allowClick = !1);
    return;
  }
  s.allowTouchCallbacks && i.emit("touchMove", a),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = d),
    (r.currentY = u);
  const m = r.currentX - r.startX,
    p = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(m ** 2 + p ** 2) < i.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let I;
    (i.isHorizontal() && r.currentY === r.startY) ||
    (i.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : m * m + p * p >= 25 &&
        ((I = (Math.atan2(Math.abs(p), Math.abs(m)) * 180) / Math.PI),
        (s.isScrolling = i.isHorizontal()
          ? I > n.touchAngle
          : 90 - I > n.touchAngle));
  }
  if (
    (s.isScrolling && i.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling)
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (i.allowClick = !1),
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let h = i.isHorizontal() ? m : p,
    v = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement &&
    ((h = Math.abs(h) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
    (r.diff = h),
    (h *= n.touchRatio),
    o && ((h = -h), (v = -v));
  const w = i.touchesDirection;
  (i.swipeDirection = h > 0 ? "prev" : "next"),
    (i.touchesDirection = v > 0 ? "prev" : "next");
  const f = i.params.loop && !n.cssMode,
    b =
      (i.touchesDirection === "next" && i.allowSlideNext) ||
      (i.touchesDirection === "prev" && i.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (f && b && i.loopFix({ direction: i.swipeDirection }),
      (s.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating)
    ) {
      const I = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
      });
      i.wrapperEl.dispatchEvent(I);
    }
    (s.allowMomentumBounce = !1),
      n.grabCursor &&
        (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
        i.setGrabCursor(!0),
      i.emit("sliderFirstMove", a);
  }
  let g;
  if (
    (new Date().getTime(),
    s.isMoved &&
      s.allowThresholdMove &&
      w !== i.touchesDirection &&
      f &&
      b &&
      Math.abs(h) >= 1)
  ) {
    Object.assign(r, {
      startX: d,
      startY: u,
      currentX: d,
      currentY: u,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate);
    return;
  }
  i.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = h + s.startTranslate);
  let S = !0,
    C = n.resistanceRatio;
  if (
    (n.touchReleaseOnEdges && (C = 0),
    h > 0
      ? (f &&
          b &&
          !g &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (n.centeredSlides
              ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1]
              : i.minTranslate()) &&
          i.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > i.minTranslate() &&
          ((S = !1),
          n.resistance &&
            (s.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + s.startTranslate + h) ** C)))
      : h < 0 &&
        (f &&
          b &&
          !g &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (n.centeredSlides
              ? i.maxTranslate() +
                i.slidesSizesGrid[i.slidesSizesGrid.length - 1]
              : i.maxTranslate()) &&
          i.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              i.slides.length -
              (n.slidesPerView === "auto"
                ? i.slidesPerViewDynamic()
                : Math.ceil(parseFloat(n.slidesPerView, 10))),
          }),
        s.currentTranslate < i.maxTranslate() &&
          ((S = !1),
          n.resistance &&
            (s.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - s.startTranslate - h) ** C))),
    S && (a.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      !i.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
  )
    if (Math.abs(h) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = i.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !n.followFinger ||
    n.cssMode ||
    (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
      n.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(s.currentTranslate),
    i.setTranslate(s.currentTranslate));
}
function Ft(t) {
  const e = this,
    i = e.touchEventsData;
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  let n;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((n = [...s.changedTouches].filter((S) => S.identifier === i.touchId)[0]),
      !n || n.identifier !== i.touchId)
    )
      return;
  } else {
    if (i.touchId !== null || s.pointerId !== i.pointerId) return;
    n = s;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      s.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(s.type) &&
      (e.browser.isSafari || e.browser.isWebView)
    )
  )
    return;
  (i.pointerId = null), (i.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: c,
    enabled: d,
  } = e;
  if (!d || (!o.simulateTouch && s.pointerType === "mouse")) return;
  if (
    (i.allowTouchCallbacks && e.emit("touchEnd", s),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    i.isMoved && o.grabCursor && e.setGrabCursor(!1),
      (i.isMoved = !1),
      (i.startMoving = !1);
    return;
  }
  o.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const u = $(),
    m = u - i.touchStartTime;
  if (e.allowClick) {
    const S = s.path || (s.composedPath && s.composedPath());
    e.updateClickedSlide((S && S[0]) || s.target, S),
      e.emit("tap click", s),
      m < 300 &&
        u - i.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", s);
  }
  if (
    ((i.lastClickTime = $()),
    ce(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !e.swipeDirection ||
      (l.diff === 0 && !i.loopSwapReset) ||
      (i.currentTranslate === i.startTranslate && !i.loopSwapReset))
  ) {
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
  let p;
  if (
    (o.followFinger
      ? (p = a ? e.translate : -e.translate)
      : (p = -i.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  let h = 0,
    v = e.slidesSizesGrid[0];
  for (
    let S = 0;
    S < c.length;
    S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const C = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof c[S + C] < "u"
      ? p >= c[S] && p < c[S + C] && ((h = S), (v = c[S + C] - c[S]))
      : p >= c[S] && ((h = S), (v = c[c.length - 1] - c[c.length - 2]));
  }
  let w = null,
    f = null;
  o.rewind &&
    (e.isBeginning
      ? (f =
          o.virtual && o.virtual.enabled && e.virtual
            ? e.virtual.slides.length - 1
            : e.slides.length - 1)
      : e.isEnd && (w = 0));
  const b = (p - c[h]) / v,
    g = h < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (m > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (b >= o.longSwipesRatio
        ? e.slideTo(o.rewind && e.isEnd ? w : h + g)
        : e.slideTo(h)),
      e.swipeDirection === "prev" &&
        (b > 1 - o.longSwipesRatio
          ? e.slideTo(h + g)
          : f !== null && b < 0 && Math.abs(b) > o.longSwipesRatio
          ? e.slideTo(f)
          : e.slideTo(h));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl)
      ? s.target === e.navigation.nextEl
        ? e.slideTo(h + g)
        : e.slideTo(h)
      : (e.swipeDirection === "next" && e.slideTo(w !== null ? w : h + g),
        e.swipeDirection === "prev" && e.slideTo(f !== null ? f : h));
  }
}
function be() {
  const t = this,
    { params: e, el: i } = t;
  if (i && i.offsetWidth === 0) return;
  e.breakpoints && t.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = t,
    o = t.virtual && t.params.virtual.enabled;
  (t.allowSlideNext = !0),
    (t.allowSlidePrev = !0),
    t.updateSize(),
    t.updateSlides(),
    t.updateSlidesClasses();
  const l = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
  t.isEnd &&
  !t.isBeginning &&
  !t.params.centeredSlides &&
  !l
    ? t.slideTo(t.slides.length - 1, 0, !1, !0)
    : t.params.loop && !o
    ? t.slideToLoop(t.realIndex, 0, !1, !0)
    : t.slideTo(t.activeIndex, 0, !1, !0),
    t.autoplay &&
      t.autoplay.running &&
      t.autoplay.paused &&
      (clearTimeout(t.autoplay.resizeTimeout),
      (t.autoplay.resizeTimeout = setTimeout(() => {
        t.autoplay &&
          t.autoplay.running &&
          t.autoplay.paused &&
          t.autoplay.resume();
      }, 500))),
    (t.allowSlidePrev = n),
    (t.allowSlideNext = s),
    t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function $t(t) {
  const e = this;
  e.enabled &&
    (e.allowClick ||
      (e.params.preventClicks && t.preventDefault(),
      e.params.preventClicksPropagation &&
        e.animating &&
        (t.stopPropagation(), t.stopImmediatePropagation())));
}
function Ht() {
  const t = this,
    { wrapperEl: e, rtlTranslate: i, enabled: s } = t;
  if (!s) return;
  (t.previousTranslate = t.translate),
    t.isHorizontal()
      ? (t.translate = -e.scrollLeft)
      : (t.translate = -e.scrollTop),
    t.translate === 0 && (t.translate = 0),
    t.updateActiveIndex(),
    t.updateSlidesClasses();
  let n;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? (n = 0) : (n = (t.translate - t.minTranslate()) / r),
    n !== t.progress && t.updateProgress(i ? -t.translate : t.translate),
    t.emit("setTranslate", t.translate, !1);
}
function Wt(t) {
  const e = this;
  J(e, t.target),
    !(
      e.params.cssMode ||
      (e.params.slidesPerView !== "auto" && !e.params.autoHeight)
    ) && e.update();
}
function qt() {
  const t = this;
  t.documentTouchHandlerProceeded ||
    ((t.documentTouchHandlerProceeded = !0),
    t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"));
}
const Le = (t, e) => {
  const i = W(),
    { params: s, el: n, wrapperEl: r, device: o } = t,
    l = !!s.nested,
    a = e === "on" ? "addEventListener" : "removeEventListener",
    c = e;
  i[a]("touchstart", t.onDocumentTouchStart, { passive: !1, capture: l }),
    n[a]("touchstart", t.onTouchStart, { passive: !1 }),
    n[a]("pointerdown", t.onTouchStart, { passive: !1 }),
    i[a]("touchmove", t.onTouchMove, { passive: !1, capture: l }),
    i[a]("pointermove", t.onTouchMove, { passive: !1, capture: l }),
    i[a]("touchend", t.onTouchEnd, { passive: !0 }),
    i[a]("pointerup", t.onTouchEnd, { passive: !0 }),
    i[a]("pointercancel", t.onTouchEnd, { passive: !0 }),
    i[a]("touchcancel", t.onTouchEnd, { passive: !0 }),
    i[a]("pointerout", t.onTouchEnd, { passive: !0 }),
    i[a]("pointerleave", t.onTouchEnd, { passive: !0 }),
    i[a]("contextmenu", t.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      n[a]("click", t.onClick, !0),
    s.cssMode && r[a]("scroll", t.onScroll),
    s.updateOnWindowResize
      ? t[c](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          be,
          !0
        )
      : t[c]("observerUpdate", be, !0),
    n[a]("load", t.onLoad, { capture: !0 });
};
function Yt() {
  const t = this,
    { params: e } = t;
  (t.onTouchStart = Rt.bind(t)),
    (t.onTouchMove = kt.bind(t)),
    (t.onTouchEnd = Ft.bind(t)),
    (t.onDocumentTouchStart = qt.bind(t)),
    e.cssMode && (t.onScroll = Ht.bind(t)),
    (t.onClick = $t.bind(t)),
    (t.onLoad = Wt.bind(t)),
    Le(t, "on");
}
function Xt() {
  Le(this, "off");
}
var Ut = { attachEvents: Yt, detachEvents: Xt };
const Te = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function Kt() {
  const t = this,
    { realIndex: e, initialized: i, params: s, el: n } = t,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const o = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
  if (!o || t.currentBreakpoint === o) return;
  const a = (o in r ? r[o] : void 0) || t.originalParams,
    c = Te(t, s),
    d = Te(t, a),
    u = s.enabled;
  c && !d
    ? (n.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      t.emitContainerClasses())
    : !c &&
      d &&
      (n.classList.add(`${s.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && s.grid.fill === "column")) &&
        n.classList.add(`${s.containerModifierClass}grid-column`),
      t.emitContainerClasses()),
    ["navigation", "pagination", "scrollbar"].forEach((f) => {
      if (typeof a[f] > "u") return;
      const b = s[f] && s[f].enabled,
        g = a[f] && a[f].enabled;
      b && !g && t[f].disable(), !b && g && t[f].enable();
    });
  const m = a.direction && a.direction !== s.direction,
    p = s.loop && (a.slidesPerView !== s.slidesPerView || m),
    h = s.loop;
  m && i && t.changeDirection(), G(t.params, a);
  const v = t.params.enabled,
    w = t.params.loop;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev,
  }),
    u && !v ? t.disable() : !u && v && t.enable(),
    (t.currentBreakpoint = o),
    t.emit("_beforeBreakpoint", a),
    i &&
      (p
        ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides())
        : !h && w
        ? (t.loopCreate(e), t.updateSlides())
        : h && !w && t.loopDestroy()),
    t.emit("breakpoint", a);
}
function Zt(t, e, i) {
  if ((e === void 0 && (e = "window"), !t || (e === "container" && !i))) return;
  let s = !1;
  const n = N(),
    r = e === "window" ? n.innerHeight : i.clientHeight,
    o = Object.keys(t).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: r * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: c } = o[l];
    e === "window"
      ? n.matchMedia(`(min-width: ${c}px)`).matches && (s = a)
      : c <= i.clientWidth && (s = a);
  }
  return s || "max";
}
var Jt = { setBreakpoint: Kt, getBreakpoint: Zt };
function Qt(t, e) {
  const i = [];
  return (
    t.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((n) => {
            s[n] && i.push(e + n);
          })
        : typeof s == "string" && i.push(e + s);
    }),
    i
  );
}
function ei() {
  const t = this,
    { classNames: e, params: i, rtl: s, el: n, device: r } = t,
    o = Qt(
      [
        "initialized",
        i.direction,
        { "free-mode": t.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: s },
        { grid: i.grid && i.grid.rows > 1 },
        {
          "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { "watch-progress": i.watchSlidesProgress },
      ],
      i.containerModifierClass
    );
  e.push(...o), n.classList.add(...e), t.emitContainerClasses();
}
function ti() {
  const t = this,
    { el: e, classNames: i } = t;
  e.classList.remove(...i), t.emitContainerClasses();
}
var ii = { addClasses: ei, removeClasses: ti };
function si() {
  const t = this,
    { isLocked: e, params: i } = t,
    { slidesOffsetBefore: s } = i;
  if (s) {
    const n = t.slides.length - 1,
      r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
    t.isLocked = t.size > r;
  } else t.isLocked = t.snapGrid.length === 1;
  i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked),
    i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked),
    e && e !== t.isLocked && (t.isEnd = !1),
    e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var ri = { checkOverflow: si },
  fe = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function ni(t, e) {
  return function (s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0],
      r = s[n];
    if (typeof r != "object" || r === null) {
      G(e, s);
      return;
    }
    if (
      (t[n] === !0 && (t[n] = { enabled: !0 }),
      n === "navigation" &&
        t[n] &&
        t[n].enabled &&
        !t[n].prevEl &&
        !t[n].nextEl &&
        (t[n].auto = !0),
      ["pagination", "scrollbar"].indexOf(n) >= 0 &&
        t[n] &&
        t[n].enabled &&
        !t[n].el &&
        (t[n].auto = !0),
      !(n in t && "enabled" in r))
    ) {
      G(e, s);
      return;
    }
    typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0),
      t[n] || (t[n] = { enabled: !1 }),
      G(e, s);
  };
}
const oe = {
    eventsEmitter: it,
    update: pt,
    translate: St,
    transition: Et,
    slide: zt,
    loop: Vt,
    grabCursor: Bt,
    events: Ut,
    breakpoints: Jt,
    checkOverflow: ri,
    classes: ii,
  },
  de = {};
let he = class k {
  constructor() {
    let e, i;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
      n[r] = arguments[r];
    n.length === 1 &&
    n[0].constructor &&
    Object.prototype.toString.call(n[0]).slice(8, -1) === "Object"
      ? (i = n[0])
      : ([e, i] = n),
      i || (i = {}),
      (i = G({}, i)),
      e && !i.el && (i.el = e);
    const o = W();
    if (
      i.el &&
      typeof i.el == "string" &&
      o.querySelectorAll(i.el).length > 1
    ) {
      const d = [];
      return (
        o.querySelectorAll(i.el).forEach((u) => {
          const m = G({}, i, { el: u });
          d.push(new k(m));
        }),
        d
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = Ie()),
      (l.device = Ze({ userAgent: i.userAgent })),
      (l.browser = Qe()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
    const a = {};
    l.modules.forEach((d) => {
      d({
        params: i,
        swiper: l,
        extendParams: ni(i, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const c = G({}, fe, a);
    return (
      (l.params = G({}, c, de, i)),
      (l.originalParams = G({}, l.params)),
      (l.passedParams = G({}, i)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((d) => {
          l.on(d, l.params.on[d]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(e) {
    return this.isHorizontal()
      ? e
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[e];
  }
  getSlideIndex(e) {
    const { slidesEl: i, params: s } = this,
      n = j(i, `.${s.slideClass}, swiper-slide`),
      r = ve(n[0]);
    return ve(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(
      this.slides.filter(
        (i) => i.getAttribute("data-swiper-slide-index") * 1 === e
      )[0]
    );
  }
  recalcSlides() {
    const e = this,
      { slidesEl: i, params: s } = e;
    e.slides = j(i, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled &&
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, i) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = s.minTranslate(),
      o = (s.maxTranslate() - n) * e + n;
    s.translateTo(o, typeof i > "u" ? 0 : i),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = e.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed
      ? ""
      : e.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(i.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const i = [];
    e.slides.forEach((s) => {
      const n = e.getSlideClasses(s);
      i.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
    }),
      e.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = "current"), i === void 0 && (i = !1);
    const s = this,
      {
        params: n,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: c,
      } = s;
    let d = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let u = r[c] ? r[c].swiperSlideSize : 0,
        m;
      for (let p = c + 1; p < r.length; p += 1)
        r[p] &&
          !m &&
          ((u += r[p].swiperSlideSize), (d += 1), u > a && (m = !0));
      for (let p = c - 1; p >= 0; p -= 1)
        r[p] &&
          !m &&
          ((u += r[p].swiperSlideSize), (d += 1), u > a && (m = !0));
    } else if (e === "current")
      for (let u = c + 1; u < r.length; u += 1)
        (i ? o[u] + l[u] - o[c] < a : o[u] - o[c] < a) && (d += 1);
    else for (let u = c - 1; u >= 0; u -= 1) o[c] - o[u] < a && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: i, params: s } = e;
    s.breakpoints && e.setBreakpoint(),
      [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && J(e, o);
      }),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function n() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate,
        l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      n(), s.autoHeight && e.updateAutoHeight();
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        e.isEnd &&
        !s.centeredSlides
      ) {
        const o = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(o.length - 1, 0, !1, !0);
      } else r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n();
    }
    s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0);
    const s = this,
      n = s.params.direction;
    return (
      e || (e = n === "horizontal" ? "vertical" : "horizontal"),
      e === n ||
        (e !== "horizontal" && e !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
        s.el.classList.add(`${s.params.containerModifierClass}${e}`),
        s.emitContainerClasses(),
        (s.params.direction = e),
        s.slides.forEach((r) => {
          e === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        i && s.update()),
      s
    );
  }
  changeLanguageDirection(e) {
    const i = this;
    (i.rtl && e === "rtl") ||
      (!i.rtl && e === "ltr") ||
      ((i.rtl = e === "rtl"),
      (i.rtlTranslate = i.params.direction === "horizontal" && i.rtl),
      i.rtl
        ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "rtl"))
        : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "ltr")),
      i.update());
  }
  mount(e) {
    const i = this;
    if (i.mounted) return !0;
    let s = e || i.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = i),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName === "SWIPER-CONTAINER" &&
        (i.isElement = !0);
    const n = () =>
      `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() =>
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(n())
        : j(s, n())[0])();
    return (
      !o &&
        i.params.createElements &&
        ((o = ee("div", i.params.wrapperClass)),
        s.append(o),
        j(s, `.${i.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(i, {
        el: s,
        wrapperEl: o,
        slidesEl:
          i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: i.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl",
        rtlTranslate:
          i.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl"),
        wrongRTL: F(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const i = this;
    if (i.initialized || i.mount(e) === !1) return i;
    i.emit("beforeInit"),
      i.params.breakpoints && i.setBreakpoint(),
      i.addClasses(),
      i.updateSize(),
      i.updateSlides(),
      i.params.watchOverflow && i.checkOverflow(),
      i.params.grabCursor && i.enabled && i.setGrabCursor(),
      i.params.loop && i.virtual && i.params.virtual.enabled
        ? i.slideTo(
            i.params.initialSlide + i.virtual.slidesBefore,
            0,
            i.params.runCallbacksOnInit,
            !1,
            !0
          )
        : i.slideTo(
            i.params.initialSlide,
            0,
            i.params.runCallbacksOnInit,
            !1,
            !0
          ),
      i.params.loop && i.loopCreate(),
      i.attachEvents();
    const n = [...i.el.querySelectorAll('[loading="lazy"]')];
    return (
      i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
      n.forEach((r) => {
        r.complete
          ? J(i, r)
          : r.addEventListener("load", (o) => {
              J(i, o.target);
            });
      }),
      ue(i),
      (i.initialized = !0),
      ue(i),
      i.emit("init"),
      i.emit("afterInit"),
      i
    );
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0);
    const s = this,
      { params: n, el: r, wrapperEl: o, slides: l } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        i &&
          (s.removeClasses(),
          r.removeAttribute("style"),
          o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                n.slideVisibleClass,
                n.slideFullyVisibleClass,
                n.slideActiveClass,
                n.slideNextClass,
                n.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a);
        }),
        e !== !1 && ((s.el.swiper = null), Fe(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    G(de, e);
  }
  static get extendedDefaults() {
    return de;
  }
  static get defaults() {
    return fe;
  }
  static installModule(e) {
    k.prototype.__modules__ || (k.prototype.__modules__ = []);
    const i = k.prototype.__modules__;
    typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((i) => k.installModule(i)), k)
      : (k.installModule(e), k);
  }
};
Object.keys(oe).forEach((t) => {
  Object.keys(oe[t]).forEach((e) => {
    he.prototype[e] = oe[t][e];
  });
});
he.use([et, tt]);
const ze = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function H(t) {
  return (
    typeof t == "object" &&
    t !== null &&
    t.constructor &&
    Object.prototype.toString.call(t).slice(8, -1) === "Object" &&
    !t.__swiper__
  );
}
function q(t, e) {
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((s) => i.indexOf(s) < 0)
    .forEach((s) => {
      typeof t[s] > "u"
        ? (t[s] = e[s])
        : H(e[s]) && H(t[s]) && Object.keys(e[s]).length > 0
        ? e[s].__swiper__
          ? (t[s] = e[s])
          : q(t[s], e[s])
        : (t[s] = e[s]);
    });
}
function Ae(t) {
  return (
    t === void 0 && (t = {}),
    t.navigation &&
      typeof t.navigation.nextEl > "u" &&
      typeof t.navigation.prevEl > "u"
  );
}
function _e(t) {
  return t === void 0 && (t = {}), t.pagination && typeof t.pagination.el > "u";
}
function De(t) {
  return t === void 0 && (t = {}), t.scrollbar && typeof t.scrollbar.el > "u";
}
function Ve(t) {
  t === void 0 && (t = "");
  const e = t
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    i = [];
  return (
    e.forEach((s) => {
      i.indexOf(s) < 0 && i.push(s);
    }),
    i.join(" ")
  );
}
function ai(t) {
  return (
    t === void 0 && (t = ""),
    t
      ? t.includes("swiper-wrapper")
        ? t
        : `swiper-wrapper ${t}`
      : "swiper-wrapper"
  );
}
function li(t) {
  let {
    swiper: e,
    slides: i,
    passedParams: s,
    changedParams: n,
    nextEl: r,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a,
  } = t;
  const c = n.filter(
      (x) => x !== "children" && x !== "direction" && x !== "wrapperClass"
    ),
    {
      params: d,
      pagination: u,
      navigation: m,
      scrollbar: p,
      virtual: h,
      thumbs: v,
    } = e;
  let w, f, b, g, S, C, I, A;
  n.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    d.thumbs &&
    !d.thumbs.swiper &&
    (w = !0),
    n.includes("controller") &&
      s.controller &&
      s.controller.control &&
      d.controller &&
      !d.controller.control &&
      (f = !0),
    n.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || a) &&
      (d.pagination || d.pagination === !1) &&
      u &&
      !u.el &&
      (b = !0),
    n.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || l) &&
      (d.scrollbar || d.scrollbar === !1) &&
      p &&
      !p.el &&
      (g = !0),
    n.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || o) &&
      (s.navigation.nextEl || r) &&
      (d.navigation || d.navigation === !1) &&
      m &&
      !m.prevEl &&
      !m.nextEl &&
      (S = !0);
  const P = (x) => {
    e[x] &&
      (e[x].destroy(),
      x === "navigation"
        ? (e.isElement && (e[x].prevEl.remove(), e[x].nextEl.remove()),
          (d[x].prevEl = void 0),
          (d[x].nextEl = void 0),
          (e[x].prevEl = void 0),
          (e[x].nextEl = void 0))
        : (e.isElement && e[x].el.remove(),
          (d[x].el = void 0),
          (e[x].el = void 0)));
  };
  n.includes("loop") &&
    e.isElement &&
    (d.loop && !s.loop ? (C = !0) : !d.loop && s.loop ? (I = !0) : (A = !0)),
    c.forEach((x) => {
      if (H(d[x]) && H(s[x]))
        Object.assign(d[x], s[x]),
          (x === "navigation" || x === "pagination" || x === "scrollbar") &&
            "enabled" in s[x] &&
            !s[x].enabled &&
            P(x);
      else {
        const T = s[x];
        (T === !0 || T === !1) &&
        (x === "navigation" || x === "pagination" || x === "scrollbar")
          ? T === !1 && P(x)
          : (d[x] = s[x]);
      }
    }),
    c.includes("controller") &&
      !f &&
      e.controller &&
      e.controller.control &&
      d.controller &&
      d.controller.control &&
      (e.controller.control = d.controller.control),
    n.includes("children") && i && h && d.virtual.enabled
      ? ((h.slides = i), h.update(!0))
      : n.includes("virtual") &&
        h &&
        d.virtual.enabled &&
        (i && (h.slides = i), h.update(!0)),
    n.includes("children") && i && d.loop && (A = !0),
    w && v.init() && v.update(!0),
    f && (e.controller.control = d.controller.control),
    b &&
      (e.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        a.part.add("pagination"),
        e.el.appendChild(a)),
      a && (d.pagination.el = a),
      u.init(),
      u.render(),
      u.update()),
    g &&
      (e.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-scrollbar"),
        l.part.add("scrollbar"),
        e.el.appendChild(l)),
      l && (d.scrollbar.el = l),
      p.init(),
      p.updateSize(),
      p.setTranslate()),
    S &&
      (e.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          (r.innerHTML = e.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          e.el.appendChild(r)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = e.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          e.el.appendChild(o))),
      r && (d.navigation.nextEl = r),
      o && (d.navigation.prevEl = o),
      m.init(),
      m.update()),
    n.includes("allowSlideNext") && (e.allowSlideNext = s.allowSlideNext),
    n.includes("allowSlidePrev") && (e.allowSlidePrev = s.allowSlidePrev),
    n.includes("direction") && e.changeDirection(s.direction, !1),
    (C || A) && e.loopDestroy(),
    (I || A) && e.loopCreate(),
    e.update();
}
function oi(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = !0);
  const i = { on: {} },
    s = {},
    n = {};
  q(i, fe), (i._emitClasses = !0), (i.init = !1);
  const r = {},
    o = ze.map((a) => a.replace(/_/, "")),
    l = Object.assign({}, t);
  return (
    Object.keys(l).forEach((a) => {
      typeof t[a] > "u" ||
        (o.indexOf(a) >= 0
          ? H(t[a])
            ? ((i[a] = {}), (n[a] = {}), q(i[a], t[a]), q(n[a], t[a]))
            : ((i[a] = t[a]), (n[a] = t[a]))
          : a.search(/on[A-Z]/) === 0 && typeof t[a] == "function"
          ? e
            ? (s[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
            : (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = t[a])
          : (r[a] = t[a]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((a) => {
      i[a] === !0 && (i[a] = {}), i[a] === !1 && delete i[a];
    }),
    { params: i, passedParams: n, rest: r, events: s }
  );
}
function di(t, e) {
  let {
    el: i,
    nextEl: s,
    prevEl: n,
    paginationEl: r,
    scrollbarEl: o,
    swiper: l,
  } = t;
  Ae(e) &&
    s &&
    n &&
    ((l.params.navigation.nextEl = s),
    (l.originalParams.navigation.nextEl = s),
    (l.params.navigation.prevEl = n),
    (l.originalParams.navigation.prevEl = n)),
    _e(e) &&
      r &&
      ((l.params.pagination.el = r), (l.originalParams.pagination.el = r)),
    De(e) &&
      o &&
      ((l.params.scrollbar.el = o), (l.originalParams.scrollbar.el = o)),
    l.init(i);
}
function ci(t, e, i, s, n) {
  const r = [];
  if (!e) return r;
  const o = (a) => {
    r.indexOf(a) < 0 && r.push(a);
  };
  if (i && s) {
    const a = s.map(n),
      c = i.map(n);
    a.join("") !== c.join("") && o("children"),
      s.length !== i.length && o("children");
  }
  return (
    ze
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in t && a in e)
          if (H(t[a]) && H(e[a])) {
            const c = Object.keys(t[a]),
              d = Object.keys(e[a]);
            c.length !== d.length
              ? o(a)
              : (c.forEach((u) => {
                  t[a][u] !== e[a][u] && o(a);
                }),
                d.forEach((u) => {
                  t[a][u] !== e[a][u] && o(a);
                }));
          } else t[a] !== e[a] && o(a);
      }),
    r
  );
}
const ui = (t) => {
  !t ||
    t.destroyed ||
    !t.params.virtual ||
    (t.params.virtual && !t.params.virtual.enabled) ||
    (t.updateSlides(),
    t.updateProgress(),
    t.updateSlidesClasses(),
    t.parallax &&
      t.params.parallax &&
      t.params.parallax.enabled &&
      t.parallax.setTranslate());
};
function te() {
  return (
    (te = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var s in i)
              Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
          }
          return t;
        }),
    te.apply(this, arguments)
  );
}
function Ge(t) {
  return (
    t.type && t.type.displayName && t.type.displayName.includes("SwiperSlide")
  );
}
function Ne(t) {
  const e = [];
  return (
    _.Children.toArray(t).forEach((i) => {
      Ge(i)
        ? e.push(i)
        : i.props &&
          i.props.children &&
          Ne(i.props.children).forEach((s) => e.push(s));
    }),
    e
  );
}
function fi(t) {
  const e = [],
    i = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    _.Children.toArray(t).forEach((s) => {
      if (Ge(s)) e.push(s);
      else if (s.props && s.props.slot && i[s.props.slot])
        i[s.props.slot].push(s);
      else if (s.props && s.props.children) {
        const n = Ne(s.props.children);
        n.length > 0 ? n.forEach((r) => e.push(r)) : i["container-end"].push(s);
      } else i["container-end"].push(s);
    }),
    { slides: e, slots: i }
  );
}
function pi(t, e, i) {
  if (!i) return null;
  const s = (d) => {
      let u = d;
      return (
        d < 0 ? (u = e.length + d) : u >= e.length && (u = u - e.length), u
      );
    },
    n = t.isHorizontal()
      ? { [t.rtlTranslate ? "right" : "left"]: `${i.offset}px` }
      : { top: `${i.offset}px` },
    { from: r, to: o } = i,
    l = t.params.loop ? -e.length : 0,
    a = t.params.loop ? e.length * 2 : e.length,
    c = [];
  for (let d = l; d < a; d += 1) d >= r && d <= o && c.push(e[s(d)]);
  return c.map((d, u) =>
    _.cloneElement(d, { swiper: t, style: n, key: `slide-${u}` })
  );
}
function U(t, e) {
  return typeof window > "u" ? O.useEffect(t, e) : O.useLayoutEffect(t, e);
}
const xe = O.createContext(null),
  mi = O.createContext(null),
  pe = O.forwardRef(function (t, e) {
    let {
        className: i,
        tag: s = "div",
        wrapperTag: n = "div",
        children: r,
        onSwiper: o,
        ...l
      } = t === void 0 ? {} : t,
      a = !1;
    const [c, d] = O.useState("swiper"),
      [u, m] = O.useState(null),
      [p, h] = O.useState(!1),
      v = O.useRef(!1),
      w = O.useRef(null),
      f = O.useRef(null),
      b = O.useRef(null),
      g = O.useRef(null),
      S = O.useRef(null),
      C = O.useRef(null),
      I = O.useRef(null),
      A = O.useRef(null),
      { params: P, passedParams: x, rest: T, events: E } = oi(l),
      { slides: M, slots: y } = fi(r),
      z = () => {
        h(!p);
      };
    Object.assign(P.on, {
      _containerClasses(V, B) {
        d(B);
      },
    });
    const D = () => {
      Object.assign(P.on, E), (a = !0);
      const V = { ...P };
      if (
        (delete V.wrapperClass,
        (f.current = new he(V)),
        f.current.virtual && f.current.params.virtual.enabled)
      ) {
        f.current.virtual.slides = M;
        const B = {
          cache: !1,
          slides: M,
          renderExternal: m,
          renderExternalUpdate: !1,
        };
        q(f.current.params.virtual, B), q(f.current.originalParams.virtual, B);
      }
    };
    w.current || D(), f.current && f.current.on("_beforeBreakpoint", z);
    const R = () => {
        a ||
          !E ||
          !f.current ||
          Object.keys(E).forEach((V) => {
            f.current.on(V, E[V]);
          });
      },
      ie = () => {
        !E ||
          !f.current ||
          Object.keys(E).forEach((V) => {
            f.current.off(V, E[V]);
          });
      };
    O.useEffect(() => () => {
      f.current && f.current.off("_beforeBreakpoint", z);
    }),
      O.useEffect(() => {
        !v.current &&
          f.current &&
          (f.current.emitSlidesClasses(), (v.current = !0));
      }),
      U(() => {
        if ((e && (e.current = w.current), !!w.current))
          return (
            f.current.destroyed && D(),
            di(
              {
                el: w.current,
                nextEl: S.current,
                prevEl: C.current,
                paginationEl: I.current,
                scrollbarEl: A.current,
                swiper: f.current,
              },
              P
            ),
            o && o(f.current),
            () => {
              f.current && !f.current.destroyed && f.current.destroy(!0, !1);
            }
          );
      }, []),
      U(() => {
        R();
        const V = ci(x, b.current, M, g.current, (B) => B.key);
        return (
          (b.current = x),
          (g.current = M),
          V.length &&
            f.current &&
            !f.current.destroyed &&
            li({
              swiper: f.current,
              slides: M,
              passedParams: x,
              changedParams: V,
              nextEl: S.current,
              prevEl: C.current,
              scrollbarEl: A.current,
              paginationEl: I.current,
            }),
          () => {
            ie();
          }
        );
      }),
      U(() => {
        ui(f.current);
      }, [u]);
    function K() {
      return P.virtual
        ? pi(f.current, M, u)
        : M.map((V, B) =>
            _.cloneElement(V, { swiper: f.current, swiperSlideIndex: B })
          );
    }
    return _.createElement(
      s,
      te({ ref: w, className: Ve(`${c}${i ? ` ${i}` : ""}`) }, T),
      _.createElement(
        mi.Provider,
        { value: f.current },
        y["container-start"],
        _.createElement(
          n,
          { className: ai(P.wrapperClass) },
          y["wrapper-start"],
          K(),
          y["wrapper-end"]
        ),
        Ae(P) &&
          _.createElement(
            _.Fragment,
            null,
            _.createElement("div", { ref: C, className: "swiper-button-prev" }),
            _.createElement("div", { ref: S, className: "swiper-button-next" })
          ),
        De(P) &&
          _.createElement("div", { ref: A, className: "swiper-scrollbar" }),
        _e(P) &&
          _.createElement("div", { ref: I, className: "swiper-pagination" }),
        y["container-end"]
      )
    );
  });
pe.displayName = "Swiper";
const X = O.forwardRef(function (t, e) {
  let {
    tag: i = "div",
    children: s,
    className: n = "",
    swiper: r,
    zoom: o,
    lazy: l,
    virtualIndex: a,
    swiperSlideIndex: c,
    ...d
  } = t === void 0 ? {} : t;
  const u = O.useRef(null),
    [m, p] = O.useState("swiper-slide"),
    [h, v] = O.useState(!1);
  function w(S, C, I) {
    C === u.current && p(I);
  }
  U(() => {
    if (
      (typeof c < "u" && (u.current.swiperSlideIndex = c),
      e && (e.current = u.current),
      !(!u.current || !r))
    ) {
      if (r.destroyed) {
        m !== "swiper-slide" && p("swiper-slide");
        return;
      }
      return (
        r.on("_slideClass", w),
        () => {
          r && r.off("_slideClass", w);
        }
      );
    }
  }),
    U(() => {
      r && u.current && !r.destroyed && p(r.getSlideClasses(u.current));
    }, [r]);
  const f = {
      isActive: m.indexOf("swiper-slide-active") >= 0,
      isVisible: m.indexOf("swiper-slide-visible") >= 0,
      isPrev: m.indexOf("swiper-slide-prev") >= 0,
      isNext: m.indexOf("swiper-slide-next") >= 0,
    },
    b = () => (typeof s == "function" ? s(f) : s),
    g = () => {
      v(!0);
    };
  return _.createElement(
    i,
    te(
      {
        ref: u,
        className: Ve(`${m}${n ? ` ${n}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: g,
      },
      d
    ),
    o &&
      _.createElement(
        xe.Provider,
        { value: f },
        _.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          b(),
          l &&
            !h &&
            _.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !o &&
      _.createElement(
        xe.Provider,
        { value: f },
        b(),
        l &&
          !h &&
          _.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
X.displayName = "SwiperSlide";
const hi = (t) => {
  const [e, i] = O.useState({
      isPlaying: !1,
      progress: 0,
      speed: 1,
      isMuted: !1,
    }),
    s = () => {
      i({ ...e, isPlaying: !e.isPlaying });
    };
  O.useEffect(() => {
    e.isPlaying ? t.current.play() : t.current.pause();
  }, [e.isPlaying, t]);
  const n = () => {
      const a = (t.current.currentTime / t.current.duration) * 100;
      i({ ...e, progress: a });
    },
    r = (a) => {
      const c = Number(a.target.value);
      (t.current.currentTime = (t.current.duration / 100) * c),
        i({ ...e, progress: c });
    },
    o = (a) => {
      const c = Number(a.target.value);
      (t.current.playbackRate = c), i({ ...e, speed: c });
    },
    l = () => {
      i({ ...e, isMuted: !e.isMuted });
    };
  return (
    O.useEffect(() => {
      e.isMuted ? (t.current.muted = !0) : (t.current.muted = !1);
    }, [e.isMuted, t]),
    {
      playerState: e,
      togglePlay: s,
      handleOnTimeUpdate: n,
      handleVideoProgress: r,
      handleVideoSpeed: o,
      toggleMute: l,
    }
  );
};
function gi(t, e, i, s) {
  return (
    t.params.createElements &&
      Object.keys(s).forEach((n) => {
        if (!i[n] && i.auto === !0) {
          let r = j(t.el, `.${s[n]}`)[0];
          r || ((r = ee("div", s[n])), (r.className = s[n]), t.el.append(r)),
            (i[n] = r),
            (e[n] = r);
        }
      }),
    i
  );
}
function Ee(t) {
  let { swiper: e, extendParams: i, on: s, emit: n } = t;
  i({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null });
  const r = (v) => (Array.isArray(v) ? v : [v]).filter((w) => !!w);
  function o(v) {
    let w;
    return v &&
      typeof v == "string" &&
      e.isElement &&
      ((w = e.el.querySelector(v)), w)
      ? w
      : (v &&
          (typeof v == "string" && (w = [...document.querySelectorAll(v)]),
          e.params.uniqueNavElements &&
            typeof v == "string" &&
            w.length > 1 &&
            e.el.querySelectorAll(v).length === 1 &&
            (w = e.el.querySelector(v))),
        v && !w ? v : w);
  }
  function l(v, w) {
    const f = e.params.navigation;
    (v = r(v)),
      v.forEach((b) => {
        b &&
          (b.classList[w ? "add" : "remove"](...f.disabledClass.split(" ")),
          b.tagName === "BUTTON" && (b.disabled = w),
          e.params.watchOverflow &&
            e.enabled &&
            b.classList[e.isLocked ? "add" : "remove"](f.lockClass));
      });
  }
  function a() {
    const { nextEl: v, prevEl: w } = e.navigation;
    if (e.params.loop) {
      l(w, !1), l(v, !1);
      return;
    }
    l(w, e.isBeginning && !e.params.rewind), l(v, e.isEnd && !e.params.rewind);
  }
  function c(v) {
    v.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) &&
        (e.slidePrev(), n("navigationPrev"));
  }
  function d(v) {
    v.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) &&
        (e.slideNext(), n("navigationNext"));
  }
  function u() {
    const v = e.params.navigation;
    if (
      ((e.params.navigation = gi(
        e,
        e.originalParams.navigation,
        e.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
      )),
      !(v.nextEl || v.prevEl))
    )
      return;
    let w = o(v.nextEl),
      f = o(v.prevEl);
    Object.assign(e.navigation, { nextEl: w, prevEl: f }),
      (w = r(w)),
      (f = r(f));
    const b = (g, S) => {
      g && g.addEventListener("click", S === "next" ? d : c),
        !e.enabled && g && g.classList.add(...v.lockClass.split(" "));
    };
    w.forEach((g) => b(g, "next")), f.forEach((g) => b(g, "prev"));
  }
  function m() {
    let { nextEl: v, prevEl: w } = e.navigation;
    (v = r(v)), (w = r(w));
    const f = (b, g) => {
      b.removeEventListener("click", g === "next" ? d : c),
        b.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    v.forEach((b) => f(b, "next")), w.forEach((b) => f(b, "prev"));
  }
  s("init", () => {
    e.params.navigation.enabled === !1 ? h() : (u(), a());
  }),
    s("toEdge fromEdge lock unlock", () => {
      a();
    }),
    s("destroy", () => {
      m();
    }),
    s("enable disable", () => {
      let { nextEl: v, prevEl: w } = e.navigation;
      if (((v = r(v)), (w = r(w)), e.enabled)) {
        a();
        return;
      }
      [...v, ...w]
        .filter((f) => !!f)
        .forEach((f) => f.classList.add(e.params.navigation.lockClass));
    }),
    s("click", (v, w) => {
      let { nextEl: f, prevEl: b } = e.navigation;
      (f = r(f)), (b = r(b));
      const g = w.target;
      if (e.params.navigation.hideOnClick && !b.includes(g) && !f.includes(g)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === g || e.pagination.el.contains(g))
        )
          return;
        let S;
        f.length
          ? (S = f[0].classList.contains(e.params.navigation.hiddenClass))
          : b.length &&
            (S = b[0].classList.contains(e.params.navigation.hiddenClass)),
          n(S === !0 ? "navigationShow" : "navigationHide"),
          [...f, ...b]
            .filter((C) => !!C)
            .forEach((C) =>
              C.classList.toggle(e.params.navigation.hiddenClass)
            );
      }
    });
  const p = () => {
      e.el.classList.remove(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        u(),
        a();
    },
    h = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        m();
    };
  Object.assign(e.navigation, {
    enable: p,
    disable: h,
    update: a,
    init: u,
    destroy: m,
  });
}
function ye(t) {
  let { swiper: e, extendParams: i, on: s } = t;
  i({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs",
    },
  });
  let n = !1,
    r = !1;
  e.thumbs = { swiper: null };
  function o() {
    const c = e.thumbs.swiper;
    if (!c || c.destroyed) return;
    const d = c.clickedIndex,
      u = c.clickedSlide;
    if (
      (u && u.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
      typeof d > "u" ||
      d === null
    )
      return;
    let m;
    c.params.loop
      ? (m = parseInt(
          c.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        ))
      : (m = d),
      e.params.loop ? e.slideToLoop(m) : e.slideTo(m);
  }
  function l() {
    const { thumbs: c } = e.params;
    if (n) return !1;
    n = !0;
    const d = e.constructor;
    if (c.swiper instanceof d)
      (e.thumbs.swiper = c.swiper),
        Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1,
        }),
        e.thumbs.swiper.update();
    else if (Y(c.swiper)) {
      const u = Object.assign({}, c.swiper);
      Object.assign(u, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
        (e.thumbs.swiper = new d(u)),
        (r = !0);
    }
    return (
      e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),
      e.thumbs.swiper.on("tap", o),
      !0
    );
  }
  function a(c) {
    const d = e.thumbs.swiper;
    if (!d || d.destroyed) return;
    const u =
      d.params.slidesPerView === "auto"
        ? d.slidesPerViewDynamic()
        : d.params.slidesPerView;
    let m = 1;
    const p = e.params.thumbs.slideThumbActiveClass;
    if (
      (e.params.slidesPerView > 1 &&
        !e.params.centeredSlides &&
        (m = e.params.slidesPerView),
      e.params.thumbs.multipleActiveThumbs || (m = 1),
      (m = Math.floor(m)),
      d.slides.forEach((w) => w.classList.remove(p)),
      d.params.loop || (d.params.virtual && d.params.virtual.enabled))
    )
      for (let w = 0; w < m; w += 1)
        j(d.slidesEl, `[data-swiper-slide-index="${e.realIndex + w}"]`).forEach(
          (f) => {
            f.classList.add(p);
          }
        );
    else
      for (let w = 0; w < m; w += 1)
        d.slides[e.realIndex + w] && d.slides[e.realIndex + w].classList.add(p);
    const h = e.params.thumbs.autoScrollOffset,
      v = h && !d.params.loop;
    if (e.realIndex !== d.realIndex || v) {
      const w = d.activeIndex;
      let f, b;
      if (d.params.loop) {
        const g = d.slides.filter(
          (S) => S.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
        )[0];
        (f = d.slides.indexOf(g)),
          (b = e.activeIndex > e.previousIndex ? "next" : "prev");
      } else (f = e.realIndex), (b = f > e.previousIndex ? "next" : "prev");
      v && (f += b === "next" ? h : -1 * h),
        d.visibleSlidesIndexes &&
          d.visibleSlidesIndexes.indexOf(f) < 0 &&
          (d.params.centeredSlides
            ? f > w
              ? (f = f - Math.floor(u / 2) + 1)
              : (f = f + Math.floor(u / 2) - 1)
            : f > w && d.params.slidesPerGroup,
          d.slideTo(f, c ? 0 : void 0));
    }
  }
  s("beforeInit", () => {
    const { thumbs: c } = e.params;
    if (!(!c || !c.swiper))
      if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
        const d = W(),
          u = () => {
            const p =
              typeof c.swiper == "string"
                ? d.querySelector(c.swiper)
                : c.swiper;
            if (p && p.swiper) (c.swiper = p.swiper), l(), a(!0);
            else if (p) {
              const h = (v) => {
                (c.swiper = v.detail[0]),
                  p.removeEventListener("init", h),
                  l(),
                  a(!0),
                  c.swiper.update(),
                  e.update();
              };
              p.addEventListener("init", h);
            }
            return p;
          },
          m = () => {
            if (e.destroyed) return;
            u() || requestAnimationFrame(m);
          };
        requestAnimationFrame(m);
      } else l(), a(!0);
  }),
    s("slideChange update resize observerUpdate", () => {
      a();
    }),
    s("setTransition", (c, d) => {
      const u = e.thumbs.swiper;
      !u || u.destroyed || u.setTransition(d);
    }),
    s("beforeDestroy", () => {
      const c = e.thumbs.swiper;
      !c || c.destroyed || (r && c.destroy());
    }),
    Object.assign(e.thumbs, { init: l, update: a });
}
function Pe(t) {
  let { swiper: e, extendParams: i, emit: s, once: n } = t;
  i({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function r() {
    if (e.params.cssMode) return;
    const a = e.getTranslate();
    e.setTranslate(a),
      e.setTransition(0),
      (e.touchEventsData.velocities.length = 0),
      e.freeMode.onTouchEnd({ currentPos: e.rtl ? e.translate : -e.translate });
  }
  function o() {
    if (e.params.cssMode) return;
    const { touchEventsData: a, touches: c } = e;
    a.velocities.length === 0 &&
      a.velocities.push({
        position: c[e.isHorizontal() ? "startX" : "startY"],
        time: a.touchStartTime,
      }),
      a.velocities.push({
        position: c[e.isHorizontal() ? "currentX" : "currentY"],
        time: $(),
      });
  }
  function l(a) {
    let { currentPos: c } = a;
    if (e.params.cssMode) return;
    const {
        params: d,
        wrapperEl: u,
        rtlTranslate: m,
        snapGrid: p,
        touchEventsData: h,
      } = e,
      w = $() - h.touchStartTime;
    if (c < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (c > -e.maxTranslate()) {
      e.slides.length < p.length
        ? e.slideTo(p.length - 1)
        : e.slideTo(e.slides.length - 1);
      return;
    }
    if (d.freeMode.momentum) {
      if (h.velocities.length > 1) {
        const P = h.velocities.pop(),
          x = h.velocities.pop(),
          T = P.position - x.position,
          E = P.time - x.time;
        (e.velocity = T / E),
          (e.velocity /= 2),
          Math.abs(e.velocity) < d.freeMode.minimumVelocity && (e.velocity = 0),
          (E > 150 || $() - P.time > 300) && (e.velocity = 0);
      } else e.velocity = 0;
      (e.velocity *= d.freeMode.momentumVelocityRatio),
        (h.velocities.length = 0);
      let f = 1e3 * d.freeMode.momentumRatio;
      const b = e.velocity * f;
      let g = e.translate + b;
      m && (g = -g);
      let S = !1,
        C;
      const I = Math.abs(e.velocity) * 20 * d.freeMode.momentumBounceRatio;
      let A;
      if (g < e.maxTranslate())
        d.freeMode.momentumBounce
          ? (g + e.maxTranslate() < -I && (g = e.maxTranslate() - I),
            (C = e.maxTranslate()),
            (S = !0),
            (h.allowMomentumBounce = !0))
          : (g = e.maxTranslate()),
          d.loop && d.centeredSlides && (A = !0);
      else if (g > e.minTranslate())
        d.freeMode.momentumBounce
          ? (g - e.minTranslate() > I && (g = e.minTranslate() + I),
            (C = e.minTranslate()),
            (S = !0),
            (h.allowMomentumBounce = !0))
          : (g = e.minTranslate()),
          d.loop && d.centeredSlides && (A = !0);
      else if (d.freeMode.sticky) {
        let P;
        for (let x = 0; x < p.length; x += 1)
          if (p[x] > -g) {
            P = x;
            break;
          }
        Math.abs(p[P] - g) < Math.abs(p[P - 1] - g) ||
        e.swipeDirection === "next"
          ? (g = p[P])
          : (g = p[P - 1]),
          (g = -g);
      }
      if (
        (A &&
          n("transitionEnd", () => {
            e.loopFix();
          }),
        e.velocity !== 0)
      ) {
        if (
          (m
            ? (f = Math.abs((-g - e.translate) / e.velocity))
            : (f = Math.abs((g - e.translate) / e.velocity)),
          d.freeMode.sticky)
        ) {
          const P = Math.abs((m ? -g : g) - e.translate),
            x = e.slidesSizesGrid[e.activeIndex];
          P < x
            ? (f = d.speed)
            : P < 2 * x
            ? (f = d.speed * 1.5)
            : (f = d.speed * 2.5);
        }
      } else if (d.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      d.freeMode.momentumBounce && S
        ? (e.updateProgress(C),
          e.setTransition(f),
          e.setTranslate(g),
          e.transitionStart(!0, e.swipeDirection),
          (e.animating = !0),
          se(u, () => {
            !e ||
              e.destroyed ||
              !h.allowMomentumBounce ||
              (s("momentumBounce"),
              e.setTransition(d.speed),
              setTimeout(() => {
                e.setTranslate(C),
                  se(u, () => {
                    !e || e.destroyed || e.transitionEnd();
                  });
              }, 0));
          }))
        : e.velocity
        ? (s("_freeModeNoMomentumRelease"),
          e.updateProgress(g),
          e.setTransition(f),
          e.setTranslate(g),
          e.transitionStart(!0, e.swipeDirection),
          e.animating ||
            ((e.animating = !0),
            se(u, () => {
              !e || e.destroyed || e.transitionEnd();
            })))
        : e.updateProgress(g),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    } else if (d.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else d.freeMode && s("_freeModeNoMomentumRelease");
    (!d.freeMode.momentum || w >= d.longSwipesMs) &&
      (s("_freeModeStaticRelease"),
      e.updateProgress(),
      e.updateActiveIndex(),
      e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: { onTouchStart: r, onTouchMove: o, onTouchEnd: l },
  });
}
const vi = () => {
    const [t, e] = O.useState(!1),
      [i, s] = O.useState(!0),
      [n, r] = O.useState(!1),
      o = () => {
        s(!0);
      },
      l = () => {
        s(!0),
          setTimeout(() => {
            s(!i);
          }, 2e3);
      },
      a = O.useRef(null),
      c = !1,
      d = () => {
        e(!t),
          a.current &&
            (t
              ? (a.current.textTracks[0].mode = "hidden")
              : (a.current.textTracks[0].mode = "showing"));
      },
      {
        playerState: u,
        togglePlay: m,
        handleOnTimeUpdate: p,
        handleVideoProgress: h,
        handleVideoSpeed: v,
        toggleMute: w,
      } = hi(a);
    return L.jsx("div", {
      className: "container",
      children: L.jsxs("div", {
        className: "video-wrCustomVideoer",
        children: [
          L.jsx("video", {
            preload: "true",
            ref: a,
            onTimeUpdate: p,
            onClick: m,
            poster: "./images/pav-video-final.jpg",
            controls: c,
            className: `video ${u.isPlaying ? "playing" : "stopped"}`,
            playsInline: !0,
            "webkit-playsinline": "true",
            onMouseOver: o,
            onMouseOut: () => s(null),
            onTouchStart: l,
            children: L.jsx("source", {
              type: "video/mp4",
              src: "https://player.vimeo.com/progressive_redirect/playback/877982802/rendition/720p/file.mp4?loc=external&signature=bc200f96f6b07e8b374c471bda8ecca669eb66eb6ebc062747d83cee4bb49933",
            }),
          }),
          L.jsx("button", {
            id: "play-pause-button",
            onMouseOver: o,
            onClick: m,
            className: i ? "active" : "hidden",
            onTouchStart: l,
            children: u.isPlaying
              ? L.jsx("img", { src: "./images/pause-button.svg", alt: "Pause" })
              : L.jsx("img", { src: "./images/play-button.svg", alt: "Play" }),
          }),
          L.jsx("button", {
            id: "mute-button",
            onMouseOver: o,
            className: i ? "active" : "hidden",
            onClick: w,
            children: u.isMuted
              ? L.jsx("i", { className: "bx bxs-volume-mute" })
              : L.jsx("i", { className: "bx bxs-volume-full" }),
          }),
          n &&
            L.jsx("button", {
              className: i ? "active" : "hidden",
              id: "caption-btn",
              onMouseOver: o,
              onClick: d,
              children: t
                ? L.jsx("i", { className: "bx bxs-captions" })
                : L.jsx("i", { className: "bx bx-captions" }),
            }),
        ],
      }),
    });
  },
  Ti = ({ carouselImages: t, children: e }) => {
    const [i, s] = O.useState(null),
      [n, r] = O.useState(40),
      o = () => {
        document.querySelectorAll(".video.playing").forEach((a) => {
          a && !a.paused && (a.pause(), (a.currentTime = 0));
        });
      };
    return (
      O.useEffect(() => {
        const l = () => {
          window.innerWidth <= 1050 && r(25),
            window.innerWidth <= 1050 && window.innerWidth <= 600
              ? r(15)
              : r(40);
        };
        return (
          l(),
          window.addEventListener("resize", l),
          () => {
            window.removeEventListener("resize", l);
          }
        );
      }, []),
      L.jsxs("div", {
        id: "carousel",
        className: "wrapper",
        children: [
          L.jsxs(pe, {
            style: {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            },
            spaceBetween: n,
            navigation: !0,
            thumbs: { swiper: i },
            modules: [Pe, Ee, ye],
            className: "topSwiper",
            onSlideChange: o,
            children: [
              L.jsx(X, {
                children: L.jsxs("figure", {
                  children: [
                    L.jsx(vi, { "client:load": !0 }),
                    L.jsx("figcaption", {
                      children: "preliminary rendering subject to modification",
                    }),
                  ],
                }),
              }),
              t &&
                t.map((l, a) =>
                  L.jsx(
                    X,
                    {
                      children: L.jsxs("figure", {
                        children: [
                          L.jsx("img", { src: l.image, alt: l.alt }),
                          L.jsx("figcaption", {
                            children:
                              "preliminary rendering subject to modification",
                          }),
                        ],
                      }),
                    },
                    a
                  )
                ),
            ],
          }),
          L.jsxs(pe, {
            onSwiper: s,
            spaceBetween: n,
            slidesPerView: 3,
            freeMode: !0,
            watchSlidesProgress: !0,
            modules: [Pe, Ee, ye],
            className: "bottomSwiper",
            children: [
              L.jsx(X, {
                children: L.jsx("img", {
                  src: "./images/pav-video-final.jpg",
                  alt: "Pavilion Rendering 1",
                }),
              }),
              t &&
                t.map((l, a) =>
                  L.jsx(
                    X,
                    { children: L.jsx("img", { src: l.image, alt: l.alt }) },
                    a
                  )
                ),
            ],
          }),
          e,
        ],
      })
    );
  };
export { Ti as default };
