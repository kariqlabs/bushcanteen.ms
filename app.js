const foodItems = [
  {
    id: 'fufu-light-soup',
    name: 'Fufu & Light Soup',
    category: 'Local Dishes',
    description: 'Silky fufu with slow-cooked chicken and pepper soup.',
    price: 48,
    image: 'fufu-light-soup.jpg'
  },
  {
    id: 'fante-kenkey',
    name: 'Kenkey with Fish & Egg',
    category: 'Local Dishes',
    description: 'Fermented corn kenkey with fish, pepper and fresh onion.',
    price: 52,
    image: 'fante-kenkey.jpg'
  },
  {
    id: 'gob3',
    name: 'GOB3 Special',
    category: 'Local Dishes',
    description: 'Gari, beans and sweet fried plantain with house sauce.',
    price: 38,
    image: 'gob3.jpg'
  },
  {
    id: 'banku-tilapia',
    name: 'Banku & Tilapia',
    category: 'Local Dishes',
    description: 'Hand-turned banku with grilled tilapia and pepper relish.',
    price: 65,
    image: 'banku-tilapia.jpg'
  },
  {
    id: 'Ampesi with Avocado, and Kontomire',
    name: 'Ampesi with Avocado, and Kontomire',
    category: 'Local Dishes',
    description: 'Soft ampesi with avocado, garden vegetables and kontomire.',
    price: 68,
    image: 'WhatsApp Image 2026-09-12 at 22.41.42.jpeg'
  },
  {
    id: 'royal-waakye',
    name: 'Royal Waakye',
    category: 'Local Dishes',
    description: 'A generous waakye plate with egg, plantain, salad and shito.',
    price: 54,
    image: 'WhatsApp Image 2026-09-12 at 22.41.42 (1).jpeg'
  },
  {
    id: 'red red',
    name: 'RED RED',
    category: 'Local Dishes',
    description: 'A generous beans stew with plantain.',
    price: 72,
    image: 'WhatsApp Image 2026-09-12 at 22.41.42 (2).jpeg'
  },
  {
    id: 'tuo zaafi',
    name: 'Tuo Zaafi',
    category: 'Local Dishes',
    description: 'Northern Ghanaian staple food made from a soft, smooth, and stretchy cooked corn or millet flour porridge.',
    price: 88,
    image: 'WhatsApp Image 2026-09-12 at 22.41.42 (3).jpeg'
  },
  {
    id: 'Fufu and abunuabunu with snail',
    name: 'Fufu and Abunuabunu with snails and crab',
    category: 'Local Dishes',
    description: 'a rich, vibrant green traditional Ghanaian soup made from cocoyam leaves, often served with fufu and accompanied by snails and crab for added flavor and texture.',
    price: 75,
    image: 'WhatsApp Image 2026-09-12 at 22.41.43.jpeg'
  },
  {
    id: 'seafood-green-soup',
    name: 'Seafood Green Soup',
    category: 'Local Dishes',
    description: 'A deeply seasoned green soup with fresh seafood and herbs.',
    price: 82,
    image: 'WhatsApp Image 2026-09-12 at 22.41.43 (2).jpeg'
  },
  {
    id: 'signature-crab',
    name: 'Signature Crab & Pepper',
    category: 'Local Dishes',
    description: 'Whole crab glazed with aromatic pepper sauce and garden herbs.',
    price: 95,
    image: 'download.jpg'
  },
  {
    id: 'riceball-chicken-soup',
    name: 'Riceball & Chicken Soup',
    category: 'Local Dishes',
    description: 'Soft riceball served in rich red soup with tender chicken pieces.',
    price: 50,
    image: 'fufu-chicken-soup.jpg'
  },
  {
    id: 'waakye-egg',
    name: 'Waakye & Egg',
    category: 'Local Dishes',
    description: 'Seasoned rice and beans served with egg and house stew.',
    price: 58,
    image: 'WhatsApp Image 2026-09-12 at 22.05.50 (1).jpeg'
  },
  {
    id: 'yam-and-egg',
    name: 'Yam & Egg Stew',
    category: 'Local Dishes',
    description: 'Golden boiled yam with fresh pepper egg stew.',
    price: 35,
    image: 'WhatsApp Image 2026-09-12 at 22.05.51.jpeg'
  },
  {
    id: 'goat-light-soup',
    name: 'Goat Light Soup',
    category: 'Local Dishes',
    description: 'Peppery tomato broth with tender goat meat.',
    price: 52,
    image: 'WhatsApp Image 2026-09-12 at 22.05.52.jpeg'
  },
  {
    id: 'ampesi',
    name: 'Ampesi & Kontomire',
    category: 'Local Dishes',
    description: 'Boiled plantain and yam with rich kontomire stew.',
    price: 45,
    image: 'WhatsApp Image 2026-09-12 at 22.07.35 (1).jpeg'
  },
  {
    id: 'grilled-fish',
    name: 'Grilled Fish & Kenkey',
    category: 'Local Dishes',
    description: 'Charcoal grilled fish with kenkey and three peppers.',
    price: 62,
    image: 'WhatsApp Image 2026-09-12 at 22.07.35 (2).jpeg'
  },
  {
    id: 'fish-and-bank',
    name: 'Fish, Banku & Pepper',
    category: 'Local Dishes',
    description: 'Smoky whole fish served with soft banku and pepper.',
    price: 60,
    image: 'WhatsApp Image 2026-09-12 at 22.07.35.jpeg'
  },
  {
    id: 'beef-stir-fry-noodles',
    name: 'Beef Stir-Fry Noodles',
    category: 'Continental Dishes',
    description: 'Seasoned noodles tossed with tender beef and crisp vegetables.',
    price: 70,
    image: 'continental dishes/Beef Stir-Fry Noodles with Vegetables.jpg'
  },
  {
    id: 'assorted-jollof',
    name: 'Assorted Jollof',
    category: 'Continental Dishes',
    description: 'Fragrant jollof rice served with a generous mix of savoury sides.',
    price: 68,
    image: 'continental dishes/assorted jollof.jpg'
  },
  {
    id: 'jollof-chicken-salad',
    name: 'Jollof, Chicken & Salad',
    category: 'Continental Dishes',
    description: 'Spiced jollof rice with roasted chicken and a fresh garden salad.',
    price: 72,
    image: 'continental dishes/jollof chicken salad.jpg'
  },
  {
    id: 'plain-rice',
    name: 'Plain Rice & Stew',
    category: 'Continental Dishes',
    description: 'Fluffy steamed rice with rich house stew and tender chicken.',
    price: 65,
    image: 'continental dishes/plainrice.jpg'
  },
  {
    id: 'sticky-honey-soy-chicken',
    name: 'Sticky Honey Soy Chicken',
    category: 'Continental Dishes',
    description: 'Glazed chicken pieces with honey soy sauce, rice and greens.',
    price: 78,
    image: 'continental dishes/Sticky Honey Soy Chicken.jpg'
  },
  {
    id: 'yam-chicken-plantain',
    name: 'Yam, Chicken & Plantain',
    category: 'Continental Dishes',
    description: 'Tender chicken with golden yam and sweet fried plantain.',
    price: 75,
    image: 'continental dishes/yam chicken plantain.jpg'
  },
  {
    id: 'bottled-water',
    name: 'Bottled Water',
    category: 'Bar',
    description: 'Chilled bottled water, served cold.',
    price: 8,
    image: 'bar/Bottled Water.jpg'
  },
  {
    id: 'cocktail-de-fruits',
    name: 'Cocktail de Fruits',
    category: 'Bar',
    description: 'Refreshing fruit cocktail drink, served chilled.',
    price: 15,
    image: 'bar/corktail.jpg'
  },
  {
    id: 'malta-guinness',
    name: 'Malta Guinness',
    category: 'Bar',
    description: 'Rich, refreshing malt drink with a smooth finish.',
    price: 18,
    image: 'bar/malt.jpg'
  },
  {
    id: 'fanta-orange',
    name: 'Fanta Orange',
    category: 'Bar',
    description: 'Bright and bubbly orange soft drink, served chilled.',
    price: 15,
    image: 'bar/fanta.jpg'
  },
  {
    id: 'vodka-energy-mix',
    name: "Cody's Vodka Energy Mix",
    category: 'Bar',
    description: 'Chilled vodka energy mix with a bold, lively finish.',
    price: 35,
    image: 'bar/vody.jpg'
  }
];

