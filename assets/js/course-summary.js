document.addEventListener("DOMContentLoaded", function () {
  var toggles = document.querySelectorAll("[data-course-toggle]");
  var expandButton = document.querySelector("[data-course-expand]");
  var collapseButton = document.querySelector("[data-course-collapse]");

  function setGroup(toggle, expanded) {
    var group = toggle.closest(".course-summary__group");
    var next = group.nextElementSibling;

    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    toggle.querySelector(".course-summary__chevron").textContent = expanded ? "▾" : "▸";

    while (next && next.hasAttribute("data-course-detail")) {
      next.hidden = !expanded;
      next = next.nextElementSibling;
    }
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      setGroup(toggle, toggle.getAttribute("aria-expanded") !== "true");
    });
  });

  expandButton.addEventListener("click", function () {
    toggles.forEach(function (toggle) {
      setGroup(toggle, true);
    });
  });

  collapseButton.addEventListener("click", function () {
    toggles.forEach(function (toggle) {
      setGroup(toggle, false);
    });
  });
});
