// script pour le bacground de la nav quand on start a scrolle

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".head");

  function toggleHeaderBackground() {
      if (window.scrollY > 0) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  }

  window.addEventListener("scroll", toggleHeaderBackground);
});

// script pour la playlist
const videosList = [
  {
      video: 'https://www.youtube.com/embed/sB3cF9vvU5o?si=O-4BiI3i3rDbC361',
      title: 'SOUNDJATA'
  },
  {
      video: 'https://www.youtube.com/embed/H899qgwkhw8?si=IwU67_2IfM8am1sN',
      title: 'YIDJINDJA'
  },
  {
      video: 'https://www.youtube.com/embed/Hqsu1GI23S4?si=FAm1U2vJ9CB4LsFZ',
      title: 'LA DETTE'
  }
  // Ajoutez les autres vidéos YouTube ici avec leurs titres
];

// On utilise 'new Set' pour supprimer les doublons si nécessaire
const categories = [...new Set(videosList.map((item) => item.title))];

document.getElementById('videosList').innerHTML = videosList.map((item) => {
  return (
      `<div class="list">
      <iframe width="100" height="100" src="${item.video}" class="list-video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3 class="list-title">${item.title}</h3>
      </div>`
  );
}).join('');

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(vid => {
  vid.onclick = () => {
      videoList.forEach(remove => { remove.classList.remove('active') });
      vid.classList.add('active');
      let src = vid.querySelector('.list-video').src;
      let title = vid.querySelector('.list-title').innerHTML;
      document.querySelector('.main-video-container iframe').src = src;
      document.querySelector('.main-vid-title').innerHTML = title;
  };
});


// script pour le slider

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

// script pour le texte a propos


document.addEventListener("DOMContentLoaded", function() {
  const moreButton = document.querySelector('.propos .more');
  const hiddenContent = document.querySelector('.propos .hidden-content');

  // Ajoute une classe "hidden" au contenu caché initialement
  hiddenContent.classList.add('hidden');

  moreButton.addEventListener('click', function() {
      // Bascule la visibilité du contenu caché
      hiddenContent.classList.toggle('hidden');

      // Modifie le texte du bouton en fonction de la visibilité du contenu
      if (hiddenContent.classList.contains('hidden')) {
          moreButton.textContent = 'En savoir plus';
      } else {
          moreButton.textContent = 'Voir moins';
      }
  });
});


// script pour animation timeline

 // Initialise ScrollReveal
 ScrollReveal().reveal('.timeline-item', {
  delay: 100,      // Délai avant que l'élément ne soit révélé (en millisecondes)
  distance: '50px', // Distance de décalage de l'élément lors de son apparition
  origin: 'bottom', // Point d'origine de l'animation
  easing: 'ease-in-out', // Effet de transition de l'animation
  interval: 200 // Délai entre chaque élément de la timeline (en millisecondes)
});