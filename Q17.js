// Find Maximum without Math method 

const myArray = [2,90,45,100,600]

function findMaximum(arr){

    if(arr.length===0){
        return "Array is Empty"
    }

    let Maximum = arr[0]

    for(let i = 1; i<arr.length; i++){

        if(arr[i]>Maximum){
            Maximum = arr[i]
        }
    }

    return {Maximum}

}

console.log(`Maximum of ${myArray}:`, findMaximum(myArray))
