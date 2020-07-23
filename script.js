$(document).ready(function () {
    //pulling the needed variable from the HTML
    var input = document.getElementById("search");
    var fiveDay = document.getElementById("dayAhead");
    var currentCity = document.getElementById("currentcity");
    var queryParams = "d21c600165a9b27ec27d8cad2ffbba4a";
    var qURL = "http://api.openweathermap.org/data/2.5/weather?" +
    "q=denver&appid=" + queryParams;
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
    "q=Denver&APPID=" + queryParams;


    /**allows the person access to view any state current weather by using the API key 
     which is now the queryParams variable.*/
    function buildQuery() {

        qURL + input + queryParams;
        queryURL + input + queryParams;
        queryParams.q = $("#search")
            .val()
            .trim();

    }

function updatePagew(){

}



    //once the city is entered the current days forcast as well as the five day forcast will appear
    //it will save to the local storage and and remain on the screen.
    $("#submit").on("click", function (e) {
        e.preventDefault();
        currentCity.style.display = "block";

        buildQuery();

        $.ajax({
            url: qURL, 
            method: "GET"
        })
            .then(function (response) {
                console.log(qURL);
                console.log("----------");
                
                

                var tempF = (response.main.temp - (293.64) * 1.80 + 32);

                $(".city").html("<h3>" + response.name + "</h3>");
                $(".wind").text("Wind Speed: " + response.wind.speed);
                $(".humidity").text("Humidity: " + response.main.humidity);
                $(".temp").text("Temperature: " + tempF);
                $(".uv").text("Uv Index: " + response.weather.description);
                console.log(response);


                $.ajax({
                    url: queryURL, 
                    method: "GET"
                })
                console.log(queryURL);

                $(".cardheader").html("<h3>" + response.name + "</h3>");
                $(".fwind").text("Wind Speed: " + response.wind.speed);
                $(".ftemp").text("Temp: " +response.main.temp);
                $(".fhumidity").text("Humidity: " +response.main.humidity);
                




            })

    });









});