const cart = new Map();
let activeCategory = 'All';
let activeSubtab = 'popular';
let searchTerm = '';

const byId = (id) => document.getElementById(id);
const money = (amount) => `GHS ${amount.toFixed(2)}`;
const menuImagePath = (image) => {
  const imagePath = image.includes('/') ? image : `IMAGES OF THE FOODS/${image}`;
  return imagePath.split('/').map(encodeURIComponent).join('/');
};

function renderMenu() {
  const query = searchTerm.trim().toLowerCase();
  const visibleItems = foodItems.filter((item) => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const queryMatch = !query || `${item.name} ${item.description}`.toLowerCase().includes(query);
    return categoryMatch && queryMatch;
  });
  const items = activeSubtab === 'popular' ? visibleItems.slice(0, 10) : visibleItems;
  const grid = byId('food-grid');

  byId('items-count-label').textContent = `Showing ${items.length} item${items.length === 1 ? '' : 's'}`;
  grid.innerHTML = items.length ? items.map((item, index) => `
    <article class="food-card food-card-${(index % 5) + 1}" data-food-id="${item.id}" tabindex="0">
      <div class="food-image-wrap">
        <img src="${menuImagePath(item.image)}" alt="${item.name}" loading="lazy">
        <span class="food-badge">Local favourite</span>
      </div>
      <div class="food-info">
        <div class="food-card-topline"><span>${item.category}</span><strong>${money(item.price)}</strong></div>
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <button class="add-food-btn" type="button" data-add-food="${item.id}">Add to order <span>+</span></button>
      </div>
    </article>
  `).join('') : '<div class="empty-menu-state">No dishes match that search.</div>';

  grid.querySelectorAll('[data-add-food]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      addToCart(button.dataset.addFood);
    });
  });
  grid.querySelectorAll('[data-food-id]').forEach((card) => {
    card.addEventListener('click', () => addToCart(card.dataset.foodId));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') addToCart(card.dataset.foodId);
    });
  });
  if (window.lucide) window.lucide.createIcons();
}

