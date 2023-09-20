
const apiKey = 'cd1f3a75679d4b96ab5153611232009'
const button = document.querySelector("#submitButton")
let input = document.querySelector("#textInput")
let tempDisplay = document.querySelector("#temp")
let cityName = document.querySelector("#cityName")
let pictureTitle = document.querySelector("#picturetitle")
let divOne = document.querySelector("#divone")
let weatherPicDiv = document.querySelector("#weatherpicdiv")



button.addEventListener('click', async () => {
    console.log(input.value)
    let input1 = input.value

    let response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input1}&aqi=no`)
    console.log(response)

    // const div = document.createElement("h1");
    // h1.innerHTML = "Location";
    // document.divOne.appendChild(h1);

    let cityNameDisplay = response.data.location.name
    console.log(cityNameDisplay)
    cityName.innerHTML = cityNameDisplay

    let temp = response.data.current.temp_f
    console.log(temp)
    tempDisplay.innerHTML = `F ${temp}`

    let weatherText = response.data.current.condition.text
    console.log(weatherText)
    pictureTitle.innerHTML = weatherText

    let weatherPic = response.data.current.condition.icon
    console.log(weatherPic)
    weatherPicDiv.innerHTML = `<img src=${weatherPic}>`


    
    

})