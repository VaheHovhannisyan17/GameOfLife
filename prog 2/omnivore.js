let LivingCreature = require("LivingCreature.js")

module.exports = class omnivore extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }

    chooseCell(character) {
        this.getNewCoordinates()
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[i].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell && this.multiply >= 8) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;
            let newGrassEater = new omnivore(newX, newY, 1);
            omnivoreArr.push(newGrassEater);
            this.multiply = 0;
        }
    }

    eat() {
        let humanCells = this.chooseCell(5);
        let grassEaterCells = this.chooseCell(2);
        let grassCells = this.chooseCell(1);
        let allCells = [...humanCells, ...grassEaterCells, ...grassCells]
        let newCell = random(allCells);
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy += 2;
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.eatPoisonousGrass();
        }
    }

    eatPoisonousGrass() {
        let poisonousGrassCells = this.chooseCell(4);
        let newCell = random(poisonousGrassCells);
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = 0;
            for (let i in poisonousGrassArr) {
                if (newX == poisonousGrassArr[i].x && newY == poisonousGrassArr[i].y) {
                    poisonousGrassArr.splice(i, 1);
                    break;
                }
            }
            this.energy = 0;
        } else {
            this.move();
        }
    }

    move() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            this.energy -= 2;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (let i in omnivoreArr) {
                if (this.x == omnivoreArr[i].x && this.y == omnivoreArr[i].y) {
                    omnivoreArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}