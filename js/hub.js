var mylat = 0;
var mylng = 0;
var customZoom = 0;
var cityName;


function initPage() {
    setWeather();
    renderMap();
    customizeTransport();
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
    customZoom = GetQueryStringParams("zoom");
    if (cityName.search('-') != -1) {
        cityName = cityName.replace('-', ' ');
    }
    if (cityName == "London" || cityName == "Shanghai") {
        $('#weather').append('<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=' + mylat + '&lon=' + mylng + '&name=' + cityName + '&units=si"></iframe>');
    } else {
        $('#weather').append('<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=' + mylat + '&lon=' + mylng + '&name=' + cityName + '"></iframe>');
    }
}

function customizeTransport() {
    var currName = GetQueryStringParams("name");
    if (currName != "London") {
        $('#tubestatus').hide();
    }

    if (currName != "San-Mateo") {
        $('#caltrain').hide();
    }

    if (currName != "New-York") {
        $('#mta').hide();
    }

}


function renderMap() {
    if (typeof google == "undefined") {
        return setTimeout(renderMap, 1000);
    }
    myLocation = new google.maps.LatLng(mylat, mylng);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: parseInt(customZoom),
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
$(document).ready(initPage);
