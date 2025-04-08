src/calculadora.js// Arquivo: calculadora.js
export function soma(a, b) {
  return a + b;
}

export function multiplicaPorDois(numero) {
  return numero * 2;
}

export function somaEMultiplica(a, b) {
  const resultadoSoma = soma(a, b);
  return multiplicaPorDois(resultadoSoma);
}
