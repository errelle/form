//A FAIRE : validation finale +//php
// password length verification
document.getElementById("password").addEventListener("input", function (e) {
    var password = e.target.value; // Valeur saisie dans le champ password
    var longueurpassword = "faible";
    var couleurMsg = "red"; //too short
    if (password.length >= 8) {
        longueurpassword = "suffisante";
        couleurMsg = "green"; // correct
    } else if (password.length >= 4) {
        longueurpassword = "moyenne";
        couleurMsg = "orange"; // not enough
    }
    var aidepasswordElt = document.getElementById("aidepassword");
    aidepasswordElt.textContent = "Longueur : " + longueurpassword; // display length
    aidepasswordElt.style.color = couleurMsg; // display correspondant color
});

//regexp mail verification
document.getElementById("mail").addEventListener("blur", function (e) {
    var regexCourriel = /.+@.+\..+/;
    var validiteCourriel = "";
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});
