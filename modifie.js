document.addEventListener('DOMContentLoaded', function() {
    // Récupérer l'ID de l'étudiant depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get('id');

    // Si un ID est présent dans l'URL, charger les données de l'étudiant
    if (studentId) {
        loadStudentData(studentId);
    }

        const student = students[id];
        if (student) {
            document.getElementById('editNom').value = student.nom;
            document.getElementById('editPrenom').value = student.prenom;
            document.getElementById('editEmail').value = student.email;
            document.getElementById('editTelephone').value = student.telephone;
            document.getElementById('editCours').value = student.cours;
            document.getElementById('editDate').value = student.dateInscription;
       

    // Gestion de la soumission du formulaire
    document.getElementById('editForm').addEventListener('submit', function(e) {
        e.preventDefault(); }
        
        // Récupérer les valeurs du formulaire
        const updatedStudent = {
            id: studentId,
            nom: document.getElementById('editNom').value,
            prenom: document.getElementById('editPrenom').value,
            email: document.getElementById('editEmail').value,
            telephone: document.getElementById('editTelephone').value,
            cours: document.getElementById('editCours').value,
            dateInscription: document.getElementById('editDate').value
        };

        // Ici, vous devriez envoyer les données au serveur
        console.log('Étudiant mis à jour:', updatedStudent);
        
        // Rediriger vers la page principale après la modification
        window.location.href = 'etudianti inscrit.html';
    });
