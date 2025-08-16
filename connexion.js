
function login() {
    // ... votre code de connexion existant ...
    
    // Après une connexion réussie :
    localStorage.setItem('currentUser', JSON.stringify(userData));
    window.location.href = "cours.html"; // Redirection vers la page des cours
}
