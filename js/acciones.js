// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
$('#btnjugar').on ('tap',function(){

	var pantalla=$.mobile.getScreenHeight();
	var encabezado=$('.ui-header').outerHeight();
	var pie=$('.ui-footer').outerHeight();
	var contenido=$('.ui-content').outerHeight();
	//alert ('pantalla ' + pantalla);
	//alert ('encabezado ' + encabezado);
	//alert ('pie' + pie);
	//alert ('contenido ' + contenido);
	var alto=(pantalla-encabezado-pie)/2;
	$('.cuadro').height(alto);
	
	
	
});//btnjugar


$('.cuadro').on ('vmousedown', function(){
	$(this).addClass('pulsado');
	$('#pantalla').append(quien($(this).attr('id')));	
    });	
	
	$('.cuadro').on ('vmouseup', function(){
	$(this).removeClass('pulsado');	
    });	
	
});//cuadro

function quien(q)
{ 
return q.substring(1);
}

	
	
	

//});

