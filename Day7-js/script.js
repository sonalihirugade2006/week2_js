async function searchProducts() {

    const query = document.getElementById("searchInput").value.trim();
    const results = document.getElementById("results");
    const message = document.getElementById("message");

    results.innerHTML = "";

    if (query === "") {
        message.textContent = "Please enter a product name!";
        return;
    }

    try {
        message.textContent = "Loading...";

        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredProducts.length === 0) {
            message.textContent = "No products found!";
            return;
        }

        message.textContent = "";

        results.innerHTML = filteredProducts.map(product =>
            `<p><b>Rs${product.title}</b> - Rs${product.price}</p>`
        ).join("");

    } catch (error) {
        message.textContent = "Error loading products!";
        console.log(error);
    }
}