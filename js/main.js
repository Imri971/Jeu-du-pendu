let button = document.getElementById("start");
let textJeu = document.getElementById("text_pendu");
let effacer = document.getElementById("clear");
let error = document.getElementById("error");
let canvas = document.getElementById("canvas");
let result = document.getElementById("result");
let lost = document.getElementById("lost");
let table = document.getElementById("table");
let ctx = canvas.getContext("2d");
var mots = ["ENCOURAGER", "MAGAZINE", "JEUNE", "PELOUSE", "VOISIN", "CHINOIS", "VOLEUR", "VOITURE", "PERSONNE", "GENTIL"];
error.value = 0;

//gération d'un nombre aléatoire
all_words = mots[Math.floor(Math.random() * mots.length)];

for (let j = 0; j < all_words.length; j++) {
    textJeu.innerHTML = textJeu.innerHTML + "<div class=\"pendu_span " + j + "\">" + all_words[j] + "</div>";
}
//textJeu.innerHTML = textJeu.innerHTML + all_words + " <br>";
var trouve = 0;
var valeur_count = 0;
var valeur_error = 0;
var lettresTrouvees = 0;


function valide(params) {

    var pendu_span = document.getElementsByClassName("pendu_span");

    for (let i = 0; i < all_words.length; i++) {
        //Si une lettre est sélectionné  
        if (params.textContent === all_words[i]) {
            trouve = 1;

            lettresTrouvees++;
            var value_count_actual = valeur_count; //On stocke la valeur actuelle de valeur_count
            params.style.color = "#dc3545";
            params.style.pointerEvents = "none";
            pendu_span.textContent = textJeu.textContent[i];
            pendu_span[i].style.color = "#000"; //On affiche le texte
            if (lettresTrouvees == 2) { //Dans le cas ou il y aurait deux fois la même lettre
                valeur_count = value_count_actual +1;
            } else {
                valeur_count = value_count_actual -1;
            }

        } else if (params.textContent != all_words[i]) {
            trouve = 0;

        }

    }

    if (trouve == 0) {

        valeur_count++;
        error.value = valeur_count;
        valeur_error = valeur_count;
    }
    switch (valeur_count) {


        case 1:
            ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
            //1
            ctx.moveTo(150, 500);
            ctx.lineTo(400, 500);


            ctx.stroke();
            break;
        case 2:
            ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
            //1
            ctx.moveTo(150, 500);
            ctx.lineTo(400, 500);

            ctx.moveTo(200, 200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
            ctx.lineTo(200, 500);

            ctx.stroke();
            break;
        case 3:
            ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
            //1
            ctx.moveTo(150, 500);
            ctx.lineTo(400, 500);

            ctx.moveTo(200, 200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
            ctx.lineTo(200, 500);

            ctx.moveTo(200, 250);
            ctx.lineTo(250, 200); //soutien superieur de la potence dans le coin


            ctx.stroke();
            break;

        case 4:
            ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
            //1
            ctx.moveTo(150, 500);
            ctx.lineTo(400, 500);

            ctx.moveTo(200, 200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
            ctx.lineTo(200, 500);

            ctx.moveTo(200, 250);
            ctx.lineTo(250, 200); //soutien superieur de la potence dans le coin

            ctx.moveTo(200, 200);
            ctx.lineTo(350, 200);
            ctx.lineTo(350, 250); //ligne du dessus

            ctx.stroke();
            break;
        case 5:
            ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
            //1
            ctx.moveTo(150, 500);
            ctx.lineTo(400, 500);

            ctx.moveTo(200, 200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
            ctx.lineTo(200, 500);

            ctx.moveTo(200, 250);
            ctx.lineTo(250, 200); //soutien superieur de la potence dans le coin

            ctx.moveTo(200, 200);
            ctx.lineTo(350, 200);
            ctx.lineTo(350, 250); //ligne du dessus

            ctx.moveTo(370, 250);
            ctx.arc(350, 250, 20, 0, Math.PI * 2, true); // Cercle extérieur

            ctx.stroke();
            break;

        case 6:
            ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
            //1
            ctx.moveTo(150, 500);
            ctx.lineTo(400, 500);

            ctx.moveTo(200, 200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
            ctx.lineTo(200, 500);

            ctx.moveTo(200, 250);
            ctx.lineTo(250, 200); //soutien superieur de la potence dans le coin

            ctx.moveTo(200, 200);
            ctx.lineTo(350, 200);
            ctx.lineTo(350, 250); //ligne du dessus

            ctx.moveTo(370, 250);
            ctx.arc(350, 250, 20, 0, Math.PI * 2, true); // Cercle extérieur

            ctx.moveTo(350, 270);
            ctx.lineTo(350, 370);

            ctx.stroke();
            break;

        case 7:
            ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
            //1
            ctx.moveTo(150, 500);
            ctx.lineTo(400, 500);

            ctx.moveTo(200, 200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
            ctx.lineTo(200, 500);

            ctx.moveTo(200, 250);
            ctx.lineTo(250, 200); //soutien superieur de la potence dans le coin

            ctx.moveTo(200, 200);
            ctx.lineTo(350, 200);
            ctx.lineTo(350, 250); //ligne du dessus

            ctx.moveTo(370, 250);
            ctx.arc(350, 250, 20, 0, Math.PI * 2, true); // Cercle extérieur

            ctx.moveTo(350, 270);
            ctx.lineTo(350, 370);
            ctx.lineTo(400, 420); //jambe droite

            ctx.moveTo(350, 370);
            ctx.lineTo(300, 420); //jambe gauche

            ctx.stroke();
            break;
        case 8:
            ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
            //1
            ctx.moveTo(150, 500);
            ctx.lineTo(400, 500);

            ctx.moveTo(200, 200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
            ctx.lineTo(200, 500);

            ctx.moveTo(200, 250);
            ctx.lineTo(250, 200); //soutien superieur de la potence dans le coin

            ctx.moveTo(200, 200);
            ctx.lineTo(350, 200);
            ctx.lineTo(350, 250); //ligne du dessus

            ctx.moveTo(370, 250);
            ctx.arc(350, 250, 20, 0, Math.PI * 2, true); // Cercle extérieur

            ctx.moveTo(350, 270);
            ctx.lineTo(350, 370);
            ctx.lineTo(400, 420); //jambe droite

            ctx.moveTo(350, 370);
            ctx.lineTo(300, 420); //jambe gauche

            //Bras droit
            ctx.moveTo(350, 300);
            ctx.lineTo(400, 330);

            ctx.stroke();
            break;
        case 9:
            ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
            //1
            ctx.moveTo(150, 500);
            ctx.lineTo(400, 500);

            ctx.moveTo(200, 200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
            ctx.lineTo(200, 500);

            ctx.moveTo(200, 250);
            ctx.lineTo(250, 200); //soutien superieur de la potence dans le coin

            ctx.moveTo(200, 200);
            ctx.lineTo(350, 200);
            ctx.lineTo(350, 250); //ligne du dessus

            ctx.moveTo(370, 250);
            ctx.arc(350, 250, 20, 0, Math.PI * 2, true); // Cercle extérieur

            ctx.moveTo(350, 270);
            ctx.lineTo(350, 370);
            ctx.lineTo(400, 420); //jambe droite

            ctx.moveTo(350, 370);
            ctx.lineTo(300, 420); //jambe gauche

            //Bras droit
            ctx.moveTo(350, 300);
            ctx.lineTo(400, 330);

            //Bras gauche
            ctx.moveTo(350, 300);
            ctx.lineTo(300, 330);


            ctx.stroke();
            break;


        default:
            ctx.clearRect(10, 10, 600, 600);
            break;
    }
    if (error.value == 9) {
        lost.textContent = "Vous avez perdu, le mot secret est: "+all_words;
        table.style.display ="none";
    } else if (error.value < 0) {
        error.value = 0;
    } else if (lettresTrouvees == all_words.length) {
        
        result.textContent = "Félicitation ! Vous avez trouvé le mot: "+all_words;
        table.style.display ="none";
    }

}

// La fonction qui va effacer le contenu et générer un nouveau mot
function clear() {
    window.location.reload();
}

//Les appels des boutons
effacer.addEventListener("click", clear);

/*
textJeu.innerHTML = "";
    all_words = mots[Math.floor(Math.random() * mots.length)];

    for (let j = 0; j < all_words.length; j++) {
        console.log(all_words[j]);

        textJeu.innerHTML = textJeu.innerHTML + "<div class=\"pendu_span " + j + "\">" + all_words[j] + "</div>";
    }
    trouve = 0;
    error.value = trouve;
    valeur_count = 0;
    ctx.clearRect(10, 10, 600, 600);
   
    document.getElementsByClassName("lettres").style.color = "#000";
    document.getElementsByClassName("lettres").style.pointerEvents = "auto";
    */