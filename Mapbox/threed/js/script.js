mapboxgl.accessToken = 'pk.eyJ1IjoibWlydW1tYiIsImEiOiJjajlyMHNyZHo2NW12MzJtcXIxdXY4dXJkIn0.17oCip8i-fh9zvpeDLeZ1Q';


const map = new mapboxgl.Map({
  container: 'map',
  maxZoom: 5.99,
  minZoom: 4,
  zoom: 5,
  center: [59.334, 18.065],
  style: mapStyle,
  hash: false
});