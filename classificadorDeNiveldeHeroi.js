// Variáveis
const nome = "Jotinha"; // Insira o nome do herói aqui
let experienciaXP = 4400; // Insira a quantidade de experiência (XP) aqui

// Inicializa a variável nível do herói
let nivel;

// Estrutura de decisão para classificar o nível do herói
if (experienciaXP < 1000) {
    nivel = "Ferro";
} else if (experienciaXP >= 1001 && experienciaXP <= 2000) {
    nivel = "Bronze";
} else if (experienciaXP >= 2001 && experienciaXP <= 5000) {
    nivel = "Prata";
} else if (experienciaXP >= 5001 && experienciaXP <= 7000) {
    nivel = "Ouro";
} else if (experienciaXP >= 7001 && experienciaXP <= 8000) {
    nivel = "Platina";
} else if (experienciaXP >= 8001 && experienciaXP <= 9000) {
    nivel = "Ascendente";
} else if (experienciaXP >= 9001 && experienciaXP <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
