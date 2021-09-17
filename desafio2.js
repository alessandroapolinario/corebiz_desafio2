let nome = ["André", "Thiago", "Maria", "Andréia"];
let salario_fixo = [1200, 1200, 1200, 1200];
let total_vendas = [500, 650, 550, 700];

let comissao = [], salario_total = [];

for (let posicao = 0; posicao < 4; posicao++) {
    comissao[posicao] = total_vendas[posicao] + (total_vendas[posicao] *15/100);
    salario_total[posicao] = (salario_fixo[posicao] + comissao[posicao]);
}

for (let i = 0; i < 4; i++) {
    console.log("O funcionário ", nome[i], "tem o salário total de R$ ", salario_total[i]);
}