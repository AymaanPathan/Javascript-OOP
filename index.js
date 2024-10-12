const player = {
  name: "?",
  hp: 100,
  mp: 0,
  items: [],
};

const kratos = player;
kratos.name = "kratos";
kratos.hp = 90;

const zeus = player;

console.log(kratos);
console.log(zeus);
