const input = document.querySelector('#input-tarefa');
const butao = document.querySelector('#btn-add');
const main = document.querySelector('.area-lista')

function addTarefa(){
    let valorInput = input.value;

    if((valorInput!== '') &&( valorInput!== null ) &&( valorInput !== undefined)){

        let novoItem = ` <div class="item">
        <div class="item-icone">
            <i class="bi bi-circle"></i>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete" type="button">
                <i class="bi bi-trash-fill"></i>
                <b>deletar</b>
            </button>
        </div>
    </div>`
        
        main.innerHTML += novoItem;
        input.value = ''
        input.focus()
       
        
    }
    
}