 
        function validerFormulaire() {
            var nom = document.getElementById("nom").value.trim();
            var prenom = document.getElementById("prenom").value.trim();
            var adresse = document.getElementById("adresse").value.trim();
            var telephone = document.getElementById("telephone").value.trim();
            var responsable = document.getElementById("responsable").value.trim();

            if (nom === "" || prenom === "" || adresse === "" || telephone === "" || responsable === "") {
                alert("ce champ ne doit pas etre vide.");
                return false;
            }
            
            // Validation supplémentaire pour le numéro de téléphone
            var telRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
            if (!telRegex.test(telephone)) {
                alert("Numéro de téléphone non valide. Format attendu: +(509)00000000");
                return false;
            }

            alert("Formulaire remplie avec succes!");
            return true;
        }
    