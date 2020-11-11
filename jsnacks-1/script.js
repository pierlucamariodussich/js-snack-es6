/* 1A

Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10

*/

const ball = {
'name' : 'palla',
'weight': '10', // oppure 'peso': parseInt(prompt('inserisci un peso'));
};


/* 1B

Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla.

*/

ball.weight = parseInt(prompt('inserisci un peso'));
console.log(ball)

$('#result-1').append(`Il peso della palla inserito è ${ball.weight}`)
