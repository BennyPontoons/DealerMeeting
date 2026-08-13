/* ============================================================================
   BENNINGTON LINEUP SITE — SHARED COMPONENTS
   ----------------------------------------------------------------------------
   This one file renders the pieces that appear on every page:

     1. SERIES data          — single source of truth for names, pricing,
                               taglines, photos, and step-up/step-down copy.
                               EDIT PRICING / COPY HERE — it flows to the
                               homepage lineup, every series-page lineup
                               widget, and the nav automatically.
     2. Nav bar              — injected into  <div id="site-nav">
     3. Footer               — injected into  <div id="site-footer">
     4. Lineup navigator     — injected into  <div id="price-ladder">
                               Two variants:
                                 "full"   — big staircase on the homepage
                                 "widget" — compact strip + step-up/step-down
                                            cards at the bottom of each
                                            series page
   Each page declares itself with  <body data-page="s">  (or "s-one", "m",
   "lx", "lt", "r", "rt", "rx", "q", "qx", "home", "compare"). The nav
   highlight and lineup highlight key off that attribute.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. SERIES DATA — ordered from entry (S One) to flagship (QX).
   ---------------------------------------------------------------------------
   short:      the label used in the top nav.
   priceBand:  PLACEHOLDER bands — replace with real MY27 dealer MSRP figures
               before launch. Keep them ascending S One -> QX.
   stepUpWhy:  the one-line reason to move UP TO this series (shown on the
               page of the series directly below it).
   stepDownWhy:the one-line reason to move DOWN TO this series (shown on the
               page of the series directly above it).
   -------------------------------------------------------------------------- */
