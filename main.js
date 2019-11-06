// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.
// La soluzione Base, concerne il fatto di non toccare html e css del repo di partenza
// ma fare quello che dobbiamo seguendo quindi la logica implementata da chi ha fatto quell’intefaccia.
$( document ).ready(function() {
    var hambMenu = $(".hamburger-menu");
    var hambIcon = $(".header-right > a[href$='#' ");
    var close = $(".close");

    hambIcon.click(function(){
        hambMenu.addClass("active");
    });

    close.click(function(){
        hambMenu.removeClass("active");
    });
  });