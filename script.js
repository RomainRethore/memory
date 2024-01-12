// var tableauRecto = document.querySelectorAll(".rectocarte");
// var tabloRecto = Array.from(idRecto);
// console.log(tabloRecto);

// console.log(tableauRecto[0].id);
// console.log(tableauRecto);

// tableauRecto.addEventListener("click", function () {
//     console.log("OK")

// })


// Onclick() (dans html) + event.currentTarget (dans le js)

// for (let i = 0; i < tableauRecto.length; i++) {
//    if ( == tableauRecto[i].id) {
//         tableauRecto[i].classList.toggle("retourne")
//    } 
// }


// var voir02 = document.querySelector("#recto02");
// voir02.addEventListener("click", function(){
//     voir02.classList.toggle("retourne");

// })

// var voir03 = document.querySelector("#recto03");
// voir03.addEventListener("click", function(){
//     voir03.classList.toggle("retourne");

// })

// ------------------------------------------------------------------- //
// ------------------------------------------------------------------- //
// ------------------------------------------------------------------- //

// var rectoCarte = document.querySelectorAll(".rectocarte")
// // console.log(rectoCarte);
// var versoCarte = document.querySelectorAll("img");
// // console.log(versoCarte.src);
// var carteSrc = [];
// console.log(carteSrc)


// // function retourne() {
// //     for (let i = 0; i < rectoCarte.length; i++) {
// //         rectoCarte[i].addEventListener("click", function(){
// //             rectoCarte[i].classList.toggle("retourne");
// //             // var carte = versoCarte[i].getAttribute("src");
// //             // carteSrc.push(carte);
// //             // console.log(carteSrc)
// //         })  
// //     };
// // }

// function carteId () {
//     for (let j = 0; j < rectoCarte.length; j++) {
//         rectoCarte[j].addEventListener("click", function(){
//             rectoCarte[j].classList.toggle("retourne");
//             var carte = versoCarte[j].getAttribute("src");
//             carteSrc.push(carte);
//             console.log(carteSrc);
//             console.log(j);
//             if (carteSrc[0]!==carteSrc[1] && carteSrc.length > 2) {
//                 console.log("NO");

//             } 
//             else {
//                 console.log("OK");
//                 rectoCarte[j].classList.add("retourne");

//             }



//         })  
//     };

// }

// // retourne();
// carteId(0);


// ------------------------------------------------------------------- //
// ------------------------------------------------------------------- //
// ------------------------------------------------------------------- //



var carteSrc = { /* <---- liste des cartes retournées */
    length: 0,
    ajoutElem: function ajoutElem(elem) {
        // obj.length est automatiquement incrémenté
        // quand on ajoute un élément
        [].push.call(this, elem);
    },
};

var RectoCarteRetourne = {
    length: 0,
    ajoutElem: function ajoutElem(element) {
        [].push.call(this, element);
    }
};

compteur = 0;

var rectoCarte = document.querySelectorAll(".rectocarte")
// console.log(rectoCarte);
var versoCarte = document.querySelectorAll("img");
// console.log(versoCarte.src);

function melange() { /* <---- mélange les src des verso des cartes en utilisant random() et var tableauSuite */
    for (var i = 0; i < tableauSuite.length; i++) {
        versoCarte[i].src = 'carte0' + tableauSuite[i] + '.jpg';
        versoCarte[i].alt = 'carte0' + tableauSuite[i] + '.jpg';
    }
};

function retourne() {
    for (let j = 0; j < rectoCarte.length; j++) {
        rectoCarte[j].addEventListener("click", function () {
            compteur = compteur + 1;
            document.getElementById("compteur").innerText = compteur;
            console.log(compteur);
            rectoCarte[j].classList.toggle("retourne");
            var carteRetourne = rectoCarte[j];
            RectoCarteRetourne.ajoutElem(carteRetourne);
            // console.log(RectoCarteRetourne);
            var carte = versoCarte[j].getAttribute("src");
            carteSrc.ajoutElem(carte); /* <---- stocker la src de la carte dans liste {carteSrc} */
            // console.log(carteSrc);
            if (carteSrc[0] == carteSrc[1] && carteSrc.length == 2) {
                carteSrc.length = 0;
                RectoCarteRetourne.length = 0;
                // console.log("OK");                
            }
            else if (carteSrc[0] != carteSrc[1] && carteSrc.length == 2) {
                carteSrc.length = 0;
                setTimeout(() => { /* <---- pause avant de cacher la carte */
                    RectoCarteRetourne[0].classList.toggle("retourne");
                }, 500);
                setTimeout(() => { /* <---- pause avant de cacher la carte */
                    RectoCarteRetourne[1].classList.toggle("retourne");
                }, 500);
                RectoCarteRetourne.length = 0;
                // console.log(rectoCarte[j]);
                // console.log("rejouer");
            }
            else {
                // console.log("NO")
            }
        })
    };
}

function gagne() {
    for (let index = 0; index < rectoCarte.length; index++) {
        if (rectoCarte[index].classList == "rectocarte retourne") {
            console.log("you win");
        }

    }
}

/* ------------ CRéATION D'UNE LISTE MéLANGéE DE 1 à 16 ------------ */

var suite1 = {
    length: 0,
    ajoutElem: function ajoutElem(nombre) {
        [].push.call(this, nombre);
    }
};

var suite2 = {
    length: 0,
    ajoutElem: function ajoutElem(nombre) {
        [].push.call(this, nombre);
    }
};


function random(a) { /* <----- random() mélange 1 à 8 -- */
    for (let k = 0; k < 16; k++) {
        var nombre = Math.floor(Math.random() * 8 + 1);
        // console.log(nombre);
        if (nombre != a[0]
            && nombre != a[1]
            && nombre != a[2]
            && nombre != a[3]
            && nombre != a[4]
            && nombre != a[5]
            && nombre != a[6]
            && nombre != a[7]
            && nombre != a[8]
            && nombre != a[9]
            && nombre != a[10]
            && nombre != a[11]
            && nombre != a[12]
            && nombre != a[13]
            && nombre != a[14]
            && nombre != a[15]) {
            a.ajoutElem(nombre);
            k++;
        } else {
            k--;
        }
    }

}

random(suite1); /* <---- mélange stocké dans var suite1 */
random(suite2); /* <---- mélange stocké dans var suite2 */

// console.log(suite1);      
// console.log(suite2);      


var tableauSuite1 = Object.values(suite1); /* <---- transforme liste d'objets {suite1} en array [tableauSuite1] */
tableauSuite1.splice(8, 2); /* <---- supprime les 2 derniers éléments de [suite1] (inutiles cf console.log {suite1}) */

var tableauSuite2 = Object.values(suite2); /* <---- transforme liste d'objets {suite2} en array [tableauSuite2] */
tableauSuite2.splice(8, 2); /* <---- supprime les 2 derniers éléments de [suite2] (inutiles cf console.log {suite2}) */

// console.log(tableauSuite1); 
// console.log(tableauSuite2);   

var tableauSuite = tableauSuite1.concat(tableauSuite2); /* <---- fusionne les deux array [tableauSuite1 & 2] */

// console.log(tableauSuite);   



/* ------------ LANCEMENT DES FONCTIONS ------------ */

melange();
retourne();
gagne();