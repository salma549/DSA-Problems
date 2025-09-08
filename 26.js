// convert to Upper Case

function isAlphabet(char){
    let upperChar = char.toUpperCase()
    
    if(upperChar>='A' && upperChar<='Z'){
        return true;
    }else{
        return false;
    }
}


let char1 = 'j'
let char2 = '3'

console.log(`${char1} is alphabet? ${isAlphabet(char1)}`)
console.log(`${char2} is alphabet? ${isAlphabet(char2)}`)


// Another Method using CharCode

function isAlphabet(char){
    let charCode = char.charCodeAt(0)
    
    if((charCode>=65 && charCode<=90) || (charCode>=97 && charCode<=122)){
        return true;
    }else{
        
      return  false
    }
    
   
}


let char1 = 'j'
let char2 = '3'

console.log(`${char1} is alphabet? ${isAlphabet(char1)}`)
console.log(`${char2} is alphabet? ${isAlphabet(char2)}`)
