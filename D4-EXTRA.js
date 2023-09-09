// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n){
  const array = [] ;
  for (let i = 0 ; i < n ; i++) {
  
  array.push(Math.floor(Math.random() * 11))
}
return array
}


const array1 = giveMeRandom(4)
const array2 = []



const checkArray = function(array){
  for (let i = 0 ; i < array.length ; i++) {
    if(array[i] > 5){
      array2.push(array[i])
      console.log(true)
    } else {
      console.log(false)
    }
  }
  
let somma = array2.reduce(function(a, b){
  return a + b
}, 0)
return console.log(somma);

}


checkArray(array1)
console.log(typeof array1);




/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart= [
  { 
    name: 'React',
    price: 50,
    id: 1,
    quantity: 7
  },
  { 
    name: 'Metcon',
    price: 90,
    id: 2,
    quantity: 2
  },
  { 
    name: 'Jordan',
    price: 200,
    id: 3,
    quantity: 1
  },
  { 
    name: 'Pegasus',
    price: 55,
    id: 4,
    quantity: 6
  },
 
]

const shoppingCartTotal = function (shoppingCart){
  let total = 0
  for(let i = 0; i < shoppingCart.length ; i++) {
    const item= shoppingCart[i].quantity
    const price = shoppingCart[i].price
   
    total += item * price

    console.log(item);
  }
  return total;
}
console.log('Il totale degli oggetti : ' , shoppingCartTotal(shoppingCart) );
// console.log(shoppingCart);

shoppingCart[0].quantity =  shoppingCart[0].quantity + 1// cosi cambio il valore della mi proprietà


/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function(n){    // il valore n corrisponde all' id 
let newItem = 0

  for(let i = 0; i < shoppingCart.length ; i++){
    const type = shoppingCart[i].id
    let item = shoppingCart[i].quantity
    
    // console.log('id', type);
    // console.log('Quanti oggetti ci sono', item);
    if(n === type){
      
      newItem = item + 1
      shoppingCart[i].quantity = newItem
      // console.log('ci siamo');
      
    }
    
  }
  return newItem
}

addToShoppingCart(1)
addToShoppingCart(2)

console.log('Negozietto', shoppingCart);




/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/



/* SCRIVI QUI LA TUA RISPOSTA */


//SOLUZIONE 1

// const maxShoppingCart = function(shoppingCart){
  
//   let newArr = []
  

//   for(let i = 0; i < shoppingCart.length ; i++){
//   let price = shoppingCart[i].price
//   newArr.push(price)
// }
//  let topDeGamma = Math.max(newArr)

// console.log(Math.max(...newArr))
    
  
//  return topDeGamma;
// } 


// SOLUZIONE 2  // 
shoppingCart[1].price = 333  // test cambio prezzo

const maxShoppingCart = function(shoppingCart){
  let maxPrice = 0
  let item = 0
  for(let i = 0; i < shoppingCart.length ; i++){
  if (shoppingCart[i].price > maxPrice){
    maxPrice = shoppingCart[i].price
    item = shoppingCart[i]
  } 
}

return item
} 



console.log('L\'oggetto piu costoso vale : ', maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
let addidas ={ 
                name: 'Superstar',
                price: 40,
                id: 5,
                quantity: 1
              }
shoppingCart.push(addidas)
/* SCRIVI QUI LA TUA RISPOSTA */

let latestShoppingCart = function(shoppingCart) {
  let indice = 0
  let lastArrived = 0
  for(let i = 0; i < shoppingCart.length ; i++){
    if(shoppingCart.length > indice ){
      
      lastArrived = shoppingCart[i]
    }
    }
    return lastArrived
  }


console.log('L\'ultimo oggetto arrivato è:  ', latestShoppingCart(shoppingCart));


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let loopUntil = function(n){
  if(n >=0 && n <=9){
    for(let i=0; i <3; i++){
      let casulNumber = Math.floor(Math.random()*10)
      if(casulNumber > n){
        console.log(casulNumber)
        

      } else {
        i = 0
      }
  }
}
return 
}
loopUntil(5)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
