function towerBuilder(nFloors) {
    let floors = []
    for(let i = 1; i <= nFloors; i++){
        let space = ' '.repeat(nFloors - i)
        // repeat replace a loop
        let stars = '*'.repeat(i * 2 - 1)
        let floor = space + stars + space
        floors.push(floor)
    }
    return floors
}

console.log(towerBuilder(2));