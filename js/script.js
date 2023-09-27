//normal function
function Nome(param1, param2){
    //Código
    return
}
//arrow function
(param1, param2) => {
    //Código
    return
}

() => {

}

//Função MAP
//Array = [ ]
//Objeto Produto = { foto, modelo, preço, qtd em estoque, nome, codigo }
//const numeros =  [5, 48, 65, 33, 12, 79, 8, 44]
//const dobro = []
//numeros.map( (num) => {
//    dobro.push(num*2)    
//} )
//console.log(numeros);
//console.log(dobro);
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const par = []
array.map( (x) => {
    if(x % 2 === 0){
    par.push(x)
    }
} )
console.log(array);
console.log(par);
