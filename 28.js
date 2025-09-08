function areaOfCircle(r){
    return Math.PI * r * r
}

function circumferenceOfCircle(r){
    return 2 * Math.PI * r
}


let radius = 5

var area = areaOfCircle(radius)

var circumference = circumferenceOfCircle(radius)

console.log(`Area: ${area.toFixed(2)}`)

console.log(`Circumference: ${circumference.toFixed(2)}`)
