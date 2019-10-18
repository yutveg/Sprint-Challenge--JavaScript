// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboi{
    constructor(props){
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }
    volumeCalc(){
        return this.length * this.width * this.height;
    }
    surfareaCalc(){
        return 2*(this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

let freshCube = new Cuboi({
    length: 4,
    width: 5,
    height: 5
})
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCube.volumeCalc()); // 100
console.log(newCube.surfareaCalc()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.