function findMe(char, arrChars, start, end){
    middle = Math.floor((end - start) / 2)
    console.log(middle)
    if (start > end){
        return 'Not found'
    }
    if(arrChars[middle] === char){
        return arrChars[middle]
    }
    else if( arrChars[middle] > char){
        let newArr = arrChars.slice(0, middle)
        return findMe(char, newArr, 0, newArr.length - 1)
    }
    else if(arrChars[middle] < char){
        let newArr = arrChars.slice(middle)
        return findMe(char, newArr, 0, newArr.length - 1)
    }
}
const arrChars = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(findMe('e', arrChars, 0, arrChars.length - 1))