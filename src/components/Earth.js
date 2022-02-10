import React from 'react'
import './Earth.css'
function Earth() {
    return (
        <div className='earth'>
            <h1 className='heading'>radar weather</h1>
            <div className='container app-container'>
                <h1>Weather forecasts for thousands of</h1>
                <h1>locations around the world</h1>

                                <div className='row'>
                    <div className='col'>
                        <img src='https://m.files.bbci.co.uk/modules/bbc-morph-wr-decorative-map-international/2.3.0/img/map.png'/>
                      
                    </div>

                    <div className='contries'>
                                <div  className=' contry'><p>london</p><i class="fas fa-cloud-sun"></i></div>
                                <div  className=' contry'><p>algeria</p><i class="fas fa-sun"></i></div>
                                <div  className=' contry'><p>brazil</p><i class="fas fa-cloud"></i></div>
                                <div  className=' contry'><p>sth-A</p><i class="fas fa-cloud"></i></div>
                                <div  className=' contry'><p>usa</p><i class="fas fa-moon"></i></div>
                                <div  className=' contry'><p>sudan</p><i class="fas fa-sun"></i></div>
                                <div  className=' contry'><p>chile </p><i class="fas fa-cloud-sun-rain"></i></div>

                                {/*
                                <div  className=' contry'>brazil<i class="fas fa-sun"></i></div>
                                <div  className=' contry'>maroc<i class="fas fa-sun"></i></div>
                                <div  className=' contry'>algeria<i class="fas fa-sun"></i></div>
                                <div  className=' contry'>france<i class="fas fa-cloud-sun-rain"></i></div>
                                <div  className=' contry'>usa<i class="fas fa-cloud-moon-rain"></i></div>
                                */}
                        </div>
                        <div  className='detailed-map'><i class="fas fa-expand"></i> <span>detailed map</span></div>
                </div>
            </div>
            
        </div>
    )
}

export default Earth
