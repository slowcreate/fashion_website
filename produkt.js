const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function getProduct() {
  fetch(url)
    .then((res) => res.json())
    .then(showProduct);
}

// const temp = document.querySelector("template").content;
// const parent = document.querySelector("section");

function showProduct(product) {
  console.log(product);
  document.querySelector(".bread_title").textContent = product.productdisplayname;
  document.querySelector("h3").textContent = product.productdisplayname;
  document.querySelector("p").innerHTML = product.description;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector("img").alt = product.productdisplayname;
}

getProduct();
