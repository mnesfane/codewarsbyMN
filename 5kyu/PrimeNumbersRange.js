const {isPrime} =  require('./isPrime.js')

// console.log(isPrime(9))

const getPrimes = function (start, finish){
    let primeArray = []
    
    start > finish ? [start, finish] = [finish, start]: null;
    
    if(start <= 2 && finish > 2 ) 
    { primeArray.push(2); start = 3}
    if(start % 2 == 0){
        start++
    }

    for(; start <= finish; start += 2){
        if(isPrime(start))
            primeArray.push(start)
    }
    return primeArray
}

console.log(getPrimes(2, 2))

