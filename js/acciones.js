// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	var BaseDatos= window.sgqlitePlugin.openDataBasebase({name: "coloresBD.db", createFromLocation:1});
	
	audio = window.plugins.LowLatencyAudio;
	audio.preloadFX ('B1','audio/C.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	
	audio.preloadFX ('B2','audio/D.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	
	audio.preloadFX ('B3','audio/E.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	
	audio.preloadFX ('B4','audio/F.mp3',function(){}, function(msg){ alert ("Error " + msg);});
	
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
	


function quien(q)
{ 
audio.play(q);
return q.substring(1);
}

function cargarnombrejugador ()
{
 basedatos.transaction(function(ejecutar){
	var sql="SELECT NombreUsuario FROM Usuarios";
	ejecutar.executeSql(sql,undefined,
	 function (ejecutar,resultado){
		var datosJugador = resultados.row.item(0);
		$('#jugador').text(datosJugador.NombreUsuario); 
	 });
 });
}	
	
	
});//cuadro
});

