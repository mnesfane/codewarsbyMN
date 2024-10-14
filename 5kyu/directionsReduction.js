
// const dirReduc = function (arr){
//     const opposite = {
//         "NORTH":"SOUTH",
//         "SOUTH":"NORTH",
//         "WEST":"EAST",
//         "EAST":"WEST"
//     }
//     let newArr = arr.reduce((acc, current) => {
//         if(current === opposite[acc[acc.length -1]]){
//             acc.pop()
//         }
//         else{
//             acc.push(current)
//         }
//         return acc
//     }, []) // intialize accumulator to []
//     return newArr
// }

const dirReduc = function (arr){
    const opposite = {
        "NORTH":"SOUTH",
        "SOUTH":"NORTH",
        "WEST":"EAST",
        "EAST":"WEST"
    }
    let acc = []
    arr.forEach((curr) => {
        if(curr === opposite[acc[acc.length - 1]])
            acc.pop()
        else
            acc.push(curr)
    });
    return acc
}


// console.log(dirReduc([ "NORTH", "NORTH", "WEST", "SOUTH", "SOUTH"]))
console.log(dirReduc(["WEST", "NORTH", "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST", "WEST"]))
