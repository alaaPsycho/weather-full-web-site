import React,{useState,useEffect}from 'react'
import { Link,NavLink,useNavigate} from 'react-router-dom'
import './NavBar.css'
import $ from 'jquery'



function NavBar() {
    let navigate = useNavigate()

    useEffect(() => {
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 960){
            $('.navBar').addClass('active')
        }else{
            $('.navBar').removeClass('active')

        }
    })
/*
    $('.navBar .links .link').on('click',function(){

        $(this).addClass('active').siblings().removeClass('active')
        $('.navBar .fa-search').removeClass('active')
    })
      
    */
 /*   $('.navBar .fa-search').on('click',function(){
        $(this).addClass('active');
        $('.navBar .links .link').removeClass('active')
    })*/

    $('.navBar .buttons-app button').each(function(){
        $(this).on('click',function(){
           
            $(this).addClass('active').siblings().removeClass('active')
        })
        $('.navBar .links .link').each(function(){
                 $(this).on('click',function(){
          $('.navBar .buttons-app button').removeClass('active')
        })
        })
         
      
    })
    }, [])
   

    return (
        <div className='navBar'>
          
    <div className='nav-logo'>
                <Link className='logo' to={'/'}><img src='https://iconape.com/wp-content/files/oo/349866/png/349866.png'/>weather</Link>
              </div>
            <div className='links'>
                <NavLink exact className='link ' to={'/'}>home</NavLink>
                <NavLink exact className='link' to={'/about'}>about</NavLink>
                <NavLink exact className='link' to={'/blog'}>blog</NavLink>
                <NavLink exact className='link' to={'/contact'}>contact</NavLink>

                </div>
            <div className='buttons-app'>
               <button className='sign-up' onClick={()=>navigate('/sign-up')}>sign up</button>
              <button className='login' onClick={()=>navigate('/login')}>login</button>
                <button className='icon-search' onClick={()=>navigate('/weather')} className=''><i className='fas fa-search' /></button>

            </div>
           {/*  <div className='icons-app'>
            <i class="far fa-bell"></i>
            <i class="far fa-user"></i>
            </div>
          */}
             </div>
        
    )
}

export default NavBar
