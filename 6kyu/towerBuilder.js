function towerBuilder(nFloors) {
    let iterateF = nFloors
    // let space = nFloors
    for(let i = 1; iterateF >= i; iterateF--){
        let freeSpace = nFloors - iterateF + 1
        for(let j = iterateF; j >= 1; j--){
            if(freeSpace > 0){
                process.stdout.write(' ')
                freeSpace--
                continue
            }
            process.stdout.write('*')
        }
        console.log('\n')
    }
}

towerBuilder(8);