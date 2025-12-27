let quantity = 0;
let cartCount = 0;
const qtyEl = document.getElementById("quantity");
const cartEl = document.getElementById("cart-count");

document.getElementById("plus").onclick = () => {
  quantity++;
  qtyEl.textContent = quantity;
};

document.getElementById("minus").onclick = () => {
  if (quantity > 0) quantity--;
  qtyEl.textContent = quantity;
};



document.getElementById("add-to-cart").onclick = () => {
  cartCount += quantity;
  cartEl.textContent = cartCount;
  quantity = 0;
  qtyEl.textContent = 0;
};
const mainImg = document.getElementById("main-img");
const thumbs = document.querySelectorAll(".thumbnails img");
let index = 0;

thumbs.forEach((img, i) => {
  img.onclick = () => {
    setImage(i);
  };
});
document.querySelector(".next").onclick = () => {
  index = (index + 1) % thumbs.length;
  setImage(index);
};
document.querySelector(".prev").onclick = () => {
  index = (index - 1 + thumbs.length) % thumbs.length;
  setImage(index);
};
function setImage(i) {
  thumbs.forEach(t => t.classList.remove("active"));
  thumbs[i].classList.add("active");
  mainImg.src = thumbs[i].src;
  index = i;
}
