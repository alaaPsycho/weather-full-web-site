import React from 'react';
import './SignUp.css';
function SignUp() {
  return <div className='sign-up'>
            <div className='container'>
                <div className='row'>
                <div className='col sign-up-app'>
                    <h3>create account</h3>
                    <div className='icons'>
                        <a href='https://www.facebook.com/alaa.edin.1004'><img src='https://i.pinimg.com/564x/5b/ac/75/5bac7554c5c6ce538a7dcf00b7de88c4.jpg' /></a>
                        <a href='https://alaaedine62@gmail.com'><img src='https://i.pinimg.com/564x/5b/be/3b/5bbe3b31b750db0f576c3a76780fffc2.jpg' /></a>
                        <a href='https://www.instagram.com/psychoxunknown'><img src='https://i.pinimg.com/564x/2a/1d/c6/2a1dc615d380b18993d85208200f70a1.jpg' /></a>
                        <a href='#'><img src='https://i.pinimg.com/564x/8e/69/a9/8e69a98a12be6b3a84fa9904fa273664.jpg'/></a>
                  </div>
                    <div className='p-app'>
                        <p>or</p>
                    </div>

                    <form>
                    <div><p class="far fa-user"></p><input type={'text'} placeholder='username'/></div> 

                     <div><p class="far fa-envelope"></p><input type={'email'} placeholder=' email'/></div> 

                     <div><p class="fas fa-key"></p> <input type={'password'} placeholder=' password'/></div>
                  </form>
                  <div className='button-app'>
                    <button className=''>sign up</button>
                </div>

                </div>
                </div>
            </div>
  </div>;
}

export default SignUp;
