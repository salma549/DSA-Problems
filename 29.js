function removeDuplicates(arr){
    let uniqueArray = Array.from(new Set(arr))
    return uniqueArray
}

let originalArray = [1, 2, 3, 4, 2, 3, 5];
let uniqueArray = removeDuplicates(originalArray);

console.log("Original Array:", originalArray);
console.log("Array with Duplicates Removed:", uniqueArray);
