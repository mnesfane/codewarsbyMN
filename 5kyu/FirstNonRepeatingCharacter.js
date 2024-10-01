const firstNonRepeatingLetter = function(str) {
    let len = str.length;
    let repeat = 0
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(str[i].toLowerCase() == str[j].toLowerCase()){
                repeat++
            }
        }
        if(repeat == 1)
            return str[i]
        repeat = 0
    }
    return ""
}


function firstNonRepeatingLetter(s) {
    var t=s.toLowerCase();
    for (var x=0;x<t.length;x++)
      if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
        return s[x];
    return "";
  }


console.log(firstNonRepeatingLetter('sTreSS'))