# My US Travel Journal Map

A personal travel journal built with Leaflet.js and hosted on GitHub Pages.

---

## How to Add a New Location

1. **Add your marker** — open `js/markers.js` and add a new entry to the `locations` array:
```js
{
  name:    "Zion National Park",
  folder:  "zion",          // must match the folder you create below
  lat:     37.2982,
  lng:    -113.0263,
  icon:    "🏜️",
  visited: true,
}
```

2. **Create the folder structure:**
```
locations/
  zion/
    index.html   ← copy from any existing location and edit
    photos/
      hero.jpg
      photo1.jpg
      photo2.jpg
      ...
```

3. **Fill in your page** — edit the new `index.html` with your own descriptions, facts, and warnings.

4. **Add photos** — place your photos in the `photos/` folder. The hero image should be named `hero.jpg`.

hero.jpg    ← the big banner image at the top
photo1.jpg  ← first photo in the grid
photo2.jpg  ← second photo in the grid
photo3.jpg  ← third photo in the grid
photo4.jpg  ← fourth photo in the grid

4. **Title For Locations**
- Accidental Landmark
- National Park
- Uncommon Landmark
- Church
- Store Front
- Restaurant
- Company Location
- Ruins

5. **Important Resources**
- https://fontawesome.com for icons
---

## Hosting on GitHub Pages

1. Create a free account at [github.com](https://github.com)
2. Click **New Repository** — name it something like `travel-map`
3. Upload all these files (drag & drop in the GitHub interface, or use GitHub Desktop)
4. Go to your repository **Settings → Pages**
5. Under "Source", select **Deploy from a branch** → `main` → `/ (root)`
6. Click Save — your site will be live at:
   `https://YOUR-USERNAME.github.io/travel-map`

---

## File Structure
```
travel-map/
├── index.html                  ← the map (don't need to edit much)
├── css/
│   ├── style.css               ← map page styles
│   └── location.css            ← location popup page styles
├── js/
│   ├── map.js                  ← map setup (rarely need to edit)
│   └── markers.js              ← ADD YOUR LOCATIONS HERE
└── locations/
    ├── grand-canyon/
    │   ├── index.html
    │   └── photos/
    ├── yellowstone/
    │   ├── index.html
    │   └── photos/
    └── great-smoky-mountains/
        ├── index.html
        └── photos/
```
