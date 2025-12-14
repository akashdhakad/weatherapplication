let searchBtn = document.querySelector("#search-btn");
let result = document.querySelector("#result");

const getWeatherData = async () => {
  try {
    let cityName = document.querySelector("#city-name").value.trim();

    if(!cityName){
        result.innerHTML = `<p "class=text-red-700 text-center mt-4 font-semibold"> Plese Enter a City Name...</p>`;
    }
  } catch (error) {
    console.log(error, "Error in fetchig weather Details");
  }
};
searchBtn.addEventListener("click", getWeatherData);
