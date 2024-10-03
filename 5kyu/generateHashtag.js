function generateHashtag (str) {
    let len = str.length
    let finalStr = ""
    for(let i = 0; i < len; i++){
        if(str[i] != ' '){
			if (str[i - 1] == ' ' || str[i - 1] == null)
				finalStr = finalStr + str[i].toUpperCase()
			else
				finalStr = finalStr + str[i]
		}
    }
	if(finalStr == "" || finalStr.length >= 140)
		return false;
	else
		return '#' + finalStr;
}


// function generateHashtag (str) {

// 	var hashtag = str.split(' ').reduce(function(tag, word) {
// 	  return tag + word.charAt(0).toUpperCase() + word.substring(1);
// 	}, '#');
	
// 	return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
//   }

console.log(generateHashtag("c e"))