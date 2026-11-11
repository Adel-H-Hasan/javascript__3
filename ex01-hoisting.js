console.log(name);
var name = "Jone";
function test() {
  var x = 10;
  if (true) {
    var y = 20;
  }
  console.log(y);
}
test();

console.log("---- rewritten with let/const ----");
let userName = "Jone";
console.log(userName);
function testLet() {
  let x = 10;
  let y;
  if (true) {
    y = 20;
    let z = 30;
    console.log("inside block:", z);
  }
  console.log("outside block:", y);
  try {
    console.log(z);
  } catch (e) {
    console.log("z is block scoped ->", e.name);
  }
  return x;
}
testLet();
try {
  console.log(userNameLater);
  let userNameLater = "x";
} catch (e) {
  console.log("TDZ ->", e.name);
}
