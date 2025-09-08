function classifyTraingle(a,b,c){
    
    
    let semiPerimeter = (a + b + c)/2
     
    console.log(semiPerimeter);
    
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c))
    
    console.log(area);
    
    if(a===b && b===c){
        return 'Equolateral Traingle';
    }else if (a===b || a===c || b===c){
        return 'Isosceles Traingle';
    }else{
        return "Scalence Traingle";
    }
    
}


let side1 = 5
let side2 = 5
let side3 = 5

console.log(classifyTraingle(side1, side2, side3))
