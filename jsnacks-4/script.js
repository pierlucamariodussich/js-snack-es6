/* 4A
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
*/

const league = []

for (let i = 0; i < 3 ;i++){

  let scoreRand = Math.floor((Math.random()*6)+0); //valori presi da 4B
  let foulsRand = Math.floor((Math.random()*6)+0); //valori presi da 4B

  let club={
    'name': prompt('Inserisci il nome della squadra'),
    'score': scoreRand, // es 4A : 'score':  0,
    'fouls': foulsRand, // es 4A : 'fouls':  0,
  }

  console.log(club);
  league.push(club);
}
  console.log(league);

for (let i = 0; i < league.length ;i++){
  $('#result-4').append(`${league[i].name} con il punteggio di ${league[i].score} e con ${league[i].fouls} falli segnalati <br>`)
}

/* 4B
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti
*/

// let scoreRand = Math.floor((Math.random()*6)+0);
// let foulsRand = Math.floor((Math.random()*6)+0);
