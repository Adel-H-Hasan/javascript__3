function squareOld(n) {
  return n * n;
}
function isEvenOld(n) {
  return n % 2 === 0;
}
function totalOld(products) {
  var sum = 0;
  for (var i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum;
}

const square = n => n * n;
const isEven = n => n % 2 === 0;
const total = products => products.reduce((sum, p) => sum + p.price, 0);

const numbers = [1, 2, 3, 4, 5, 6];
const products = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 15 },
  { name: "Bag", price: 40 }
];

console.log(square(5), squareOld(5));
console.log(isEven(4), isEven(7));
console.log(total(products), totalOld(products));
console.log(numbers.map(square));
console.log(numbers.filter(isEven));
console.log(numbers.reduce((a, b) => a + b, 0));
console.log(products.map(p => p.name));
console.log(products.filter(p => p.price > 10));
