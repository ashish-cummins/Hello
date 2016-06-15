$(document).ready(function(){
  

      	  //$( "ul.topnav > li" ).css( "border", "3px double red" );
	   $("ul.topnav > li").after("<ul class='divider' ></ul>");
	   
       $("div").click(function () {
               $(this).before('<div class="div"></div>' );
            }); 
});