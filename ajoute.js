document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    const option = document.getElementById('option').value.trim();
    const dateInscrit = document.getElementById('dateInscrit').value;
    
    // Validation de base
    if (!nom || !prenom || !email) {
        alert('Veuillez remplir les champs obligatoires (Nom, Prénom, Email)');
        return;
    }

    // Vérifier le format de l'email
    if (!validateEmail(email)) {
        alert('Veuillez entrer une adresse email valide');
        return;
    }

    // Créer l'objet étudiant
    const nouvelEtudiant = {
        id: Date.now(), // ID unique basé sur le timestamp
        nom,
        prenom,
        email,
        telephone: telephone || 'Non renseigné',
        option: option || 'Non spécifiée',
        dateInscrit: dateInscrit || new Date().toISOString().split('T')[0]
    };

    // Récupérer ou initialiser la liste des étudiants
    let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];
    
    // Vérifier si l'email existe déjà
    if (etudiants.some(etud => etud.email === email)) {
        alert('Un étudiant avec cet email existe déjà');
        return;
    }

    // Ajouter le nouvel étudiant
    etudiants.push(nouvelEtudiant);
    localStorage.setItem('etudiants', JSON.stringify(etudiants));
    
    // Confirmation et réinitialisation
    alert('Étudiant ajouté avec succès!');
    this.reset();
    
    // Optionnel: Redirection vers la liste
    // window.location.href = 'listeEtudiant.html';
});

// Fonction de validation d'email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Optionnel: Remplir la date du jour par défaut
window.addEventListener('DOMContentLoaded', function() {
    if (!document.getElementById('dateInscrit').value) {
        document.getElementById('dateInscrit').value = new Date().toISOString().split('T')[0];
    }
});