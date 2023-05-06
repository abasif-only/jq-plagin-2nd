

$(document).ready(function(){
 $('.demo').accordionortabs();


$('#my-number').counto(12345,5000, function(){
  alert('12345 people visit this website.');
});

$(function(){
  $(' form ').wizard({
    backButton: 'Back',
    nextButton: 'Next',
  });
});

});