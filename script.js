// 1. Data Structure for Products
const products = [
    {
        name: "Cyberpunk Oversized Hoodie",
        price: "₹799",
        category: "Anime",
        image: "image/hoodies/purple.jpg",
        description: "Premium oversized anime hoodie with neon aesthetic.",
        whatsapp: "https://wa.me/917499272598",
        instagram: "https://instagram.com/ace.shopnext"
    },
    {
        name: "Mechanical RGB Keyboard",
        price: "₹3499",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=80",
        description: "Tactile switches with customizable RGB lighting.",
        whatsapp: "https://wa.me/917499272598",
        instagram: "https://instagram.com/ace.shopnext"
    },
    {
        name: "Minimalist watch",
        price: "₹499",
        category: "Gadgets",
        image: "image/watches/blackthunder.png",
        description: "Sleek design, fitness tracking, and AMOLED display.",
        whatsapp: "https://wa.me/917499272598",
        instagram: "https://instagram.com/ace.shopnext"
    },
    {
        name: "Streetwear Cargo Pants",
        price: "₹1299",
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1516826957135-700ede19c6ce?auto=format&fit=crop&w=500&q=80",
        description: "Techwear inspired cargo pants with multiple pockets.",
        whatsapp: "https://wa.me/917499272598",
        instagram: "https://instagram.com/ace.shopnext"
    },
    {
        name: "Titanium Ring",
        price: "₹599",
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&w=500&q=80",
        description: "Matte black titanium ring. Waterproof and durable.",
        whatsapp: "https://wa.me/917499272598",
        instagram: "https://instagram.com/ace.shopnext"
    },
    {
        name: "Wireless ANC Earbuds",
        price: "₹1999",
        category: "Gadgets",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
        description: "Active noise cancellation with 24hr battery life.",
        whatsapp: "https://wa.me/917499272598",
        instagram: "https://instagram.com/ace.shopnext"
    },
    {
        name: "demo",
        price: "₹0",
        category: "none",
        image: "image/demo.jpg",
        description: "not fro sale",
        whatsapp: "https://wa.me/917499272598",
        instagram: "https://instagram.com/ace.shopnext"
    },
    {
        name: "demo",
        price: "₹0",
        category: "none",
        image: "image/demo.jpg",
        description: "not fro sale",
        whatsapp: "https://wa.me/917499272598",
        instagram: "https://instagram.com/ace.shopnext"
    }
];

// 2. Initial Setup & Loader
document.addEventListener("DOMContentLoaded", () => {
    // Hide Loader
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => document.getElementById('loader').style.display = 'none', 500);
    }, 1000);

    renderProducts(products);
});

// 3. Render Products Function
const productGrid = document.getElementById("productGrid");

function renderProducts(productArray) {
    productGrid.innerHTML = "";
    if(productArray.length === 0) {
        productGrid.innerHTML = "<p style='grid-column: 1/-1; text-align:center; color: var(--text-muted);'>No products found.</p>";
        return;
    }
    
    productArray.forEach(product => {
        const card = document.createElement(
            product.name === "Cyberpunk Oversized Hoodie" ? "a" :
            product.name === "Mechanical RGB Keyboard" ? "a" :
            product.name === "Minimalist watch" ? "a" :
            product.name === "Streetwear Cargo Pants" ? "a" :
            product.name === "Titanium Ring" ? "a" :
            product.name === "Wireless ANC Earbuds" ? "a" : "div"
        );
        if (product.name === "Cyberpunk Oversized Hoodie") {
            card.href = "hoodie.html";
        } else if (product.name === "Mechanical RGB Keyboard") {
            card.href = "keyboard.html";
        } else if (product.name === "Minimalist watch") {
            card.href = "watch.html";
        } else if (product.name === "Streetwear Cargo Pants") {
            card.href = "pants.html";
        } else if (product.name === "Titanium Ring") {
            card.href = "ring.html";
        } else if (product.name === "Wireless ANC Earbuds") {
            card.href = "earbuds.html";
        }
        const productLink = card.href || window.location.href;
        const waText = encodeURIComponent(`Hi! I want to order: ${product.name}\nProduct link: ${productLink}`);
        card.className = "product-card glass";
        card.innerHTML = `
            <span class="category-tag">${product.category}</span>
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">${product.price}</div>
            <p class="product-desc">${product.description}</p>
            <div class="product-actions">
                <a href="${product.whatsapp}?text=${waText}" target="_blank" class="btn-wa">
                    <i class="fab fa-whatsapp"></i> Buy
                </a>
                <a href="${product.instagram}" target="_blank" class="btn-ig">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// 4. Render Trending Slider
function renderTrending(productArray) {
    const slider = document.getElementById("trendingSlider");
    slider.innerHTML = "";
    // Grab first 4 items as "Trending"
    productArray.slice(0, 4).forEach(product => {
        const slide = document.createElement(product.name === "Cyberpunk Oversized Hoodie" ? "a" : "div");
        if (product.name === "Cyberpunk Oversized Hoodie") {
            slide.href = "hoodie.html";
        }
        slide.className = "product-card glass";
        slide.style.minWidth = "280px";
        slide.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">${product.price}</div>
        `;
        slider.appendChild(slide);
    });
}

// 5. Category Filtering
const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Active class toggle
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.getAttribute("data-filter");
        
        if (filterValue === "All") {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === filterValue);
            renderProducts(filtered);
        }
    });
});

// Function to handle category clicks from the Categories section
function filterCategory(categoryName) {
    document.getElementById("shop").scrollIntoView({ behavior: 'smooth' });
    
    // Trigger the correct filter button
    const targetBtn = Array.from(filterBtns).find(btn => btn.getAttribute("data-filter") === categoryName);
    if(targetBtn) targetBtn.click();
}

// 6. Live Search Functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const searchedProducts = products.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description.toLowerCase().includes(term)
    );
    
    // Reset category filters to "All" visually when searching
    filterBtns.forEach(b => b.classList.remove("active"));
    filterBtns[0].classList.add("active");

    renderProducts(searchedProducts);
});

// 7. Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// 8. FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
        const icon = item.querySelector("i");
        if(item.classList.contains("active")) {
            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");
        } else {
            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");
        }
    });
});

// 9. Scroll Reveal Animations & Back To Top Button
const revealElements = document.querySelectorAll(".section-reveal");
const backToTopBtn = document.getElementById("backToTop");

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(el => revealObserver.observe(el));

// Back to Top Logic
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
