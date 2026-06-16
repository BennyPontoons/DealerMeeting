// Year stamp
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth-scroll for in-page anchors with header offset
const HEADER_OFFSET = 64;
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    if (id.length <= 1) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", id);
  });
});

// Scroll-spy on top nav across every section that has a matching nav link
const navLinks = Array.from(document.querySelectorAll(".top-nav a[href^='#']"));
const watched = navLinks
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = "#" + entry.target.id;
      navLinks.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === id);
      });
    });
  },
  { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
);
watched.forEach((s) => spy.observe(s));

// Reveal-on-scroll for content blocks
const revealTargets = document.querySelectorAll(
  ".rung, .model-meta, .model-copy, .diff-card, .feature, .compare-scroll, .decide-list li, .decide-card, .section-head"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
);
revealTargets.forEach((el) => revealer.observe(el));
