const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// Sélection des éléments nécessaires
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
let currentIndex = 0;  // Indice de l'image actuellement affichée

// Fonction pour changer l'image et le texte en fonction de l'index
function updateSlide(index) {
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerText.innerHTML = slides[index].tagLine;
}

// Fonction pour créer les dots dynamiquement
function createDots() {
    const dotsContainer = document.querySelector(".dots");

    if (!dotsContainer) {
        console.error("Le conteneur '.dots' n'a pas été trouvé !");
        return;
    }

    
  
    // Création des dots dynamiquement
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("data-index", index);
        
    });

    // Mise à jour des dots sélectionnés dès la création
    updateDots();
}

// Fonction pour ajouter les événements au clic sur les dots
function addDotListeners() {
    const allDots = document.querySelectorAll(".dot");

    allDots.forEach(dot => {
        dot.addEventListener("click", () => {
            currentIndex = parseInt(dot.getAttribute("data-index"));
            updateSlide(currentIndex);
            updateDots();
        });
    });
}

// Fonction pour mettre à jour l'état des dots (highlight du dot sélectionné)
function updateDots() {
    const allDots = document.querySelectorAll(".dot");

    // On retire la classe 'dot_selected' de tous les dots
    allDots.forEach(dot => dot.classList.remove("dot_selected"));

    // On ajoute 'dot_selected' au dot correspondant à l'index actuel
    const currentDot = document.querySelector(`.dot[data-index='${currentIndex}']`);
    if (currentDot) {
        currentDot.classList.add("dot_selected");
    }
}

// Fonction de navigation avec les flèches
function navigateSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlide(currentIndex);
    updateDots();
}

// Initialisation de l'affichage de la première image et des dots
updateSlide(currentIndex);
createDots();
addDotListeners();

// Gestion des clics sur les flèches gauche et droite
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Flèche gauche : décrementer l'index et mettre à jour la slide
arrowLeft.addEventListener('click', () => {
    navigateSlide(-1);
    console.log("Flèche gauche cliquée");
});

// Flèche droite : incrémenter l'index et mettre à jour la slide
arrowRight.addEventListener('click', () => {
    navigateSlide(1);
    console.log("Flèche droite cliquée");
});