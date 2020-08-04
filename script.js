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

    var uviURL = "https://api.openweathermap.org/data/2.5/uvi?appid=d21c600165a9b27ec27d8cad2ffbba4a&lat=39.74&lon=-104.98"




    /**allows the person access to view any state current weather by using the API key 
     which is now the queryParams variable.*/
    function buildQuery() {

        qURL + input + queryParams;
        queryURL + input + queryParams;
        queryParams.q = $("#search")
            .val()
            .trim();

    }//would need a return value
    /**function renderLast(){   
    * $(".cities")html("<ul>")
    * input.textcontent = value
    * value.append("<li>")
    * var city = localStorage.getItem("city");
    * }*/




    //once the city is entered the current days forcast as well as the five day forcast will appear
    //it will save to the local storage and and remain on the screen.
    $("#submit").on("click", function (e) {
        e.preventDefault();
        buildQuery();
        currentCity.style.display = "block";




        //calling the current weather

        $.ajax({
            url: qURL,
            method: "GET"
        }).then(function (response) {
            console.log(`thisisqURL: ${qURL}`);
            console.log(uviURL);


            $.ajax({
                url: uviURL,
                method: "GET"
            }).then(function (uv) {

            var tempF = Math.floor((response.main.temp - 273.15) * 1.80 + 32);

            $(".city").html("<h3>" + response.name + "</h3>");
            $(".wind").html("<strong> Wind Speed: </strong>" + response.wind.speed);
            $(".humidity").html("<strong> Humidity: </strong>" + response.main.humidity);
            $(".temp").html("<strong> Temperature: </strong>" + tempF);
            $(".uv").html("<strong> Uv Index: </strong>" + uv.value);
            console.log(response);
            console.log("----------");
            console.log(uv)
            })
        })


        //calling the forecast

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (forecast) {
                console.log(forecast);

                var fTemp = Math.floor((forecast.list[0].main.temp - 273.15) * 1.80 + 32);
//calling each day based on the array number
//blue card one day ahead
                $(".cardheader").html("<h3>" + forecast.list[0].dt_txt + "</h3>");
                $(".fwind").text("Wind Speed: " + forecast.list[0].wind.speed);
                $(".ftemp").text("Temp: " + forecast.list[0].main.temp);
                $(".fhumidity").text("Humidity: " + forecast.list[0].main.humidity);
//grey card two days ahead
                $(".tcardheader").html("<h3>" + forecast.list[8].dt_txt + "</h3>");
                $(".twind").text("Wind Speed: " + forecast.list[8].wind.speed);
                $(".ttemp").text("Temp: " + forecast.list[8].main.temp);
                $(".thumidity").text("Humidity: " + forecast.list[8].main.humidity);
//green card three days ahead 
                $(".wcardheader").html("<h3>" + forecast.list[16].dt_txt + "</h3>");
                $(".wwind").text("Wind Speed: " + forecast.list[16].wind.speed);
                $(".wftemp").text("Temp: " + forecast.list[16].main.temp);
                $(".whumidity").text("Humidity: " + forecast.list[16].main.humidity);
//red card four days ahead 
                $(".thcardheader").html("<h3>" + forecast.list[24].dt_txt + "</h3>");
                $(".thfwind").text("Wind Speed: " + forecast.list[24].wind.speed);
                $(".thftemp").text("Temp: " + forecast.list[24].main.temp);
                $(".thfhumidity").text("Humidity: " + forecast.list[24].main.humidity);
//yellow card five days ahead
                $(".scardheader").html("<h3>" + forecast.list[32].dt_txt + "</h3>");
                $(".sfwind").text("Wind Speed: " + forecast.list[32].wind.speed);
                $(".sftemp").text("Temp: " + forecast.list[32].main.temp);
                $(".sfhumidity").text("Humidity: " + forecast.list[32].main.humidity);


            })
        console.log(queryURL);







    });









});