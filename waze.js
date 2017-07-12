var mylat = 0;
var mylng = 0;
var sanMateoCoords={lat:37.5592181, lng: -122.2890126 };
var santaMonicaCoords={lat:34.017764, lng: -118.5175534 };
var newYorkCoords:{lat:40.7454761, lng: -73.9949316 };
var londonCoords:{lat:51.5205146, lng: -0.1104772 };



function initMap() {
    getMyLocation();
}

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            mylat = position.coords.latitude;
            mylng = position.coords.longitude;
            renderMap();
        });
    } else {
        alert("Geolocation is not supported on your web browser.");
    }
}

function renderMap() {
    myLocation = new google.maps.LatLng(mylat, mylng);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLocation
    });
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
}


