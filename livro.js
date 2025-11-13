function livro(nome, ano, autor) {

  const nomeMaiusculo = nome.toUpperCase();

  
  const totalAnos = 2050 - ano;


  const fraseFinal = nome + ' por ' + autor;

 
  return {
    nomeMaiusculo: nomeMaiusculo,
    totalAnos: totalAnos,
    fraseFinal: fraseFinal
  };
}

const meuLivro = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(meuLivro.fraseFinal);