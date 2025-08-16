// Fonction pour basculer entre les thèmes clair et sombre
document.getElementById('theme-btn').addEventListener('click', function() {
    const body = document.body;
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    
    if (body.classList.contains('clair')) {
        body.classList.remove('clair');
        body.classList.add('sombre');
        sun.style.display = 'none';
        moon.style.display = 'block';
        // Sauvegarder le thème dans le localStorage
        localStorage.setItem('theme', 'sombre');
    } else {a
        body.classList.remove('sombre');
        body.classList.add('clair');
        moon.style.display = 'none';
        sun.style.display = 'block';
        // Sauvegarder le thème dans le localStorage
        localStorage.setItem('theme', 'clair');
    }
});

// Vérifier le thème sauvegardé au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    
    if (savedTheme === 'sombre') {
        document.body.classList.remove('clair');
        document.body.classList.add('sombre');
        sun.style.display = 'none';
        moon.style.display = 'block';
    } else {
        document.body.classList.remove('sombre');
        document.body.classList.add('clair');
        moon.style.display = 'none';
        sun.style.display = 'block';
    }
    
    // Activer/désactiver le menu responsive
    const toggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    
    toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    
    // Fonctionnalité de recherche (simplifiée)
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            alert('Recherche pour: ' + searchInput.value);
            // Ici vous pourriez implémenter une vraie recherche
        }
    });
    
    // Bouton de déconnexion
    document.getElementById('logout-btn').addEventListener('click', function() {
        if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
            // Ici vous pourriez ajouter la logique de déconnexion réelle
            alert('Déconnexion réussie');
            window.location.href = 'index.html'; // Rediriger vers la page de connexion
        }
    });
    
    // Animation pour les cartes de cours
    const coursCards = document.querySelectorAll('.cours-card');
    coursCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
});