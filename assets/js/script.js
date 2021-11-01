// api web address
const baseURL = "http://api.openweathermap.org/data/2.5/";
// default key
const apiKey = "9bcbcb339316b2cca5f92d48f4227f71"

// get the city on which to retreive data (weather) based on user input
function searchCity() {
    populateSearchHistory();
    var searchBtn = document.getElementById("search-btn") //get the search button
    searchBtn.addEventListner('click', getResults); //add event listener to the button
}

// get the current weather based on lat and long
async function getApiResponse(latitude, longitude) {
    var fullUrl = baseURL + "weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey; //establishes the full url & the lat and lon values & the API key

    // log the full URL to the console
    console.log(fullUrl);
    let data = await fetch(fullUrl);
        .then(function (response) {
            
            return response.json();
        })
            
        .then(function (responseData) {
            
            return responseData;
        });
    
    return data;
}

// function to get lat and lon based on the city name
async function getCordinates(city) {
    var fullUrl = baseURL + "forecast?q=" + city + "&appid=" + apiKey + "&cnt=1"; //establishes the full url & the city value & the API key

    // log the full URL to the console
    console.log(fullUrl);
    
    // use let and await to get the data from the API.  Await is used to wait for the data to be returned
    let data = await fetch(fullUrl);

        // console.log(fullUrl);
        .then(function (response) {
            // console.log("response", response);

            return response.json();
        })
            
        .then(function (responseData) {
            // console.log("responseData", responseData);
            return responseData;
        });
    
    return data;
}

async function getApiResponse(latitude, longitude) {
    var fullUrl = baseURL + "onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=hourly,minutely&appid=" + apiKey + "&units=imperial";

    // console.log(fullUrl);
    let data = await fetch(fullUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseData) {
            console.log("data", responseData);
            return responseData;
        });
    return data;
}

async function getLatLong(cityName) {
    var fullUrl = baseURL + "forecast?q=" + cityName + "&appid=" + apiKey + "&cnt=1";

    // console.log(fullUrl);
    let LatLong = await fetch(fullUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseData) {
            // console.log("data", responseData);
            return responseData.city.coord;
        });
    return latLong;
}


// data protection function - convert all data to uppercase and remove spaces
function capitalizeWords(cityName) {
    var cityName = cityName.trim();

    var tempCityName = cityName.split(',');
    var tempCityNameArray = tempCityName[0].split(" ");
    
    for (var i = 0; i < tempCityNameArray.length; i++) {
    tempCityNameArray[i][0].toUpperCase() + tempCityNameArray[i].slice(1);
}

    cityName = tempCityNameArray.join(" ") + ", US";    
    return cityName;
}

