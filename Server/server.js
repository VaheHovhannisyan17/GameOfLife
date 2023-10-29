var express = require("express");
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs')

app.use(express.static("../Client"));

app.get("/", function(req, res){
    res.redirect("index.html");
});

server.listen(3000, function(){
    console.log("Example is running on port 3000");
});

io.on('connection', function (socket) {
    socket.emit("esim", matrix)
    socket.on("winter", changeRate)
    socket.on("spring", changeRate)
    socket.on("summer", changeRate)
    socket.on("autumn", changeRate)
    socket.on("getStatistics", getStatisticsSignal)
    socket.on("boomBoom", activateBomb)
});

function activateBomb(arevahamBarnEmSirum){
    let a = Math.floor(random(n - 4) + 2);
    let b = Math.floor(random(m - 4) + 2);
    matrix[b][a] = 6;
    matrix[b - 1][a - 1] = 6;
    matrix[b - 1][a] = 6;
    matrix[b - 1][a + 1] = 6;
    matrix[b][a - 1] = 6;
    matrix[b][a + 1] = 6;
    matrix[b + 1][a - 1] = 6;
    matrix[b + 1][a] = 6;
    matrix[b + 1][a + 1] = 6;
    matrix[b - 2][a - 2] = 7;
    matrix[b - 2][a - 1] = 7;
    matrix[b - 2][a] = 7;
    matrix[b - 2][a + 1] = 7;
    matrix[b - 2][a + 2] = 7;
    matrix[b + 2][a - 2] = 7;
    matrix[b + 2][a - 1] = 7;
    matrix[b + 2][a] = 7;
    matrix[b + 2][a + 1] = 7;
    matrix[b + 2][a + 2] = 7;
    matrix[b - 1][a + 2] = 7;
    matrix[b - 1][a - 2] = 7;
    matrix[b][a - 2] = 7;
    matrix[b][a + 2] = 7;
    matrix[b + 1][a - 2] = 7;
    matrix[b + 1][a + 2] = 7;
    setTimeout(backToZero, 500)
    function backToZero(){
        matrix[b][a] = 0;
        matrix[b - 1][a - 1] = 0;
        matrix[b - 1][a] = 0;
        matrix[b - 1][a + 1] = 0;
        matrix[b][a - 1] = 0;
        matrix[b][a + 1] = 0;
        matrix[b + 1][a - 1] = 0;
        matrix[b + 1][a] = 0;
        matrix[b + 1][a + 1] = 0;
        matrix[b - 2][a - 2] = 0;
        matrix[b - 2][a - 1] = 0;
        matrix[b - 2][a] = 0;
        matrix[b - 2][a + 1] = 0;
        matrix[b - 2][a + 2] = 0;
        matrix[b + 2][a - 2] = 0;
        matrix[b + 2][a - 1] = 0;
        matrix[b + 2][a] = 0;
        matrix[b + 2][a + 1] = 0;
        matrix[b + 2][a + 2] = 0;
        matrix[b - 1][a + 2] = 0;
        matrix[b - 1][a - 2] = 0;
        matrix[b][a - 2] = 0;
        matrix[b][a + 2] = 0;
        matrix[b + 1][a - 2] = 0;
        matrix[b + 1][a + 2] = 0;
    }
    for (let i in grassArr) {
        if ((a == grassArr[i].x && b == grassArr[i].y) || 
            (a - 1 == grassArr[i].x && b - 1 == grassArr[i].y) || 
            (a - 1 == grassArr[i].x && b == grassArr[i].y) || 
            (a - 1 == grassArr[i].x && b + 1 == grassArr[i].y) || 
            (a == grassArr[i].x && b - 1 == grassArr[i].y) || 
            (a == grassArr[i].x && b + 1 == grassArr[i].y) || 
            (a + 1 == grassArr[i].x && b - 1 == grassArr[i].y) || 
            (a + 1 == grassArr[i].x && b == grassArr[i].y) || 
            (a + 1 == grassArr[i].x && b + 1 == grassArr[i].y) ||
            (a - 2 == grassArr[i].x && b - 2 == grassArr[i].y) || 
            (a - 2 == grassArr[i].x && b - 1 == grassArr[i].y) || 
            (a - 2 == grassArr[i].x && b == grassArr[i].y) || 
            (a - 2 == grassArr[i].x && b + 1 == grassArr[i].y) || 
            (a - 2 == grassArr[i].x && b + 2 == grassArr[i].y) || 
            (a - 1 == grassArr[i].x && b - 2 == grassArr[i].y) || 
            (a - 1 == grassArr[i].x && b + 2 == grassArr[i].y) || 
            (a == grassArr[i].x && b - 2 == grassArr[i].y) || 
            (a == grassArr[i].x && b + 2 == grassArr[i].y) ||
            (a + 1 == grassArr[i].x && b - 2 == grassArr[i].y) || 
            (a + 1 == grassArr[i].x && b + 2 == grassArr[i].y) || 
            (a + 2 == grassArr[i].x && b - 2 == grassArr[i].y) || 
            (a + 2 == grassArr[i].x && b - 1 == grassArr[i].y) || 
            (a + 2 == grassArr[i].x && b == grassArr[i].y) || 
            (a + 2 == grassArr[i].x && b + 1 == grassArr[i].y) || 
            (a + 2 == grassArr[i].x && b + 2 == grassArr[i].y)) {
            grassArr.splice(i, 1);
        }
    }
    for (let i in grassEaterArr) {
        if ((a == grassEaterArr[i].x && b == grassEaterArr[i].y) || 
            (a - 1 == grassEaterArr[i].x && b - 1 == grassEaterArr[i].y) || 
            (a - 1 == grassEaterArr[i].x && b == grassEaterArr[i].y) || 
            (a - 1 == grassEaterArr[i].x && b + 1 == grassEaterArr[i].y) || 
            (a == grassEaterArr[i].x && b - 1 == grassEaterArr[i].y) || 
            (a == grassEaterArr[i].x && b + 1 == grassEaterArr[i].y) || 
            (a + 1 == grassEaterArr[i].x && b - 1 == grassEaterArr[i].y) || 
            (a + 1 == grassEaterArr[i].x && b == grassEaterArr[i].y) || 
            (a + 1 == grassEaterArr[i].x && b + 1 == grassEaterArr[i].y) ||
            (a - 2 == grassEaterArr[i].x && b - 2 == grassEaterArr[i].y) || 
            (a - 2 == grassEaterArr[i].x && b - 1 == grassEaterArr[i].y) || 
            (a - 2 == grassEaterArr[i].x && b == grassEaterArr[i].y) || 
            (a - 2 == grassEaterArr[i].x && b + 1 == grassEaterArr[i].y) || 
            (a - 2 == grassEaterArr[i].x && b + 2 == grassEaterArr[i].y) || 
            (a - 1 == grassEaterArr[i].x && b - 2 == grassEaterArr[i].y) || 
            (a - 1 == grassEaterArr[i].x && b + 2 == grassEaterArr[i].y) || 
            (a == grassEaterArr[i].x && b - 2 == grassEaterArr[i].y) || 
            (a == grassEaterArr[i].x && b + 2 == grassEaterArr[i].y) ||
            (a + 1 == grassEaterArr[i].x && b - 2 == grassEaterArr[i].y) || 
            (a + 1 == grassEaterArr[i].x && b + 2 == grassEaterArr[i].y) || 
            (a + 2 == grassEaterArr[i].x && b - 2 == grassEaterArr[i].y) || 
            (a + 2 == grassEaterArr[i].x && b - 1 == grassEaterArr[i].y) || 
            (a + 2 == grassEaterArr[i].x && b == grassEaterArr[i].y) || 
            (a + 2 == grassEaterArr[i].x && b + 1 == grassEaterArr[i].y) || 
            (a + 2 == grassEaterArr[i].x && b + 2 == grassEaterArr[i].y)) {
            grassEaterArr.splice(i, 1);
        }
    }
    for (let i in omnivoreArr) {
        if ((a == omnivoreArr[i].x && b == omnivoreArr[i].y) || 
            (a - 1 == omnivoreArr[i].x && b - 1 == omnivoreArr[i].y) || 
            (a - 1 == omnivoreArr[i].x && b == omnivoreArr[i].y) || 
            (a - 1 == omnivoreArr[i].x && b + 1 == omnivoreArr[i].y) || 
            (a == omnivoreArr[i].x && b - 1 == omnivoreArr[i].y) || 
            (a == omnivoreArr[i].x && b + 1 == omnivoreArr[i].y) || 
            (a + 1 == omnivoreArr[i].x && b - 1 == omnivoreArr[i].y) || 
            (a + 1 == omnivoreArr[i].x && b == omnivoreArr[i].y) || 
            (a + 1 == omnivoreArr[i].x && b + 1 == omnivoreArr[i].y) ||
            (a - 2 == omnivoreArr[i].x && b - 2 == omnivoreArr[i].y) || 
            (a - 2 == omnivoreArr[i].x && b - 1 == omnivoreArr[i].y) || 
            (a - 2 == omnivoreArr[i].x && b == omnivoreArr[i].y) || 
            (a - 2 == omnivoreArr[i].x && b + 1 == omnivoreArr[i].y) || 
            (a - 2 == omnivoreArr[i].x && b + 2 == omnivoreArr[i].y) || 
            (a - 1 == omnivoreArr[i].x && b - 2 == omnivoreArr[i].y) || 
            (a - 1 == omnivoreArr[i].x && b + 2 == omnivoreArr[i].y) || 
            (a == omnivoreArr[i].x && b - 2 == omnivoreArr[i].y) || 
            (a == omnivoreArr[i].x && b + 2 == omnivoreArr[i].y) ||
            (a + 1 == omnivoreArr[i].x && b - 2 == omnivoreArr[i].y) || 
            (a + 1 == omnivoreArr[i].x && b + 2 == omnivoreArr[i].y) || 
            (a + 2 == omnivoreArr[i].x && b - 2 == omnivoreArr[i].y) || 
            (a + 2 == omnivoreArr[i].x && b - 1 == omnivoreArr[i].y) || 
            (a + 2 == omnivoreArr[i].x && b == omnivoreArr[i].y) || 
            (a + 2 == omnivoreArr[i].x && b + 1 == omnivoreArr[i].y) || 
            (a + 2 == omnivoreArr[i].x && b + 2 == omnivoreArr[i].y)) {
            omnivoreArr.splice(i, 1);
        }
    }
    for (let i in poisonousGrassArr) {
        if ((a == poisonousGrassArr[i].x && b == poisonousGrassArr[i].y) || 
            (a - 1 == poisonousGrassArr[i].x && b - 1 == poisonousGrassArr[i].y) || 
            (a - 1 == poisonousGrassArr[i].x && b == poisonousGrassArr[i].y) || 
            (a - 1 == poisonousGrassArr[i].x && b + 1 == poisonousGrassArr[i].y) || 
            (a == poisonousGrassArr[i].x && b - 1 == poisonousGrassArr[i].y) || 
            (a == poisonousGrassArr[i].x && b + 1 == poisonousGrassArr[i].y) || 
            (a + 1 == poisonousGrassArr[i].x && b - 1 == poisonousGrassArr[i].y) || 
            (a + 1 == poisonousGrassArr[i].x && b == poisonousGrassArr[i].y) || 
            (a + 1 == poisonousGrassArr[i].x && b + 1 == poisonousGrassArr[i].y) ||
            (a - 2 == poisonousGrassArr[i].x && b - 2 == poisonousGrassArr[i].y) || 
            (a - 2 == poisonousGrassArr[i].x && b - 1 == poisonousGrassArr[i].y) || 
            (a - 2 == poisonousGrassArr[i].x && b == poisonousGrassArr[i].y) || 
            (a - 2 == poisonousGrassArr[i].x && b + 1 == poisonousGrassArr[i].y) || 
            (a - 2 == poisonousGrassArr[i].x && b + 2 == poisonousGrassArr[i].y) || 
            (a - 1 == poisonousGrassArr[i].x && b - 2 == poisonousGrassArr[i].y) || 
            (a - 1 == poisonousGrassArr[i].x && b + 2 == poisonousGrassArr[i].y) || 
            (a == poisonousGrassArr[i].x && b - 2 == poisonousGrassArr[i].y) || 
            (a == poisonousGrassArr[i].x && b + 2 == poisonousGrassArr[i].y) ||
            (a + 1 == poisonousGrassArr[i].x && b - 2 == poisonousGrassArr[i].y) || 
            (a + 1 == poisonousGrassArr[i].x && b + 2 == poisonousGrassArr[i].y) || 
            (a + 2 == poisonousGrassArr[i].x && b - 2 == poisonousGrassArr[i].y) || 
            (a + 2 == poisonousGrassArr[i].x && b - 1 == poisonousGrassArr[i].y) || 
            (a + 2 == poisonousGrassArr[i].x && b == poisonousGrassArr[i].y) || 
            (a + 2 == poisonousGrassArr[i].x && b + 1 == poisonousGrassArr[i].y) || 
            (a + 2 == poisonousGrassArr[i].x && b + 2 == poisonousGrassArr[i].y)) {
            poisonousGrassArr.splice(i, 1);
        }
    }
    for (let i in humanArr) {
        if ((a == humanArr[i].x && b == humanArr[i].y) || 
            (a - 1 == humanArr[i].x && b - 1 == humanArr[i].y) || 
            (a - 1 == humanArr[i].x && b == humanArr[i].y) || 
            (a - 1 == humanArr[i].x && b + 1 == humanArr[i].y) || 
            (a == humanArr[i].x && b - 1 == humanArr[i].y) || 
            (a == humanArr[i].x && b + 1 == humanArr[i].y) || 
            (a + 1 == humanArr[i].x && b - 1 == humanArr[i].y) || 
            (a + 1 == humanArr[i].x && b == humanArr[i].y) || 
            (a + 1 == humanArr[i].x && b + 1 == humanArr[i].y) ||
            (a - 2 == humanArr[i].x && b - 2 == humanArr[i].y) || 
            (a - 2 == humanArr[i].x && b - 1 == humanArr[i].y) || 
            (a - 2 == humanArr[i].x && b == humanArr[i].y) || 
            (a - 2 == humanArr[i].x && b + 1 == humanArr[i].y) || 
            (a - 2 == humanArr[i].x && b + 2 == humanArr[i].y) || 
            (a - 1 == humanArr[i].x && b - 2 == humanArr[i].y) || 
            (a - 1 == humanArr[i].x && b + 2 == humanArr[i].y) || 
            (a == humanArr[i].x && b - 2 == humanArr[i].y) || 
            (a == humanArr[i].x && b + 2 == humanArr[i].y) ||
            (a + 1 == humanArr[i].x && b - 2 == humanArr[i].y) || 
            (a + 1 == humanArr[i].x && b + 2 == humanArr[i].y) || 
            (a + 2 == humanArr[i].x && b - 2 == humanArr[i].y) || 
            (a + 2 == humanArr[i].x && b - 1 == humanArr[i].y) || 
            (a + 2 == humanArr[i].x && b == humanArr[i].y) || 
            (a + 2 == humanArr[i].x && b + 1 == humanArr[i].y) || 
            (a + 2 == humanArr[i].x && b + 2 == humanArr[i].y)) {
            humanArr.splice(i, 1);
        }
    }
}

function changeRate(rate){
    frameRate = rate
    clearInterval(id)
    id = setInterval(start, frameRate)
}

function getStatisticsSignal(esimAnushHayastaniArevahamBarnEmSirum){
    let info = fs.readFileSync("statistics.json").toString()
    io.sockets.emit("sentStatistics", info)
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

    let statisticsObj = {
        grassCount: grassArr.length,
        grassEaterCount: grassEaterArr.length,
        omnivoreCount: omnivoreArr.length,
        poisonousGrassCount: poisonousGrassArr.length,
        humanCount: humanArr.length
    }

    let myJSON = JSON.stringify(statisticsObj);
    fs.writeFileSync("statistics.json", myJSON)
}

matrixEditor()
createObj()

var id
id = setInterval(start, frameRate)