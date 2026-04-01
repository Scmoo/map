// =============================================
//  MAP SETUP
//  This file initializes the Leaflet map.
//  You generally won't need to edit this much.
// =============================================

// Create the map, centered on the continental US
const map = L.map('map', {
  center: [39.5, -98.35],   // Center of the US
  zoom: 5,
  minZoom: 4,
  maxZoom: 13,
  zoomControl: true,
});

// Use a dark, stylish map tile from CartoDB
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// ---- MODAL FUNCTIONS ----
// Opens the modal and loads a location's page into it
function openLocation(locationFolder) {
  const modal   = document.getElementById('locationModal');
  const overlay = document.getElementById('modalOverlay');
  const frame   = document.getElementById('locationFrame');

  frame.src = `locations/${locationFolder}/index.html`;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// Closes the modal
function closeModal() {
  const modal   = document.getElementById('locationModal');
  const overlay = document.getElementById('modalOverlay');
  const frame   = document.getElementById('locationFrame');

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  frame.src = '';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ---- DISCLAIMER TIMER ----
// Collapse disclaimer after 5 seconds
console.log('Disclaimer timer starting...');
setTimeout(() => {
  const disclaimer = document.getElementById('photoDisclaimer');
  console.log('Timer fired, disclaimer element:', disclaimer);
  if (disclaimer) {
    disclaimer.classList.remove('expanded');
    disclaimer.classList.add('collapsed');
    // Show icon immediately on initial collapse
    const iconElement = disclaimer.querySelector('.disclaimer-icon');
    if (iconElement) {
      iconElement.style.opacity = '1';
    }
    console.log('Disclaimer collapsed');
  }
}, 7000);

// ---- DISCLAIMER HOVER BEHAVIOR ----
const disclaimer = document.getElementById('photoDisclaimer');
let hoverTimeout;
let textTimeout;
let iconTimeout;

if (disclaimer) {
  disclaimer.addEventListener('mouseenter', () => {
    // Clear any existing timeouts
    clearTimeout(hoverTimeout);
    clearTimeout(textTimeout);
    clearTimeout(iconTimeout);
    
    // Hide icon immediately when hovering
    const iconElement = disclaimer.querySelector('.disclaimer-icon');
    if (iconElement) {
      iconElement.style.opacity = '0';
    }
    
    // Show text after expansion completes (400ms)
    textTimeout = setTimeout(() => {
      const textElement = disclaimer.querySelector('.disclaimer-content p');
      if (textElement) {
        textElement.classList.add('show-text');
      }
    }, 400);
  });
  
  disclaimer.addEventListener('mouseleave', () => {
    // Clear timeouts
    clearTimeout(hoverTimeout);
    clearTimeout(textTimeout);
    clearTimeout(iconTimeout);
    
    // Remove text visibility class immediately
    const textElement = disclaimer.querySelector('.disclaimer-content p');
    if (textElement) {
      textElement.classList.remove('show-text');
    }
    
    // Show icon after 2 seconds delay
    iconTimeout = setTimeout(() => {
      const iconElement = disclaimer.querySelector('.disclaimer-icon');
      if (iconElement && disclaimer.classList.contains('collapsed')) {
        iconElement.style.opacity = '1';
      }
    }, 2000);
    
    // Wait 5 seconds before allowing collapse
    hoverTimeout = setTimeout(() => {
      // Only collapse if we're still in collapsed state and not hovering
      if (disclaimer.classList.contains('collapsed') && !disclaimer.matches(':hover')) {
        // Already collapsed, nothing to do
      }
    }, 5000);
  });
}
