// 1. Image Gallery Swapper
function changeImage(element) {
    // Change main image source to match the clicked thumbnail
    document.getElementById('mainImage').src = element.src;
    
    // Remove active class from all thumbnails
    let thumbnails = document.querySelectorAll('.thumb');
    thumbnails.forEach(thumb => thumb.classList.remove('active-thumb'));
    
    // Add active class to clicked thumbnail
    element.classList.add('active-thumb');
}

// 2. Quantity Counter
function changeQuantity(amount) {
    let qtyInput = document.getElementById('qty');
    let currentValue = parseInt(qtyInput.value);
    
    let newValue = currentValue + amount;
    // Prevent going below 1
    if (newValue >= 1) {
        qtyInput.value = newValue;
    }
    updateWhatsAppLink();
}

// 3. Accordion Logic
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('open');
        
        // Flip the arrow icon
        const icon = header.querySelector('i');
        if(item.classList.contains('open')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });
});

// 4. Dynamic WhatsApp Link Generator
function updateWhatsAppLink() {
    const productName = "Mechanical RGB Keyboard";
    const qty = document.getElementById('qty').value;
    
    // Format the message
    const message = `Hi Ace.shopnext! I want to order:\n\nProduct: ${productName}\nQuantity: ${qty}\nProduct page: ${window.location.href}\n\nPlease let me know the payment details.`;
    
    // Add your actual WhatsApp number here (include country code, no + or spaces)
    const waNumber = "917499272598"; 
    
    // Update the button link
    const buyBtn = document.getElementById('buyNowBtn');
    buyBtn.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

// Initialize the link on page load
document.addEventListener('DOMContentLoaded', updateWhatsAppLink);
