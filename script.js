window.onload = function () {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');

  // Défilement : activation des liens de la navbar
  window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => link.classList.remove('active'));

        const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  };

  // Toggle du menu (icône burger)
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  // Animation de texte dynamique
  const texte = document.getElementById("text-animation");
  const phrases = [
    "Frontend Designer,",
    "Web Designer,",
    "UI / UX Designer,",
    "Web Developer,",
    "Software Tester."
  ];
  if (texte) {
  let indexPhrase = 0;
  let indexLettre = 0;
  let efface = false;

  function type() {
    const currentPhrase = phrases[indexPhrase];

    texte.textContent = efface
      ? currentPhrase.substring(0, indexLettre--)
      : currentPhrase.substring(0, indexLettre++);

    if (!efface && indexLettre === currentPhrase.length) {
      efface = true;
      setTimeout(type, 1500);
      return;
    }

    if (efface && indexLettre === 0) {
      efface = false;
      indexPhrase = (indexPhrase + 1) % phrases.length;
    }

    setTimeout(type, 100);
  }

  type();
} else{
  console.error("L'élément text-animation est introuvable dans le dom");
  }
};

// Smooth scroll vers les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});