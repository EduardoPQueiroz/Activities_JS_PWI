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
const numeros =  [5, 48, 65, 33, 12, 79, 8, 44]
const dobro = []
numeros.map( (num) => {
    dobro.push(num*2)    
} )
console.log(numeros);
console.log(dobro);