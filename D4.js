/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(l1, l2){
  let calcolo = l1 * l2
  return calcolo
}

console.log('L\'area del rettanfolo è ', area(5, 5))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function(n1, n2){
  if(n1 !== n2) {
  let somma = n1 + n2
  return somma
  } else {
    let somma = n1 + n2
    return somma * 3
  }
}

console.log( 'La mia somma pazzarella è ', crazySum(2, 3))
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function(nUno){
  if (nUno > 19){
  let diffAbs = Math.abs(nUno - 19);
  return diffAbs * 3
  } else {
    let diffAbs = Math.abs(nUno - 19);
    return diffAbs 
  }
}

console.log('La mia differenza assoluta è ', crazyDiff(21))


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */   //da rivedere un attimo
const boundary = function(n){ 
  if(n >= 20 && n <= 100 || n === 400){
    return true
  } else {
    return false
  }
}
console.log('Vediamo se è vero :', boundary(25))



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ // slise

 const epify = function(myString) {
  if (myString.slice(0, 7) === 'EPICODE') {
    return myString
} else {
  return 'EPICODE'+ ' ' + myString 
}
   
 }
console.log('La mia stringa:    ', epify('array è un ottima piattaforma'))



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = function(n){
  if(n > 0 && n % 3 === 0 || n % 7 === 0 ) { 
    return true
  } 
}
console.log('Il numero inserito è divisibile per 3 o 7', check3and7(49))



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function(myWord){
  let split = myWord.split('')
  let reverseArray = split.reverse()
  let joinArray = reverseArray.join('')

  return joinArray
  
}

console.log('La mia parola sara invertita; ', reverseString('EPICODE'))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function(a, b, c){
  let parola1 = a.slice(0, 1).toUpperCase();
  let parola2 = b.slice(0, 1).toUpperCase();
  let parola3 = c.slice(0, 1).toUpperCase();
  return parola1+ a.slice(1) + ' ' + parola2 + b.slice(1)+ ' ' + parola3 + c.slice(1);

}
console.log('Inserisci 3 parole ', upperFirst('epicode','buongiorno','sole'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function(myString){
  let myStringCut = myString.slice(1,-1)
  return  myStringCut

}
console.log('Ecco la parola senza la prima e ultima lettera ', cutString('buongiorno'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n){
  let array = [] ;
  for (let i = 0 ; i < n ; i++) {
  
  array.push((Math.floor(Math.random() * 10) + 1))
  }
  return array
}

console.log('array randoom ', giveMeRandom(4))