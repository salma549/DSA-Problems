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
