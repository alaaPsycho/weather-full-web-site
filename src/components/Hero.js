import React from 'react'
import './Hero.css'
function Hero() {
    return (
        <div className=''>
<div id="carouselExampleFade" data-bs-interval='50' class="carousel slide carousel-fade slider-app" data-bs-ride="carousel">
  <div className='overlay'>
    <div className='content'>
      <h1>hero section</h1>
      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. Wikipedia
      </p>
      <button className=''>hero</button>
    </div>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active img-app">
      <img src="https://s3-us-west-2.amazonaws.com/axiomimagesthumbs-or/proxy/original/AK0001_1123-00002.jpg" class="d-block w-100" alt="..." />
     
    </div>
    <div class="carousel-item img-app">
      <img src="https://www.xtrafondos.com/wallpapers/estrellas-de-la-via-lactea-4047.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item img-app">
      <img src="https://images2.alphacoders.com/649/649639.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev slider-btn" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon slider-prev" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next slider-btn" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon prev slider-next" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



        </div>
    )
}

export default Hero
