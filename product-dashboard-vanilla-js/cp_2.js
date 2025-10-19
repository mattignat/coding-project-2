// Product Dashboard JavaScript

console.log('Product Dashboard loaded');

// Function to fetch products using fetch() and .then()
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                console.log(product.fields.name);
            });
        })
        .catch(error => {
            console.log('Fetch error:', error);
        });
}

// Function to fetch products using async/await
async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        handleError(error);
    }
}

// Function to display products
function displayProducts(products) {
    console.log('Displaying products:', products);
    
    // Select the product container
    const productContainer = document.getElementById('product-container');
    
    // Clear any existing content
    productContainer.innerHTML = '';
    
    // Loop through the first 5 products
    const firstFiveProducts = products.slice(0, 5);
    
    firstFiveProducts.forEach(product => {
        // Create product card element
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Create and set product content
        productCard.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}" class="product-image">
            <h3 class="product-name">${product.fields.name}</h3>
            <p class="product-price">$${(product.fields.price / 100).toFixed(2)}</p>
        `;
        
        // Append to container
        productContainer.appendChild(productCard);
    });
}

// Function to handle errors
function handleError(error) {
    console.error(`An error occurred: ${error.message}`);
}