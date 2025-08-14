//  Write a program given an array of ‘N’ numbers, find LCM of it. 

function gcd(a,b){

    return b === 0 ? a : gcd(b, a%b)
}

function lcm(a,b){

    return (a*b)/gcd(a,b)
}

function findLCM(arr){

    let result = arr[0]

    for(let i=1; i<arr.length; i++){

        result = lcm(result,arr[i])
    }

    return result;

}

let array = [4,6,8,14];

let res = findLCM(array)

console.log(`LCM of ${res}`)