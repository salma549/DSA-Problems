//  Write a  program for swapping of two arrays

function swapArray(arr1, arr2){

    [arr1,arr2] = [arr2,arr1]

    return [arr1,arr2]


}

let array1 = [1,2,3,4,5]

let array2 = ['S','A','L','M','A']

let [swapedArray1, swapedArray2] = swapArray(array1, array2)

console.log("First Array After swapped",swapedArray1); 

console.log("Second Array After swapped",swapedArray2); 
