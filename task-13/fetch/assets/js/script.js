
// Using fetch
function myFun() {
    let tempEl = $('#temp');
    let humEl = $('#hum');
    let nameEl = $('#name');
    let countryEl = $('#country');
    let windEl = $('#speed');
    let apiKey = 'ec8304db7df7e57d4caacff85626ad8f';
    let inputEl = $("#inputData");
    let iconEl = $("#icon");
    let loc = inputEl.val();
    console.log(loc, "city name");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;
    if (loc === "") {
        alert(" Please Enter City Name ")
    } else {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const name1 = data.name;
                const country1 = data.sys.country;
                console.log("country code", country1);
                const temp1 = data.main.temp;
                const humidity1 = data.main.humidity;
                const windSpeed = data.wind.speed;
                console.log(windSpeed,"speed")
                console.log("temp1 ", temp1);
                const icon = data.weather[0].icon;
                console.log(icon , "icon data");
                tempEl.text(`${Math.floor(temp1 - 273)}°C`);
                humEl.text(`humidity:${humidity1}`);
                nameEl.text(`${name1},`);
                countryEl.text(country1);
                windEl.text(`wind-Speed: ${windSpeed}`);
                iconEl.attr('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);

            })
            .catch(error => {
                alert("invalid City Name")
            });
    }
}



