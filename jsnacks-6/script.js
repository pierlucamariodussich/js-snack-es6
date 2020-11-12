/*
dato questo array di obj iniziale:
var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

Creiamo una copia dell’array di partenza e aggiungiamo
ai singoli elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale.
 non dobbiamo modificare l’array iniziale

*/

var arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'sunglasses', color: 'blue'},
  {name: 'CrissCross', type: 'shoes', color: 'black'},
  {name: 'Jenny', type: 'bag', color: 'pink'},
];

/*

Creiamo una copia dell’array di partenza e aggiungiamo
ai singoli elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale. */

const arrayCopy = arrayObj.map((element) => {
  let elementUpgrade = {...element, position: randomLetter()}
  return elementUpgrade;
})

console.log(arrayCopy)
// stampare

arrayCopy.forEach((element) => {
  console.log(element)
  $('#result-6').append(`${element.name} is a ${element.color} ${element.type} and is positioned on the shelf ${element.position}  <br>` );
});




// funzione che contiene una lettera casuale
function randomLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  return letter;
}

console.log(randomLetter())
