let LivingCreature = require("LivingCreature.js")

module.exports = class poisonousGrass extends LivingCreature{
    mul() {
        this.multiply++;
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell && this.multiply >= 15) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;

            let newPoisonousGrass = new poisonousGrass(newX, newY, 1);
            poisonousGrassArr.push(newPoisonousGrass);
            this.multiply = 0;
        }
    }
}