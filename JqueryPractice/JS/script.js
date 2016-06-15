$(document).ready(function(){
  $('div#name').css('color' , 'blue');
  $('ul').css ('color', 'red');
  $('div#surname').css('color', 'orange');
  $('p').css('fontWeight', '700');
  
   $('p#redblock').mouseenter(function() {
       $(this).animate({
           height: '+=20px'
       });
   });
   $('p#redblock').mouseleave(function() {
       $(this).animate({
           height: '-=20px'
       });
   });
   $('p#yellowblock').click(function() {
       $(this).toggle(1000);
   });
   
   $('div#name').click(function(){
	    alert("Hello Madhuri  !! Let's Do more practice on jquery");
	  });
    
	$(document).ready(function() {
            $("em").addClass("selected");
            $("#myid").addClass("highlight");
         });
      
	  $("div#division").click(function () {
               $(this).replaceWith("<h1>JQuery is Great</h1>");
            });
});