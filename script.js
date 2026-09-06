const links = document.querySelectorAll('.nav-links a');
const sections = [...links].map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);

const setActive = () => {
  let activeId = sections[0]?.id;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 140) activeId = section.id;
  });
  links.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + activeId);
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();

const revealItems = document.querySelectorAll('.panel, .case-card, .cap-card, .resume-band, .case-intro-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.animate(
      [
        { opacity: 0, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: 520, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'both' }
    );
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

revealItems.forEach(item => observer.observe(item));
