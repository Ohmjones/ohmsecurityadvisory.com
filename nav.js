// Mobile nav toggle. Same script lives on every page.
(function () {
  var btn = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.nav-links');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  });

  // Close menu when a link is tapped (mobile nav behavior)
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Menu';
    });
  });
})();
