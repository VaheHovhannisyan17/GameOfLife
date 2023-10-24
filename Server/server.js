var express = require("express");
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("../Client"));

app.get("/", function(req, res){
    res.redirect("index.html");
});

server.listen(3000, function(){
    console.log("Example is running on port 3000");
});

io.on('connection', function (socket) {
    socket.emit("esim", matrix)
    socket.on("winter", rate)
    socket.on("spring", rate)
    socket.on("summer", rate)
    socket.on("autumn", rate)
});



function rate(rate){
    frameRate = rate
}

let Grass = require("./grass.js")
let GrassEater = require("./grassEater.js")
let grassEaterEater = require("./grassEaterEater.js")
let human = require("./human.js")
let omnivore = require("./omnivore.js")
let poisonousGrass = require("./poisonousGrass.js")
let random = require("./random");

matrix = [];
n = 50;
m = 40;
grassArr = [];
grassEaterArr = [];
omnivoreArr = [];
poisonousGrassArr = [];
humanArr = [];
frameRate = 100

function createObj(){
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 1) {
                const grass_obj = new Grass(j, i, 1);
                grassArr.push(grass_obj);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 2) {
                const grassEater_obj = new GrassEater(j, i, 1);
                grassEaterArr.push(grassEater_obj);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 3) {
                const omnivore_obj = new omnivore(j, i, 1);
                omnivoreArr.push(omnivore_obj);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 4) {
                const poisonousGrass_obj = new poisonousGrass(j, i, 1);
                poisonousGrassArr.push(poisonousGrass_obj);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 5) {
                const human_obj = new human(j, i, 1);
                humanArr.push(human_obj);
            }
        }
    }
}

function matrixEditor(){
    for (let i = 0; i < m; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < m * n / 2; i++) {
        let a = Math.floor(random(n));
        let b = Math.floor(random(m));
        matrix[b][a] = 1;
    }
    for (let i = 0; i < m * n / 250; i++) {
        let a = Math.floor(random(n));
        let b = Math.floor(random(m));
        matrix[b][a] = 2;
    }
    for (let i = 0; i < m * n / 750; i++) {
        let a = Math.floor(random(n));
        let b = Math.floor(random(m));
        matrix[b][a] = 3;
    }
    for (let i = 0; i < m * n / 75; i++) {
        let a = Math.floor(random(n));
        let b = Math.floor(random(m));
        matrix[b][a] = 4;
    }
    for (let i = 0; i < m * n / 750; i++) {
        let a = Math.floor(random(n));
        let b = Math.floor(random(m));
        matrix[b][a] = 5;
    }
}

function start(){
    for (const i in grassArr) {
        grassArr[i].mul();
    }
    for (const i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (const i in omnivoreArr) {
        omnivoreArr[i].eat();
        omnivoreArr[i].mul();
        omnivoreArr[i].die();
    }
    for (const i in poisonousGrassArr) {
        poisonousGrassArr[i].mul();
    }
    for (const i in humanArr) {
        humanArr[i].eat();
        humanArr[i].mul();
        humanArr[i].die();
    }

    io.sockets.emit("esim", matrix)
}

matrixEditor()
createObj()
setInterval(start, frameRate)

console.log(matrix)