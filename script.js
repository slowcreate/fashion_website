window.addEventListener("DOMContentLoaded", init);

const productURL = "https://kea-alt-del.dk/t7/api/products";

let productTemplate;
let productContainer;

function init() {
  console.log("init");

  productTemplate = document.querySelector(".product_template");
  console.log("productTemplate", productTemplate);

  productContainer = document.querySelector(".product_container");
  console.log("product_container", productContainer);

  fetch(productURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showProducts(json);
    });
}

function showProducts(productJSON) {
  let productClone;

  productJSON.forEach((product) => {
    console.log("Product", product);
    productClone = productTemplate.cloneNode(true).content;
    productClone.querySelector(".product_image").src = product.image_url;
    productClone.querySelector(".product_image").alt = `Picture of a ${product.name} product`;
    productClone.querySelector(".product_name").textContent = product.name;
    productClone.querySelector(".price").textContent = product.price;
    // productClone.querySelector(".discounted").textContent = product.description;
    productContainer.appendChild(productClone);
  });
}
