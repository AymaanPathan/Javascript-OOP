function player(name, hp, mp, items) {
  return {
    name,
    hp,
    mp,
    items,
  };
} // create a function that return individual object

const kratos = player("Kratos", 90, 1, ["Blade"]);
const zeus = player("Zeus", 100, 70, ["Rope"]);

console.log(kratos);
console.log(zeus);
