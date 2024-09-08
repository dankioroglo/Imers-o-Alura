function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nenhuma receita foi encontrada. Digite a receita que deseja!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let ingredientes = "";
    let resultados = "";
    let titulo = "";
    let preparo = "";
    
    for (let dado of dados) 
    {
        titulo = dado.titulo.toLowerCase()
        preparo = dado.preparo.toLowerCase()
        tags = dado.tags.toLowerCase()
        ingredientes = dado.ingredientes.toLowerCase()
        if(titulo.includes(campoPesquisa) || preparo.includes(campoPesquisa) || tags.includes(campoPesquisa) || ingredientes.includes(campoPesquisa))
            {
                resultados += 
            `
             <div class="item-resultado">
                 <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                    <p class="ingredientes.meta">${dado.ingredientes}</p>
                    <p class="preparo-meta">${dado.preparo}</p>
                     <a href=${dado.link} target="_blank">Mais Informações</a>
             </div>
            `;
            }  
    }
     
    if (!resultados) {
    resultados = "<p>Nenhuma receita foi encontrada</p>"
    }

    section.innerHTML = resultados   
}

// console.log(dados)



       