const SERIES = [
  {
    id: "s-one",
    name: "S One Series",
    short: "S One",
    page: "s-one.html",
    tag: "Premium Boating Made Simple",
    tagline: "The simplest, most affordable way into a new Bennington.",
    priceBand: " NAP $25,442", /* PLACEHOLDER — replace with real MSRP */
    photo: "Final_NoBackground/NoBackgroundS-ONE.png",
    stepUpWhy: "", /* nothing below the S One */
    stepDownWhy:
      "Step down to S One for the lowest-cost way into a new Bennington.",
  },
  {
    id: "s",
    name: "S Series",
    short: "S",
    page: "s.html",
    tag: "Built For Every Adventure",
    tagline: "The customizable core of the Bennington family.",
    priceBand: "$47,317", /* PLACEHOLDER — replace with real MSRP */
    photo: "Final_NoBackground/NoBackgroundS-series.png",
    stepUpWhy:
      "Step up to S for the have-it-your-way line with far more upgrades, colors, and floorplans.",
    stepDownWhy:
      "Step down to S for a budget-friendlier boat that is still highly customizable.",
  },
  {
    id: "m",
    name: "M Series",
    short: "M",
    page: "m.html",
    tag: "Modern Luxury, Refined",
    tagline: "More standard equipment, more floorplans, the heart of Bennington.",
    priceBand: "$71,141", /* PLACEHOLDER — replace with real MSRP */
    photo: "Final_NoBackground/NoBackgroundM.png",
    stepUpWhy:
      "Step up to M for the soul of the lineup, with more standard equipment and exclusive layouts.",
    stepDownWhy:
      "Step down to M for a more budget-friendly boat with more space than the S.",
  },
  {
    id: "lx",
    name: "LX Line",
    short: "LX",
    page: "lx.html",
    tag: "Luxury Fueled by Performance",
    tagline: "A sleeker, better-equipped step beyond the S.",
    priceBand: "$91,217", /* PLACEHOLDER — replace with real MSRP */
    photo: "Final_NoBackground/NoBackgroundLX.png",
    stepUpWhy:
      "Step up to LX for a sleeker look and more standard equipment than the M.",
    stepDownWhy:
      "Step down to LX for a lighter price in a streamlined, well-equipped package.",
  },
  {
    id: "lt",
    name: "LT Series",
    short: "LT",
    page: "lt.html",
    tag: "Elevated Comfort. Exceptional Value", /* PLACEHOLDER positioning — confirm with dealer materials */
    tagline: "A refined step-up just above the LX.", /* PLACEHOLDER */
    priceBand: "$113,714", /* PLACEHOLDER — replace with real LT MSRP */
    photo: "Final_NoBackground/LT-Series.png",
    stepUpWhy:
      "Step up to LT for a more refined, better-appointed take on the step-up class.", /* PLACEHOLDER */
    stepDownWhy:
      "Step down to LT for step-up refinement at a friendlier starting point.", /* PLACEHOLDER */
  },
  {
    id: "r",
    name: "R Series",
    short: "R",
    page: "r.html",
    tag: "Boldly Designed. Unmistakably Bennington",
    tagline: "Dynamic performance with extensive luxury floorplans.",
    priceBand: "$129,659", /* PLACEHOLDER — replace with real MSRP */
    photo: "Final_NoBackground/NoBackgroundR.png",
    stepUpWhy:
      "Step up to R for more luxury floorplans, deeper customization, and dynamic performance.",
    stepDownWhy:
      "Step down to R for broader floorplan choice at a lower starting price.",
  },
  {
    id: "rt",
    name: "RT Series",
    short: "RT",
    page: "rt.html",
    tag: "Refined Luxury. Confident Presence",
    tagline: "R-family performance with an open bow built for action.",
    priceBand: "$156,756", /* PLACEHOLDER — replace with real RT MSRP */
    photo: "Final_NoBackground/NoBckgroundBowRider.png",
    stepUpWhy:
      "Step up to RT for an open-bow layout that adds runabout versatility to R-family performance.",
    stepDownWhy:
      "Step down to RT for open-bow versatility at a friendlier starting price.",
  },
  {
    id: "rx",
    name: "RX Line",
    short: "RX",
    page: "rx.html",
    tag: "Luxury Elvevated Beyond Expectations",
    tagline: "Sport-tuned performance wrapped in plush comfort.",
    priceBand: "$170,133", /* PLACEHOLDER — replace with real MSRP */
    photo: "Final_NoBackground/NobackgroundRX.png",
    stepUpWhy:
      "Step up to RX for a sport-tuned, athletic take on the R platform.",
    stepDownWhy:
      "Step down to RX if sporty performance matters more to you than premium trim.",
  },
  {
    id: "q",
    name: "Q Series",
    short: "Q",
    page: "q.html",
    tag: "The Benchmark of Luxury Boating",
    tagline: "Luxury amenities and performance, one step below the flagship.",
    priceBand: "$148,304", /* PLACEHOLDER — replace with real MSRP */
    photo: "Final_NoBackground/NoBackgroundQ.png",
    stepUpWhy:
      "Step up to Q for premium luxury amenities and refined cruising performance.",
    stepDownWhy:
      "Step down to Q for premium luxury without the flagship price tag.",
  },
  {
    id: "qx",
    name: "QX Line",
    short: "QX",
    page: "qx.html",
    tag: "The Pinnacle of Pontoon Innovation",
    tagline: "Beyond Luxury, Boating industry 2026 Top Product.",
    priceBand: "$188,136", /* PLACEHOLDER — replace with real MSRP */
    photo: "Final_NoBackground/NoBackgroundQX.png",
    stepUpWhy:
      "Step up to QX for the full Bennington experience: Commander Dash 2.0, carbon fiber, up to 1,000 HP.",
    stepDownWhy: "", /* nothing above the QX */
  },
];

/* ---------------------------------------------------------------------------
   1b. BOAT MODELS — the specific boats offered in each series.
   ---------------------------------------------------------------------------
   Each code maps to a page in the boats/ folder (lowercase, non-alphanumeric
   characters become "-", e.g. "23MOFB-SPORT/30LE" -> boats/23mofb-sport-30le.html).
   ADD OR REMOVE MODELS HERE — the dropdown on each series page (and on each
   boat page) updates automatically. If you add a code, also create its page
   in boats/ (copy an existing boat page and edit it).
   -------------------------------------------------------------------------- */
const BOATS = {
  "s-one": ["188S1L", "20S1SR", "22S1SB"],
  "s": ["22SSB", "22SSR", "20SSR-LUXE", "23SQC-LUXE", "22SSR-LUXE", "22SSB-SPORT", "25SSB-LUXE"],
  "lx": ["23LXSSB"],
  "m": ["21ML", "22MFC", "22MFB", "23MOFB-SPORT/30LE", "24MSL-SPORT/30LE", "24MCSB-LUXE", "26MSB-LUXE"],
  "r": ["23RSB-30LE", "25RSBA", "27RFBWAT2-30LE", "25RFBWA"],
  "rt": ["25RTSBA"],
  "rx": ["25RXFBA", "27RXSBWAT2"],
  "q": ["25QSBA"],
  "qx": ["25QXSBA", "27QXFBAT2", "27QXFBAX2-30LE", "30QXSBWAX2"],
};

