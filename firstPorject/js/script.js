// Get all product cards
const cards = document.querySelectorAll(".card");

// Update total price
function updateTotal() {
  let total = 0;
  cards.forEach((card) => {
    const priceText = card.querySelector(".unit-price").innerText;
    const price = parseFloat(priceText.replace("$", "").trim());
    const quantity = parseInt(card.querySelector(".quantity").innerText);
    total += price * quantity;
  });
  document.querySelector(".total").innerText = `${total} $`;
}

// Add event listeners to each product card
cards.forEach((card) => {
  const plusBtn = card.querySelector(".fa-plus-circle");
  const minusBtn = card.querySelector(".fa-minus-circle");
  const trashBtn = card.querySelector(".fa-trash-alt");
  const heartBtn = card.querySelector(".fa-heart");
  const quantitySpan = card.querySelector(".quantity");

  // Plus button
  plusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantitySpan.innerText);
    quantitySpan.innerText = quantity + 1;
    updateTotal();
  });

  // Minus button
  minusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantitySpan.innerText);
    if (quantity > 0) {
      quantitySpan.innerText = quantity - 1;
      updateTotal();
    } else {
      card.closest(".card-body").remove();
    }
  });

  // Trash button
  trashBtn.addEventListener("click", () => {
    card.closest(".card-body").remove();
    updateTotal();
  });

  // Heart (like) button
  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");
  });
});
