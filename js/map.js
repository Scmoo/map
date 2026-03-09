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
