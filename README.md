Aggiungo un elemento HTML con id 'ticket-price'
Dichiaro una variabile con prompt come valore assegnato per chiedere il numero di km da percorrere
Dichiaro una variabile con prompt come valore assegnato per chiedere l'età del passeggero
Dichiaro una variabile assegnando come valore il prezzo del biglietto per km (0.21 € al km)
Dichiaro una variabile assegnando come valore il prezzo del biglietto calcolato moltiplicando il costo al km per i km scelti dal passeggero
Dichiaro una variabile per la riduzione del biglietto, che inizializzo a 0.
? SE il passeggero è minorenne
  assegno come valore della variabile di riduzione del ticket il 20% di sconto
? SE INVECE il passeggero ha un'età maggiore o uguale di 65 anni
  assegno come valore della variabile di riduzione del ticket il 40% di sconto
<!-- ALTRIMENTI (facoltativo)
  non viene applicata alcuna riduzione -->
Dichiaro una variabile che calcoli l'importo di sconto, moltiplicando il prezzo del ticket del passeggero per l'eventuale riduzione
Dichiaro una variabile per calcolare l'eventuale prezzo scontato, sottraendo al prezzo pieno il valore dell'importo di sconto
Applico all'ultimo calcolo il metodo toFixed() per mostrare il totale fino a un massimo di due decimali dopo la virgola
<!-- Faccio apparire un pop-up con la comunicazione del prezzo finale del biglietto. -->
Aggiungo con la proprietà innerHTML un messaggio con il prezzo finale del biglietto del passeggero.