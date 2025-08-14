// 1) Write a program to given input Check whether  Even or odd. 


// function EvenOdd(n){

//     if(n%2===0){
//         console.log("Even")
//     }else{
//         console.log("Odd")

//     }

// }

// EvenOdd(5)


function EvenOdd(n){

    if(n%2===0){
       return `${n} is Even`
    }else{
       return `${n} is Odd`

    }

}

console.log(EvenOdd(4))