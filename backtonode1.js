const fruits = ["apples", "bananas", "oranges"];
let store =  {
    fruits

};

store.fruits;
console.log(store.fruits);

var price = 10; // Global Declaration
function showPrice() {
    var price = 12; // Local Declaration using var
    console.log(price); // 12
}
showPrice();
console.log(price); // 10

//Following is an example of function level scopes with IIFE:


var price = 10; // Global Declaration
(function () {
    var price = 12; // Local Declaration using var
    console.log(price); // 12
})();
console.log(price); // 10
// the let part is the es6 part of the codexs
//store.fruits;
//console.log(store.fruits);
// adding comments makes it not print when node is added to it

let nbr = 42;
{
    let nbr = 1000;
    console.log(nbr);
}
console.log(nbr);
console.log("Ricky")
//console.log(Nan)
console.log(NaN)
console.log(NaN+1)
console.log(typeof(NaN))
