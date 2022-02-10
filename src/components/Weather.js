import React,{ useEffect, useState} from 'react';
import './Weather.css'
import axios from 'axios';
import $ from 'jquery'
function Weather() {
  const [temp,setTemp] = useState('29°');
  const [desc,setDesc] = useState('clear');
  const [city,setCity] = useState('algeria');
  const [country,setCountry] = useState('');
  const [name,setName] = useState('DZ');
  const [deg,setDeg] = useState('23');
  const [speed,setSpeed] = useState('5');
  const [description,setDescription] = useState('clear sky');

  //weather today
  const [feelsLike,setFeelsLike] = useState('302');
  const [grndLevel,setGrndLevel] = useState('1010');
  const [humidity,setHumidity] = useState('80');
  const [pressure,setPressure] = useState('1010');
  const [seaLevel,setSeaLevel] = useState('1010');
  const [tempMax,setTempMax] = useState('300');
  const [tempMin,setTempMin] = useState('300');

useEffect(()=>{
  let time= ()=>{

    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s= now.getSeconds();
 
    s = s >9 ? s:'0' + s;
    m = m >9 ? m:'0' + m;
    const timeLine = h + ':' + m + ':' + s ;
    document.querySelector('#clock').innerHTML= timeLine ;


    setTimeout(time,500);
  }
  time();


  
  
  

},[])

 
  


 

  const getData = (city)=>{

    axios({
      method :'GET',
      url :`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=92449f23ccc46be861cd113396c23bdc`
    }).then(
      (response)=>{
        console.log(response.data); setTemp(response.data.main.temp -273.15)
        setDesc(response.data.weather[0].main)
        setCountry(response.data.sys.country)
        setName(response.data.name)
        setDeg(response.data.wind.deg)
        setSpeed(response.data.wind.speed)
        setDescription(response.data.weather[0].description)

          //  //weather today
          setFeelsLike(response.data.main.feels_like)
          setGrndLevel(response.data.main.grnd_level)
          setHumidity(response.data.main.humidity)
          setPressure(response.data.main.pressure)
          setSeaLevel(response.data.main.sea_level)
          setTempMax(response.data.main.temp_max)
          setTempMin(response.data.main.temp_min)

      })
    .catch((error)=>{console.log(error)})
  }



  return (
    <div className="weather"> 

        <h1 className='heading'>search weather</h1>

    <div className='input-button-app'>
    <input onFocus={(e)=>{e.target.value =''}}value={city} onChange={(e)=>setCity(e.target.value)}  type={'text'} placeholder='search for country'/>
      {/*  <input onFocus={(e)=>{e.target.value =''}} blaceholder='enter weather' className='inp' value={city} onChange={(e)=>setCity(e.target.value)} />*/}
      <button className="btn" onClick={()=>{getData(city,country)}}>search weather</button>

    </div>

      <div className='container weather' >
      <div className='name-app'>
            <p>{name ? name +' ,':''}</p>
            <p>{country} </p>
            <p id='clock'>00.00.00</p>
        </div>

        <div className='temp-wind-app'>
       <div className='temp'>
       <p>{Math.round(temp *100) /100 + '°C'.toLowerCase()} </p>
       <p> {desc}</p>
    
     
       </div>

       <div className='wind'>
       <p>{description}</p>
       <p>wind speed: {speed}</p>
           {/*<p>{deg}</p>*/}
       </div>
        </div>
        <div className='watch-app'>
        <i class="far fa-play-circle"></i>
            <span>watch:  energy costs will likely skyrocket here; this is why</span>
        </div>

      </div>
      


      <div className='container Weather-Today'>
        <h1>Weather Today in {city}, {name}</h1>
        <div className='row'>

          <div className='col-12 feels-like'>
            <div className='content'><h3>{Math.ceil(feelsLike -273.15) + '°'}</h3> <p>feels like</p></div>
           <div className='img-con'>
           <img src='https://about.hotelpricexplorer.com/_files/_media/1/images/Classic/stats-50.png'/>
            <div className='icon-con'> <i className='fas fa-sun'/> <p>7:59 AM</p></div>
            <div className='icon-con'> <p>6:16 PM</p><i className='fas fa-sun'/></div>
          
           </div>
           </div>

          <div className='col-6 '>
            <div className='icon-app'>
            <i class="fas fa-exclamation-circle"></i>
              <p>grnd_level:</p>
            </div>
            <p>{ '--/ '+ grndLevel}</p>
          </div>

          <div className='col-6 '>
            <div className='icon-app'>
            <i class="fas fa-tint"></i>
              <p>humidity:</p>
            </div>
            <p>{humidity +' %'}</p>
          </div>

          <div className='col-6 '>
            <div className='icon-app'>
            <i class="fas fa-arrows-alt-v"></i>
              <p>pressure:</p>
            </div>
            <p>{pressure + ' in'}</p>
          </div>


          <div className='col-6 '>
            <div className='icon-app'>
            <i class="fas fa-rainbow"></i>
              <p>sea level:</p>
            </div>
            <p>{seaLevel + ' in'}</p>
          </div>

          <div className='col-6 '>
            <div className='icon-app'>
            <i class="fas fa-plus-square"></i>
              <p>temp max:</p>
            </div>
            <p>{Math.ceil(tempMax -273.15) + '°'}</p>
          </div>

          <div className='col-6 '>
            <div className='icon-app'>
            <i class="fas fa-minus-circle"></i>
              <p>temp min:</p>
            </div>
            <p>{Math.floor(tempMin -273.15) + '°'}</p>
          </div>


          <div className='col-6 '>
            <div className='icon-app'>
            <i class="fas fa-wind"></i>
              <p>wind:</p>
            </div>
            <p>{speed +'  mph'}</p>
          </div>

          <div className='col-6 '>
            <div className='icon-app'>
            <i class="fas fa-adjust"></i>
              <p>Degree:</p>
            </div>
            <p>{deg + ' %'}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Weather;
