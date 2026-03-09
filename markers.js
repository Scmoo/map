// =============================================
//  MARKERS / LOCATIONS
//
//  TO ADD A NEW LOCATION:
//  1. Add a new entry to the `locations` array below
//  2. Create a folder: locations/your-folder-name/
//  3. Create locations/your-folder-name/index.html
//     (copy the template from any existing location)
// =============================================

const locations = [
  {
    name:    "Grand Canyon",
    folder:  "grand-canyon",        // must match folder name in /locations/
    lat:     36.1069,
    lng:    -112.1129,
    icon:    "🏜️",
    visited: true,
  },
  {
    name:    "Yellowstone",
    folder:  "yellowstone",
    lat:     44.4280,
    lng:    -110.5885,
    icon:    "🌋",
    visited: true,
  },
  {
    name:    "Great Smoky Mountains",
    folder:  "great-smoky-mountains",
    lat:     35.6118,
    lng:    -83.4895,
    icon:    "🌲",
    visited: true,
  },
];

// ---- Build markers on the map ----
locations.forEach(loc => {
  // Create a custom styled marker pin
  const markerHtml = `
    <div class="custom-marker">
      <div class="marker-icon">${loc.icon}</div>
    </div>`;

  const icon = L.divIcon({
    html:        markerHtml,
    className:   '',              // removes default Leaflet white box
    iconSize:    [36, 36],
    iconAnchor:  [18, 36],       // tip of the pin
    popupAnchor: [0, -38],
  });

  const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);

  // Popup tooltip that shows on click (before opening the modal)
  marker.bindPopup(`
    <span class="popup-name">${loc.name}</span>
    <span class="popup-hint">Click to read more</span>
  `, { closeButton: false, offset: [0, -10] });

  // Single click: open the full location modal
  marker.on('click', () => {
    marker.closePopup();
    openLocation(loc.folder);
  });

  // Hover: show the name tooltip
  marker.on('mouseover', () => marker.openPopup());
  marker.on('mouseout',  () => marker.closePopup());
});

// ---- Update the visit count in the header ----
document.getElementById('visitCount').textContent =
  `${locations.filter(l => l.visited).length} Places Visited`;
