import getAllStudents, { addStudent } from "./students.js";
import isPassing, { calculateAverage, getLetter } from "./grades.js";

addStudent({ id: 5, name: "Yousef", grades: [100, 95, 98] });

const tbody = document.getElementById("rows");

getAllStudents().forEach(({ id, name, grades }) => {
  const avg = calculateAverage(grades);
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td>${grades.join(", ")}</td>
    <td>${avg.toFixed(1)}</td>
    <td>${getLetter(avg)}</td>
    <td class="${isPassing(avg) ? "pass" : "fail"}">${isPassing(avg) ? "Pass" : "Fail"}</td>`;
  tbody.appendChild(tr);
});
