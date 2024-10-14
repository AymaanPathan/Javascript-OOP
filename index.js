function Person(name, balance) {
  this.name = name;
  this.id = Date.now();
  this.balance = balance;
}

const Aymaan = new Person("Aymaan", 1000);

Person.prototype.Deposit = function (amount) {
  this.balance += amount;
};

Person.prototype.withDraw = function (amount) {
  this.balance -= amount;
};

Aymaan.withDraw(500);

console.log(Aymaan);
