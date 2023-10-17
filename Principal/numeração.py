produtos = [
'Caixa de Som','Garrafa Térmica 500ml','Balança Digital','Câmera Lâmpada IP Wifi Inteligente 360° Com Acesso Pelo APP','Copo Térmico','Fone de Ouvido','Copo Térmico','Fone de Ouvido Bluetooth','Máquina de Cortar Cabelo e Barba','Fone de Ouvido Bluetooth','Headset Bluetooth','Mouse Sem Fio','Gamestick 4k +10.000 Jogos','Câmera 3 Antenas e Aúdio e Infravermelho','Carregador Portátil','Wifi Smart Câmera','Mouse Gamer com Fio','Kit Garrafa com Garrafas','Headset Gamer com Fio e Led','Teclado Gamer com Led','Proteção de Celular','Triturador Életrico 250ml','Triturador Manual com Cordinha','Liquidificador','Headset Gamer Com Fio','Dominó de Osso','Kit Microfone','Garrafa Térmica 500ml','Campainha Sem Fio','Controle Mouse','Amolador para Faca e Tesoura','Media Player','Massageador 6 Potências','Babá Eletrônica 360°','Minicaixa de Som','Controle Playstation 2','Guarda-Chuva','Kit Máquina de Cortar Cabelo e Barba','Suporte para Celular','Microfones Karaokê','Baralho Uno','Fone de Ouvido','Antena Digital','Parafusadeira Recarregável','Carregador Iphone','Balança de Precisão','Lavadora Completa','Capa de Chuba','Compressor de Ar','Abridor de Lata Automático','RingLight para Celular','Aspirador de Pó Portátil','Tablet Mágico','Fita de led','Relógio Smart','Caixinha de Som Camuflada','Kit Teclado com Mouse Bluetooth','Cabo de Carregadores TipoC','Luminária Projetor de Galáxias','MiniGame Retro Portátil','Mini Caixinha de Som','Massageador Muscular Elétrico','Headset'
    ]
preços = ['R$ 180,00','R$ 40,00','R$ 35,00','R$ 100,00','R$ 35,00','R$ 50,00','R$ 35,00','R$ 80,00','R$ 50,00','R$ 60,00','R$ 80,00','R$ 45,00','R$ 160,00','R$ 120,00','R$ 50,00','R$ 200,00','R$ 40,00','R$ 35,00','R$ 90,00','R$ 80,00','R$ 15,00','R$ 40,00','R$ 25,00','R$ 60,00','R$ 50,00','R$ 30,00','R$ 180,00','R$ 40,00','R$ 35,00','R$ 40,00','R$ 35,00','R$ 270,00','R$ 100,00','R$ 230,00','R$ 40,00','R$ 45,00','R$ 20,00','R$ 60,00','R$ 45,00','R$ 45,00','R$ 18,00','R$ 35,00','R$ 35,00','R$ 70,00','R$ 35,00','R$ 30,00','R$ 230,00','R$ 80,00','R$ 70,00','R$ 30,00','R$ 30,00','R$ 70,00','R$ 30,00','R$ 65,00','R$ 45,00','R$ 100,00','R$ 80,00','R$ 12,00','R$ 150,00','R$ 60,00', 'R$ 30,00', 'R$ 25,00', 'R$ 45,00'
    ]
    
numeração = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21, 22, 23, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57, 58, 59, 60, 64, 66, 68, 69, 70, 71, 72, 73, 74, 75]

cont = int(0)
for c in range(0 , 64):
    print(f'''
    <div class="produtos">
        <img src="midia/Produtos/{numeração[c]}.jpg" alt="Produto {numeração[c]}">
        <h2>{produtos[c]}</h2>
        <p class="prec">{preços[c]}</p>
        <button class="add-to-cart">Adicionar ao Carrinho</button>
    </div>
''')