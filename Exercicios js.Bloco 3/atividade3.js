const produto = {
    nome: "Notebook",
    preco: 3000,
    categoria: "Eletrônicos",
    emEstoque: true
};

// Acessando e imprimindo cada propriedade usando notação de ponto
console.log(produto.nome);
console.log(produto.preco);
console.log(produto.categoria);
console.log(produto.emEstoque);

// Alterando o preço
produto.preco = 3500;

// Adicionando a propriedade desconto
produto.desconto = 0.1;

// Calculando e imprimindo o preço final com desconto usando template literal
const precoFinal = produto.preco * (1 - produto.desconto);

console.log(`O preço final do produto é R$ ${precoFinal}`);