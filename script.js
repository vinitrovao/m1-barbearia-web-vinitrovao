const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
    const cortes = barbearia.cortes;
    if (id <= 0) {
        return "Corte não encontrado";
    }
    for (let i = 0; i < cortes.length; i++) {
        if (cortes[i].id === id) {
            return cortes[i];
        }
    }
    return "Corte não encontrado";
}

function buscaBarbaPorId(id) {
    const barbas = barbearia.barbas;
    if (id <= 0) {
        return "Barba não encontrada";
    }
    for (let i = 0; i < barbas.length; i++) {
        if (barbas[i].id === id) {
            return barbas[i];
        }
    }
    return "Barba não encontrada";
}

function verificaStatusBarbearia() {
    if (barbearia.estaAberto){
        return "Estamos abertos";
    }
    return "Estamos fechados"
}

function retornaTodosCortes() {
    return barbearia.cortes
}

function retornaTodasBarbas() {
    return barbearia.barbas
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);

    const pedido = {
        nome: nomeCliente,
        pedidoCorte: corte.tipo,
        pedidoCortePreco: corte.valor,
        pedidoBarba: barba.tipo,
        pedidoBarbaPreco: barba.valor,
    };

    return pedido;
}

function atualizarServico(lista, id, valor, tipo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].tipo = tipo;
            lista[i].valor = valor;
        }
    }
    return lista;
}

function calculaTotal(pedido) {
    let soma = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;

    return soma; 

}
  
  
