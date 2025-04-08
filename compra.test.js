// compra.teste.js
import { describe, test, expect } from 'vitest';

import {
  calcularSubtotal,
  aplicarDesconto,
  adicionarFrete,
  calcularTotalFinal,
} from './compra';

describe('Funções de compra', () => {
  test('calcularSubtotal deve somar os preços corretamente', () => {
    const produtos = [{ preco: 10 }, { preco: 20 }, { preco: 30 }];
    expect(calcularSubtotal(produtos)).toBe(60);
  });

  test('aplicarDesconto deve aplicar o desconto corretamente', () => {
    const subtotal = 100;
    const desconto = 10; // 10%
    expect(aplicarDesconto(subtotal, desconto)).toBe(90);
  });

  test('adicionarFrete deve somar o frete ao valor corretamente', () => {
    const valor = 100;
    const frete = 15;
    expect(adicionarFrete(valor, frete)).toBe(115);
  });

  test('calcularTotalFinal deve calcular o total corretamente', () => {
    const produtos = [{ preco: 50 }, { preco: 50 }];
    const desconto = 20; // 20%
    const frete = 10;
    // subtotal = 100, desconto = 20%, comDesconto = 80, totalFinal = 90
    expect(calcularTotalFinal(produtos, desconto, frete)).toBe(90);
  });

  test('calcularTotalFinal com lista vazia deve retornar apenas o frete', () => {
    const produtos = [];
    const desconto = 50; // não importa
    const frete = 25;
    expect(calcularTotalFinal(produtos, desconto, frete)).toBe(25);
  });
});
