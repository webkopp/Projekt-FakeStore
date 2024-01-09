// - Erstelle einen kleinen E-Commerce Store mit der [FakeStore_API](https://fakestoreapi.com/).
// - **Überlege dir ein ansprechendes Design.**
// - Schaue dir die verschiedenen Endpoints genau an: https://fakestoreapi.com/docs

// import { variables, table } from "./variables.js";

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products?sort=price')
            .then(res=>res.json())
            .then(json=>console.log(json))

    
// console.log(fetch("https://fakestoreapi.com/products?sort=desc"))

function sortProductsPrice(order) {
    fetch("https://fakestoreapi.com/products?sort=price")
    .then(response => response.json())
    .then(data => {
        if (order === "price") {
            data.sort((a, b) => a.price - b.price)
        } else if (order === "price") {
            data.sort((a, b) => b.price - a.price)
        }
        // produktliste leeren
        productList.innerHTML = ""

        data.forEach(product => {
            const productDiv = document.createElement("div")
            productDiv.classList.add("product")
            productDiv.innerHTML = `
            <img src ="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price} €</p>
            <button onclick = "addToCart(${product.id})">Preis-Granate</button>
            `
            productList.appendChild(productDiv)
        })
    })
    .catch((error) => console.log("so bombige Preise findest du nicht wieder", error))
}
