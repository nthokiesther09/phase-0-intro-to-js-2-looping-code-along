
const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
    return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
 }

 console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))


 function countDown(number) {
     while (number > 0) {
          console.log(number);
         number--;
         }
     console.log(number);}