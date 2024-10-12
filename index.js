class Player {
  constructor(name, hp, mp, items) {
    // is works like a regular function called method
    this.name = name; // this.name will works like Player.name
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
}
const Kratos = new Player("Kratos", 90, 12, ["Blades"]);
console.log(Kratos);
