// PrecastPro Main JavaScript

// Product data
const products = [
  {
    id: 1,
    title: "Structural Insulated Panels",
    description: "High-performance insulated panels offering superior thermal efficiency and structural integrity.",
    image: "https://images.unsplash.com/photo-1621230383916-09c18e4c7bdb?q=80&w=2070&auto=format&fit=crop",
    specs: [
      { label: "R-Value", value: "R-20 to R-40" },
      { label: "Thickness", value: "6\" - 12\"" },
      { label: "Fire Rating", value: "Up to 4 hours" },
      { label: "STC Rating", value: "50-55" }
    ]
  },
  {
    id: 2,
    title: "Architectural Wall Panels",
    description: "Decorative panels with unlimited aesthetic options and premium finish quality.",
    image: "https://images.unsplash.com/photo-1572883475077-5f6344a83cce?q=80&w=2071&auto=format&fit=crop",
    specs: [
      { label: "Finishes", value: "Multiple options" },
      { label: "Thickness", value: "5\" - 8\"" },
      { label: "Fire Rating", value: "Up to 3 hours" },
      { label: "Wind Load", value: "140+ mph" }
    ]
  },
  {
    id: 3,
    title: "Security Wall Systems",
    description: "Blast-resistant and highly secure wall systems for sensitive and critical facilities.",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    specs: [
      { label: "Blast Rating", value: "Level III-V" },
      { label: "Thickness", value: "8\" - 14\"" },
      { label: "Ballistic", value: "UL 752 Level 8" },
      { label: "EMI Shield", value: "Available" }
    ]
  },
  {
    id: 4,
    title: "Foundation Wall Systems",
    description: "Superior foundational support with faster installation and high load-bearing capacity.",
    image: "https://images.unsplash.com/photo-1579746705699-4f7db4d6940a?q=80&w=2070&auto=format&fit=crop",
    specs: [
      { label: "Load Capacity", value: "40,000+ lbs/ft" },
      { label: "Thickness", value: "8\" - 12\"" },
      { label: "Waterproofing", value: "Integrated" },
      { label: "Insulation", value: "Optional" }
    ]
  },
  {
    id: 5,
    title: "Modular Wall Systems",
    description: "Versatile, pre-finished wall solutions with rapid assembly and minimal site disruption.",
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    specs: [
      { label: "Installation", value: "1-3 days" },
      { label: "Thickness", value: "4\" - 8\"" },
      { label: "Configuration", value: "Customizable" },
      { label: "Relocatable", value: "Yes" }
    ]
  },
  {
    id: 6,
    title: "Acoustic Wall Panels",
    description: "Specialized sound-controlling panels for theaters, studios, and noise-sensitive environments.",
    image: "https://images.unsplash.com/photo-1582461683183-2ceccbbe0780?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    specs: [
      { label: "STC Rating", value: "55-65" },
      { label: "Thickness", value: "6\" - 10\"" },
      { label: "NRC", value: "0.70-0.95" },
      { label: "Patterns", value: "Multiple" }
    ]
  }
];

// Gallery images
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern office building with precast facade"
  },
  {
    src: "https://images.unsplash.com/photo-1477121416383-b536f67ffa48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Textured concrete wall panel"
  },
  {
    src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Industrial facility with precast walls"
  },
  {
    src: "https://images.unsplash.com/photo-1605795173463-5f36c9466e7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern architectural concrete detail"
  },
  {
    src: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2076&auto=format&fit=crop",
    alt: "Commercial building under construction"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Decorative precast concrete wall"
  }
];

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking on a link
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#') {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Render products
  renderProducts();
  
  // Render gallery
  renderGallery();
  
  // Set up product modal
  setupProductModal();
  
  // Set up form validation
  setupContactForm();
});

