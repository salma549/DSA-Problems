// Write a program to find the minimum number in an array using function


function findMinimum(arr){

    Minimum = Math.min(...arr)

    return Minimum;

}

let array = [1,5,10,100,2,89]

console.log(`Minimum of ${array}`,findMinimum(array))