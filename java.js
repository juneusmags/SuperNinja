class Ninja{
    
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name : ${this.name}`);
        console.log(`Strength : ${this.strength}`);
        console.log(`Speed : ${this.speed}`);
        console.log(`Health : ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}

const Ninja1 = new Ninja("juju", 100);
Ninja1.showStats();


class Sensei extends Ninja{
    constructor(name, health, speed, strength, wisdom){
        super(name, health, speed, strength);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("A Wise Message");
    }
}

const Sensei1 = new Sensei("jujumags", 100);
Sensei1.speakWisdom();
Sensei1.showStats();