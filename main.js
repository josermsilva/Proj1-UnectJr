// Função para o botão adicionar
function add_item() {

    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if(item.value != ""){
    
        // Criando elemento da lista
        let make_li = document.createElement("LI");
        make_li.appendChild(document.createTextNode(item.value));
    
        // Adicionando elemento ao user list
        list_item.appendChild(make_li);
    
        // Limpando o box de entrada
        item.value=""
            
        // Apagar o item
        make_li.onclick = function(){
            this.parentNode.removeChild(this);
        }
    
    }
    else{
    
        // Mensagem quando o box estiver vazio.
        alert("Adicione um texto para a tarefa!");
    }
    
    }
    