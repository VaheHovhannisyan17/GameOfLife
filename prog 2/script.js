let Grass = require("grass.js")
let GrassEater = require("grassEater.js")
let grassEaterEater = require("grassEaterEater.js")
let human = require("human.js")
let omnivore = require("omnivore.js")
let poisonousGrass = require("poisonousGrass.js")

const matrix = [];
const n = 50;
const m = 40;
const side = 20;
const grassArr = [];
const grassEaterArr = [];
const omnivoreArr = [];
const poisonousGrassArr = [];
const humanArr = [];

function setup() {
    frameRate(10);
    createCanvas(n * side + 1, m * side + 1);
    background(220);
    for (let i = 0; i < m; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < m * n / 2; i++) {
        let a = Math.floor(random(0, n));
        let b = Math.floor(random(0, m));
        matrix[b][a] = 1;
    }
    for (let i = 0; i < m * n / 250; i++) {
        let a = Math.floor(random(0, n));
        let b = Math.floor(random(0, m));
        matrix[b][a] = 2;
    }
    for (let i = 0; i < m * n / 750; i++) {
        let a = Math.floor(random(0, n));
        let b = Math.floor(random(0, m));
        matrix[b][a] = 3;
    }
    for (let i = 0; i < m * n / 75; i++) {
        let a = Math.floor(random(0, n));
        let b = Math.floor(random(0, m));
        matrix[b][a] = 4;
    }
    for (let i = 0; i < m * n / 750; i++) {
        let a = Math.floor(random(0, n));
        let b = Math.floor(random(0, m));
        matrix[b][a] = 5;
    }
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

function draw() {
    for (var y = 0; y < m; y++) {
        for (var x = 0; x < n; x++) {
            if (matrix[y][x] == 5) {
                fill("black");
            }
            else if (matrix[y][x] == 4) {
                fill("brown");
            }
            else if (matrix[y][x] == 3) {
                fill("orange");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            rect(x * side, y * side, side, side);
        }
    }
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
}