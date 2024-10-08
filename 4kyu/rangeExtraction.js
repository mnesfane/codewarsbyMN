function solution(list){
    let len = list.length
    let str = ""
    for(let i = 0; i < len; i++){
        if((i + 2 < len && list[i + 1] == list[i] + 1) && (list[i + 2] == list[i] + 2)){
            str += list[i]
            while(i + 1 < len && (list[i + 1] == list[i] + 1)){
                i++;
            }
            str = str + '-' + list[i]
        }
        else{
            str += list[i]
        }
        if(i + 1 < len){
            str += ','
        }
    }
    return str
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))