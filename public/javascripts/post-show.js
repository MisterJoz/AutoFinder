mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zaGdhcnphIiwiYSI6ImNrNHRhcWFqcjA1a2Qzc3FibWdmb2JxaW4ifQ.EW9SexTJUPtgVMKrNCw4hg';

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
