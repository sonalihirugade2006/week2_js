const products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Phone", price: 20000, category: "Electronics" },
    { name: "Book", price: 500, category: "Education" },
    { name: "Bag", price: 1000, category: "Accessories" },
    { name: "Watch", price: 3000, category: "Accessories" }
];

// Products under ₹1000
const cheapProducts = products
    .filter(product => product.price < 1000)
    .map(product => product.name);

document.getElementById("cheapProducts").textContent =
    cheapProducts.join(", ");

// Product Names
const productNames = products.map(product => product.name);

document.getElementById("productNames").textContent =
    productNames.join(", ");

// Total Price
const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
);

document.getElementById("totalPrice").textContent = totalPrice;