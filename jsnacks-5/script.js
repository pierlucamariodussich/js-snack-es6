/*
Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio',
'Roberto', 'Giovanni', 'Simone', 'Chiara'];
chiediamo all’utente con 2 prompt due numeri
tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori
che hanno la posizione compresa tra i due numeri
inseriti dall’utente
*/

var myArray = ['Michele', 'Fabio','Roberto', 'Giovanni', 'Simone', 'Chiara']
var fromNum = parseInt(prompt(`inserisci un numero tra 0 e ${myArray.length}` ))
var toNum = parseInt(prompt(`inserisci un numero tra 0 e ${myArray.length}` ))