// Renders product cards to the products container
function renderProducts() {
  const container = document.querySelector('.products-container');
  if (!container) return;
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'bg-neutral-light rounded-lg overflow-hidden shadow-sharp hover:shadow-lg transition-all product-card';
    
    productCard.innerHTML = `
      <img 
        src="${product.image}" 
        class="w-full h-48 object-cover" 
        alt="${product.title}" 
      />
      
      <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">${product.title}</h3>
        <p class="text-gray-600 mb-4">${product.description}</p>
        
        <div class="bg-white p-4 rounded-md mb-4">
          <h4 class="text-sm font-semibold text-primary mb-3">Technical Specifications</h4>
          <ul class="text-sm font-mono text-gray-700 space-y-2">
            ${product.specs.map(spec => `
              <li class="flex justify-between">
                <span>${spec.label}:</span>
                <span>${spec.value}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        
        <button 
          class="view-product w-full bg-primary hover:bg-primary-dark text-white py-2 rounded text-sm transition-all"
          data-id="${product.id}"
        >
          View Details
        </button>
      </div>
    `;
    
    container.appendChild(productCard);
  });
}

// Renders gallery images
function renderGallery() {
  const container = document.querySelector('.gallery-container');
  if (!container) return;
  
  galleryImages.forEach(image => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'overflow-hidden rounded-lg shadow-sharp gallery-image';
    
    galleryItem.innerHTML = `
      <img 
        src="${image.src}" 
        class="w-full h-64 object-cover" 
        alt="${image.alt}" 
      />
    `;
    
    container.appendChild(galleryItem);
  });
}

// Sets up product modal functionality
function setupProductModal() {
  const modal = document.getElementById('productModal');
  const closeModal = document.getElementById('closeModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  // Open modal when product card is clicked
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('view-product') || e.target.closest('.view-product')) {
      const button = e.target.classList.contains('view-product') ? e.target : e.target.closest('.view-product');
      const productId = parseInt(button.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      
      if (product && modal) {
        // Populate modal content
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalDescription').textContent = product.description;
        document.getElementById('modalImage').src = product.image;
        document.getElementById('modalImage').alt = product.title;
        
        // Populate specs
        const specsList = document.getElementById('modalSpecs');
        specsList.innerHTML = '';
        product.specs.forEach(spec => {
          const li = document.createElement('li');
          li.className = 'flex justify-between';
          li.innerHTML = `
            <span>${spec.label}:</span>
            <span>${spec.value}</span>
          `;
          specsList.appendChild(li);
        });
        
        // Show modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    }
  });
  
  // Close modal when close button is clicked
  if (closeModal) {
    closeModal.addEventListener('click', closeProductModal);
  }
  
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeProductModal);
  }
  
  // Close modal when clicking outside of content
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeProductModal();
      }
    });
  }
  
  // Close modal when ESC key is pressed
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeProductModal();
    }
  });
  
  // Close modal when "Request Quote" is clicked
  const requestQuoteBtn = document.getElementById('requestQuoteBtn');
  if (requestQuoteBtn) {
    requestQuoteBtn.addEventListener('click', closeProductModal);
  }
}

// Close product modal
function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  }
}

// Sets up contact form validation
function setupContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send data to a server here
      // For now, we'll just simulate success
      showToast('Your message has been sent successfully!');
      contactForm.reset();
    }
  });
  
  // Add input event listeners to clear errors when user types
  const formInputs = contactForm.querySelectorAll('input, textarea, select');
  formInputs.forEach(input => {
    input.addEventListener('input', function() {
      this.classList.remove('border-red-500');
      const errorEl = this.nextElementSibling;
      if (errorEl && errorEl.classList.contains('error-message')) {
        errorEl.classList.add('hidden');
      }
    });
  });
}

// Validate contact form
function validateForm() {
  let isValid = true;
  const contactForm = document.getElementById('contactForm');
  
  // Reset previous error messages
  const errorMessages = contactForm.querySelectorAll('.error-message');
  errorMessages.forEach(el => {
    el.classList.add('hidden');
    el.textContent = '';
  });
  
  // Required fields validation
  const requiredFields = ['firstName', 'lastName', 'email', 'projectType', 'message'];
  
  requiredFields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (!field.value.trim()) {
      showError(fieldId, 'This field is required');
      isValid = false;
    }
  });
  
  // Email validation
  const emailField = document.getElementById('email');
  if (emailField.value && !isValidEmail(emailField.value)) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  }
  
  // Consent checkbox validation
  const consentCheckbox = document.getElementById('consent');
  if (!consentCheckbox.checked) {
    showError('consent', 'You must consent to proceed');
    isValid = false;
  }
  
  return isValid;
}

// Show validation error message
function showError(fieldId, message) {
  const field = document.getElementById(fieldId);
  field.classList.add('border-red-500');
  
  // Find error message element
  let errorEl;
  if (fieldId === 'consent') {
    // Special case for consent checkbox which has a different structure
    errorEl = field.parentElement.nextElementSibling.querySelector('.error-message');
  } else {
    errorEl = field.nextElementSibling;
  }
  
  if (errorEl && errorEl.classList.contains('error-message')) {
    errorEl.classList.remove('hidden');
    errorEl.textContent = message;
  }
}

// Validate email format
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Show toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    // Hide toast after delay
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 5000);
  }
}