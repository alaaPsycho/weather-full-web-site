import React from 'react';
import './Login.css'
function Login() {
  return <div className='login'>
      <div className='container'>
          <div className='row'>
              <div className='col login-app'>
                  <div className='icon-app'>
                      <i className='fas fa-user fa-5x big-icon' />
                  </div>
                  <form>
                     <div><i class="far fa-envelope"></i><input type={'email'} placeholder='your email'/></div> 
                     <div><i class="fas fa-key"></i> <input type={'password'} placeholder='your password'/></div>
                  </form>
                  <div className='checkbox-app'>
                      <input type={'checkbox'}/>
                      <a href='#'>forgot password ?</a>
                  </div>
                <div className='button-app'>
                    <button className=''>Login</button>
                </div>
              </div>
          </div>
      </div>
  </div>;
}

export default Login;
