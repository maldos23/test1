/* 
    Ejercicio 1: 
    - Genere un codigo usando el peradigma funciona que sea
    capaz de resolver un numero entero y lo combierta a un numero binario
    recuerde utilizar la funcion DecimalToBinary() y n es el numero decimal.

    Nota: Debe el algoritmo ser capaz de identificar si el valor es nulo, es numero, o no esta definido
*/

function DecimalToBinary(n) {}

//Unit Test
class ComprobeTest {
  constructor() {
    this.results = [
      { decimal: 1, binary: "1" },
      { decimal: 0, binary: "0" },
      { decimal: 9, binary: "111" },
      { decimal: 823, binary: "1100110111" },
    ];
  }

  getFuncionResponse() {
    const qualify = this.results.map((result, index) =>
      DecimalToBinary(result.decimal) == result.binary
        ? { index: index + 1, isCorrect: true }
        : { index: index + 1, isCorrect: false }
    );
    const qualifyHtml = qualify.map((item) =>
      item.isCorrect
        ? `<li class="correct">Respuesta: ${item.index}</li>`
        : `<li class="incorrect">Respuesta: ${item.index}</li>`
    );
    const responses = document.getElementById("response");
    responses.insertAdjacentHTML(
      "beforeend",
      `<lu>${qualifyHtml.join("")}</lu>`
    );
  }

  getExamples() {
    const listHtml = this.results.map(
      (item) => `<li>Decimal:${item.decimal} Binaro:${item.binary}</li>`
    );
    return `<ul>${listHtml.join("")}</ul>`;
  }
}

var comprobeTest = new ComprobeTest();

var test = document.getElementById("test");
test.insertAdjacentHTML("beforeend", comprobeTest.getExamples());
