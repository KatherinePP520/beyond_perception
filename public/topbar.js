(() => {
  const topbar = document.querySelector("[data-topbar]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (!topbar) {
    return;
  }

  const closeNav = () => {
    if (!menuToggle || !nav) {
      return;
    }

    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  const onScroll = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (!menuToggle || !nav) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });

  nav.querySelectorAll("a, button").forEach((node) => {
    if (!(node instanceof HTMLElement)) {
      return;
    }

    node.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 980px)").matches) {
        closeNav();
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Node)) {
      return;
    }

    if (!topbar.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (!window.matchMedia("(max-width: 980px)").matches) {
      closeNav();
    }
  });
})();
