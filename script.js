'use strict'

const restaurante = {
    nome:'Classico Italiano',
    local:'Rua do Centro 23',
    categorias:['Italiano','Pizzaria','Vegetariano','Organico'],
    menuEntradas:['Foccacia','Pao de Alho','Salada Ceprese','Bruschetta'],
    menuPrincipal:['Pizza','Pasta','Risotto'],

    pedido: function(IndiceEntrada, IndicePrincipal){
        return [this.menuEntradas[IndiceEntrada], this.menuPrincipal[IndicePrincipal]];
    }
};

//Desestruturando Arrays
const arr = [1, 2, 3];
const [x, y, z] = arr;  //x=1, y=2, z=3

let [primeiro, ,segundo] = restaurante.categorias; //recebe o primeiro e segundo elementos do array, o espaco em branco pula o segundo

//SWITCH com destructure

/*  
const temp = primeiro;
primeiro = segundo;
segundo = temp; 
*/

[primeiro, segundo] = [segundo, primeiro];  //pode ser realizado dessa maneira


//RETURN com destructure 
const [entrada, principal] = restaurante.pedido(2, 0);

const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;   //i=2 j = [5, 6]
const [k, ,[l, m]] = nested;  //k = 2, l=5 , m=6