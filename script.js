$(document).ready(function() {

 $('[data-toggle="popover"]').popover();
 
 
function myMap() {
    var myCenter = new google.maps.LatLng(40.6797258,-73.9864152);
var mapProp= {
    center:new google.maps.LatLng(40.6797258,-73.9864152),
    zoom:5,
    
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
var marker = new google.maps.Marker({map:map,position: myCenter});






}

myMap();
 
$('.carousel').carousel({
  interval: 2000
})
 
});
