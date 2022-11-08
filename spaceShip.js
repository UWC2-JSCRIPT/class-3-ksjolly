// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`


class Spaceship {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }
    displaySpeed(){
        console.log(`${this.name} moves at ${this.topSpeed}`);
    }
}
// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const karenShip = new Spaceship('Karen', 'Superfast!');
karenShip.displaySpeed();

const cutieShip = new Spaceship('Cutie', 'Nice slow speed!');
cutieShip.displaySpeed();