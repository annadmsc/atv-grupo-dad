

let body = document.getElementsByTagName("body")


let produto = document.getElementById("name").value 
console.log(produto);
let cod = document.getElementById("number").value
console.log(cod);
let marca = document.getElementById("marca").value 
console.log(marca);
let preco = document.getElementById("preco").value
console.log(preco);

let codDel = document.getElementById("codigo_remover").value


let listaSe = document.getElementById("lista-seara")
let listaFri = document.getElementById("lista-friboi")
let listaSwi = document.getElementById("lista-swift")
let sacola = [];

 function addProduto(){
    // let ultimoAdd = sacola.lenght-1

    // for(let i = -1; i < sacola.lenght; i++){
    
    //     if(cod[i].value != cod[ultimoAdd].value){

    //     }
    // }
    confirm("continuar?")

    const compra = {"marca": marca, "name": produto,"cod": cod, "preco": preco}
    sacola.push(compra)

        if(marca == "Seara") listaSe.innerHTML += `<li> ${`Marca: ${compra.marca}, Código: ${compra.cod}, Preço: ${compra.preco}, Produto: ${compra.name}`}</li>`; else
        if(marca === "Swift")  listaSwi.innerHTML += `<li> ${`Marca: ${compra.marca}, Código: ${compra.cod}, Preço: ${compra.preco}, Produto: ${compra.name}`}</li>`; else
        if(marca === "Friboi")  listaFri.innerHTML = `<li> ${`Marca: ${compra.marca}, Código: ${compra.cod}, Preço: ${compra.preco}, Produto: ${compra.name}`}</li>`
        console.log(sacola);

    }
        


 function removeProduto(){
     let deletando = sacola.find( sacola => sacola.cod == codDel)
     console.log(deletando)
      sacola.splice(deletando)
    console.log(sacola)
    if(marca == "Seara") listaSe.innerHTML += `<li> </li>`; else
        if(marca === "Swift") listaSwi.innerHTML += `<li> </li>`; else
        if(marca === "Friboi") listaFri.innerHTML = `<li> </li>`
        console.log(sacola);
        confirm("deletar?")
 }
