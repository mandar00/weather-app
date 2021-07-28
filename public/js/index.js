const submit= document.getElementById("submit")
const cityName=document.getElementById("cityName")
const city_name=document.getElementById("city_name")
const temp=document.getElementById("temp")
const status_icon=document.getElementById("status_icon")

const get_info= async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerHTML="Please Enter the City Name"
    }
    else{
        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=189dcdfb58b52e1edb9826472908f939`
            let response= await fetch(url);
            let weather_data= await response.json()
            console.log(weather_data)
            let arrData=[weather_data]

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`
            temp.innerText=arrData[0].main.temp+"℃"
            const tempMood=arrData[0].weather[0].main
            if(tempMood=="Clear"){
                status_icon.innerHTML="<i class='fas fa-sun' style='color:#fbc531'></i>"

            }else if(tempMood=="Clouds"){
                status_icon.innerHTML="<i class='fas fa-cloud' style='color:#00a8ff'></i>"

            }else if(tempMood=="Rain"){
                status_icon.innerHTML='<i class="fas fa-cloud-rain" style="color:#dcdde1"></i>'
            }


        } catch (error) {
            console.error(error)
            city_name.innerHTML="Please Enter the City Name Properly"

        }
    }
}

submit.addEventListener("click",get_info)