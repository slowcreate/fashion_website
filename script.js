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
    console.log(product);
    //lav en kopi og fang template
    productClone = productTemplate.cloneNode(true).content;
    // ændre indhold
    productClone.querySelector(".product_name").textContent = product.productdisplayname;
    productClone.querySelector(".price").textContent = product.price;
    productClone.querySelector(".brand").textContent = product.brandname;
    productClone.querySelector(".subtle").textContent = product.articletype;
    productClone.querySelector("a").href = `produkt.html?id=${product.id}`;
    productClone.querySelector("h3").innerHTML = product.productdisplayname;
    if (productClone.soldout);
    //   //produkt udsolgt
    const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    productClone.querySelector(".product_image").src = imagePath;
    productClone.querySelector(".product_image").alt = `Picture of a ${product.productdisplayname} product`;
    // productClone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"`;
    // productClone.querySelector(".discounted").textContent = product.description;

    // appende
    productContainer.appendChild(productClone);
  });
}
