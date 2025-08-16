// Vérifier si l'utilisateur est connecté
const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser) {
    window.location.href = "connexion.html";
} else {
    // Afficher les informations de l'utilisateur
    document.getElementById('userInfo').innerHTML = `
        Bienvenue, ${currentUser.prenom} ${currentUser.nom} (${currentUser.email})
        <button onclick="logout()" class="logout-btn">Déconnexion</button>
    `;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = "connexion.html";
}

        // Fonction de redirection
        function redirectToLesson(courseType) {
            // Sauvegarde du cours sélectionné
            localStorage.setItem('selectedCourse', courseType);
            
            // Redirection vers la page appropriée
            switch(courseType) {
                case 'macrame':
                    window.location.href = 'macrame.html';
                    break;
                case 'maquillage':
                    window.location.href = 'maquillage.html';
                    break;
                case 'cuisine':
                    window.location.href = 'cuisine.html';
                    break;
                case 'crochet':
                    window.location.href = 'crochet.html';
                    break;
                    case 'Artisanat':
                    window.location.href = 'artisanat.html';
                default:
                    window.location.href = 'inscriptionCours.html';
            }
        }

        // Vérification de connexion
        if (!localStorage.getItem('currentUser')) {
            window.location.href = "connexion.html";
        } else {
            const user = JSON.parse(localStorage.getItem('currentUser'));
            document.getElementById('userInfo').textContent = `Bienvenue, ${user.nom || user.email}`;
        }
    
