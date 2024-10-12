class Animal {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}
const Tiger = new Animal("Tiger", "Robby");
Tiger.name = "Manny";
console.log(Tiger);
