var winterButtonObj = document.getElementById("winter")
var springButtonObj = document.getElementById("spring")
var summerButtonObj = document.getElementById("summer")
var autumnButtonObj = document.getElementById("autumn")
let grassColor = "green"
let grassEaterColor = "yellow"
let omnivoreColor = "orange"

function winter(){
    grassColor = "white"
    grassEaterColor = "#ffffaa"
    omnivoreColor = "#ffdd99"

    socket.emit("winter", 500)
}
function spring(){
    grassColor = "green"
    grassEaterColor = "yellow"
    omnivoreColor = "orange"

    socket.emit("spring", 100)
}
function summer(){
    grassColor = "green"
    grassEaterColor = "yellow"
    omnivoreColor = "orange"

    socket.emit("summer", 150)
}
function autumn(){
    grassColor = "#888822"
    grassEaterColor = "yellow"
    omnivoreColor = "orange"

    socket.emit("autumn", 300)
}

var socket = io();

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