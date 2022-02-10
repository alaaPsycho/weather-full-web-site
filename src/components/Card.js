import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Card(props) {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
            <div className='card'>
                        <h3>{props.time}</h3>
                        <span>{props.temp}</span>
                        <div className='img-app'>
                            <img src={props.img}/>
                        </div>
                        <p>{props.desc} <i className={props.icon} /></p>
                    </div>
       
    )
}

export default Card
