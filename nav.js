// Nav interactions: mobile menu toggle + services dropdown + copyright year
(function () {
  // Copyright year — runs first, no DOM dependencies beyond the span existing
  var year = new Date().getFullYear();
  document.querySelectorAll('.copyright-year').forEach(function (el) {
    el.textContent = year;
  });

  // Mobile menu
  var btn = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-links');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? 'Close' : 'Menu';
    });

    // Close mobile menu when a leaf link is tapped
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = 'Menu';
      });
    });
  }

  // Services dropdown
  // Click-toggle for touch + keyboard. CSS handles desktop hover.
  var dropdownTriggers = document.querySelectorAll('.nav-dropdown-trigger');
  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var expanded = trigger.getAttribute('aria-expanded') === 'true';
      dropdownTriggers.forEach(function (other) {
        if (other !== trigger) other.setAttribute('aria-expanded', 'false');
      });
      trigger.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    });
  });

  // Close dropdowns on outside click
  document.addEventListener('click', function (e) {
    dropdownTriggers.forEach(function (trigger) {
      if (!trigger.parentElement.contains(e.target)) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close dropdowns on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropdownTriggers.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });
})();
