import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className='row'>
                    <div className='col box'>
                    <h1>weather</h1>
                    <p>weather company</p>
                    <p>CH 539022,ALGER</p>
                    <p><i className='fas fa-phone'/><strong>phone</strong> 027753696</p>
                    <p><i class="fas fa-envelope"/><strong>email</strong> alaaedine62@gmail.com</p>

                    <div className='icons'>
                        <a href='https://www.facebook.com/alaa.edin.1004/'><i class="fab fa-facebook fa-2x"></i></a>
                        <a href='https://alaaedine62@gmail.com'><i class="fab fa-google fa-2x"></i></a>
                        <a href='https://github.com/taharAlaa'><i class="fab fa-github fa-2x"></i></a>
                        <a href='https://www.instagram.com/psychoxunknown/'><i class="fab fa-instagram fa-2x"></i></a>
                        <a href='#'><i class="fab fa-twitter fa-2x"></i></a>
                        </div>

                    </div>

                    <div className='col box'>
                    <h3>eseful links</h3>
                    <p><i class="fas fa-chevron-right"></i> <Link to='/'>home</Link> </p>
                    <p><i class="fas fa-chevron-right"></i> <Link to='/'>about</Link> </p>
                    <p><i class="fas fa-chevron-right"></i> <Link to='/'>contact</Link> </p>
                    <p><i class="fas fa-chevron-right"></i> <Link to='/'>terms and services</Link> </p>

                    </div>


                    <div className='col box'>
                    <h3>our services</h3>
                    <p><i class="fas fa-chevron-right"></i> <Link to=''>all countries</Link> </p>
                    <p><i class="fas fa-chevron-right"></i> <Link to=''>Weather accuracy</Link> </p>
                    <p><i class="fas fa-chevron-right"></i> <Link to=''>for 10 days</Link> </p>
                    <p><i class="fas fa-chevron-right"></i> <Link to=''>for month</Link> </p>

                    </div>


                    <div className='col box'>
                    <h3>our newsletter</h3>
                    <p>Register to receive all new</p>
                    {/*                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum explicabo expedita maxime officiis nemo, eligendi provident dolor qui itaque similique doloribus nam dignissimos laboriosam deleniti ratione! Reiciendis velit quo saepe! </p> */}
                   <form>
                       <input placeholder='your email' type="text"/><button>subscribe</button>
                   </form>

                    </div>

                </div>
               
            </div>

            <div className='copy-right'>
                     <p>created by <span>alaa tahar </span>| all right reserved&copy;</p>
                    </div>

        </div>
    )
}

export default Footer
