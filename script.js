$(document).ready(function () {
    //pulling the needed variable from the HTML

    var currentCity = document.getElementById("currentcity");









    //once the city is entered the current days forcast as well as the five day forcast will appear
    //it will save to the local storage and and remain on the screen.
    $("#submit").on("click", function (e) {
        e.preventDefault();
        currentCity.style.display = "block";
        var input = $("#search").val();
        getWeather(input);
        getForcast(input);

        alert(input);
        localStorage.setItem("search", [input]);

    })





    //calling the current weather

    function getWeather(input) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=d21c600165a9b27ec27d8cad2ffbba4a`,
            type: "GET"
        }).then(function (response) {
            console.log(response);



            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/uvi?appid=d21c600165a9b27ec27d8cad2ffbba4a&lat=${response.coord.lat}&lon=${response.coord.lon}`,
                method: "GET"
            }).then(function (uv) {
                console.log(uv)

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
    }



    //calling the forecast
    function getForcast(input) {
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=d21c600165a9b27ec27d8cad2ffbba4a`,
            method: "GET"
        })
            .then(function (forecast) {
                console.log(forecast);


       
                //calling each day based on the array number
                //blue card one day ahead
                $(".cardheader").html("<h3>" + forecast.list[0].dt_txt + "</h3>");
                $(".fwind").text("Wind Speed: " + forecast.list[0].wind.speed);
                $(".ftemp").text("Temp: " + Math.floor((forecast.list[0].main.temp - 273.15) * 1.80 + 32));
                $(".fhumidity").text("Humidity: " + forecast.list[0].main.humidity);

                //grey card two days ahead
                $(".tcardheader").html("<h3>" + forecast.list[8].dt_txt + "</h3>");
                $(".twind").text("Wind Speed: " + forecast.list[8].wind.speed);
                $(".ttemp").text("Temp: " + Math.floor((forecast.list[8].main.temp - 273.15) * 1.80 + 32));
                $(".thumidity").text("Humidity: " + forecast.list[8].main.humidity);
                //green card three days ahead 
                $(".wcardheader").html("<h3>" + forecast.list[16].dt_txt + "</h3>");
                $(".wwind").text("Wind Speed: " + forecast.list[16].wind.speed);
                $(".wftemp").text("Temp: " + Math.floor((forecast.list[16].main.temp - 273.15) * 1.80 + 32));
                $(".whumidity").text("Humidity: " + forecast.list[16].main.humidity);
                //red card four days ahead 
                $(".thcardheader").html("<h3>" + forecast.list[24].dt_txt + "</h3>");
                $(".thfwind").text("Wind Speed: " + forecast.list[24].wind.speed);
                $(".thftemp").text("Temp: " + Math.floor((forecast.list[24].main.temp - 273.15) * 1.80 + 32));
                $(".thfhumidity").text("Humidity: " + forecast.list[24].main.humidity);
                //yellow card five days ahead
                $(".scardheader").html("<h3>" + forecast.list[32].dt_txt + "</h3>");
                $(".sfwind").text("Wind Speed: " + forecast.list[32].wind.speed);
                $(".sftemp").text("Temp: " + Math.floor((forecast.list[32].main.temp - 273.15) * 1.80 + 32));
                $(".sfhumidity").text("Humidity: " + forecast.list[32].main.humidity);


            })
    };
});