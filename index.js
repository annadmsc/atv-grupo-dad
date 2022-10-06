

let listaSe = document.getElementById("lista-seara")
let listaFri = document.getElementById("lista-friboi")
let listaSwi = document.getElementById("lista-swift")
let sacola = [];


 function addProduto(){
    let produto = document.getElementById("name").value 
    console.log(produto);
    let cod = document.getElementById("number").value
    console.log(cod);
    let marca = document.getElementById("marca").value 
    console.log(marca);
    let preco = document.getElementById("preco").value
    console.log(preco);
    
    let findCod = sacola.filter (sacola => sacola.cod == cod)  
    console.log(findCod)
    if(findCod.length == 0){
        const compra = {"marca": marca, "name": produto,"cod": cod, "preco": preco}
        confirm("continuar?")
        sacola.push(compra)
            if(marca == "Seara") listaSe.innerHTML += `<li> ${`Marca: ${compra.marca}, Código: ${compra.cod}, Preço: ${compra.preco}, Produto: ${compra.name}`}</li>`; else
            if(marca === "Swift")  listaSwi.innerHTML += `<li> ${`Marca: ${compra.marca}, Código: ${compra.cod}, Preço: ${compra.preco}, Produto: ${compra.name}`}</li>`; else
            if(marca === "Friboi")  listaFri.innerHTML += `<li> ${`Marca: ${compra.marca}, Código: ${compra.cod}, Preço: ${compra.preco}, Produto: ${compra.name}`}</li>`
            console.log(sacola);
    }else alert('Código já existente!');
    }
        

 function removeProduto(){
    
    let codDel = document.getElementById("codigo_remover").value
     let deletando = sacola.find( sacola => sacola.cod == codDel)
     console.log(deletando);

     if(deletando === undefined) alert('Opps..não achamos esse código'); 
     else if( typeof(deletando)== "object"){
        sacola.splice(deletando)
        if(marca == "Seara") ; else
            if(marca === "Swift") ; else
            if(marca === "Friboi") 
            confirm("deletar?")
     }
      
 }
