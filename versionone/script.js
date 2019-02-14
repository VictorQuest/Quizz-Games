var dateadeviner = 1985;
var tentativesjeu = 3;

var tentativesutilisateur = 0;
var dateutilisateur = "";
console.log(dateadeviner);


  while(tentativesutilisateur < tentativesjeu) {
    var dateutilisateur = prompt("C'est quand que la couche de l'ozone", "ta réponse en 4 chiffres ici");
    if (dateutilisateur == dateadeviner) {
      alert("Félicitations, MaMèèèn! C'est gagné!");
      break;
      }  else if (isNaN(dateutilisateur)) {
     alert("C'est pas un nombre!");
    } else if (dateutilisateur > dateadeviner) {
      tentativesutilisateur += 1;
      alert("Déjà non! Va voir vers du plus petit!");
    } else if (dateutilisateur < dateadeviner) {
      tentativesutilisateur += 1;
      alert("Carrément pas! Va voir vers du plus grand!");
    }
    }
    if (tentativesutilisateur == tentativesjeu) {
      alert("C'est perdu, Gringo! Dégage la place!");
      
    }
