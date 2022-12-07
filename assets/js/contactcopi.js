function validateForm() {
    let patternnumber = /^\d+$/
    let pattern = /^[a-zA-Z\s]+$/;
    let patternisnumber = /^[1-9]\d{5}$/
    let patterndtn = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;



    vnom = document.getElementById("fname").value;
    vprenom = document.getElementById("fprenom").value;
    vardtn = document.getElementById("fdtn").value;
    var varville = document.getElementById("fville").value;
    var varadresse = document.getElementById("fadresse").value;
    var varcdpost = document.getElementById("fcodepostal").value;
    var varpays = document.getElementById("fpays").value;
    var varfavoris = document.getElementById("paysselect").value;
    var varsujet = document.getElementById("fsujet").value;
    // =============================================1=== ton nom =====================================
    // vnom = document.getElementById("fname").value;
    if (vnom == "") {
        document.getElementById("commentaire1").innerHTML = "vous avez pas entrer votre nom!";
        document.getElementById("fname").focus();
      }

      else if (vnom.length <= 1) {
        document.getElementById("commentaire1").innerHTML = "non conforme: entrer votre nom";
      }

      else if (pattern.test(vnom) === false) {
        document.getElementById("commentaire1").innerHTML = "non conforme:";
      }
      else { document.getElementById("commentaire1").innerHTML = "votre nom est :" + vnom; 
      ocument.getElementById("commentaire2").style.color = "black";
    }

    // ============================================2==== ton prenom =====================================

    // vprenom=document.getElementById("fprenom").value; 
    vprenom = document.getElementById("fprenom").value;
    if (vprenom == "") {
      document.getElementById("commentaire2").innerHTML = "vous avez pas entrer de valeur";
      document.getElementById("fprenom").focus();
    }
    else if (pattern.test(vprenom) === false) {
      document.getElementById("commentaire2").innerHTML = "non conforme:";
    }
    else {
      document.getElementById("commentaire2").innerHTML = "hello :" + vprenom;
      document.getElementById("commentaire2").style.color = "black";
    }

    // ===========================================3===== ta date de naissance =====================================


    // vardtn=document.getElementById("fdtn").value;
   
    if (vardtn == "") {
      document.getElementById("commentaire3").innerHTML = "no no";
    }
    else if (patterndtn.test(vardtn) === false) {
      document.getElementById("commentaire3").innerHTML = "non conforme:";
    }
    else {
      document.getElementById("commentaire3").innerHTML = "votre date de naissance valider :";
      document.getElementById("commentaire3").style.color = "black";
    }

    // ============================================4==== ta ville =====================================

    // var varville= document.getElementById("fville").value;

    if (varville == "") {
        document.getElementById("commentaire4").innerHTML = "vide vide";
    }
    else {
        document.getElementById("commentaire4").innerHTML = "oui :" + varville;
        document.getElementById("commentaire4").style.color = "black";
    }

    // =========================================5======= ton adresse=====================================

    // var varadresse=document.getElementById("fadresse").value;

   
    if (varadresse == "") {

      document.getElementById("commentaire5").innerHTML = "adresse boxe vide";
    }

    else if (pattern.test(varadresse) === false) {
      document.getElementById("commentaire5").innerHTML = "non conforme:";
    }

    else {
      document.getElementById("commentaire5").innerHTML = "hello :" + varadresse;
      document.getElementById("commentaire7").style.color = "black";
    }

    // =============================================6=== ton code postale=====================================

    // var varcdpost=document.getElementById("fcodepostal").value;
    
          var varcdpost = document.getElementById("fcodepostal").value;
          if (varcdpost == "") {
            document.getElementById("commentaire6").innerHTML = "cdp vide";
          }
          else if (varcdpost.length < 5) {
            document.getElementById("commentaire6").innerHTML = "il faut rentrer le bon code postale";
          }
          else if (patternisnumber.test(varcdpost) === false) {
            document.getElementById("commentaire6").innerHTML = "il faut 5 chiffre:";
          }
          else {
            document.getElementById("commentaire6").innerHTML = "votre codepostale :" + varcdpost;
            document.getElementById("commentaire7").style.color = "black";
    }
    // ==============================================7== ton pays=====================================

    // var varpays=document.getElementById("fpays").value;
    if (varpays == "") {
        document.getElementById("commentaire7").innerHTML = "vide pays";
    }
    else if (pattern.test(varpays) === false) {
        document.getElementById("commentaire7").innerHTML = "non conforme:" + varpays;
    }
    else {
        document.getElementById("commentaire7").innerHTML = "conforme votre pays :" + varpays;
        document.getElementById("commentaire7").style.color = "black";
    }

    // ===============================================8 favoris=====================================

    // var varfavoris=document.getElementById("paysselect").value;
    if (varfavoris == "") { document.getElementById("commentaire8").innerHTML = "moi vide" }
    else {
        document.getElementById("commentaire8").innerHTML = "selection est :" + varfavoris;
        document.getElementById("commentaire8").style.color = "black";
    }
    // ===============================================8 favoris=====================================

    // var varsujet=document.getElementById("fsujet").value;
    if (varsujet == "") { document.getElementById("commentaire9").innerHTML = "sujet pas" }

    else if (pattern.test(varsujet) === false) {
        document.getElementById("commentaire9").innerHTML = "non conforme:" + varsujet;
    }
    else if (varsujet.length < 50) {
        document.getElementById("commentaire9").innerHTML = "il faut rentrer au minimum 50 caracteres ";
    }
    else {
        document.getElementById("commentaire9").innerHTML = "votre sujet " + varsujet
        document.getElementById("commentaire9").style.color = "black";
    }
}   