var mylat = 0;
var mylng = 0;
var cityName;


function initPage() {
    setWeather();
    renderMap();
    findFood();
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
    $('#transport-links').append('<div id = "weather"> <iframe id="forecast_embed" type="text/html" frameborder="0" height="245" width="100%" src="http://forecast.io/embed/#lat=' + mylat + '&lon=' + mylng + '&name=' + cityName + '"></iframe></div>');
}

function hideTube() {
    if (GetQueryStringParams("name") != "London") {
        $('#tubestatus').hide();
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
$('window').load(hideTube());


function findFood() {
    request = new XMLHttpRequest();
    // request.open("GET", ("https://api.yelp.com/v2/search?term=food&ll=" + mylat + "," + mylng), true);
    request.open("GET", "https: //api.yelp.com/v2/search?term=food&ll=37.788022,-122.399797", true);

    console.log("here");
    if (request.readyState == 4 && request.status == 200) {
        // Step 5: do something with the response data...
        // JSON.parse() does the parsing
        elements = JSON.parse(request.responseText);
        console.log(elements);
        // newData = "";
        // for (count = 0; count < elements.length; count++) {
        //     newData += "<p>" + elements[count]["content"] + " by " + elements[count].username + "</p>";
        // }
        // document.getElementById("messages").innerHTML = newData;

    }
}
