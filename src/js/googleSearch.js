let button = document.getElementById('button');
let mappy = document.getElementById('map');
let options = {
    center:{ lat:9.0778, lng:8.6775},
    zoom: 7
};

let map;

function createMap() {
    map = new google.maps.Map(mappy,options);

let inputText = document.getElementById('input');

let searchBox = new google.maps.places.SearchBox(inputText);
map.addListener('bounds_changed', () => {
    searchBox.setBounds(map.getBounds());
});

let markers = [];

searchBox.addListener('places_changed', () => {
    let places = searchBox.getPlaces();

    if(places.length === 0) 
        return;
        markers.forEach((m) => {
            m.setMap(null);
        });
        markers = [];

        var bounds = new google.maps.LatLngBounds();

        places.forEach((p) => {
            if(!p.geometry)
            return;
            markers.push(new google.maps.Marker({
                map: map,
                title:p.name,
                position: p.geometry.location
            }));

            if(p.geometry.viewport)
                bounds.union(p.geometry.viewport);
                else
                    bounds.extend(p.geometry.location);
        });

        map.fitBounds(bounds);
});
}

button.addEventListener('click', () => {
    mappy.classList.toggle('display-toggle');
   
});