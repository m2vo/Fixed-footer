
function fixedFooter() {
    // Collecter les varaiables
    var footer = document.querySelector("footer");      // objet footer
    var hautFooter = footer.offsetHeight;               // hauteur du footer
    var hautFenetre = window.innerHeight;               // Hauteur de la fenêtre du navigateur
    var largFenetre = window.innerWidth;                // Largeur de la fenêtre
    var hautBody = document.body.offsetHeight;           // Hauteur du body incluant les paddings
    var marge = 20;                                     // Marge entre le body et la footer
    // Calculer la nouvelle position
    // On veille à ce que le footer ne se superpose pas au texte du body
    var nouveauTop;
    if ((hautFenetre - hautFooter - marge) > hautBody) {
        nouveauTop = hautFenetre - hautFooter;
    }
    else {
        nouveauTop = hautBody + marge;
    }
    // Changer les propriétés du footer
    var css = "top:" + nouveauTop + "px;" + "width:" + largFenetre + "px;" + "position: absolute;";
    footer.style.cssText += css;
}

document.addEventListener("DOMContentLoaded", function(event) {
    fixedFooter();
});

window.addEventListener("resize", fixedFooter);


