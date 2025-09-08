function findRoots(a,b,c){ 
    
    if(a===0){
        console.log('This equation is linear, no roots to compute ')
    }
    
    let discriminate = b * b - 4 * a * c
    
    if(discriminate>0){
        let root1 = (-b + Math.sqrt(discriminate))/ (2 * a)
        let root2 = (-b - Math.sqrt(discrimate)) / (2 * a)
        console.log(`roots are ${root1} and ${root2}`)
    }else if(discriminate===0){
        let root = -b/(2 * a)
        console.log(`root is ${root}`)
    }else{
        let real = -b/(2 * a)
        let imaginary = Math.sqrt(-discriminate)/ (2*a)
        console.log(`real and imaginary roots are ${real} and ${imaginary}`)
    }
    
}

findRoots(6,8,9);
