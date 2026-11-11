class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfo() {
    return `${this.name} <${this.email}>`;
  }
}

class Student extends Person {
  constructor(name, email, studentId, major) {
    super(name, email);
    this.studentId = studentId;
    this.major = major;
  }
  getInfo() {
    return `${super.getInfo()} | Student #${this.studentId} | Major: ${this.major}`;
  }
}

class Instructor extends Person {
  constructor(name, email, department, salary) {
    super(name, email);
    this.department = department;
    this.salary = salary;
  }
  getInfo() {
    return `${super.getInfo()} | Instructor | Dept: ${this.department}`;
  }
}

const person = new Person("Sara", "sara@uni.edu");
const student = new Student("Adel", "adel@uni.edu", 1001, "Computer Science");
const instructor = new Instructor("Dr. Omar", "omar@uni.edu", "Engineering", 5000);

[person, student, instructor].forEach(p => console.log(p.getInfo()));
console.log(student instanceof Student, student instanceof Person, student instanceof Instructor);
