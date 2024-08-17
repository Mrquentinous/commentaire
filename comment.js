    // Géstionnaire de soumission du formulaire
    document.querySelector("form").addEventListener('submit' , function(event) {
        event.preventDefault(); //Empéche l'envoi du formulaire
    
    
            // Récupération des valeurs des champs du formulaire
        const firstName = document.getElementById('first-name').value.trim()
        const lastName = document.getElementById('last-name').value.trim()
        const message = document.getElementById('message').value.trim()
        if (firstName == "" || lastName == "" || message == ""){
                document.querySelector("#error-message").style.display = "block";
                return;
            }
            
        document.querySelector("#error-message").style.display = "none";
        //ajout d'un avis
        addReview(firstName,lastName, message);
    
        //Réinitialisation du formulaire
        document.querySelector("form").reset();
        });
    
    //Déclaration des fonction personalisées
    // Fonction pour créer un nouvel avis
    function addReview(firstName, lastName , message ) {
    
        const divtoclone = document.querySelector("#review-form div:nth-of-type(2)");
        const clonedNode = divtoclone.cloneNode(true);
    
    
        clonedNode.querySelector("h3").textContent = `${firstName} ${lastName}`;
        clonedNode.querySelector("p").textContent = message ;
    
        // Ajout de la div d'avis dans le conteneur d'avis
        document.querySelector("#review-form").appendChild(clonedNode);
    }
    
    
        if (firstName=="" || lastName == "" || message==""){
    
        }
    
        // Ajout de la div d'avis dans le conteneur d'avis
        document.querySelector('#form').appendChild(reviewDiv);
    
    
    