import {describe, test, expect} from 'vitest'
import{soma, multiplicaPorDois, somaEMultiplica}from './calculadora.js'

describe("função soma", () =>{
  test('soma dois números', () => {

    //arrange 

    const imput1 = 2;
    const imput2 = 23;

    //act

    const resultado = soma(imput1, imput2)

    //asert

    expect(resultado).toBe(5)
  })
})