function addToCart(itemId) {
  cart.set(itemId, (cart.get(itemId) || 0) + 1);
  renderCart();
}

function renderCart() {
  const container = byId('cart-items-container');
  const entries = [...cart.entries()];
  if (!entries.length) {
    container.innerHTML = '<div class="empty-cart-state" id="empty-cart-state"><i data-lucide="shopping-cart"></i><p>Your order cart is empty</p><small>Tap food items on the menu grid to add to order</small></div>';
  } else {
    container.innerHTML = entries.map(([itemId, quantity]) => {
      const item = foodItems.find((food) => food.id === itemId);
      return `<div class="cart-item"><div><strong>${item.name}</strong><small>${quantity} x ${money(item.price)}</small></div><b>${money(item.price * quantity)}</b><button type="button" class="remove-cart-item" data-remove-food="${item.id}" title="Remove item">×</button></div>`;
    }).join('');
    container.querySelectorAll('[data-remove-food]').forEach((button) => {
      button.addEventListener('click', () => {
        const quantity = cart.get(button.dataset.removeFood) || 0;
        if (quantity > 1) cart.set(button.dataset.removeFood, quantity - 1);
        else cart.delete(button.dataset.removeFood);
        renderCart();
      });
    });
  }
  const total = entries.reduce((sum, [itemId, quantity]) => {
    const item = foodItems.find((food) => food.id === itemId);
    return sum + item.price * quantity;
  }, 0);
  byId('bill-subtotal').textContent = money(total);
  byId('bill-total').textContent = money(total);
  byId('btn-checkout').disabled = total === 0;
  if (window.lucide) window.lucide.createIcons();
}

