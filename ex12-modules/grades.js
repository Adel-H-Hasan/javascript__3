export function calculateAverage(grades) {
  if (grades.length === 0) return 0;
  return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}

export function getLetter(avg) {
  if (avg >= 90) return "A";
  if (avg >= 80) return "B";
  if (avg >= 70) return "C";
  if (avg >= 60) return "D";
  return "F";
}

export default function isPassing(avg) {
  return avg >= 60;
}
