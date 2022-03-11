// Scroll Animation
const headerEl = document.querySelector('.header');
const allLinks = document.querySelectorAll('.link-navigation');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#') window.scrollTo({ top: 0, behavior: 'smooth' });
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: 'smooth' });

      if (link.classList.contains('main-nav-link')) {
        headerEl.classList.toggle('nav-open');
      }
    }
  });
});

const price = 20 * 140 * (1 / Math.pow(20, 1 / 3.6));

console.log(price, 'xxxxxxxxxxxxxxxxxxxxx');
