/*  2

Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

const bike = [
  {
  'name': "eBike",
  'weight': 110
  },
  {
  'name': "crossBike",
  'weight': 80
  },
  {
  'name': "montainBike",
  'weight': 50
  },
];

let lighterWeight = bike[0]
for(let i=0; i<bike.length; i++){
  if(bike[i].weight < lighterWeight.weight){
    lighterWeight = bike[i];
   }
 }

  console.log(lighterWeight)
 $('#result-2').append( `La bici più leggera è la ${lighterWeight.name} che pesa ${lighterWeight.weight} kg.` );
