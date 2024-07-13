document.addEventListener('DOMContentLoaded', function() {
    // Sélection du formulaire et de la section des avis
    const reviewForm = document.getElementById('review-form');
    const reviewsContainer = document.getElementById('message');

   // Fonction pour créer un nouvel avis
   function addReview(firstName,lastName ,review) {
    // Création des éléments HTML pour l'avis
    const reviewDiv = document.createElement('div');
    const reviewName = document.createElement('h3');
    const reviewText = document.createElement('p');

    // Assignation des valeurs
    reviewName.textContent = firstName,lastName;
    reviewText.textContent = review;

    // Ajout des éléments dans la div d'avis
    reviewDiv.appendChild(reviewName);
    reviewDiv.appendChild(reviewText);

    // Ajout de la div d'avis dans le conteneur d'avis
    reviewsContainer.appendChild(reviewDiv);
}

// Gestionnaire de soumission du formulaire
reviewForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    alert('lien cliqué sans rechargement')

    // Récupération des valeurs des champs du formulaire
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const review = document.getElementById('review').value;

    // Ajout du nouvel avis
    addReview(firstName,lastName, review);

    // Réinitialisation du formulaire
    reviewForm.reset();
});
});