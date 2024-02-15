const input = document.querySelector('#input-tarefa');
const butao = document.querySelector('#btn-add');
const main = document.querySelector('.area-lista')
let contador = 0

function addTarefa(){
    let valorInput = input.value;

    if((valorInput!== '') &&( valorInput!== null ) &&( valorInput !== undefined)){

        ++contador

        let novoItem = ` <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone ">
            <i <i class="bi bi-clipboard2-check-fill"></i></i id="icone_${contador}">
            
            
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete" onclick="deletar(${contador})" type="button">
                <i class="bi bi-trash-fill"></i>
                <b>deletar</b>
            </button>
        </div>
    </div>`
        // adicionar novo item no main //
        main.innerHTML += novoItem;

        // zerar campos //
        input.value = ''
        input.focus()    
    }
   
}
       
    
function deletar(id){
    let tarefa = document.getElementById(id)
    tarefa.remove()
}

function marcarTarefa(id){
    let item = document.getElementById(id);
    
    let classe = item.getAttribute('class');

    if(classe === "item"){
        item.classList.add('clicado');

        let icone = document.getElementById('icone_' + id );
       
    } else {
        item.classList.remove('clicado');
    }
    

    }




