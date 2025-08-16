
        // Vérifier la session
        if(!localStorage.getItem("SessionUtilisateur")) {
            alert("Veuillez vous connecter");
            window.location.href = "connexion.html";
        }

        // Charger les étudiants
        document.addEventListener('DOMContentLoaded', function() {
            const students = JSON.parse(localStorage.getItem('etudiants')) || [];
            const tableBody = document.querySelector('#studentsTable tbody');
            
            students.forEach((student, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${student.nom}</td>
                    <td>${student.prenom}</td>
                    <td>${student.email}</td>
                    <td>${student.telephone || ''}</td>
                    <td class="actions">
                        <button class="btn-edit" onclick="editStudent(${index})">Modifier</button>
                        <button class="btn-delete" onclick="deleteStudent(${index})">Supprimer</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        });

        function editStudent(index) {
            localStorage.setItem('editIndex', index);
            window.location.href = 'ajouter.html';
        }

        function deleteStudent(index) {
            if(confirm("Voulez-vous vraiment supprimer cet étudiant ?")) {
                const students = JSON.parse(localStorage.getItem('etudiants')) || [];
                students.splice(index, 1);
                localStorage.setItem('etudiants', JSON.stringify(students));
                window.location.reload();
            }
        }
