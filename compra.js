// compra.js
export function calcularSubtotal(produtos) {
    return produtos.reduce((total, item) => total + item.preco, 0);
  }
  
  export function aplicarDesconto(subtotal, porcentagem) {
    return subtotal - subtotal * (porcentagem / 100);
  }
  
  export function adicionarFrete(valor, frete) {
    return valor + frete;
  }
  
  export function calcularTotalFinal(produtos, desconto, frete) {
    const subtotal = calcularSubtotal(produtos);
    const comDesconto = aplicarDesconto(subtotal, desconto);
    return adicionarFrete(comDesconto, frete);
  }
  