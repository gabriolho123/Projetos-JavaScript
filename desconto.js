function calcularDesconto(preco, descontoPorcentagem) {
    // Cálculo do valor do desconto
    const valorDoDesconto = preco * (descontoPorcentagem / 100);
    
    // Calcula o valor final e usa 'const'
    const valorFinal = preco - valorDoDesconto;

    // A função deve retornar uma STRING informando o valor final.
    return "O valor final com " + descontoPorcentagem + "% de desconto é: R$ " + valorFinal;
}


let precoOriginal = 1000;
let descontoPorcentagem = 20;


const resultadoFinal = calcularDesconto(precoOriginal, descontoPorcentagem);

