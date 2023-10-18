const BotõesAddAoCarrinho = document.querySelectorAll('.add-to-cart') //TODOS OS BOTÕES DE ADICIONAR AO CARRINHO
const ItensNoCarrinho = document.getElementById('ItensNoCarrinho') //LISTA DE ITENS NO CARRINHHO
const checkoutButton = document.getElementById('checkout') //BOTÃO DE FINALIZAR COMPRA
const CatalogoHTML = document.querySelector('.Catalogo') //CATALOGO NO HTML
const Carrinho = [];



//FUNÇÃO PARA BARRA DE PESQUISA
const BarraDePesquisa = document.getElementById('BarraPesquisa');
BarraDePesquisa.addEventListener('input', function() { //ADICIONA EVENTO
  const searchTerm = BarraDePesquisa.value.toLowerCase(); //TRANSFORMA TODO O TERMO PESQUISADO EM MINUSCULO
  const produtos = document.querySelectorAll('.produtos'); //SELECIONA TODOS OS PRODUTOS

  //FOREACH
  /*
  X.forEach(Y => Z)
  Para cada Y dentro de X faça Z
  */
  produtos.forEach(produto => {
    const nomeProduto = produto.querySelector('h2').textContent.toLowerCase(); //SELECIONA O NOME DO PRODUTO E TRANSFORMA EM MINÚSCULO

    if (nomeProduto.includes(searchTerm)) {
      produto.style.display = 'inline-block';
    } else {
      produto.style.display = 'none';
    }
    // SE O SEACH TIVER NO NOME DO PRODUTO O PRODUTO SERÁ MOSTRADO
  });
});



//FUNÇÕES PARA ADICIONAR ITENS AO CARRINHO
BotõesAddAoCarrinho.forEach((button, index) => { //FUNÇÃO PARA RECONHECER TODO BOTÃO DE ADICIONAR AO CARRINHO CLICADO
  button.addEventListener('click', () => {
    console.log("Olá Mundo")
    const Produto = {
      id: index,
      nome: button.parentNode.querySelector('h2').textContent,
      preço: button.parentNode.querySelector('p').textContent,

      //Produto = [id:index, nome:h2 do conteúdo,  preço: preço]
    };

    Carrinho.push(Produto) //ADICIONAR PRODUTO CRIADO ACIMA NO CARRINHO
    
    atualizarCarrinho() //Atualiza Carrinho
  })});


const FecharCar = document.querySelector('#BotãoFechar');
const Mostrar = document.querySelector('#BotãoMostrar');
const CarHTML = document.querySelector('#Carrinho')

function atualizarCarrinho() { //FUNÇÃO PARA ATUALIZAR ITENS NO CARRINHO
  ItensNoCarrinho.innerHTML = ''
  if (Carrinho.length == 0){
    document.getElementById('TotalCarrinho').innerHTML = `Total a Pagar: 0,00`
    document.getElementById('SeVazio').style.display = 'inline-block';

  } else {
    
  Carrinho.forEach(item => {
    document.getElementById('SeVazio').style.display = 'none';
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${item.nome} - ${item.preço}
      <button class="remove-item" data-id="${item.id}">Remover</button> ` //BOTÃO DE REMOVER ITENS DO CARRINHO ADICIONADO
    ItensNoCarrinho.appendChild(listItem);
    
    //VERIFICAR PREÇO TOTAL DO CARRINHO
    const TotalPreço = document.getElementById('TotalCarrinho')
    TotalPreço.innerHTML = `Total a Pagar: R$${Total(Carrinho).replace('.',',')}`

  })}}

function MostrarComputer() {
  FecharCar.style.display = 'inline-block';
  Mostrar.style.display = "none";
  ItensNoCarrinho.style.display = 'inline-block'


  atualizarCarrinho()
}
function FecharComputer() {
  document.getElementById('SeVazio').style.display = 'none'
  ItensNoCarrinho.style.display = "none"
  FecharCar.style.display = 'none'
  Mostrar.style.display = 'inline-block'
}


//FUNÇÕES PARA REMOVER ITENS DO CARRINHO
function RemoverItemDoCarrinho(itemId) {
  const itemIndex = Carrinho.findIndex(item => item.id.toString() === itemId);
  if (itemIndex !== -1) {
    Carrinho.splice(itemIndex, 1)
    atualizarCarrinho()
  }
}
ItensNoCarrinho.addEventListener('click', (event) => { //FUNÇÃO PARA CHAMAR REMOÇÃO DE ITENS DO CARRINHO
  if (event.target.classList.contains('remove-item')) {
    const itemId = event.target.getAttribute('data-id')
    RemoverItemDoCarrinho(itemId)
  }});




//FUNÇÕES PARA FINALIZAÇÃO DE COMPRA
checkoutButton.addEventListener('click', () => {
  console.log('Botão de Whatsapp clicado')
  const message = escreverMensagem(Carrinho);
  const whatsappLink = `https://wa.me/558398330188?text=${encodeURIComponent(message)}`;
  window.open(whatsappLink, '_blank');
});
function escreverMensagem(Carrinho) { //CRIAR MENSAGEM A SER ENVIADA
  var mensagem = 'Olá Tem De Tudo, tudo bem? Gostaria de fazer o seguinte pedido:\n';
  Carrinho.forEach(item => {
    mensagem += `${item.nome} - ${item.preço}\n`;
  });
  mensagem += `Total: ${Total(Carrinho)}`;
  return mensagem;}

//FUNÇÃO PARA CALCULAR PREÇO TOTAL DO CARRINHO
function Total(Carrinho) {
  var total = 0;
  Carrinho.forEach(item => {
      const preço = parseFloat(item.preço.replace('R$', '').replace(',', '.')); // Corrigido para converter em número
      total += preço;
  });
  return total.toFixed(2); // Retornado sem substituir ponto por vírgula
}


