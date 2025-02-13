function binarySearchNumber(startNbr, endNbr, target){
    if(startNbr > endNbr){
        return Error('GG')
    }
    let guess = Math.floor((endNbr + startNbr) / 2)
    if(guess === target){
        return guess
    }
    else if(guess > target){
        return binarySearchNumber(startNbr, guess, target)
    }
    else if (guess < target){
        return binarySearchNumber(guess, endNbr, target)
    }
}

const min = 20000
const max = min * 2
const target = 25662


console.log(binarySearchNumber(min, max, target))