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
function addToCart(name, price) {
    cart.push({ name: name, price: price });
    updateCartDisplay();
}


function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const whatsappLink = document.getElementById("whatsapp-order");

    cartItems.innerHTML = "";
    let total = 0;
    let counts = {};
    let prixParArticle = {};

    cart.forEach(item => {
        const { name, price } = item;
        counts[name] = (counts[name] || 0) + 1;
        prixParArticle[name] = price;
        total += price;
    });

    for (const name in counts) {
        const li = document.createElement("li");
        const prixTotal = counts[name] * prixParArticle[name];
        li.innerHTML = `
            ${name} x${counts[name]} – ${prixTotal.toLocaleString()} Ar 
            <button onclick="removeFromCart('${name}')">❌</button>
        `;
        cartItems.appendChild(li);
    }

    cartTotal.textContent = total.toLocaleString() + " Ar";

    let message = "Bonjour, je souhaite commander:%0A" + 
        Object.entries(counts)
        .map(([name, qty]) => `- ${name} x${qty}`)
        .join("%0A");

    whatsappLink.href = "https://wa.me/261340946640?text=" + message;
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
function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartDisplay();
    }
}