function showTab(tabName) {
  const validTabs = ['pos', 'kds', 'stickers', 'reports', 'history', 'admin'];
  if (!validTabs.includes(tabName)) tabName = 'pos';
  document.querySelectorAll('.nav-item').forEach((item) => item.classList.toggle('active', item.dataset.tab === tabName));
  document.querySelectorAll('.tab-view').forEach((view) => view.classList.toggle('active', view.id === `view-${tabName}`));
  if (window.location.hash !== `#${tabName}`) history.replaceState(null, '', `#${tabName}`);
}

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    showTab(item.dataset.tab);
  });
});

window.addEventListener('hashchange', () => showTab(window.location.hash.slice(1)));

document.querySelectorAll('.cat-pill').forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    document.querySelectorAll('.cat-pill').forEach((pill) => pill.classList.toggle('active', pill === button));
    renderMenu();
  });
});

document.querySelectorAll('.sub-tab').forEach((button) => {
  button.addEventListener('click', () => {
    activeSubtab = button.dataset.sub;
    document.querySelectorAll('.sub-tab').forEach((tab) => tab.classList.toggle('active', tab === button));
    renderMenu();
  });
});

byId('search-input').addEventListener('input', (event) => {
  searchTerm = event.target.value;
  renderMenu();
});
byId('btn-clear-cart').addEventListener('click', () => {
  cart.clear();
  renderCart();
});
document.querySelectorAll('.type-pill').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.type-pill').forEach((pill) => pill.classList.toggle('active', pill === button));
  });
});
document.querySelectorAll('.pay-method-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.pay-method-btn').forEach((method) => method.classList.toggle('active', method === button));
  });
});

function activeButtonValue(selector, attribute) {
  const button = document.querySelector(`${selector}.active`);
  return button ? button.dataset[attribute] : '';
}

function openModal(id) {
  byId(id).classList.add('active');
}

function closeModal(id) {
  byId(id).classList.remove('active');
}

document.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', () => closeModal(button.dataset.close));
});

byId('btn-checkout').addEventListener('click', () => openModal('modal-payment'));

byId('btn-confirm-payment').addEventListener('click', async () => {
  const confirmButton = byId('btn-confirm-payment');
  const items = [...cart.entries()].map(([id, quantity]) => ({ id, quantity }));
  if (!items.length) return;
  confirmButton.disabled = true;
  confirmButton.textContent = 'Saving order...';
  try {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items,
        paymentMethod: activeButtonValue('.pay-method-btn', 'method'),
        orderType: activeButtonValue('.type-pill', 'type'),
        customerRef: byId('table-ref-input').value || 'Walk-in customer',
        staff: byId('staff-taker-select').value
      })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Unable to save order');
    byId('current-order-tag').textContent = `Order #${result.order.id}`;
    cart.clear();
    renderCart();
    closeModal('modal-payment');
    window.open(result.receiptUrl, '_blank', 'noopener');
  } catch (error) {
    window.alert(`${error.message}. Start the app with npm start before taking orders.`);
  } finally {
    confirmButton.disabled = false;
    confirmButton.textContent = 'Complete Payment & Print';
  }
});

function renderOperationalViews() {
  byId('kds-grid').innerHTML = [
    ['BC-1042', 'Waakye Special', 'Preparing', '12:04'],
    ['BC-1041', 'Banku & Tilapia', 'Ready for pickup', '11:58'],
    ['BC-1040', 'Riceball & Chicken Soup', 'Preparing', '11:51']
  ].map(([id, dish, status, time]) => `<article class="kds-ticket"><div class="ticket-topline"><strong>${id}</strong><span>${time}</span></div><h3>${dish}</h3><p>Table 4 · 1 order</p><span class="ticket-status ${status === 'Ready for pickup' ? 'ready' : ''}">${status}</span></article>`).join('');
  byId('stickers-container').innerHTML = foodItems.slice(0, 6).map((item) => `<article class="sticker-card"><div><strong>${item.name}</strong><span>Ghanaian Local · Takeaway</span></div><button class="btn-secondary" type="button">Preview</button></article>`).join('');
}

renderMenu();
renderOperationalViews();
showTab(window.location.hash.slice(1) || 'pos');
renderCart();
