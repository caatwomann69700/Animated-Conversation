// script.js
document.addEventListener("DOMContentLoaded", function() {
    const messages = document.querySelectorAll('.message');

    // Fonction pour gérer l'animation des messages
    const handleScroll = () => {
        const viewportHeight = window.innerHeight;

        messages.forEach(message => {
            const rect = message.getBoundingClientRect();
            if (rect.top < viewportHeight && rect.bottom >= 0) {
                // Le message est visible dans le viewport
                message.style.opacity = 1;
                message.style.transform = 'translateY(0)';
            } else {
                // Le message n'est pas visible dans le viewport
                message.style.opacity = 0;
                message.style.transform = 'translateY(20px)';
            }
        });
    };

    // Écouteur d'événements pour le défilement de la page
    window.addEventListener('scroll', handleScroll);

    // Appel initial pour afficher les messages au chargement
    handleScroll();
});

//  script pour la pre navbar 
// script.js

document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Bienvenue sur MySite !", "Découvrez nos services.", "Contactez-nous pour plus d'infos."];
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let charIndex = 0;

    const speed = 150; // Vitesse d'écriture/suppression

    function typeEffect() {
        const target = document.getElementById('changing-text');

        // Texte complet
        const fullText = texts[currentIndex];

        // Gestion de l'écriture ou de la suppression
        if (isDeleting) {
            currentText = fullText.substring(0, charIndex--);
        } else {
            currentText = fullText.substring(0, charIndex++);
        }

        target.innerHTML = currentText;

        // Si l'animation est terminée
        if (!isDeleting && currentText === fullText) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000); // Pause avant de commencer à effacer
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            charIndex = 0;
            currentIndex = (currentIndex + 1) % texts.length; // Passe à la phrase suivante
        }

        // Répéter l'effet
        setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
    }

    // Démarre l'animation au chargement de la page
    typeEffect();
});
