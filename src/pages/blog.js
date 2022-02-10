import React, { useEffect } from 'react';
import '../components/Blog.css'
import Aos from 'aos';
import 'aos/dist/aos.css'


function Blog() {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])


  return <div className='blog'>
      <div className='container'>
          <h1 className='heading'>blog</h1>
         {/* <p className='best-blog'>The best sayings and statements about our site</p>*/}
          <div className='row'>
          <div className='col-12 '>
                  <input type={'search' } />
              </div>


              <div className='col'>
                 <div className='big-blog' data-aos='slide-right'>
                 <div className='img-container'>
                  <img src="https://cutepics.net/wp-content/uploads/2020/09/cute-girl-wallpapers-for-iphone-full-hd-to-free-download-1-scaled.jpg"/>
                      </div>           
                  <div className='content'>
                      <h3>Addison Ellis:</h3>

                                        <p>the web site is very fast and  it is easy to browse and accurate in information, I want to meet the designer personally😉</p>
                    

                  </div>
                  <div className='icons'>
                  <a href='https://www.facebook.com/alaa.edin.1004/'><i class="fab fa-facebook fa-2x"></i></a>
                        <a href='https://www.instagram.com/psychoxunknown/'><i class="fab fa-instagram fa-2x"></i></a>
                        <a href='#'><i class="fab fa-twitter fa-2x"></i></a>
                  </div>


                 </div>
                  </div>



                    <div className='col-lg-7 col-sm-12' >
                 <div className='small-blog' data-aos='slide-left'>
                 <div className='img-container'>
                  <img src="https://www.pcclean.io/wp-content/uploads/2020/4/ZRnY7j.jpg"/>
                      </div>           
                  <div className='content'>
                      <h3>Casey Harper:</h3>
                   <p>Personally, I liked the site very much</p>
                    
                  </div>
                  <div className='icons'>
                  <a href='https://www.facebook.com/alaa.edin.1004/'><i class="fab fa-facebook fa-2x"></i></a>
                        <a href='https://www.instagram.com/psychoxunknown/'><i class="fab fa-instagram fa-2x"></i></a>
                        <a href='#'><i class="fab fa-twitter fa-2x"></i></a>
                  </div>
                  </div>
              
                  <div className='small-blog' data-aos='slide-left'>
                 <div className='img-container'>
                  <img src="https://wallup.net/wp-content/uploads/2016/05/02/70535-readhead-women-open_mouth.jpg"/>
                      </div>           
                  <div className='content'>
                      <h3>Harley Carter:</h3>
                   <p>the design is simple and wonderful</p>
                    
                  </div>
                  <div className='icons'>
                  <a href='https://www.facebook.com/alaa.edin.1004/'><i class="fab fa-facebook fa-2x"></i></a>
                        <a href='https://www.instagram.com/psychoxunknown/'><i class="fab fa-instagram fa-2x"></i></a>
                        <a href='#'><i class="fab fa-twitter fa-2x"></i></a>
                  </div>
                 </div>


                 <div className='small-blog' data-aos='slide-left'>
                 <div className='img-container'>
                  <img src="https://c.wallhere.com/photos/92/28/red_portrait_man_shirt_beard_hands_muscle_hunk-805014.jpg!d"/>
                      </div>           
                  <div className='content'>
                      <h3>Barker Ford:</h3>
                   <p>A great site that deserves to be famous</p>
                    
                  </div>
                  <div className='icons'>
                  <a href='https://www.facebook.com/alaa.edin.1004/'><i class="fab fa-facebook fa-2x"></i></a>
                        <a href='https://www.instagram.com/psychoxunknown/'><i class="fab fa-instagram fa-2x"></i></a>
                        <a href='#'><i class="fab fa-twitter fa-2x"></i></a>
                  </div>
                 </div>




                    </div>



              
                    



          </div>
      </div>

  </div>;
}

export default Blog;
