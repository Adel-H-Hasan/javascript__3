export const students = [
  { id: 1, name: "Adel", grades: [90, 85, 95] },
  { id: 2, name: "Lina", grades: [70, 65, 80] },
  { id: 3, name: "Omar", grades: [50, 55, 40] },
  { id: 4, name: "Sara", grades: [88, 92, 79] }
];

export function getStudentById(id) {
  return students.find(s => s.id === id);
}

export function addStudent(student) {
  students.push(student);
}

export default function getAllStudents() {
  return [...students];
}