/* Boat code -> boats/ page filename (must match the generated file names). */
function boatSlug(code) {
  return code.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/* Boat pages live in boats/ (one level down) and step-target pages in
   boats/steps/ (two levels down) — prefix internal links so the shared
   nav/footer components resolve from every location. */
const PFX = location.pathname.includes("/boats/steps/") ? "../../"
          : location.pathname.includes("/boats/") ? "../"
          : "";

/* Pricing fine print shown wherever a price band appears. */
const PRICE_DISCLAIMER =
  "Starting MSRP, MY27. Excludes destination fee, options, and dealer fees. " +
  "Contact your dealer for exact pricing.";

/* Which page are we on? Set via <body data-page="..."> on every page. */
const CURRENT_PAGE = document.body.dataset.page || "home";

/* ---------------------------------------------------------------------------
   2. NAV BAR — Home | S One | S | M | LX | LT | R | RT | RX | Q | QX | Compare
   -------------------------------------------------------------------------- */
function renderNav() {
  const mount = document.getElementById("site-nav");
  if (!mount) return;

  const links = [
    { id: "home", label: "Home", href: "index.html" },
    ...SERIES.map((s) => ({ id: s.id, label: s.short, href: s.page })),
    { id: "compare", label: "Compare", href: "compare.html" },
  ];

  mount.innerHTML = `
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="${PFX}index.html" aria-label="Bennington home">
          <img class="brand-logo" src="${PFX}Logo_Images/bennington_white_clean.png" alt="Bennington" />
        </a>
        <nav class="top-nav" aria-label="Primary">
          ${links
            .map(
              (l) =>
                `<a href="${PFX}${l.href}" class="${l.id === CURRENT_PAGE ? "active" : ""} ${
                  l.id === "qx" ? "nav-flagship" : ""
                }">${l.label}</a>`
            )
            .join("")}
        </nav>
      </div>
    </header>`;
}

/* ---------------------------------------------------------------------------
   3. FOOTER
   -------------------------------------------------------------------------- */
function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="wrap footer-inner">
        <div class="footer-brand">
          <img class="brand-logo brand-logo-footer" src="${PFX}Logo_Images/bennington_white_clean.png" alt="Bennington" />
        </div>
        <p>&copy; ${Math.max(new Date().getFullYear(), 2027)} · Dealer lineup walkthrough. Not affiliated with
        Bennington Marine. ${PRICE_DISCLAIMER}</p>
      </div>
    </footer>`;
}

/* ---------------------------------------------------------------------------
   4. LINEUP NAVIGATOR — the reusable component.
   ---------------------------------------------------------------------------
   Usage:  <div id="price-ladder"></div>  anywhere on a page.
   (The mount id is kept for structural stability; the visible copy talks
   about "the lineup".)

   On the homepage (data-page="home") it renders the FULL staircase.
   On a series page it renders the compact WIDGET:
     - all nine series, current one highlighted
     - "Next step up" / "Next step down" cards with a one-line reason
   -------------------------------------------------------------------------- */
