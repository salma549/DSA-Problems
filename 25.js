
function power(a,b){
    if(b===0){
        return 1;
    }else{
        return a * power(a, b-1)
    }
    
}

let a = 2
let b = 3
let result = power(a,b)

console.log(`Power of ${a} and ${b} is: ${result}`)
