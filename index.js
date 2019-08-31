let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// ctx.fillRect(10,20,100,200); //fillRect : element rempli
// ctx.strokeRect(200,200,100,200);//strokeRect : element non rempli avec bordures

// ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
// ctx.moveTo(200,200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
// ctx.lineTo(200,500);
// //ctx.lineTo(100,500); // = créé une ligne jusqu'aux coordonnées actuelles. On a pas encore tracé le trait
// ctx.moveTo(100,200);
// ctx.lineTo(300,200);
// ctx.moveTo(100,500);
// ctx.lineTo(300,500);

// ctx.stroke(); //Cela trace la ligne

// ctx.beginPath();
//     ctx.arc(75, 75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
//     ctx.moveTo(110,75);
//     ctx.arc(75, 75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
//     ctx.moveTo(65, 65);
//     ctx.arc(60, 65, 5, 0, Math.PI , true);  // Oeil gauche
//     ctx.moveTo(95, 65);
//     ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Oeil droite

//     ctx.moveTo(175, 175);
//     ctx.arc(175, 175, 50, 0, Math.PI*2, true);  // Bouche (sens horaire)
//     ctx.lineWidth= 10;
//     ctx.strokeStyle= "#FF00FF";

//     ctx.stroke();


ctx.beginPath(); //Cela dit à la machine de se preparer a faire une action 
//1
ctx.moveTo(150, 500);
ctx.lineTo(400, 500); //ligne du bas
//2
ctx.moveTo(200, 200); //Cela signifie de passer à 100px en abscisses et 200 px en ordonnées au départ;
ctx.lineTo(200, 500);
// = créé une ligne jusqu'aux coordonnées actuelles. On a pas encore tracé le trait
//3
ctx.moveTo(200, 250);
ctx.lineTo(250, 200); //soutien superieur de la potence dans le coin
//4
ctx.moveTo(200, 200);
ctx.lineTo(350, 200);
ctx.lineTo(350, 250); //ligne du dessus

//5
ctx.moveTo(370, 250);
ctx.arc(350, 250, 20, 0, Math.PI * 2, true); // Cercle extérieur

//6
ctx.moveTo(350, 270);
ctx.lineTo(350, 370);
ctx.lineTo(400, 420); //jambe droite

//7
ctx.moveTo(350, 370);
ctx.lineTo(300, 420); //jambe gauche

//8
//Bras droit
ctx.moveTo(350, 300);
ctx.lineTo(400, 330);

//9
//Bras gauche
ctx.moveTo(350, 300);
ctx.lineTo(300, 330);


ctx.stroke();