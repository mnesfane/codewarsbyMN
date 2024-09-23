function towerBuilder(nFloors) {
    for(let i = 1; i <= nFloors; i++){
        let space = nFloors - i;
        while(space--){
            console.log('/f/')
            process.stdout.write(' ')
        }
        // i * 2 - 1 the - 1 to make it odd number
        for(let j = 1; j <= i * 2 - 1 ; j++){
            process.stdout.write('*')
        }
        space = nFloors - i;
        while(space--){
            process.stdout.write(' ')
        }
        process.stdout.write('\n')
    }
}

towerBuilder(2);
// function towerBuilder(nFloors) {
//     let iterateF = nFloors
//     let s = 0
//     for(let i = 1; iterateF >= i; iterateF--){
//         let freeSpace = s
//         while(freeSpace > 0){
//             process.stdout.write(' ')
//             freeSpace--
//         }
//         if(iterateF % 2 != 0){
//             for(let j = iterateF; j >= 1; j--){
//                 process.stdout.write('*')
//             }
//             console.log('\n')
//             s++;
//         }
//     }
// }