var mylat = 0;
var mylng = 0;
var officeCoords = {
    sanMateoCoords:{lat:37.5592181, lng: -122.2890126 },
    santaMonicaCoords:{lat:34.017764, lng: -118.5175534 },
    newYorkCoords:{lat:40.7454761, lng: -73.9949316 },
    londonCoords:{lat:51.5205146, lng: -0.1104772 }
}


function initMap() {
    getMyLocation();
    run();
}

function run() {
    findNearestOffice()
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
        zoom: 13,
        center: myLocation
    });
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
}

// function findNearestOffice() {
//     var shortest_distance = 100000000;
//     for (var i = 0; i < 5; i++) {
//         var distance = (google.maps.geometry.spherical.computeDistanceBetween(officeCoords[i], myLocation));
//         if(distance < shortest_distance) {
//         	shortest_distance = distance;
//         }
//     }
// }
