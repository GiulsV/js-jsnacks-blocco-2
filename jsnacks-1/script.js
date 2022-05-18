// genera un array di 10 numeri casuali range 1 - 100, ma stavolta senza doppioni


const myArray = [];

while(myArray.length < 10){

    let randNum = Math.floor(Math.random() * 100) +1;

    if(!myArray.includes(randNum)){

        myArray.push(randNum);

    }
}

console.log(myArray);