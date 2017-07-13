var mylat = 0;
var mylng = 0;
var cityName;


function initPage() {
    setWeather();
    renderMap();
    hideCaltrain();
    hideTube();
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
    if (cityName.search('-') != -1) {
        cityName = cityName.replace('-', ' ');
    }
    console.log("weather function");
    $('#weather').append('<iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=' + mylat + '&lon=' + mylng + '&name=' + cityName + '"></iframe>');
}

function hideTube() {
    if (GetQueryStringParams("name") != "London") {
        $('#tubestatus').hide();
    }
}

function hideCaltrain() {
    console.log(name);
    if (GetQueryStringParams("name") != "San-Mateo") {
        $('#caltrain').hide();
    }
}



function renderMap() {
    myLocation = new google.maps.LatLng(mylat, mylng);
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
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


