//ex1
// let n1 = 5, n2 = 8, n3 = 3

// function triangulo(a,b,c){
//     if(a == b && b == c ){
//     return "equilatero"
//     }else if(a < b && a < c && b == c){
//     return "isoceles"
//     }else{ 
//     return "escaleno"
//     }
// }

//console.log(`ex1: ${triangulo (n1,n2,n3)}`)

//ex2
var salarios = [1200, 3400,2700]

function desconto(a){

if(a >= 0 && a <= 1903.98){
    return "insento"
}else if (a >= 1903.99 && a <= 2826.65){
    return (a * 7.50 / 100) 
}else if (a >= 2826.66 && a <=3751.05){
    return(a * 15 /100)
}else if(a >= 3751.06 && a <= 4664.68){
    return (a * 22.50 / 100)
}else if(a > 4664.68){
    return(a * 27.50 / 100)
    }
}
salarios.forEach(salario =>{
    console.log(desconto(salario))
})

//ex3
