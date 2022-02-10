import React,{useEffect} from 'react'
import Card from './Card'
import './Cards.css'
import $ from 'jquery'
function Cards() {


    useEffect(() => {

       $('.cards-app .card i').each(function(){

        if($(this).hasClass('fa-cloud-sun')){
            $(this).css('color','gray')
        }
        if($(this).hasClass('fa-sun')){
            $(this).css('color','#cc9d1b')
        }
        if($(this).hasClass('fa-snowflake')){
            $(this).css('color','#1a84ad')
        }

        if($(this).hasClass('fa-tint')){
            $(this).css('color','#1c51c5')
        }
       })       
    }, [])
    return (
        <div className='cards-app'>
            <div className='container'>
                <h1 className='heading'>Today's Forecast</h1>
                <div className='row'>

                    <div className='col'>
                    <Card  icon={'fas fa-cloud-sun '}  time={'Morning'} temp={'43°'} img={'https://preview.pixlr.com/images/800wm/1205/1/1205120685.jpg'} desc={'Chance of Rain1%'}/>  
                    </div>
                    <div className='col'>
                    <Card  icon={'fas fa-sun '}  time={'Afternoon'} temp={'59°'} img={'https://cdn.picpng.com/sun/sun-icon-weather-hot-seem-58693.png'} desc={'Chance of Rain2%'}/>  
 
                    </div>
                    <div className='col'>
                    <Card  icon={'fas fa-snowflake '}  time={'Evening'} temp={'47°'} img={'https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180214734/95586224-moon-with-cloud-icon-vector-illustration-design.jpg'} desc={'Chance of Rain20%'}/>  
  
                    </div>
                    <div className='col '>
                    <Card  icon={'fas fa-tint '}  time={'Overnight'} temp={'40°'} img={'https://www.creativefabrica.com/wp-content/uploads/2021/03/08/Moon-Icon-Graphics-9349904-1.jpg'} desc={'Chance of Rain28%'}/>  

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
