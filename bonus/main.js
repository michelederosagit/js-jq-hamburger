// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.
// La soluzione Base, concerne il fatto di non toccare html e css del repo di partenza
// ma fare quello che dobbiamo seguendo quindi la logica implementata da chi ha fatto quell’intefaccia.

// BONUS
$( document ).ready(function() {
    var hambMenu = $(".hamburger-menu");
    var hambIcon = $(".header-right > a[href$='#' ");
    var close = $(".close");

    // Animazione Menu Hamburger
    hambIcon.click(function() {
        hambMenu.fadeIn(3000);
        hambMenu.addClass("active");
    }); 

    close.click(function(){
        hambMenu.fadeOut(2000);
        hambMenu.removeClass("active");
    });
  });