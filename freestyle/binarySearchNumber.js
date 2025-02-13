function binarySearchNumber(nbr){
    let min = 0;
    let max = 100;
    let guess = 50;
    let count = 1;
    while(guess !== nbr){
        if(guess < nbr){
        min = guess;
        guess = Math.floor((max + min) / 2);
        } else if(guess > nbr){
        max = guess;
        guess = Math.floor((max + min) / 2);
        }
        count++;
    }
    return guess;
}

console.log(binarySearchNumber(37))