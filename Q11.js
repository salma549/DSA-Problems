// Write a program  find GCD of the array elements given an array of numbers

function findGCD(arr){

    const gcd = (a,b) => (b === 0 ? a : gcd(b, a%b))

    let result = arr[0]

    for(let i=1; i<arr.length; i++){

        result = gcd(result, arr[i])
    }

     return result;

}

let array = [12, 18, 24];

let res = findGCD(array)

console.log(`GCD of ${res}`)