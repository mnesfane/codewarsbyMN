function isPrime(num) {
    if(num < 2) return false;
    if(num == 2) return true;
    if(num % 2 == 0) return false;
    // for(let i = 3; i <= num / 2; i += 2){ work too
    for(let i = 3; i <= Math.sqrt(num); i += 2){
        if(num % i == 0){
        return false
        }
    }
    return true
}

module.exports = {isPrime}
// console.log(isPrime(9))
  