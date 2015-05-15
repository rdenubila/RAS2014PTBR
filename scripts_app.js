
var deviceReady = false;
var jqueryReady = false;

var urlVideo = "http://relatorio2014.cemig.com.br/video/pt/";

$(document).ready(function($) {
	alert("ready");
	jqueryReady = true;
	checkReady();

});


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	alert("onDeviceReady");
    deviceReady = true;
	checkReady();

}

function checkReady(){

	if(jqueryReady && deviceReady){

		init();

	}

	//init();

}

function init(){

	$("#video_intro").html('<video id="video_player" width="100%" height="100%" webkit-playsinline><source src="'+urlVideo+'video.webm" type="video/webm"><source src="'+urlVideo+'video.ogg" type="video/ogg"></video>');

	$('body').prepend("<a href='javascript: void(0)' onClick='$(this).fadeOut(); $(\"#video_player\")[0].play();' style='display: block; position: absolute; width: 100%; height: 100%; background: url(images/bgs/"+idioma+"/capa_play.jpg) center center; background-size: cover; z-index: 100;'></a>");

	iniciaVideo();

	//FECHAR VIDEO SE NAO ESTIVER NA WIFI
	//fechaVideo();
	if(navigator.connection.type!=Connection.WIFI){
		fechaVideo();
	}


}


