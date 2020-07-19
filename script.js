$(document).ready(function () {

    var fiveDay = document.getElementById("dayAhead")
    var currentCity = document.getElementById("currentcity")
    var APIkey = "d21c600165a9b27ec27d8cad2ffbba4a"



    //once the city is entered the current days forcast as well as the five day forcast will appear
    //it will save to the local storage and and remain on the screen.
    $("#submit").on("click", function (e) {
        e.preventDefault();

        currentCity.style.display = "block";
    });

    
        var qURL = "http://api.openweathermap.org/data/2.5/weather?q=denver&appid=d21c600165a9b27ec27d8cad2ffbba4a";
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=Denver&APPID=d21c600165a9b27ec27d8cad2ffbba4a";



        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function(response) {
            console.log(queryURL);

        })

    









});