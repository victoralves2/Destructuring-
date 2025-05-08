'use strict'

const restaurante = {
    nome:'Classico Italiano',
    local:'Rua do Centro 23',
    categorias:['Italiano','Pizzaria','Vegetariano','Organico'],
    menuEntradas:['Foccacia','Pao de Alho','Salada Ceprese','Bruschetta'],
    menuPrincipal:['Pizza','Pasta','Risotto'],

    pedido: function(IndiceEntrada, IndicePrincipal){
        return [this.menuEntradas[IndiceEntrada], this.menuPrincipal[IndicePrincipal]];
    },

    horarios:{
        quinta:{
            abre: 12,
            fecha: 22,
        },
        sexta:{
            abre:11,
            fecha:23,
        },
        sabado:{
            abre:0,
            fecha:24, //aberto 24 horas
        },
    },

    pedidoEntrega: function({horario = '20:00', endereco = 'Rua do Centro 23', IndiceEntrada = 0, IndicePrincipal = 0}){ //valores default 
        console.log(`Pedido Recebido ${this.menuEntradas[IndiceEntrada]} e ${this.menuPrincipal[IndicePrincipal]} sera entregue para ${endereco} as ${horario}`);
    },
};

//Desestruturando Arrays
const arr = [1, 2, 3];
const [x, y, z] = arr;  //x=1, y=2, z=3
console.log(x, y, z);

let [primeiro, ,segundo] = restaurante.categorias; //recebe o primeiro e segundo elementos do array, o espaco em branco pula o segundo

//SWITCH com destructure

/*  
const temp = primeiro;
primeiro = segundo;
segundo = temp; 
*/
console.log(primeiro, segundo);
[primeiro, segundo] = [segundo, primeiro];  //pode ser realizado dessa maneira
console.log(primeiro, segundo);

//RETURN com destructure 
const [entrada, principal] = restaurante.pedido(2, 0);

const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;   //i=2 j = [5, 6]
const [k, ,[l, m]] = nested;  //k = 2, l=5 , m=6
console.log(i, j);
console.log(k, l, m);

//default values
const [p=1, q=1, r=1] = [9, 8]; //o valor padrao sera 1 caso nao consiga nenhum valor do array
console.log(p, q);

//DESTRUCTURE COM OBJECTS 
const {nome, horarios, categorias} = restaurante; //para que o resultado saia correto é necessário que os nomes estejam iguais

const{nome: nomeRestaurante, horarios: horariosAbertura, categorias: tags} = restaurante; //as variaveis agora possuem nome diferente

const{menu = [], menuEntradas: menuEntr = []} = restaurante; //valores default, nesse caso o menu Entradas não tivesse no objeto seria o valor default igual do menu

console.log(nome, horarios, categorias);
console.log(nomeRestaurante, horariosAbertura, tags);
console.log(menu, menuEntr);


//mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c:19};
({a, b} = obj);
console.log(a, b);

//nested objects 
const {quinta: {abre, fecha}} = horariosAbertura;
console.log(abre, fecha);


restaurante.pedidoEntrega({
    horario: "22:00",
    endereco: "Rua do Centro 23",
    IndicePrincipal: 2,
    IndiceEntrada: 2,
});

restaurante.pedidoEntrega({  //como alguns valores nao foram chamadas, serão usados os valores default da chamada da função
    endereco: "Rua do Centro 23", 
    IndicePrincipal: 3,
});
