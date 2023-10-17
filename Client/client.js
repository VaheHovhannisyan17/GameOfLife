var socket = io();

socket.on("esim", handleinfo)

function handleinfo(esim){
    console.log(esim);
}