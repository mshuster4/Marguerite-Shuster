$(document).ready(function(){

  $('.phone').tooltip({title: "612-803-8289", trigger: "hover", placement: "bottom", animation: true});   
  $('.mail').tooltip({title: "margy.shuster@gmail.com", trigger: "hover", placement: "bottom", animation: true}); 

});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}
