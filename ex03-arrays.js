var groupA = [
  "Adel", "Omar", "Lina", "Sara", "Yousef", "Maya", "Khaled", "Noor", "Hana", "Ziad",
  "Rama", "Tariq", "Dana", "Fadi", "Layla", "Samer", "Reem", "Basel", "Huda", "Majd",
  "Rana", "Ali", "Mona", "Jad", "Salma"
];
var groupB = [
  "Ahmad", "Bushra", "Carmen", "Dina", "Elias", "Farah", "Ghada", "Hadi", "Ibrahim", "Jana",
  "Karim", "Lubna", "Mazen", "Nadia", "Osama", "Petra", "Qusai", "Rami", "Shahd", "Taha",
  "Walid", "Yara", "Zaid", "Amal", "Bilal"
];

var students = groupA.concat(groupB);
console.log("Total students:", students.length);

students.sort();
console.log("Sorted:", students);

students.reverse();
console.log("Reversed:", students);

console.log("Has Adel?", students.includes("Adel"));
console.log("Has John?", students.includes("John"));

students.forEach(function (student, index) {
  console.log(index + ": " + student);
});
