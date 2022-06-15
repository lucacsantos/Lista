var produto = document.getElementById('produto'); 
var qtd = document.getElementById('qtd'); 
var preco = document.getElementById('preco'); 
var list = [];

function add(){
   if(!checkField()){
       alert("Insira  o produto, sua quantidade e seu preço")
   }
   else{
    let obj = {
        produto : produto.value,
        qtd : qtd.value,
        preco : preco.value
    }
    list.push(obj);
    localStorage.setItem("list",JSON.stringify(list));
    console.log(list);
    renderTable(list)
   }
    
   
}

function get (){
    list = JSON.parse(localStorage.getItem("list"));
    if(list == null) 
        list = [];
    
    renderTable(list)    
    console.log(list);
}

function renderTable(list){
    let corpo = document.getElementById('corpo');
    corpo.innerHTML = '';
    for (let index = 0; index < list.length; index++) {
        corpo.innerHTML += `<tr>
            <td>${list[index].produto}</td>
            <td>${list[index].qtd}</td>
            <td>${list[index].preco}</td>
            <td><button onclick ="deletar(${index})">delete</button></td>
        </tr>`
        
    }
}

get();

function checkField() {
    return produto.value != "" && qtd.value != "" && preco.value  != "";
}
function deletar(indice){
    const element = list[indice];

    list = list.filter(item => item !== element)
    localStorage.setItem("list",JSON.stringify(list));
    get();

    console.log(list);
}