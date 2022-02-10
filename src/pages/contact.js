import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../components/Contact.css'
function Contact() {

  useEffect(()=>{
    Aos.init({duration:2000})
},[])









  return <div className='contact'>
    <div className='container'>
    <h1 className='heading'>contact us</h1>

      <div className='row'>
        <div className='col-12'>
        <div className='img-container'>

            <img src='https://cumming-group.com/wp-content/uploads/2020/05/Masks-Office_LCOffice_COMayArticle.jpg'  />
            <div className='content'  >
           <h3>get in touch</h3>
                   <p>if you have a any question about Our services or Anything we offer,or anything else,ourteam is ready to answer all you questions</p>
                   <p>If you don't know how to look up the weather, tell us</p>
                <button>get in touch</button>
            </div>
          </div>
        </div>

        <div className='col-2'></div>

        <div className='box col-3' data-aos='flip-up'>
        <i className='fas fa-phone fa-4x'/>
        <h3>talk to sales</h3>
        <p>if you have a any question about Our services  we offer
       If you don't know how to look up the weather,tell us
        </p>
        <a href='#'>+213 027753696</a>
        <a href='#'>view all global numbers</a>
        </div>

      <div className='col-2'></div>
        <div className='box col-3' data-aos='flip-up'>
        <i class="fas fa-comments fa-4x"></i>
        <h3>contact customer support</h3>
        <p>if you have a any question about Our services  we offer
       If you don't know how to look up the weather, tell us
        </p>

        <button>get in touch</button>
        <i class="fa-solid fa-message"></i>
 
        </div>

        <div className='col-2'></div>

      </div>
    </div>
  <div className='icon-app'>
  <i class="fas fa-comment-alt fa-3x"></i>
  </div>
  </div>;
}




/*                    <p>if you have a any question about Our services or Anything we offer,or anything else,ourteam is ready to answer all you questions</p>
                   <p>If you don't know how to look up the weather, tell us</p>
*/
export default Contact;
