/*
 * GivenGain – Explore landing page behaviour
 * Header scroll state, example tabs and the product demo animation.
 * No dependencies.
 */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header: frosted state once scrolled ---------- */
  var header = document.querySelector("[data-gg-header]");

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ---------- Example question tabs ---------- */
  document.querySelectorAll("[data-gg-tabs]").forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));

    function select(tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
      if (focus) tab.focus();
      // Keep the chosen pill in view when the list scrolls sideways on mobile.
      tab.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab, false); });
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowDown" || e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") next = tabs[0];
        if (e.key === "End") next = tabs[tabs.length - 1];
        if (next) {
          e.preventDefault();
          select(next, true);
        }
      });
    });
  });

  /* ---------- Product demo: type a question, then reveal the answer ---------- */
  var demo = document.querySelector("[data-gg-demo]");
  if (demo) {
    var typed = demo.querySelector("[data-gg-typed]");
    var steps = demo.querySelectorAll("[data-step]");
    var chip = demo.querySelector(".gg-app__chips .is-picked");
    var send = demo.querySelector(".gg-app__send");
    var replay = demo.querySelector("[data-gg-replay]");
    var question = demo.querySelector('[data-step="1"]').textContent;
    var timers = [];

    function later(fn, ms) { timers.push(setTimeout(fn, ms)); }

    function reset() {
      timers.forEach(clearTimeout);
      timers = [];
      typed.textContent = "";
      chip.classList.remove("is-lit");
      steps.forEach(function (s) { s.classList.remove("is-shown"); });
    }

    function play() {
      reset();
      demo.classList.add("is-animating");
      var t = 400;
      later(function () { chip.classList.add("is-lit"); }, t);
      t += 500;
      for (var i = 1; i <= question.length; i++) {
        (function (n) {
          later(function () { typed.textContent = question.slice(0, n); }, t + n * 32);
        })(i);
      }
      t += question.length * 32 + 350;
      later(function () {
        send.classList.add("is-pressed");
        typed.textContent = "";
        steps[0].classList.add("is-shown");
      }, t);
      later(function () { send.classList.remove("is-pressed"); }, t + 180);
      t += 700;
      for (var j = 1; j < steps.length; j++) {
        (function (step, delay) {
          later(function () { step.classList.add("is-shown"); }, delay);
        })(steps[j], t + (j - 1) * 650);
      }
    }

    function showAll() {
      reset();
      demo.classList.remove("is-animating");
      chip.classList.add("is-lit");
    }

    if (reduceMotion || !("IntersectionObserver" in window)) {
      showAll();
      replay.hidden = true;
    } else {
      demo.classList.add("is-animating");
      var seen = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          play();
          seen.disconnect();
        }
      }, { threshold: 0.35 });
      seen.observe(demo);
      replay.addEventListener("click", play);
    }
  }
})();
