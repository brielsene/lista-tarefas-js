let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NUMO, NEM INDEFENIDO

    if((valorInput !=="") && (valorInput !== null) && (valorInput!== undefined)){
        contador += 1;
        //UTLIZANDO ACENTO ÁGUO `` 2 VEZES
        //ELE JÁ FICA CERTINHO SEM TER QUE FICAR ADICIONANDO +
        //UTILIZAR &{} PARA COLOCAR UMA VARIÁVEL DENTRO DO CONTÉUDO DA CRASE
        let novoItem = ` <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>`;

        //ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        input.value = "";
        input.focus();

        

    }
}

//MÉTODO VÍNCULADO AO INPUT PARA AO INVÉS DE CLICAR, DAR ENTER
//E CONSEGUIR INSERIR
input.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    if(classe == "item"){
        item.classList.add("clicado");

        var icone = document.getElementById("icone_"+id);
        icone.classList.remove("mdi-circle-outline");
        
        icone.classList.add("mdi-check-circle");
        //QUANDO CLICADO JOGA ELE PRO FINAL
        item.parentNode.appendChild(item);
    }else{
        item.classList.remove("clicado");

        var icone = document.getElementById("icone_"+id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}