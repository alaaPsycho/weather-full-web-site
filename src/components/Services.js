import React ,{useEffect}from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Services.css'

function Services() {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    
    return (
        <div className='services'>
            <div className='container'>
                <h1 className='heading'>services</h1>
                <div className='row'>
                    <div className='col-lg-3 col-sm-12 services-child' data-aos='flip-right'>
                        <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/countries-2333928-1939849.png'/>
                        <div className='content'>
                            <h2>all countries</h2>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
                            <button >show more</button>
                        </div>
                    </div>

                    <div className='col-lg-3 col-sm-12  services-child' data-aos='flip-up'>
                        <img src='https://cdn-icons-png.flaticon.com/512/427/427111.png'/>
                        <div className='content'>
                        <h2>Very fast</h2>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
                            <button >show more</button>
                        </div>
                    </div>

                    <div className='col-lg-3 col-sm-12  services-child' data-aos='flip-down'>
                        <img src='https://icons.iconarchive.com/icons/martz90/circle/256/weather-icon.png'/>
                        <div className='content'>
                        <h2>Weather accuracy</h2>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
                            <button >show more</button>
                        </div>
                    </div>

                    <div className='col-lg-3 col-sm-12  services-child' data-aos='flip-left'>
                        <img src='http://www.tc.esn.ac.lk/wp-content/uploads/2021/01/download-img.png'/>
                        <div className='content'>
                        <h2>Free Download</h2>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without</p>
                            <button >show more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
