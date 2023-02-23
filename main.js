for (let i = 1; i<100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz"); //Stampa in console FizzBuzz se è multiplo di 3 e 5
    }
    else if (i % 3 === 0){
        console.log("Fizz"); //Stampa in console Fizz se è multiplo di 3
    }
    else if (i % 5 === 0){
        console.log("Buzz"); //Stampa in console Buzz se è multiplo di 5
    }
    else {
        console.log(i);
    }
    
}