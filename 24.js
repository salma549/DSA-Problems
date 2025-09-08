function factorial(a){
    if(a===0|| a===1){
        return 1;
    }else{
        return a * factorial(a-1)
    }
}


function combination(n,r){
    if(n<r){
        return 'Invalid Input, n should be greater or equal to r'
    }else{
        return factorial(n) / (factorial(r) * factorial(n-r))
    }
}


function permutations(n,r){
    if(n<r){
        return 'Invalid Input, n should be greater or equal to r'
    }else{
        return factorial(n) /  factorial(n-r)
    }
    
}

let n = 5
let r =3 

console.log(`Combination of ${n}C${r} = ${combination(n,r)} `)
console.log(`Permutations of ${n}C${r} = ${permutations(n,r)} `)
