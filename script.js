$(document).ready(function() {

$('ul li').click(function(){

    // … Code to change active tab goes here ...
    
    var clicked_href = $(this).children('a').attr('href');
    $('img').hide();
    $(clicked_href).show();
    
    
    
    
});

 $('[data-toggle="popover"]').popover();
 
});
