$(document).ready(function () {
    //pulling the needed variable from the HTML
    var fiveDay = document.getElementById("dayAhead")
    var currentCity = document.getElementById("currentcity")
    var queryParams = "d21c600165a9b27ec27d8cad2ffbba4a";
    var qURL = "http://api.openweathermap.org/data/2.5/weather?" +
    "q=denver&appid=" + queryParams;
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?" +
    "q=Denver&APPID=" + queryParams;


    /**allows the person access to view any state current weather by using the API key 
     which is now the queryParams variable.*/
    function buildQuery() {

        qURL
        queryURL
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
                console.log(queryURL);
                console.log(response);

                var results = response.data;

                $(".wind").text("<p>" + response.wind + "</p>");



            })

    });









});