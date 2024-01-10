// - Erstelle einen kleinen E-Commerce Store mit der [FakeStore_API](https://fakestoreapi.com/).
// - **Überlege dir ein ansprechendes Design.**
// - Schaue dir die verschiedenen Endpoints genau an: https://fakestoreapi.com/docs

// import { variables, table } from "./variables.js";

// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

const apiAllProduct = "https://fakestoreapi.com/products"
const apiImage = "https://fakestoreapi.com/products/image"
const apiCategories = "https://fakestoreapi.com/products/categories"
const apiPrice = "https://fakestoreapi.com/products/price"
const addToCart = "https://fakestoreapi.com/products/id"

const getApiFunction = (apiLink) => {
    fetch(apiLink)
        .then((resp) => resp.json())
        .then((data) => {
            const unsereData = [...data]
            console.log(unsereData)
            unsereData.forEach((singelProduct) => {
                showProduct(singelProduct)
            })
        })
}

let main = document.querySelector("main")


const showProduct = (einProduct) => {
    console.log(einProduct.title)
    main.innerHTML += `
    <div>
    <img src ="${einProduct.image}" alt="${einProduct.title}">
    <h3>${einProduct.title}</h3>
    <p>${einProduct.price} €</p>
    <button onclick = "addToCart(${einProduct.id})">Buy now</button>
    </div>
    `
}

getApiFunction(apiAllProduct)
getApiFunction(apiImage)
getApiFunction(apiCategories)
getApiFunction(apiPrice)
getApiFunction(addToCart)


const sortProduct = (sortType) => {
    if (sortType === "lowTohigh") {
        einProduct.price.sort((a, b) => a.price - b.price)
    } else if (sortType  === "highTolow") {
        einProduct.price.sort((a, b) => b.price - a.price)
    }
}
sortProduct(sortType)


// function searchProduct() {
//     let searching = document.querySelector("#searchMovie").value
//     console.log("" + searching)
//     let sorting = movies.includes(searching)
    
//     toHtml.innerHTML = ""
//     sorting.forEach(moviesBox)
// }


// version1
// fetch('https://fakestoreapi.com/products?sort=price')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

    
// // console.log(fetch("https://fakestoreapi.com/products?sort=desc"))

// function sortProductsPrice(order) {
//     fetch("https://fakestoreapi.com/products?sort=price")
//     .then(response => response.json())
//     .then(data => {
//         const producti = document.getElementById("producti")
//         if (order === "price") {
//             data.sort((a, b) => a.price - b.price)
//         } else if (order === "price") {
//             data.sort((a, b) => b.price - a.price)
//         }
//         // produktliste leeren
//         productList.innerHTML = ""

//         data.forEach(product => {
//             const productDiv = document.createElement("div")
//             productDiv.classList.add("product")
//             productDiv.innerHTML = `
//             <img src ="${product.image}" alt="${product.title}">
//             <h3>${product.title}</h3>
//             <p>${product.price} €</p>
//             <button onclick = "addToCart(${product.id})">Preis-Granate</button>
//             `
//             productList.appendChild(productDiv)
//         })
//     })
//     .catch((error) => console.log("so bombige Preise findest du nicht wieder", error))
// }