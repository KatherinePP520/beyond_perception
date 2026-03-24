(() => {
  const routeMap = {
    "/ai-automation.html": "/zh/ai-automation.html",
    "/business-it-services.html": "/zh/business-it-services.html",
    "/custom-software.html": "/zh/custom-software.html",
    "/blog.html": "/zh/blog/index.html",
    "/blog/": "/zh/blog/index.html",
    "/blog/index.html": "/zh/blog/index.html",
    "/blog/what-is-ai-automation.html": "/zh/blog/what-is-ai-automation.html",
    "/blog/10-tasks-to-automate.html": "/zh/blog/10-tasks-to-automate.html",
    "/blog/custom-vs-off-the-shelf.html": "/zh/blog/custom-vs-off-the-shelf.html",
    "/blog/automation-roi-calculator.html": "/zh/blog/automation-roi-calculator.html",
    "/blog/healthcare-automation.html": "/zh/blog/healthcare-automation.html",
    "/blog/implementation-checklist.html": "/zh/blog/implementation-checklist.html",
  };

  const normalizePath = (pathname) => {
    let path = pathname || "/";
    if (path.startsWith("/public/")) {
      path = path.slice(7);
    }
    if (!path.startsWith("/")) {
      path = `/${path}`;
    }
    if (path === "/index.html") {
      return "/";
    }
    return path;
  };

  const detectPrefix = (pathname) => (pathname.startsWith("/public/") ? "/public" : "");

  const getCounterpart = (normalizedPath, targetLang) => {
    if (targetLang === "zh") {
      return routeMap[normalizedPath] || (normalizedPath === "/" ? "/" : `/zh${normalizedPath}`);
    }

    if (normalizedPath.startsWith("/zh/")) {
      const enPath = normalizedPath.slice(3);
      return enPath === "" ? "/" : enPath;
    }

    return normalizedPath;
  };

  const currentPath = normalizePath(window.location.pathname);
  const prefix = detectPrefix(window.location.pathname);
  const currentLang = currentPath.startsWith("/zh/") ? "zh" : "en";

  const preserveLocalizedLinks = (lang) => {
    if (lang !== "zh") {
      return;
    }

    document.querySelectorAll("a[href]").forEach((link) => {
      const rawHref = link.getAttribute("href");
      if (!rawHref || !rawHref.startsWith("/")) {
        return;
      }

      const url = new URL(rawHref, window.location.origin);
      const normalizedPath = normalizePath(url.pathname);

      if (normalizedPath.startsWith("/zh/")) {
        return;
      }

      let localizedPath = null;

      if (normalizedPath === "/") {
        localizedPath = "/zh/";
      } else if (Object.prototype.hasOwnProperty.call(routeMap, normalizedPath)) {
        localizedPath = routeMap[normalizedPath];
      }

      if (!localizedPath) {
        return;
      }

      link.setAttribute("href", `${prefix}${localizedPath}${url.search}${url.hash}`);
    });
  };

  preserveLocalizedLinks(currentLang);

  const buttons = Array.from(document.querySelectorAll("[data-lang-toggle]"));
  if (!buttons.length) {
    return;
  }

  buttons.forEach((button) => {
    const lang = button.getAttribute("data-lang-toggle");
    button.classList.toggle("is-active", lang === currentLang);

    button.addEventListener("click", () => {
      if (!lang || lang === currentLang) {
        return;
      }

      const targetPath = getCounterpart(currentPath, lang);
      if (!targetPath) {
        return;
      }

      try {
        window.localStorage.setItem("bp-lang", lang);
      } catch (_error) {
        // no-op
      }

      const query = window.location.search || "";
      const hash = window.location.hash || "";
      window.location.assign(`${prefix}${targetPath}${query}${hash}`);
    });
  });
})();
