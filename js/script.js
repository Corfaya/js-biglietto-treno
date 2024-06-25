// alert("hello")

// VARIABLES
let km = prompt("Inserire qui il numero di km che si intende percorrere");
console.log(km)
let age = prompt("Inserire qui l'età del passeggero");
console.log(age)
let costPerKm = 0.21;
console.log(costPerKm)
let price = costPerKm * km;
console.log(price);
let reduction = 0;
console.log(reduction);

// CONDITIONAL CONSTRUCTION
if (age < 18) {
    reduction = 20 / 100;
    console.log(reduction);
}