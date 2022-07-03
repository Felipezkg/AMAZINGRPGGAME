/*
*/
alert(`
Lista de Exercícios 5:
(objetivo: fixar conhecimentos sobre conceitos de vetores; manipular vetores através de indexação; manipular vetores através de métodos internos do JS; praticar conceitos de lógica prévios)

Escreva um programa em JS para que o usuário entre com as seguintes informações e então o sistema realiza o cálculo solicitado colocando a resposta no console (ou na forma de um alerta na tela) conforme necessário.
É possível assumir que o usuário entrará com valores válidos para cada caso.

`.toLocaleUpperCase())
while (true) {

  var escolhaOExercicio = parseInt(prompt(`
****ATIVIDADE DA LISTA DE COMPRAS****
PARA EXECUTAR O EXERCICIO 1 : DIGITE 1
PARA EXECUTAR O EXERCICIO 2 : DIGITE 2
PARA EXECUTAR O EXERCICIO 3 : DIGITE 3
PARA EXECUTAR O EXERCICIO 4 : DIGITE 4`))
  if (escolhaOExercicio == 666) {
    break
  }

  ////////////////////EXECICIO 01/////////////////////

  if (escolhaOExercicio == 1) {
    alert(`
    1.Entradas:
a.Uma entrada para cada um dos 10 itens de uma lista de compras.
Saídas:
b.Imprimir a lista de compras completa (usar o método .toString()).
c.Imprimir a lista de compras completa separando os elementos com ' // ' (usar o método .join()).
    `.toLocaleUpperCase())
    var array = []
    for (i = 1; i < 11; i++) {

      array.push(`Item ${i}: ` + prompt(`LISTA COM LIMITE DE 10 ITENS
ITEM ${i}: `).toLocaleUpperCase())
      alert(array.join(`
        `))


    }
    alert(`*USANDO METODO JOIN PARA COLOCAR // ENTRE OS ELEMENTOS*
    `+ array.join(`//`))
    alert(`USANDO O METODO TOSTRING PARA EXIBIR O VETOR NA FORMA DE STRING
    `+ array.toString())
  }



  ////////////////////EXERCICO 02 /////////////////////

  if (escolhaOExercicio == 2) {
    alert(`
    2.Entradas:
a.Uma entrada para cada um dos itens de uma lista de compras de tamanho indeterminado.
Salvar a lista de compras em dois vetores. No primeiro incluir os itens na lista com .push().
No segundo incluir os itens na lista com .unshift().
Caso o usuário digite um item com o nome 'pare' então o sistema para de solicitar itens.
Saídas:
b.Imprimir o tamanho da lista (usar o atributo .length).
c.Imprimir e remover de um em um os elementos da lista (vetor 1) de compras (usar o método .pop()).
d.Imprimir e remover de um em um os elementos da lista (vetor 2) de compras (usar o método .shift()).
    `.toLocaleUpperCase())
    var array = []


    for (i = 1; i < 5; i++) {
      entrada = prompt(`ADICIONANDO ITEM NO FINAL  ${i}`).toLocaleUpperCase()

      if (entrada == "PARE") {
        alert(`Lista encerrada`)
        break
      }
      else {
        array.push(`ITEM ${i}: ` + entrada)

        alert(array.join(`
    `))
      }
    }

    for (i = 1; i < 5; i++) {
      entrada = prompt(`Item ${i}`).toLocaleUpperCase()

      if (entrada == "PARE") {
        alert(`Lista encerrada`)
        break
      }
      else {
        array.unshift(`ADICIONANDO ITEM NO INICIO ${i}: ` + entrada)

        alert(array.join(`
    `))
      }
    }
    array.shift()
    array.pop()
    alert(`Usando .length para mostrar o tamanho do Vetor que e:
                 **${array.length}**
    Usei o .pop e .shift para tirar o primeiro e ultimo indice. `.toLocaleUpperCase())
    alert(`Imprimindo o Vetor sem o primeiro e ultimo indice 
    `.toLocaleUpperCase() + array.join(`
`))

  }


  ////////////////////EXERCICO 03 /////////////////////
  if (escolhaOExercicio == 3) {
    alert(`
    3.Entradas:
a.Uma entrada para cada um dos itens de uma lista de compras de tamanho indeterminado.
Caso o usuário digite um item com o nome 'pare' então o sistema para de solicitar itens.
b.Um item para conferir se ele está ou não na lista.
Saídas:
c.Confirmar para o usuário se o item já está ou não na lista. Se estiver imprimir a primeira posição
 dele na lista (usar o método .indexOf()).
d.Confirmar para o usuário se o item já está ou não na lista. Se estiver imprimir a última posição
 dele na lista (usar o método .lastIndexOf()).
    `.toLocaleUpperCase())
    var array = []

    for (i = 0; i < 10000; i++) {

      var entradaLista = prompt(`Adicionar item a Lista de compra: `.toLocaleUpperCase())//ARROZ
      if (entradaLista == `PARE`) {
        alert(`
    Sua lista tem ${array.length} itens.    
     `.toLocaleUpperCase() + array.join(` 
`))

        break
      }
      var verificardorIndice = array.indexOf(entradaLista)
      var verificado = array.slice(verificardorIndice)
      if (entradaLista == array[verificardorIndice]) {

        alert(`JA EXISTE ESSE ITEM NA LISTA NA POSICAO ${verificardorIndice}`)

      } else {
        array.push(entradaLista)
        alert(array.join(`
`))
      }
    }
  }


  ////////////////////EXERCICO 04 /////////////////////

  if (escolhaOExercicio == 4) {
    alert(`
    4.Entradas:
a.Uma entrada para cada um dos itens de uma lista de compras de tamanho indeterminado.
Caso o usuário digite um item com o nome 'pare' então o sistema para de solicitar itens.
Saídas:
b.Imprimir a lista de compras completa.
c.Imprimir a lista de compras completa em ordem alfabética (usar o método .sort()).
d.Imprimir a lista de compras de traz para frente (usar o método .reverse()).
    `.toLocaleUpperCase())
    var array = []

    for (i = 1; i < 100000; i++) {
      var entradaLista = prompt(`item da Lista`)
      entradaLista = entradaLista.toUpperCase()
      if (entradaLista == `PARE`) {
        break
      }

      array.push(entradaLista)
      alert(`
    *****LISTA DEFAULT*****
    `+ array.join(`
    `))


    }
    array.reverse()
    alert(`
    *****LISTA REVERSA*****
    `+ array.join(`
    `))

    array.sort()
    alert(`
    *****LISTA EM ORDEM ALFABETICA*****
    `+ array.join(`
    `))

  }
}
