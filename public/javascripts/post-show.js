mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2c3Byb3V0IiwiYSI6ImNqbGg5MzRlcjAyZWgzd29lZ3FsYmsxZTYifQ.EyAZe_Y4SI69OeouHNcyTQ';

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/light-v9',
	center: post.coordinates,
	zoom: 5
});

// create a HTML element for our post location/marker
let el = document.createElement('div');
el.className = 'marker';

// make a marker for our location and add to the map
new mapboxgl.Marker(el)
	.setLngLat(post.coordinates)
	.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
		.setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
	.addTo(map);
