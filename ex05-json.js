var product = {
  id: 1,
  name: "Laptop",
  price: 899.99,
  category: "Electronics",
  available: true
};

var json = JSON.stringify(product);
console.log("JSON string:", json);

var parsed = JSON.parse(json);
console.log("Original object:", product);
console.log("Converted object:", parsed);
console.log("Same reference?", product === parsed);

var invalid = '{"id": 1, "name": "Laptop", price: 899.99}';
try {
  JSON.parse(invalid);
} catch (error) {
  console.log("Invalid JSON:", error.name, "-", error.message);
}
