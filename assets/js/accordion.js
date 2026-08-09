document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll("[data-accordion-action]");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var shouldOpen = btn.getAttribute("data-accordion-action") === "open";
      document.querySelectorAll(".accordion-section").forEach(function (section) {
        section.open = shouldOpen;
      });
    });
  });
});
