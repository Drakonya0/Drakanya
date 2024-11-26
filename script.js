document.addEventListener("DOMContentLoaded", () => {
    // Sélection du bouton "Explorez" sur la première page (index.html)
    const explorerBtn = document.getElementById("explorer-btn");

    // Si le bouton "Explorez" existe sur la page
    if (explorerBtn) {
        explorerBtn.addEventListener("click", () => {
            // Ajoute la classe fade-out pour lancer l'animation de sortie
            document.body.classList.add("fade-out");

            // Après l'animation (800ms), redirige vers la nouvelle page
            setTimeout(() => {
                window.location.href = "P2.html"; // Redirige vers page2.html
            }, 800);
        });
    }

    // Sélection du bouton "Accueil" sur la deuxième page (page2.html)
    const homeBtn = document.getElementById("home-btn");

    // Si le bouton "Accueil" existe sur la page
    if (homeBtn) {
        homeBtn.addEventListener("click", () => {
            // Ajoute la classe fade-out pour lancer l'animation de sortie
            document.body.classList.add("fade-out");

            // Après l'animation (800ms), redirige vers la page d'accueil
            setTimeout(() => {
                window.location.href = "index.html"; // Retour à index.html
            }, 800);
        });
    }
});
