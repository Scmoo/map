// =============================================
//  MARKERS / LOCATIONS
//
//  TO ADD A NEW LOCATION:
//  1. Add a new entry to the `locations` array below
//  2. Create a folder: locations/your-folder-name/
//  3. Create locations/your-folder-name/index.html
//     (copy the template from any existing location)
//
//  LOCATION TYPES & THEIR COLORS:
//  "safe"    → green
//  "neutral"   → yellow (not an on trail route)
//  "unsafe"     → red (can involve harm due to lack of maintenance)
// =============================================

// ---- Color lookup by type ----
const typeColors = {
  safe:    "#4ecb60",   // green
  neutral:   "#c9a84c",   // yellow
  unsafe:     "#c2574e",   // red
};

const locations = [
  {
    name:    "Breached Don Pinnoft",
    folder:  "breached-don-pinnoft",
    lat:     29.506435,
    lng:    -81.139461,
    icon:    "⛵",
    type:    "neutral",
    visited: true,
  },
  {
    name:    "Dr. Evermor's Sculptures",
    folder:  "dr-evermor",
    lat:     43.363698,
    lng:    -89.770846,
    icon:    "🔩",
    type:    "neutral",
    visited: true,
  },
  {
    name:    "Mildred Cooper Memorial Chapel",
    folder:  "cooper-chapel",
    lat:     36.477786,
    lng:    -94.245386,
    icon:    "⛪",
    type:    "safe",
    visited: true,
  },
  {
    name:    "Epic",
    folder:  "epic",
    lat:     42.996822,
    lng:    -89.566354,
    icon:    "🏬",
    type:    "safe",
    visited: true,
  },
  {
    name:    "Bass Pro Pyramid",
    folder:  "bass-pro-pyramid",
    lat:     35.154999,
    lng:    -90.052299,
    icon:    "🛕",
    type:    "safe",
    visited: true,
  },
  {
    name:    "BullsHead Express",
    folder:  "bullshead-express",
    lat:     37.601337,
    lng:    -122.371883,
    icon:    "🍣",
    type:    "safe",
    visited: true,
  },
  {
    name:    "Dungeness Ruins",
    folder:  "dungeness-ruins",
    lat:     30.748670,
    lng:    -81.470796,
    icon:    "🏛",
    type:    "neutral",
    visited: true,
  },
];

// ---- Build markers on the map ----
locations.forEach(loc => {
  // Look up color by type, fall back to gold if no type set
  const color = typeColors[loc.type] || '#c9a84c';

  // Create a custom styled marker pin with the type color
  const markerHtml = `
    <div class="custom-marker" style="background: ${color};">
      <div class="marker-icon">${loc.icon}</div>
    </div>`;

  const icon = L.divIcon({
    html:        markerHtml,
    className:   '',              // removes default Leaflet white box
    iconSize:    [36, 36],
    iconAnchor:  [18, 36],        // tip of the pin
    popupAnchor: [0, -38],
  });

  const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(map);

  // Popup tooltip that shows on hover
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