/**
 * ==========================================
 * BUSINESS CONFIGURATION & EDITABLE DATA
 * ==========================================
 * The business owner can easily update shop info,
 * menu items, and pricing here without coding knowledge.
 */

const businessConfig = {
  shopName: "Hijabi Bakes",
  phoneNumber: "917892492989",
  phoneDisplay: "+91 78924 92989",
  instagramUrl: "https://www.instagram.com/hijabibakes_?igsi=MWR0a3R5NnhzbjN2Yw==", // Updated Instagram URL with tracking parameters
  mapsUrl: "https://maps.google.com/?q=Rajahmundry",
  location: "Rajahmundry, Andhra Pradesh",
  openingHours: "Mon - Sat: 10:00 AM - 8:00 PM (Order Prior)",
  announcement: "✨ 100% Pure Eggless Bakes • Baked Fresh from Scratch • Order Prior! ✨",
  whatsappPrefilledText: "Hello Hijabi Bakes! I would like to place an order."
};

const menuItems = [
  // Cakes
  { name: "Vanilla Cheese Cake", category: "Cakes", price: 299, description: "Rich, creamy vanilla cheesecake baked fresh from scratch.", tag: "Best Seller", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80" },
  { name: "Chocolate Cheese Cake", category: "Cakes", price: 349, description: "Decadent chocolate cheesecake with a buttery crust.", tag: "Popular", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
  { name: "Caramel Popcorn Cake", category: "Cakes", price: 379, description: "Delightful caramel cake topped with crunchy sweet popcorn.", tag: "Special", image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=500&q=80" },
  
  // Cupcakes
  { name: "Vanilla Cupcake / Muffin", category: "Cupcakes", price: 85, description: "Fluffy vanilla cupcake with creamy frosting.", tag: "Eggless", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=500&q=80" },
  { name: "Chocolate Cupcake / Muffin", category: "Cupcakes", price: 90, description: "Moist chocolate muffin bursting with cocoa richness.", tag: "Eggless", image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=500&q=80" },

  // Pastries
  { name: "Chocolate Truffle Pastry", category: "Pastries", price: 699, description: "Luxurious chocolate layers infused with rich truffle ganache.", tag: "Best Seller", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80" },
  { name: "Nutella Pastry", category: "Pastries", price: 799, description: "Generously layered with authentic Nutella spread.", tag: "Must Try", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=500&q=80" },
  { name: "Biscoff Pastry", category: "Pastries", price: 749, description: "Caramelized Lotus Biscoff flavor explosion in every bite.", tag: "Trending", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80" },
  { name: "Strawberry / Blueberry Pastry", category: "Pastries", price: 549, description: "Fresh fruity compote layered over soft sponge.", tag: "Fresh", image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=500&q=80" },
  { name: "Butterscotch Pastry", category: "Pastries", price: 699, description: "Crunchy praline crunch with silky butterscotch cream.", tag: "Classic", image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=500&q=80" },

  // Brownies
  { name: "Medium Box Brownies (16 pcs)", category: "Brownies", price: 379, description: "Fudgy classic chocolate brownies box.", tag: "Best Seller", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },
  { name: "Nutella Brownie Box", category: "Brownies", price: 499, description: "Assorted fudgy brownies drizzled with Nutella.", tag: "Popular", image: "https://images.unsplash.com/photo-1582293041926-72361cfc38a1?auto=format&fit=crop&w=500&q=80" },
  { name: "Kunafa Brownie Box", category: "Brownies", price: 835, description: "Unique fusion of crispy kunafa strands and rich chocolate brownie.", tag: "Chef Special", image: "https://images.unsplash.com/photo-1624371414454-e3dbb89793d9?auto=format&fit=crop&w=500&q=80" },
  { name: "White Chocolate Brownie", category: "Brownies", price: 469, description: "Sweet and creamy white chocolate square brownies.", tag: "Eggless", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" },

  // Cookies
  { name: "Cookie Tin (600g) - Classic", category: "Cookies", price: 699, description: "Crispy buttery classic cookies in a gift tin.", tag: "Gift Item", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80" },
  { name: "Cookie Tin (600g) - Chocolate", category: "Cookies", price: 799, description: "Double chocolate chip cookies packed in a keepsake tin.", tag: "Popular", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=500&q=80" },
  { name: "Cookie Tin (600g) - Red Velvet", category: "Cookies", price: 749, description: "Soft-baked red velvet cookies with white chocolate chunks.", tag: "Special", image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=500&q=80" }
];

let currentCategoryFilter = "all";
let searchQuery = "";

/**
 * ==========================================
 * INITIALIZATION & UI RENDERING
 * ==========================================
 */
document.addEventListener("DOMContentLoaded", () => {
  applyConfiguration();
  renderBestSellers();
  renderMenu();
  setupMenuFilters();
  setupSearchInput();
  setupMobileMenu();
  
  // Initialize Order Form Dynamic Rows
  addOrderRow();
  document.getElementById("addItemRowBtn").addEventListener("click", () => addOrderRow());
  document.getElementById("bakeryOrderForm").addEventListener("submit", handleFormSubmit);

  // Set minimum date for order date picker to today
  const todayStr = new Date().toISOString().split("T")[0];
  document.getElementById("orderDate").min = todayStr;
  document.getElementById("orderDate").value = todayStr;
});

function applyConfiguration() {
  document.getElementById("announcement-text").textContent = businessConfig.announcement;
  document.getElementById("nav-shop-name").textContent = businessConfig.shopName;
  document.getElementById("footer-shop-name").textContent = businessConfig.shopName;
  document.getElementById("config-location").textContent = businessConfig.location;
  document.getElementById("config-hours").textContent = businessConfig.openingHours;
  document.getElementById("config-phone-display").textContent = businessConfig.phoneDisplay;

  // Apply Links
  const waUrl = `https://wa.me/${businessConfig.phoneNumber}?text=${encodeURIComponent(businessConfig.whatsappPrefilledText)}`;
  
  document.getElementById("whatsappBtnLink").href = waUrl;
  document.getElementById("instagramBtnLink").href = businessConfig.instagramUrl;
  document.getElementById("footerWhatsapp").href = waUrl;
  document.getElementById("footerInstagram").href = businessConfig.instagramUrl;
  document.getElementById("floatingWhatsapp").href = waUrl;
  document.getElementById("floatingInstagram").href = businessConfig.instagramUrl;
  document.getElementById("mapLinkBtn").href = businessConfig.mapsUrl;
}

function renderBestSellers() {
  const container = document.getElementById("best-sellers-grid");
  const bestSellers = menuItems.filter(item => item.tag === "Best Seller" || item.tag === "Popular" || item.tag === "Chef Special").slice(0, 3);
  
  container.innerHTML = bestSellers.map(item => `
    <div class="product-card">
      <div class="card-img-wrapper">
        <span class="card-tag">${item.tag}</span>
        <img src="${item.image}" alt="${item.name}" class="card-real-img" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${item.category}</span>
          <span class="card-price">₹${item.price}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button type="button" class="btn btn-outline btn-sm" onclick="quickSelectProduct('${item.name}')">Add to Order ➕</button>
      </div>
    </div>
  `).join("");
}

function renderMenu() {
  const container = document.getElementById("menu-grid");
  
  let filteredItems = menuItems.filter(item => {
    const matchesCategory = currentCategoryFilter === "all" || item.category.toLowerCase() === currentCategoryFilter.toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filteredItems.length === 0) {
    container.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);"><h3>No matching treats found! Try another search or filter.</h3></div>`;
    return;
  }

  container.innerHTML = filteredItems.map(item => `
    <div class="product-card">
      <div class="card-img-wrapper">
        <span class="card-tag">${item.tag}</span>
        <img src="${item.image}" alt="${item.name}" class="card-real-img" loading="lazy">
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-category">${item.category}</span>
          <span class="card-price">₹${item.price}</span>
        </div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button type="button" class="btn btn-outline btn-sm" onclick="quickSelectProduct('${item.name}')">Add to Order ➕</button>
      </div>
    </div>
  `).join("");
}

function setupMenuFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentCategoryFilter = e.target.dataset.category;
      renderMenu();
    });
  });
}

function setupSearchInput() {
  const searchInput = document.getElementById("menuSearchInput");
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderMenu();
  });
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
}

/**
 * ==========================================
 * ENHANCED DYNAMIC ORDER FORM LOGIC
 * ==========================================
 */
function addOrderRow(selectedProductName = "") {
  const container = document.getElementById("dynamicRowsContainer");
  const rowId = 'row_' + Date.now() + Math.random().toString(36).substring(2, 5);

  const productOptions = menuItems.map(item => 
    `<option value="${item.name}" ${item.name === selectedProductName ? 'selected' : ''}>${item.name} (₹${item.price})</option>`
  ).join('');

  const rowDiv = document.createElement("div");
  rowDiv.className = "dynamic-row";
  rowDiv.id = rowId;
  rowDiv.innerHTML = `
    <select class="item-select" required onchange="updateOrderRowSubtotal('${rowId}')">
      <option value="" disabled ${!selectedProductName ? 'selected' : ''}>-- Select a Product --</option>
      ${productOptions}
    </select>
    <input type="number" class="item-qty" min="1" value="1" required oninput="updateOrderRowSubtotal('${rowId}')">
    <span class="row-subtotal" id="${rowId}_subtotal">₹0</span>
    <button type="button" class="remove-row-btn" onclick="removeOrderRow('${rowId}')" title="Remove item">✕</button>
  `;

  container.appendChild(rowDiv);
  updateOrderRowSubtotal(rowId);
}

function removeOrderRow(rowId) {
  const row = document.getElementById(rowId);
  const container = document.getElementById("dynamicRowsContainer");
  if (container.children.length > 1) {
    row.remove();
    updateOrderSummary();
  } else {
    alert("Please keep at least one product in your order.");
  }
}

function quickSelectProduct(productName) {
  document.getElementById("order-section").scrollIntoView({ behavior: 'smooth' });
  
  const rows = document.querySelectorAll(".dynamic-row");
  if (rows.length === 1 && rows[0].querySelector(".item-select").value === "") {
    const selectElem = rows[0].querySelector(".item-select");
    selectElem.value = productName;
    updateOrderRowSubtotal(rows[0].id);
  } else {
    addOrderRow(productName);
  }
}

function updateOrderRowSubtotal(rowId) {
  const row = document.getElementById(rowId);
  if (!row) return;

  const select = row.querySelector(".item-select");
  const qtyInput = row.querySelector(".item-qty");
  const subtotalSpan = document.getElementById(`${rowId}_subtotal`);

  const productName = select.value;
  const qty = parseInt(qtyInput.value) || 0;

  if (productName) {
    const matched = menuItems.find(i => i.name === productName);
    if (matched) {
      const subtotal = matched.price * qty;
      subtotalSpan.textContent = `₹${subtotal}`;
    }
  } else {
    subtotalSpan.textContent = "₹0";
  }

  updateOrderSummary();
}

function updateOrderSummary() {
  let totalCount = 0;
  let totalPrice = 0;

  const rows = document.querySelectorAll(".dynamic-row");
  rows.forEach(row => {
    const select = row.querySelector(".item-select");
    const qtyInput = row.querySelector(".item-qty");
    
    if (select.value && qtyInput.value) {
      const qty = parseInt(qtyInput.value) || 0;
      totalCount += qty;
      
      const matched = menuItems.find(i => i.name === select.value);
      if (matched) {
        totalPrice += matched.price * qty;
      }
    }
  });

  document.getElementById("summaryItemCount").textContent = totalCount;
  document.getElementById("summaryTotalPrice").textContent = `₹${totalPrice}`;
}

function handleFormSubmit(e) {
  e.preventDefault();

  const customerName = document.getElementById("customerName").value.trim();
  const customerPhone = document.getElementById("customerPhone").value.trim();
  const orderDate = document.getElementById("orderDate").value;
  const fulfillmentType = document.getElementById("fulfillmentType").value;
  const contactMethod = document.querySelector('input[name="contactMethod"]:checked').value;
  const customNotes = document.getElementById("customNotes").value.trim();

  let itemsSummary = "";
  let calculatedTotal = 0;

  const rows = document.querySelectorAll(".dynamic-row");
  rows.forEach((row, index) => {
    const productName = row.querySelector(".item-select").value;
    const qty = row.querySelector(".item-qty").value;
    if (productName) {
      const matched = menuItems.find(i => i.name === productName);
      const itemTotal = matched ? matched.price * qty : 0;
      calculatedTotal += itemTotal;
      itemsSummary += `\n${index + 1}. *${productName}* x ${qty} (₹${itemTotal})`;
    }
  });

  if (!itemsSummary) {
    alert("Please select at least one item to order.");
    return;
  }

  const message = `*🍰 NEW ORDER - HIJABI BAKES 🍰*\n\n` +
                  `*Customer Name:* ${customerName}\n` +
                  `*Phone:* ${customerPhone}\n` +
                  `*Date:* ${orderDate}\n` +
                  `*Fulfillment:* ${fulfillmentType}\n\n` +
                  `*Selected Items:*${itemsSummary}\n\n` +
                  `*Estimated Total:* ₹${calculatedTotal}\n` +
                  `*Custom Notes:* ${customNotes || 'None'}\n\n` +
                  `Please confirm my order and share payment details!`;

  if (contactMethod === "whatsapp") {
    const waUrl = `https://wa.me/${businessConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  } else {
    navigator.clipboard.writeText(message).then(() => {
      alert("Order summary copied to clipboard! Opening Instagram DM. Please paste your order message.");
      window.open(businessConfig.instagramUrl, "_blank");
    }).catch(() => {
      prompt("Copy your order details below and send them via Instagram DM:", message);
      window.open(businessConfig.instagramUrl, "_blank");
    });
  }
}