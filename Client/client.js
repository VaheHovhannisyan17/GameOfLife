var grassCountObj = document.getElementById("grassCount")
var grassEaterCountObj = document.getElementById("grassEaterCount")
var omnivoreCountObj = document.getElementById("omnivoreCount")
var poisonousGrassCountObj = document.getElementById("poisonousGrassCount")
var humanCountObj = document.getElementById("humanCount")
let grassColor = "green"
let grassEaterColor = "yellow"
let omnivoreColor = "orange"
var socket = io();

function getStatistics(){
    socket.emit("getStatistics", "esim")
}

socket.on("sentStatistics", changeStatistics)

function changeStatistics(info){
    let content = JSON.parse(info)
    grassCountObj.innerHTML = content.grassCount
    grassEaterCountObj.innerHTML = content.grassEaterCount
    omnivoreCountObj.innerHTML = content.omnivoreCount
    poisonousGrassCountObj.innerHTML = content.poisonousGrassCount
    humanCountObj.innerHTML = content.humanCount
}

function winter(){
    grassColor = "white"
    grassEaterColor = "#ffffaa"
    omnivoreColor = "#ffdd99"

    socket.emit("winter", 5000)
}
function spring(){
    grassColor = "green"
    grassEaterColor = "yellow"
    omnivoreColor = "orange"

    socket.emit("spring", 1000)
}
function summer(){
    grassColor = "green"
    grassEaterColor = "yellow"
    omnivoreColor = "orange"

    socket.emit("summer", 1500)
}
function autumn(){
    grassColor = "#888822"
    grassEaterColor = "yellow"
    omnivoreColor = "orange"

    socket.emit("autumn", 3000)
}


socket.on("esim", myDraw)

n = 50;
m = 40;
side = 20;

function setup(){
    createCanvas(n * side + 1, m * side + 1);
    background(220);
}

function myDraw(matrix) {
    for (var y = 0; y < m; y++) {
        for (var x = 0; x < n; x++) {
            if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 4) {
                fill("brown");
            }
            else if (matrix[y][x] == 3) {
                fill(omnivoreColor);
            }
            else if (matrix[y][x] == 2) {
                fill(grassEaterColor);
            }
            else if (matrix[y][x] == 1) {
                fill(grassColor);
            }
            else if (matrix[y][x] == 0) {
                fill("#553300");
            }
            rect(x * side, y * side, side, side);
        }
    }
}