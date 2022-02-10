import React,{useEffect} from 'react'
import './Slider.css'
import $ from 'jquery'
function Slider() {

    useEffect(() => {
        $('.slider .down').on('click',function(){
                $('.slider .cards-two').fadeIn(400).css({display:'flex'});
                $(this).fadeOut(0)
                $('.slider .up').fadeIn()

        
        })

        $('.slider .up').on('click',function(){
            $('.slider .cards-two').fadeOut(400)
            $(this).fadeOut(0)
            $('.slider .down').fadeIn()

    
    })
       

    }, [])
    return (
        <div className='slider'>
                    <h1 className='heading'>weather alger</h1>

        <div className='container'>
         
        <div className='cards'>
            <div className='card'>
                    <img src='https://mediaim.expedia.com/destination/1/29abcfeac2b71008ff16098b874fb676.jpg?impolicy=fcrop&w=536&h=384&q=high'/>
                    <div className='content'>
                        <i className='fas fa-cloud-rain fa-3x'></i>
                        <strong>bejaia</strong>
                    </div>
                </div>






                <div className='   card'>
                    <img src='https://lepetitjournal.com/sites/default/files/styles/main_article/public/2020-10/Alger%20centre%20port.png?itok=8yp_JXZ3'/>
                    <div className='content'>
                        <i className='fas fa-sun fa-3x'></i>
                        <strong>capital</strong>
                    </div>
                </div>




                <div className='  card'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/2/2b/Front_de_mer_d%27oran.jpg'/>
                    <div className='content'>
                        <i className='fas fa-sun fa-3x'></i>
                        <strong>oran</strong>
                    </div>
                </div>


                <div className='  card'>
                    <img src='https://www.teahub.io/photos/full/346-3465322_download-wallpaper-national-lakeshore-alger-county-fond-d.jpg'/>
                    <div className='content'>
                        <i className='fas fa-sun fa-3x'></i>
                        <strong>mostaganem</strong>
                    </div>
                </div>

        </div>







        <div className='cards-two' >

            <div className='card'>
                    <img src='https://images3.alphacoders.com/736/thumb-350-736240.jpg'/>
                    <div className='content'>
                        <i className='fas fa-sun fa-3x'></i>
                        <strong>wargla</strong>
                    </div>
                </div>






                <div className=' card'>
                    <img src='https://wallpapercave.com/wp/wp1860647.jpg'/>
                    <div className='content'>
                        <i className='fas fa-cloud-sun-rain fa-3x'></i>
                        <strong>tipaza</strong>
                    </div>
                </div>




                <div className=' card'>
                    <img src='https://wallpaperaccess.com/full/1260760.jpg'/>
                    <div className='content'>
                        <i className='fas fa-cloud-sun fa-3x'></i>
                        <strong>chlef</strong>
                    </div>
                </div>


                <div className=' card'>
                    <img src='https://content.r9cdn.net/rimg/dimg/a2/04/dd9815df-city-10465-164dc53b979.jpg?width=1200&height=630&crop=true'/>
                    <div className='content'>
                        <i className='fas fa-sun fa-3x'></i>
                        <strong>blida</strong>
                    </div>
                </div>

                </div>     
        <i class="fas fa-chevron-up up fa-4x"></i>
        <i class="fas fa-chevron-down down fa-4x"></i>
       
        </div>
        </div>
    )
}

export default Slider
