let totalPrice = 0;
let items = document.querySelectorAll('.card');

items.forEach((item) => {
  let quantity = item.querySelector('.qute');
  let unitPrice = item.querySelector('.unitt-price').textContent;
  let heart = item.querySelector('.fa-heart');
  let deleteButton = item.querySelector('.fa-trash-alt');
  let plusButton = item.querySelector('.fa-plus-circle');
  let minusButton = item.querySelector('.fa-minus-circle');

  // Initialize quantity to 1
  quantity.textContent = 0;

  // Calculate initial total price
  totalPrice += parseInt(unitPrice);
  document.getElementById('total-price').textContent = totalPrice;

  // Add event listeners
  plusButton.addEventListener('click', () => {
    let currentQuantity = parseInt(quantity.textContent);
    quantity.textContent = currentQuantity + 1;
    totalPrice += parseInt(unitPrice);
    document.getElementById('total-price').textContent = totalPrice;
  });

  minusButton.addEventListener('click', () => {
    let currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity > 1) {
      quantity.textContent = currentQuantity - 1;
      totalPrice -= parseInt(unitPrice);
      document.getElementById('total-price').textContent = totalPrice;
    }
  });

  deleteButton.addEventListener('click', () => {
    item.remove();
    totalPrice -= parseInt(unitPrice) * parseInt(quantity.textContent);
    document.getElementById('total-price').textContent = totalPrice;
  });

  heart.addEventListener('click', () => {
    heart.classList.toggle('fas');
    heart.classList.toggle('far');
  });
});