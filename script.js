$(document).ready(function () {
    //pulling the needed variable from the HTML
    var input = document.querySelector("search");
    var fiveDay = document.getElementById("dayAhead");
    var currentCity = document.getElementById("currentcity");
    var queryParams = "d21c600165a9b27ec27d8cad2ffbba4a";
    var qURL = "https://api.openweathermap.org/data/2.5/weather?" +
    "q=denver&appid=" + queryParams;
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?" +
    "q=Denver&APPID=" + queryParams;

    /**function renderLast(){   
     * $(".cities")html("<ul>")
     * input.textcontent = value
     * value.append("<li>")
     * var city = localStorage.getItem("city");
     * }*/


    /**allows the person access to view any state current weather by using the API key 
     which is now the queryParams variable.*/
    function buildQuery() {

        qURL + input + queryParams;
        queryURL + input + queryParams;
        queryParams.q = $("#search")
            .val()
            .trim();

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
                
                //calling the current weather

                var tempF = Math.floor((response.main.temp - 273.15) * 1.80 + 32);

                $(".city").html("<h3>" + response.name + "</h3>");
                $(".wind").html("<strong> Wind Speed: </strong>" + response.wind.speed);
                $(".humidity").html("<strong> Humidity: </strong>" + response.main.humidity);
                $(".temp").html("<strong> Temperature: </strong>" + tempF);
                $(".uv").html("<strong> Uv Index: </strong>" + response.weather.description);
                console.log(response);

//calling the forcast
                $.ajax({
                    url: queryURL, 
                    method: "GET"
                }) 
                .then(function (forecast) {
                    console.log(forecast)
                    // for (var i = 0; i < forecast.list.length; i++){
                    //     if(forecast.list[i].dt_txt)
                    // }
                    
                })
                console.log(queryURL);
                

                $(".cardheader").html("<h3>" + response.name + "</h3>");
                $(".fwind").text("Wind Speed: " + response.wind.speed);
                $(".ftemp").text("Temp: " + tempF);
                $(".fhumidity").text("Humidity: " +response.main.humidity);
                




            })

    });









});