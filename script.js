// Tu peux ajouter ici du JavaScript plus tard si tu veux un menu déroulant ou des animations

function filterMenu(category) {
    let items = document.querySelectorAll('.menu-items .item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


let cart = [];
function addToCart(item) {
    cart.push(item);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const whatsappLink = document.getElementById("whatsapp-order");
    cartItems.innerHTML = "";
    let total = 0;
    let counts = {};
    cart.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
        total += 5; // prix fictif par article
    });
    for (const item in counts) {
        const li = document.createElement("li");
        li.textContent = `${item} x${counts[item]}`;
        cartItems.appendChild(li);
    }
    cartTotal.textContent = total.toFixed(2);
    let message = "Bonjour, je souhaite commander: %0A" + Object.entries(counts).map(([k, v]) => `- ${k} x${v}`).join("%0A");
    whatsappLink.href = "https://wa.me/?text=" + message;
}


document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav ul');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
});
