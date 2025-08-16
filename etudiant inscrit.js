document.addEventListener('DOMContentLoaded', function() {
    // Charger les étudiants depuis le localStorage au chargement de la page
    loadStudents();

    // Gérer la suppression d'un étudiant
    document.getElementById('studentsTable').addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-supprimer')) {
            const row = e.target.closest('tr');
            const studentId = row.getAttribute('data-id');
            if (confirm('Voulez-vous vraiment supprimer cet étudiant ?')) {
                deleteStudent(studentId);
                row.remove();
            }
        }
    });
});

// Fonction pour charger les étudiants depuis le localStorage
function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const tbody = document.querySelector('#studentsTable tbody');
    tbody.innerHTML = '';

    if (students.length === 0) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td colspan="7" style="text-align: center;">Aucun étudiant inscrit</td>
        `;
        tbody.appendChild(row);
        return;
    }

    students.forEach(student => {
        const row = document.createElement('tr');
        row.setAttribute('data-id', student.id);
        
        row.innerHTML = `
            <td>${student.nom || ''}</td>
            <td>${student.prenom || ''}</td>
            <td>${student.email || ''}</td>
            <td>${student.telephone || ''}</td>
            <td>${student.cours || ''}</td>
            <td>${student.dateInscription || ''}</td>
            <td>
                <div class="action-buttons">
                    <a href="modifie.html?id=${student.id}" class="btn btn-modifier">Modifier</a>
                    <button class="btn btn-supprimer">Supprimer</button>
                </div>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Fonction pour supprimer un étudiant
function deleteStudent(id) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students = students.filter(student => student.id !== id);
    localStorage.setItem('students', JSON.stringify(students));
}