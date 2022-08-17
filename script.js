function BMI (weight=50,height=1.60) {
    let result= weight /(height * height)
    return result
    
}

console.log(BMI(90,1.80))
console.log(BMI())

function Status(bmi){
    let r = document.getElementById("result")

    if(bmi<18.5){
    r.style.color="orange"
        return `لديك نقص في الوزن`
        
    }else if(bmi >= 18.5 && bmi<25 ){
       r.style.color="green"
        return`وزنك صحي`

        
    }else if(bmi>=25){
        r.style.color="red"
        return `لديك زيادة في الوزن`

    }
}
 function calculate () {
    let weight = document.getElementById(`weight`).value
    let height = document.getElementById(`height`).value


    let bmi = BMI(weight,height)
    let desc = Status(bmi)

    let div = document.getElementById('result')
    div.innerText = bmi + " == " + desc

 }
