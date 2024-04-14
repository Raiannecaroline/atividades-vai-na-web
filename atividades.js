// Mostre no console.log a mensagem "Ano novo está chegando!!"
console.log("Ano novo está chegando!!");

// Crie uma variável que receba o nome da cantora Mariah Carey
let nomeCantora = "Mariah Carey";

// Crie uma variável que receba a idade dela
let idadeCantora = 52;

// Crie uma variável com o ano atual e subtraia pelo o valor da idade da Mariah Carey
let anoAtual = new Date().getFullYear();
let anoNascimento = anoAtual - idadeCantora;
console.log("Ano de nascimento de Mariah Carey:", anoNascimento);

// Crie uma variável para guardar a data de nascimento da Mariah Carey
console.log("Data de nascimento de Mariah Carey:", anoNascimento);

// Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso
let quartaFeira = false;  // Você pode alterar esse valor para true ou false conforme necessário.
console.log("quartaFeira é:", quartaFeira);

// Exibir o tipo de dado da variável quartaFeira
console.log("O tipo de dado da variável quartaFeira é:", typeof quartaFeira);

// Crie uma condição SE você for maior ou igual a 18
let minhaIdade = 25;  // Altere minhaIdade para sua idade real
if (minhaIdade >= 18) {
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.");
} else {
    console.log("Sinto muito, mas assistirá da TV Globo.");
}

// Crie uma condição que exiba uma mensagem no console se você fizer aniversário em agosto, dezembro ou junho
let mesAniversario = "setembro";  // Altere esse valor para o mês do seu aniversário
if (mesAniversario.toLowerCase() === "agosto" || mesAniversario.toLowerCase() === "dezembro" || mesAniversario.toLowerCase() === "junho") {
    console.log(`Uma ou mais opções estão corretas. O mês escolhido foi ${mesAniversario}.`);
} else {
    console.log(`Algo de errado não está certo, o mês digitado foi ${mesAniversario}.`);
}
