function fizzBuzz(){
    // let number = Math.floor(Math.random()*100) + 1;
    let number = 15;
    debugger;
    if(number % 3 === 0 && number % 5 === 0){
        return console.log('FizzBuzz');
    }
    else if(number % 3 === 0){
        return console.log('Fizz');
    }
    else if (number % 5 === 0) {
        return console.log('Buzz');
    }
    else{
        return number;
    }

    
}