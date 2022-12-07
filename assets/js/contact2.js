
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>cours exercices HTML</title>
  <link rel="stylesheet" href="./assets/css/stylepageindex.css" />
  <!-- <link rel="stylesheet" href="./assets/js/contanct.js" /> -->

</head>

<body>
  <div class="flex-container">
    <div>
      <img src="./assets/img/jarditou_logo.png" alt="jarditou logo" title="jarditou logo" height="80" />
    </div>
    <div>
      <p class="slogan">La qualité depuis 70 ans</p>
    </div>
  </div>
  <nav>
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="table.html">Tableau</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li class="search-container">
        <div>
          <form action="/action_page.php">
            <input type="text" class="searchinput" placeholder="Search.." name="search" />
            <button type="submit">Search</button>
          </form>
        </div>
      </li>
    </ul>
  </nav>
  <img src="./assets/img/promotion.jpg" alt="qu'est ce que html" class="imgpromotion" title="promotion jarditou" />
  <hr />
  <h2>Contact</h2>
  <section>
    <p>* Ces zones sont obligatoires</p>
    <form id="form" action="javascript:validation()" >
      <!-- ========================================================================NOM================================================================ -->
      <div class="row">
        <div class="col-25">
          <label>Nom*:</label>

        </div>

        <input type="text" id="fname" onfocus="this.value=''" value="" placeholder="votre nom de famille..">

        <div id="commentaire1">votre prenom est : </div>

      </div>

      <input type="button" onclick="nom()" value="btnnom">
      </div>

      <script>
        function nom() {
          let patternnumber = /^\d+$/
          let pattern = /^[a-zA-Z\s]+$/;
          let result = pattern.test(vnom);
          var vnom = document.getElementById("fname").value;
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
          else { document.getElementById("commentaire1").innerHTML = "votre nom est :" + vnom; }
        }

      </script>
      <!-- ========================================================================PRENOM================================================================ -->

      <div class="row">

        <div class="col-25">
          <label>Prenom*:</label>

        </div>

        <input type="text" id="fprenom" placeholder="votre nom de famille..">

        <div id="commentaire2">j'attends ton prenom.... </div>

      </div>
      <input type="button" onclick="prenom()" value="btnPrenom">

      <script>

        function prenom() {
          let pattern = /^[a-zA-Z\s]+$/;
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
          }
        }

      </script>

      <!-- ========================================================================SEXE================================================================ -->
      <div class="row">
        <div class="col-25">
          <br><b>Sexe: </b><br>
          <input type="radio" name="sexe" id="male" value="male">Male<br>
          <input type="radio" name="sexe" id="female" value="female">Female<br>
        </div>
        <div>
          <div id="disp"> </div>
          <button type="button" onclick=" checkButton()"> BtnSexe </button>
        </div>
      </div>
      <script>
        function checkButton() {


          if (document.getElementById('male').checked) {
            document.getElementById("female").disabled = true;
            document.getElementById("disp").innerHTML
              = document.getElementById("male").value
            "Vous êtes un homme";
          }
          else if (document.getElementById('female').checked) {
            document.getElementById("male").disabled = true;
            document.getElementById("disp").innerHTML
              = document.getElementById("female").value
              + " vous etes une femme";
          }
          else {
            document.getElementById("disp").innerHTML
              = "vous n'avez pas de choix";
          }
        }
      </script>

      <!-- ====================================================================DATE DE NAISSANCE================================================================ -->
      <hr />

      <div class="row">

        <div class="col-25">
          <label> Date de naissance *:</label>
        </div>

        <input type="date" id="fdtn" placeholder="votre nom de famille..">

        <div id="commentaire3">j'attends votre date de naissance</div>
        <input type="button" onclick="dtn()" value="btn-dtn()">
      </div>

      <script>
        function dtn() {

          let pattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
          vardtn = document.getElementById("fdtn").value;

          if (vardtn == "") {
            document.getElementById("commentaire3").innerHTML = "no no";
          }


          else if (pattern.test(vardtn) === false) {
            document.getElementById("commentaire3").innerHTML = "non conforme:";
          }

          else {

            document.getElementById("commentaire3").innerHTML = "votre date de naissance valider :";
          }
        }
      </script>

      <hr />

      <!-- =====================================================================ADRESSE================================================================ -->
      <div class="row">
        <div class="col-25">
          <label> adresse *:</label>
        </div>

        <input type="text" id="fadresse" placeholder="votre nom de famille..">

        <div id="commentaire5">j'attends votre adresse</div>

        <input type="button" onclick="adresse()" value="btnadresse">

      </div>

      <script>
        function adresse() {
          let pattern = /^[a-zA-Z\s]+$/;
          var varadresse = document.getElementById("fadresse").value;

          if (varadresse == "") {

            document.getElementById("commentaire5").innerHTML = "adresse boxe vide";
          }

          else if (pattern.test(varadresse) === false) {
            document.getElementById("commentaire5").innerHTML = "non conforme:";
          }

          else {
            document.getElementById("commentaire5").innerHTML = "hello :" + varadresse;
          }
        }

      </script>
      <!-- ===================================================================CODE POSTAL================================================================ -->
      <div class="row">
        <div class="col-25">
          <label> Code postal *:</label>
        </div>
        <input type="number" id="fcodepostal" placeholder="votre nom de famille..">
        <div id="commentaire6">j'attends votre code postal</div>
        <input type="button" onclick="cdpost()" value="btncdpostal">
      </div>
      <script>

        function cdpost() {
          let pattern = /^[1-9]\d{5}$/
          var varcdpost = document.getElementById("fcodepostal").value;
          if (varcdpost == "") {
            document.getElementById("commentaire6").innerHTML = "cdp vide";
          }
          else if (varcdpost.length < 5) {
            document.getElementById("commentaire6").innerHTML = "il faut rentrer le bon code postale";
          }
          else if (pattern.test(varcdpost) === false) {
            document.getElementById("commentaire6").innerHTML = "il faut 5 chiffre:";
          }
          else {
            document.getElementById("commentaire6").innerHTML = "votre codepostale :" + varcdpost;
          }
        }
      </script>
      <!-- ====================================================================VILLE================================================================ -->
      <div class="row">
        <div class="col-25">
          <label> ville *:</label>
        </div>

        <input type="text" id="fville" placeholder="votre nom de famille..">

        <div id="commentaire4">j'attends votre ville</div>
        <input type="button" onclick="ville()" value="btnvile">
      </div>
      <script>

        function ville() {
          let pattern = /^[a-zA-Z\s]+$/;
          var varville = document.getElementById("fville").value;

          if (varville == "") {
            document.getElementById("commentaire4").innerHTML = "vide vide";
          }
          else if (pattern.test(varville) === false) {
            document.getElementById("commentaire4").innerHTML = "non conforme:";
          }
          else {
            document.getElementById("commentaire4").innerHTML = "oui :" + varville;
          }
        }

      </script>
      <!-- ====================================================================CHOIX DU PAYS================================================================ -->
      <div class="row">
        <div class="col-25">
          <label> Pays :</label>
        </div>
        <select id="paysselect">
          <option>Choix click ici </option>
          <option>france</option>
          <option>allemagne</option>
          <option>brezil</option>
          <option>japon</option>
        </select>

        <div id="commentaire8">j'attends votre sujet</div>
        <input type="button" onclick="selectfavoris()" value="selectfavoris()">
      </div>

      <script>
        function selectfavoris() {
          var varfavoris = document.getElementById("paysselect").value;
          if (varfavoris == "") { document.getElementById("commentaire8").innerHTML = "moi vide" }
          else { document.getElementById("commentaire8").innerHTML = "selection est :" + varfavoris; }
        }
      </script>
      <!-- ====================================================================CHOIX DU PAYS================================================================ -->
      <!-- <div class="row">
        <div class="col-25">
          <label> Sujet *:</label>   <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="cgu" name="cgu" required>
            <label class="custom-control-label" for="cgu">* J'accepte le traitement informatique de ce formulaire.</label>
            <div id="dcgu"></div><br> -->
    

        <div id="commentaire9">j'attends votre sujet</div>
        <input type="button" onclick="sujet()" value="btnsujet()">
      </div>

      










      
          let patternislettre = /^[a-zA-Z\s]+$/;
          var varsujet = document.getElementById("fsujet").value;
          if (varsujet == "") { document.getElementById("commentaire9").innerHTML = "sujet pas" }

          else if (pattern.test(varsujet) === false) {
            document.getElementById("commentaire9").innerHTML = "non conforme:" + varsujet;
          }


          else if (varsujet.length < 50) {
            document.getElementById("commentaire9").innerHTML = "il faut rentrer au minimum 50 caracteres ";
          }

          else { document.getElementById("commentaire9").innerHTML = "votre sujet " + varsujet }

        

   
     