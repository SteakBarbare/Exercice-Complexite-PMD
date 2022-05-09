// On a un tableau qui va contenir 100 index et un nombre aléatoire compris entre 0 et 99

let sortedArray = [];
const arraySize = 100;
const randomNumber = Math.round(Math.random() * arraySize - 1);

// Le tableau est trié, et tous les nombres se suivent logiquement, 0, 1, 2, 3, ... , 97, 98, 99
for (var currentIndex = 0; currentIndex < arraySize; currentIndex++) {
  sortedArray.push(currentIndex);
}

// On affiche le tableau et le nombre aléatoire (c'est juste pour visualiser la chose)
console.log(sortedArray);
console.log(randomNumber);

// Si on part du principe que vous ne connaissez pas le nombre aléatoire, et que vous ne pouvez pas faire sortedArray[randomNumber]
// Comment retrouver ce nombre dans votre tableau ?
let findRandomNumber = function (sortedArray, randomNumber) {};