function renderLadder() {
  const mount = document.getElementById("price-ladder");
  if (!mount) return;

  const currentIdx = SERIES.findIndex((s) => s.id === CURRENT_PAGE);
  const isWidget = currentIdx !== -1; // full staircase on home/compare, widget on series pages

  /* --- the series cards (shared by both variants) --- */
  const rungs = SERIES.map((s, i) => {
    const isCurrent = i === currentIdx;
    return `
      <li style="--i:${i}">
        <a href="${PFX}${s.page}" class="rung rung-${s.id} ${isCurrent ? "rung-current" : ""} ${
      s.id === "qx" ? "rung-flagship" : ""
    }" ${isCurrent ? 'aria-current="page"' : ""}>
          <span class="rung-num">0${i + 1}</span>
          <span class="rung-name">${s.name}</span>
          <span class="rung-tag">${s.tag}</span>
          <span class="rung-price">${s.priceBand}*</span>
          ${isCurrent ? '<span class="rung-you">You are here</span>' : ""}
        </a>
      </li>`;
  }).join("");

  /* --- step-up / step-down cards (widget variant only) --- */
  let stepCards = "";
  if (isWidget) {
    const up = SERIES[currentIdx + 1]; // series directly ABOVE
    const down = SERIES[currentIdx - 1]; // series directly BELOW
    stepCards = `
      <div class="ladder-steps">
        ${
          up
            ? `<a class="step-card step-up" href="${PFX}${up.page}">
                 <span class="step-label">▲ Next step up · ${up.name} · ${up.priceBand}*</span>
                 <span class="step-why">${up.stepUpWhy}</span>
               </a>`
            : `<div class="step-card step-top"><span class="step-label">★ Top of the lineup</span>
                 <span class="step-why">The QX is Bennington's flagship. There is no step above.</span></div>`
        }
        ${
          down
            ? `<a class="step-card step-down" href="${PFX}${down.page}">
                 <span class="step-label">▼ Next step down · ${down.name} · ${down.priceBand}*</span>
                 <span class="step-why">${down.stepDownWhy}</span>
               </a>`
            : `<div class="step-card step-bottom"><span class="step-label">● Entry point</span>
                 <span class="step-why">The S One Series is where the Bennington lineup begins.</span></div>`
        }
      </div>`;
  }

  mount.innerHTML = `
    <section class="ladder ${isWidget ? "ladder-widget" : "ladder-full"}" aria-label="Bennington lineup navigator">
      <div class="wrap">
        ${
          isWidget
            ? `<p class="eyebrow">The Lineup</p>
               <h2 class="ladder-title">Where the ${SERIES[currentIdx].name} sits in the lineup</h2>`
            : ""
        }
        <ol class="ladder-rail" role="list">${rungs}</ol>
        ${stepCards}
        <p class="disclaimer">*${PRICE_DISCLAIMER}</p>
      </div>
    </section>`;
}

/* ---------------------------------------------------------------------------
   5. BOAT MODEL DROPDOWN — rendered into <span id="boat-menu"></span> in the
   hero of each series page (next to the Available Lengths chip) and on each
   boat page. Lists the models for the current series; choosing one navigates
   to that boat's page. Boat pages set <body data-boat="CODE"> so their own
   model shows as selected.
   -------------------------------------------------------------------------- */
function renderBoatMenu() {
  const mount = document.getElementById("boat-menu");
  const models = BOATS[CURRENT_PAGE];
  if (!mount || !models || models.length === 0) return;

  const currentBoat = document.body.dataset.boat || "";
  const select = document.createElement("select");
  select.className = "boat-select";
  select.setAttribute("aria-label", "View a specific model in this series");
  select.innerHTML = `
    <option value="" disabled ${currentBoat ? "" : "selected"}>Models On Display (${models.length})</option>
    ${models
      .map(
        (code) =>
          `<option value="${PFX}boats/${boatSlug(code)}.html" ${
            code === currentBoat ? "selected" : ""
          }>${code}</option>`
      )
      .join("")}`;
  select.addEventListener("change", () => {
    if (select.value) location.href = select.value;
  });
  mount.replaceWith(select);
}

/* ---------------------------------------------------------------------------
   6. BOAT STEP UP / STEP DOWN — rendered into <div id="boat-steps"></div> at
   the bottom of each ORIGINAL boat page (replaces the series lineup navigator
   there). Each boat links to a specific step-up / step-down MODEL page.
   ---------------------------------------------------------------------------
   Keyed by the page's file slug. up/down are the target page slugs (or null).
   EDIT MAPPINGS HERE. Boats with no entry (or both null) show no step buttons.
   -------------------------------------------------------------------------- */
const BOAT_STEPS = {
  "188s1l":         { up: "188sl",      down: null },
  "20s1sr":         { up: "20ssb",      down: null },
  "22s1sb":         { up: "22ssb",      down: null },
  "22ssb":          { up: "22msb",      down: "22s1sb" },
  "22ssr":          { up: "22mfb",      down: "22s1sr" },
  "20ssr-luxe":     { up: "21mfb",      down: "20s1sr" },
  "22ssr-luxe":     { up: "22mfb",      down: "22s1sr" },
  "22ssb-sport":    { up: "22msb",      down: "22s1sb" },
  "25ssb-luxe":     { up: null,         down: "26msb" },
  "21ml":           { up: null,         down: "21sl" },
  "22mfc":          { up: null,         down: "22sfc" },
  "22mfb":          { up: "23lxsfb",    down: "22ssr" },
  "26msb-luxe":     { up: "25ssb",      down: "25lxssb" },
  "23lxssb":        { up: "23rsb",      down: "23msb" },
  "25rtsba":        { up: null,         down: "ltsba" },
  "23rsb-30le":     { up: "23qsb",      down: "23lxssb" },
  "25rsba":         { up: "25qsba",     down: "25lxssba" },
  "27rfbwat2-30le": { up: "27qfbwat2",  down: null },
  "25rfbwa":        { up: "25qfbwa",    down: "25lxsfba" },
  "25rxfba":        { up: "25qxfba",    down: "25qfba" },
  "27rxsbwat2":     { up: "27qxsbwat2", down: "27rsbwat2" },
  "25qsba":         { up: "25rxsba",    down: "25rsba" },
  "25qxsba":        { up: "25qxsbax2",  down: "rxsba" },
  "27qxfbat2":      { up: "30qxfbwax2", down: "27rfbwat2" }, /* your key "27qxfbwat2" */
  "27qxfbax2-30le": { up: null,         down: "27qfbax2" }, /* your key "27qxfbax2" */
  "30qxsbwax2":     { up: null,         down: "30qsbwax2" },
  /* 23sqc-luxe, 23mofb-sport-30le, 24msl-sport-30le, 24mcsb-luxe: both N/A -> no entry. */
};

function renderBoatSteps() {
  const mount = document.getElementById("boat-steps");
  if (!mount) return;
  const slug = (location.pathname.split("/").pop() || "").replace(/\.html$/, "");
  const steps = BOAT_STEPS[slug];
  if (!steps || (!steps.up && !steps.down)) return;

  const card = (dir, target) =>
    target
      ? `<a class="step-card step-${dir}" href="steps/${target}.html?from=${slug}">
           <span class="step-label">${dir === "up" ? "▲ Step Up" : "▼ Step Down"}</span>
           <span class="step-why">${target.toUpperCase()}</span>
         </a>`
      : "";

  mount.innerHTML = `
    <section class="ladder ladder-widget" aria-label="Step up or step down to a comparable model">
      <div class="wrap">
        <p class="eyebrow">Compare</p>
        <h2 class="ladder-title">Step Up or Step Down</h2>
        <div class="ladder-steps">
          ${card("up", steps.up)}
          ${card("down", steps.down)}
        </div>
      </div>
    </section>`;
}

/* ---------------------------------------------------------------------------
   7. BACK TO DISPLAY BOAT — on a step-target page (boats/steps/), points the
   "Back to Display Boat" button at the display boat the user stepped from.
   The step buttons pass ?from=<display-slug>; we read it and link back to it.
   Falls back to browser history if there's no ?from (e.g. a direct visit).
   -------------------------------------------------------------------------- */
function renderBackToDisplay() {
  const el = document.getElementById("back-to-display");
  if (!el) return;
  const from = new URLSearchParams(location.search).get("from");
  if (from && /^[a-z0-9-]+$/.test(from)) {
    el.href = "../" + from + ".html"; // steps/ -> boats/<display>.html
  } else {
    el.addEventListener("click", (e) => { e.preventDefault(); history.back(); });
  }
}

/* ---------------------------------------------------------------------------
   Reveal-on-scroll — light touch, purely cosmetic.
   -------------------------------------------------------------------------- */
function initReveal() {
  const targets = document.querySelectorAll(
    ".rung, .section-head, .feature-list li, .new-list li, .cost-card, .step-card, .overview p, .compare-scroll, .home-card"
  );
  targets.forEach((el) => el.classList.add("reveal"));
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );
  targets.forEach((el) => io.observe(el));
}

/* ---- boot ---- */
renderNav();
renderFooter();
renderLadder();
renderBoatSteps();
renderBoatMenu();
renderBackToDisplay();
initReveal();
