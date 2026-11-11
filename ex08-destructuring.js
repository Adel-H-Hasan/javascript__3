const user = {
  name: "Adel Hasan",
  email: "adel@example.com",
  age: 24,
  address: { city: "Amman", country: "Jordan" }
};

const { name, email, age } = user;
console.log(name, email, age);

const { email: userEmail } = user;
console.log(userEmail);

const { address: { city, country } } = user;
console.log(city, country);

const skills = ["HTML", "CSS", "JavaScript", "PHP"];
const [first, second, ...others] = skills;
console.log(first, second, others);

function createUser(name = "Guest", email = "none@example.com", age = 18, role = "user") {
  return { name, email, age, role };
}

console.log(createUser("Sara", "sara@example.com", 22, "admin"));
console.log(createUser("Omar"));
console.log(createUser());
console.log(createUser(undefined, undefined, 30));
