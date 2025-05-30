console.log("Calculadora de Troco");

let valorCompra = 17.50;    // valor total da compra
let valorPago = 20.00;      // valor que o cliente pagou

let troco = valorPago - valorCompra;

if (troco < 0) {
  console.log("Valor insuficiente! Falta pagar:", -troco);
} else {
  console.log("Troco a devolver:", troco);
}
