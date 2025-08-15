// Write a program to find the maximum number in an array using function

function findMaximum(arr){

    Maximum = Math.max(...arr)

    return Maximum;

}

let array = [10,20,3,2,100]

console.log(`Maximum of ${array}`, findMaximum(array))