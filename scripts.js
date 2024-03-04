const botao_criar_matriz = document.getElementById("criar_matriz");
let matriz_criada = false

botao_criar_matriz.addEventListener('click', criarMatriz)

function criarMatriz() {
    let inputLinhas = document.getElementById("linhas");
    let linhas = Number(inputLinhas.value);

    let inputColunas = document.getElementById("colunas");
    let colunas = Number(inputColunas.value);

    if (linhas < 1 || colunas < 1) {
        alert("Os valores das linhas e colunas não podem ser menores que 1.")
    } else {
        if (matriz_criada == false) {

            let matriz = document.createElement("table");
            matriz.id = "matriz"
            document.querySelector("main").appendChild(matriz)

            for (let i = 1; i <= linhas; i++) {

                let linha = document.createElement("tr")
                linha.id = "linha" + i
                document.querySelector("#matriz").appendChild(linha)

                for (let j = 1; j <= colunas; j++) {

                    let coluna = document.createElement("td")
                    coluna.id = "coluna" + i + j
                    document.querySelector("#linha" + i).appendChild(coluna)

                    let valor = document.createElement("input")
                    valor.id = "valor" + i + j
                    valor.type = "number"
                    document.querySelector("#coluna" + i + j).appendChild(valor)
                }
                matriz_criada = true
            }
        } else {

            let matriz = document.getElementById("matriz")
            matriz.remove();
            matriz_criada = false;
            
            criarMatriz()
        }
    }
}