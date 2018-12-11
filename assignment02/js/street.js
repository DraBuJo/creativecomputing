$(document).ready(function(){
  
  $("h1").hide();
  
 
  $(window).scroll(function() {
    
    
    var $redPosition = $('#red').css('top');
    var $bluePosition = $('#blue').css('top');
    var $yellowPosition = $('#yellow').css('top');
   
    
    
  
    if ($(window).scrollTop() > parseInt($redPosition)) {
      $('#red h1').fadeIn();
    }
    
    
    if ($(window).scrollTop() > parseInt($bluePosition)) {
      $('#blue h1').fadeIn();
    }
    
    
    if ($(window).scrollTop() > parseInt($yellowPosition)) {
      $('#yellow h1').fadeIn();
    }
    
  });
  
  
});