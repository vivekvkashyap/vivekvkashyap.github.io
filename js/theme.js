/* Dark / light theme toggle.
 *
 * Loaded from <head> without `defer` on purpose: the theme is applied
 * before the page paints, so there is no flash of the wrong colours.
 * The button wiring waits for the DOM, since the button does not exist yet.
 *
 * The choice is remembered in localStorage. First-time visitors get light.
 */

(function () {
  var STORAGE_KEY = "theme";

  var SUN = '<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-8.2a.7.7 0 0 1 .7.7v1a.7.7 0 0 1-1.4 0v-1a.7.7 0 0 1 .7-.7Zm0 9.7a.7.7 0 0 1 .7.7v1a.7.7 0 0 1-1.4 0v-1a.7.7 0 0 1 .7-.7ZM2.8 8a.7.7 0 0 1 .7-.7h1a.7.7 0 0 1 0 1.4h-1a.7.7 0 0 1-.7-.7Zm9.7 0a.7.7 0 0 1 .7-.7h1a.7.7 0 0 1 0 1.4h-1a.7.7 0 0 1-.7-.7ZM4 4a.7.7 0 0 1 1 0l.7.7a.7.7 0 1 1-1 1L4 5a.7.7 0 0 1 0-1Zm6.3 6.3a.7.7 0 0 1 1 0l.7.7a.7.7 0 0 1-1 1l-.7-.7a.7.7 0 0 1 0-1ZM12 4a.7.7 0 0 1 0 1l-.7.7a.7.7 0 1 1-1-1l.7-.7a.7.7 0 0 1 1 0ZM5.7 10.3a.7.7 0 0 1 0 1l-.7.7a.7.7 0 0 1-1-1l.7-.7a.7.7 0 0 1 1 0Z"/>';
  var MOON = '<path d="M6.2 2.3a.6.6 0 0 1 .1.7 5 5 0 0 0 6.7 6.7.6.6 0 0 1 .8.8A6.2 6.2 0 1 1 5.5 2.2a.6.6 0 0 1 .7.1Z"/>';

  var stored;
  try {
    stored = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    stored = null; // private browsing, storage disabled — fall through to the default
  }

  var theme = stored === "light" || stored === "dark" ? stored : "light";
  document.documentElement.setAttribute("data-theme", theme);

  function paintIcon() {
    var icon = document.getElementById("theme-icon");
    if (icon) {
      // Show the icon for the theme you would switch TO.
      icon.innerHTML = theme === "dark" ? SUN : MOON;
    }
  }

  function apply(next) {
    theme = next;
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* not fatal — the theme still applies for this page view */
    }
    paintIcon();
  }

  document.addEventListener("DOMContentLoaded", function () {
    paintIcon();
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        apply(theme === "dark" ? "light" : "dark");
      });
    }
  });
})();
