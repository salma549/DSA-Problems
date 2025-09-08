function positiveNegative(num){
    
    if(num>0){
        return `${num} is Positive`;
    }else if(num<0){
                return `${num} is Negative`;

    }else{
                return `${num} is Zero`;

    }
    
}

let number = -25

console.log(positiveNegative(number))
