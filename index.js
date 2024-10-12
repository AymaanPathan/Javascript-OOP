class player {}

const kratos = new player(); // correct way to differentiate with normal object and says this an an specific player object
console.log(kratos);
console.log({}); // this is a normal object we can't say this is a player object its just a simple normal object

// other examples
// 1. is car class -> is a specific objects of all cars
// on the other hand when we create a simple object for cars we can't tag that object as a car and there is also a problem of shallow and depp copy
// and also same work with function that returns a obj
