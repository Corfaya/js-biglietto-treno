// VARIABLES
let km = prompt("Inserire qui il numero di km che si intende percorrere");
let age = prompt("Inserire qui l'età del passeggero");
let costPerKm = 0.21;
let price = costPerKm * km;
let reduction = 0;

// CONDITIONAL CONSTRUCTION
if (age < 18) {
    reduction = 20 / 100;
} else if (age >= 65) {
    reduction = 40 / 100;
}

// Discount's amount variable
let discount = price * reduction;

// Ticket's reduced price variable
let reducedPrice = (price - discount).toFixed(2);

// Alert message for the user
// alert("Il prezzo del suo biglietto è di € " + reducedPrice + ".")

// innerHTML with a message for the user
document.getElementById("ticket-price").innerHTML = `Il prezzo del suo biglietto è di € ${reducedPrice}.`