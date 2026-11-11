function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + " and I'm " + this.age + " years old.";
};

function Employee(name, age, employeeId, position) {
  Person.call(this, name, age);
  this.employeeId = employeeId;
  this.position = position;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.greet = function () {
  return (
    "Hello, I'm " + this.name + ", " + this.position + " (ID: " + this.employeeId + ")."
  );
};

var p = new Person("Sara", 30);
var e1 = new Employee("Adel", 24, 101, "Developer");
var e2 = new Employee("Lina", 28, 102, "Designer");
var e3 = new Employee("Omar", 35, 103, "Manager");

console.log(p.greet());
[e1, e2, e3].forEach(function (e) {
  console.log(e.greet());
});
console.log(e1 instanceof Employee, e1 instanceof Person);
console.log(Object.getPrototypeOf(e1) === Employee.prototype);
console.log(Person.prototype.greet.call(e1));
