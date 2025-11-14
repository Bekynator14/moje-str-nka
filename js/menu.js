(function(){
  const menuToggle = document.querySelector('.menu-toggle');
  const headerEl = document.querySelector('.header');
  const primaryNav = document.getElementById('primaryNav');
  if(!menuToggle || !headerEl || !primaryNav) return;

  // Toggle class on header which CSS uses to show/hide nav
  menuToggle.addEventListener('click', (e)=>{
    e.stopPropagation();
    const opened = headerEl.classList.toggle('header--open');
    menuToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });

  // Close menu when a nav link is clicked (mobile UX)
  primaryNav.querySelectorAll('.nav-link').forEach(a=>{
    a.addEventListener('click', ()=>{
      headerEl.classList.remove('header--open');
      menuToggle.setAttribute('aria-expanded','false');
    });
  });

  // Close when tapping outside the header
  document.addEventListener('click', (ev)=>{
    if(!headerEl.classList.contains('header--open')) return;
    if(!headerEl.contains(ev.target)){
      headerEl.classList.remove('header--open');
      menuToggle.setAttribute('aria-expanded','false');
    }
  });

  // Close on escape key
  document.addEventListener('keydown', (ev)=>{
    if(ev.key === 'Escape' && headerEl.classList.contains('header--open')){
      headerEl.classList.remove('header--open');
      menuToggle.setAttribute('aria-expanded','false');
    }
  });
})();
