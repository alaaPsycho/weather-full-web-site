import React ,{useEffect}from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

import '../components/About.css'

function About() {
useEffect(()=>{
    Aos.init({duration:2000})
},[])



  return <div className='about'>
      <div className='container'>
      <h1 className='heading'>about us</h1>
          <div className='row'>
              <div className='col-lg-6 col-sm-12'>
                <h3 data-aos='fade-right'>about</h3>
                <h3 data-aos='fade-left'>us</h3>

                <p data-aos='zoom-in-up'>Planning your whole day or a small weekend getaway becomes easy when you know the weather conditions. I mean, it is a lot better to have an umbrella on a rainy day than to regret getting drenched. To help you stay one step ahead when it comes to the weather, we have collated a catalog of the best weather websites available right now.</p>
                <button data-aos='zoom-in-up'>read more</button>

                <div className='icons' >
                        <a href='https://www.facebook.com/alaa.edin.1004/'><i class="fab fa-facebook fa-2x"></i></a>
                        <a href='https://alaaedine62@gmail.com'  ><i class="fab fa-google fa-2x"></i></a>
                        <a href='https://github.com/taharAlaa'  ><i class="fab fa-github fa-2x"></i></a>

                    </div>

              </div>





              <div className='col-lg-6 col-sm-12'>
              <div className='img-app' data-aos='slide-right'>
                  <img src='https://www.lanecode.com/wp-content/uploads/2021/02/cover-img-1-1.png'/>
              </div>
              </div>


          </div>
      </div>
  </div>;
}

export default About;
