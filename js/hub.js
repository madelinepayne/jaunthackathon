var mylat = 0;
var mylng = 0;
var cityName;
// var sanMateoCoords = { lat: 37.5592181, lng: -122.2890126 };
// var santaMonicaCoords = { lat: 34.017764, lng: -118.5175534 };
// var newYorkCoords: { lat: 40.7454761, lng: -73.9949316 };
// var londonCoords: { lat: 51.5205146, lng: -0.1104772 };


function initPage() {
    // getMyLocation();
    setWeather();
    renderMap();
}

function GetQueryStringParams(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

function setWeather() {
    mylat = GetQueryStringParams("lat");
    mylng = GetQueryStringParams("lng");
    cityName = GetQueryStringParams("name");
    if (name.search('-') != -1) {
        name = name.replace('-', ' ');
    }
    $('#transport-links').append('<div id = "weather"> <iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=' + mylat + '&lon=' + mylng + '&name=' + cityName + '"></iframe></div>');

}


// function getMyLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//             mylat = position.coords.latitude;
//             mylng = position.coords.longitude;
//             renderMap();
//         });
//     } else {
//         alert("Geolocation is not supported on your web browser.");
//     }
// }

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
