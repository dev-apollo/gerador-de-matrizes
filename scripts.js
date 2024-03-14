const botaoCriarMatriz = document.getElementById("criarMatriz");
botaoCriarMatriz.addEventListener('click', verificarValores);
let matrizCriada = false;

function verificarValores() {
    let inputLinhas = document.getElementById("linhas");
    let linhas = Number(inputLinhas.value);
    let inputColunas = document.getElementById("colunas");
    let colunas = Number(inputColunas.value);
    if (linhas < 1 || colunas < 1) {
        alert("Os valores das linhas e colunas não podem ser menores que 1.");
    } else {
        criarMatriz(linhas, colunas);
    }
}

function criarMatriz(linhas, colunas) {
    if (!matrizCriada) {
        let matriz = document.createElement("table");
        matriz.id = "matrizA";
        document.querySelector("main").appendChild(matriz);
        for (let i = 1; i <= linhas; i++) {
            let linha = document.createElement("tr");
            linha.id = "linha" + i;
            document.querySelector("#matrizA").appendChild(linha);
            for (let j = 1; j <= colunas; j++) {
                let espaco = document.createElement("td");
                espaco.id = "espaco" + i + j;
                document.querySelector("#linha" + i).appendChild(espaco);
                let elemento = document.createElement("input");
                elemento.id = "a" + i + j;
                elemento.type = "number";
                document.querySelector("#espaco" + i + j).appendChild(elemento);
            }
        }
        matrizCriada = true;
        verificarDeterminante(linhas, colunas);
    } else {
        let matriz = document.getElementById("matrizA");
        matriz.remove();
        matrizCriada = false;
        criarMatriz(linhas, colunas)
    }
}

function verificarDeterminante(linhas, colunas) {
    let botaoExistente = document.getElementById("calcularDeterminante");
    if (botaoExistente != null) {
        botaoExistente.remove();
    }
    if (linhas == colunas && linhas > 1) {
        let botaoCalcularDeterminante = document.createElement("button");
        botaoCalcularDeterminante.id = "calcularDeterminante";
        botaoCalcularDeterminante.textContent = "Calcular determinante";
        document.querySelector("main").appendChild(botaoCalcularDeterminante);
        switch (linhas) {
            case 2:
                botaoCalcularDeterminante.addEventListener('click', function () {
                    calcularDeterminanteOrdem2ou3(2);
                });
                break;
            case 3:
                botaoCalcularDeterminante.addEventListener('click', function () {
                    calcularDeterminanteOrdem2ou3(3);
                });
                break;
            default:
                botaoCalcularDeterminante.addEventListener('click', function () {
                    alert("Infelizmente a aplicação ainda não é capaz de calcular a determinante de matrizes de ordem superior a 3.")
                });
                break;
        }
    }
}

function calcularDeterminanteOrdem2ou3(ordem) {
    let inputa11 = document.getElementById("a11");
    let a11 = Number(inputa11.value);
    let inputa12 = document.getElementById("a12");
    let a12 = Number(inputa12.value);
    let inputa21 = document.getElementById("a21");
    let a21 = Number(inputa21.value);
    let inputa22 = document.getElementById("a22");
    let a22 = Number(inputa22.value);
    if (ordem == 2) {
        let determinante = (a11 * a22) - (a12 * a21);
        alert(`A det(A) é ${determinante}.`);
    } else if (ordem == 3) {
        let inputa13 = document.getElementById("a13");
        let a13 = Number(inputa13.value);
        let inputa23 = document.getElementById("a23");
        let a23 = Number(inputa23.value);
        let inputa31 = document.getElementById("a31");
        let a31 = Number(inputa31.value);
        let inputa32 = document.getElementById("a32");
        let a32 = Number(inputa32.value);
        let inputa33 = document.getElementById("a33");
        let a33 = Number(inputa33.value);
        let determinante = [(a11 * a22 * a33) + (a12 * a23 * a31) + (a13 * a21 * a32)] - [(a13 * a22 * a31) + (a12 * a21 * a33) + (a11 * a23 * a32)];
        alert(`A det(A) é ${determinante}.`);
    }
}