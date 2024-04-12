const mediasoup = require('mediasoup-client');
const { v4: uuidV4} = require('uuid');

let btnSub;
let btnCam;
let btnScreen;
let textPublish;
let textWebcam;
let textScreen;
let textSubscribe;
let localVideo;
let remoteVideo;
let remoteStream;
let device;
let producer;
let consumeTransport;
let userId;
let isWebcam;
let produceCallback, produceErrBack;
let consumerCallback, consumerErrBack;
const websocketURL = 'ws://localhost:8000/ws';

let socket;

document.addEventListener("DOMContentLoaded", function() {
    btnCam = document.getElementById("btn_webcam");
    btnScreen = document.getElementById("btn_screen");
    btnSub = document.getElementById("btn_subscribe");
    textWebcam = document.getElementById("webcam_status");
    textScreen = document.getElementById("screen_status");
    textSubscribe = document.getElementById("subscribe_status");
    localVideo = document.getElementById("localVideo");
    remoteVideo = document.getElementById("remoteVideo");

    // button event listeners
    btnCam.addEventListener('click', console.log("cam button clicked!"));
    btnScreen.addEventListener('click', console.log("screen button clicked!"));
    btnSub.addEventListener('click', console.log("sub button clicked!"));
});

const connect = () => {
    socket = new WebSocket(websocketURL);
    socket.onopen = () => {
        // start our socket requess.
        
    }
}

connect();