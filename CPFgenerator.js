const readline = require('readline');
function generateVerifier(cpf) {

    function calculateDigit(cpf, initial) {

        let sum = 0;
        let init = initial;

        for (let i = 0; i < cpf.length; i++) {
            sum += parseInt(cpf[i]) * init;
            init--;
        }

        let rest = sum % 11;
        rest = rest < 2 ? 0 : 11 - rest;
        if (rest >= 10) {
            rest = 0
        } else {
            rest = rest
        }

        return rest
    }
    const firstDigit = calculateDigit(cpf, 10);
    const secondDigit = calculateDigit(cpf + firstDigit, 11);

    return `${firstDigit}${secondDigit}`;
}

function generateCPF() {

    let cpf = '';

    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10).toString();
    }

    const checkDigits = generateVerifier(cpf);
    const completeCPF = cpf + checkDigits;

    return completeCPF;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Quantos CPFs quer gerar?: ", (quantity) => {
    quantity = parseInt(quantity);

    if (!isNaN(quantity) && quantity > 0) {
        console.log(`CPFs gerados: `);

        for (let i = 0; i < quantity; i++) {
            console.log(`${i + 1}: ${generateCPF()}`)
        }
    } else {
        console.log("Por favor, insira uma quantidade válida.")
    }
    rl.close();
});