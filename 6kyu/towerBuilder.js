function towerBuilder(nFloors) {
    let floors = []
    for(let i = 1; i <= nFloors; i++){
        // let space = ' '.repeat(nFloors - i)
        // // repeat replace a loop
        // let stars = '*'.repeat(i * 2 - 1)
        // let floor = space + stars + space
        // floors.push(floor)
        floors.push(' '.repeat(nFloors - i) + '*'.repeat(i * 2 - 1) + ' '.repeat(nFloors - i))
    }
    return floors
}

// towerBuilder(30).forEach(floor => console.log(floor))
console.log(towerBuilder(30));