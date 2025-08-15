// Find Minimum without Math method

const myArray = [-1,0,-2,100,200,-300,700]

function findMinimum(arr){

    if(arr.length===0){
        return "Array is Empty"
    }

    let Minimum = arr[0]

    for(let i=1; i<arr.length; i++){
        if(arr[i]<Minimum){
            Minimum = arr[i]
        }
    }

    return {Minimum}

}

console.log(`Minimum of ${myArray}:`, findMinimum(myArray))