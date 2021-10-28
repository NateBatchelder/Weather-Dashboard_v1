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
            // console.log("response", response);

            return response.json();
        })
            
        .then(function (responseData) {
            // console.log("responseData", responseData);
            return responseData;
        });
    return data;
    
}