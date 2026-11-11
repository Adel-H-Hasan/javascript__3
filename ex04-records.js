var names = [
  "Adel", "Omar", "Lina", "Sara", "Yousef", "Maya", "Khaled", "Noor", "Hana", "Ziad",
  "Rama", "Tariq", "Dana", "Fadi", "Layla", "Samer", "Reem", "Basel", "Huda", "Majd",
  "Rana", "Ali", "Mona", "Jad", "Salma", "Ahmad", "Bushra", "Carmen", "Dina", "Elias",
  "Farah", "Ghada", "Hadi", "Ibrahim", "Jana", "Karim", "Lubna", "Mazen", "Nadia", "Osama",
  "Petra", "Qusai", "Rami", "Shahd", "Taha", "Walid", "Yara", "Zaid", "Amal", "Bilal"
];

var students = names.map(function (name, i) {
  return { id: i + 1, name: name, grade: 50 + ((i * 7) % 51) };
});

students.splice(2, 0, { id: 51, name: "NewStudent", grade: 88 });
console.log("After add:", students.length);

students.splice(10, 1);
console.log("After remove:", students.length);

students.splice(0, 1, { id: 52, name: "ReplacedStudent", grade: 95 });
console.log("After replace:", students[0]);

var firstFive = students.slice(0, 5);
console.log("Slice copy:", firstFive);

students.sort(function (a, b) {
  return b.grade - a.grade;
});

students.forEach(function (s, i) {
  console.log((i + 1) + ". #" + s.id + " " + s.name + " - " + s.grade);
});
