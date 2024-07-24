let  quantidade = document.getElementById('quantidade').value = 1;
let carrinho = document.getElementById('lista-produtos');
let valorTotal = 0;
carrinho.innerHTML = '';
document.getElementById('valor-total').textContent = 'R$0'



function adicionar(){
    //Recuperar valores:Nome do Produto
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    console.log(nomeProduto);
    // Recuperar valores: Valor do produto
    let valorProduto = produto.split('-')[1].split('R$')[1];
    console.log(valorProduto);
    // Recuperar valores: Quantidade do Produto
    quantidade = document.getElementById('quantidade').value;
    console.log(quantidade)
    // Somar valores de produtos adicionados juntos
    let subtotal = parseInt(quantidade * valorProduto)
    console.log(subtotal)
    //Alterar o carrinho
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`
    //Alterar o valor total
    valorTotal += subtotal
    document.getElementById('valor-total').textContent = `R$ ${valorTotal}`


}

function limpar(){
    quantidade = document.getElementById('quantidade').value = 1;
    carrinho = document.getElementById('lista-produtos');
    valorTotal = 0;
    carrinho.innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0'

}