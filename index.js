class Player {
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    console.log("This Player is " + this);
  }
}

class Warrior extends Player {
  constructor(name, hp, mp, items, shield) {
    super(name, hp, mp, items);
    this.shield = shield;
    console.log("This Warrior is " + this);
  }
}

const Aymaan = new Player("Aymaan", 90, 12, ["cap"]);

const Kratos = new Warrior("Kratos", 90, 89, ["blade"], "Wood Shield");
console.log(Kratos);

// console.log(Aymaan);
