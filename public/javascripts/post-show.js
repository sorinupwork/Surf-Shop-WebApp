mapboxgl.accessToken = 'pk.eyJ1IjoieWVscGNhbXA3IiwiYSI6ImNrOTllaXl2MjAzNDIzZmp5dGZkdHhvbWgifQ.NyUFLreprrvtrwpcczfxZA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: post.coordinates,
  zoom: 7
});

  // create a HTML element for our post location/marker
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for our location and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(post.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
    .addTo(map);