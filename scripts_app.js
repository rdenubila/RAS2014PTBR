
var deviceReady = false;
var jqueryReady = false;

var urlVideo = "http://www.cemig.com.br/pt-br/Relatorio-Anual-2014/Documents/relatorio/video/pt/";

$(document).ready(function($) {

	jqueryReady = true;
	checkReady();

});


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

    deviceReady = true;
	checkReady();

}

function checkReady(){

	if(jqueryReady && deviceReady){

		init();

	}

	init();

}

function init(){


	$("#video_intro").html('<video id="video_player" width="100%" height="100%" webkit-playsinline><source src="'+urlVideo+'/video.mp4" type="video/mp4"><source src="'+urlVideo+'video.webm" type="video/webm"><source src="'+urlVideo+'video.ogg" type="video/ogg"></video>');

	iniciaVideo();

	//FECHAR VIDEO SE NAO ESTIVER NA WIFI
	//fechaVideo();
	if(navigator.connection.type!=Connection.WIFI){
		fechaVideo();
	}


}


