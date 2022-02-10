import React from 'react'
import './Search.css'
import {Link,useNavigate} from 'react-router-dom'
function Search() {
    let navigate = useNavigate()
    return (
        <div className='search'>
            <div className='container'>
                <div className='row'>
                <div className='col-1'></div>
                    <div className='col-6 input-container'><input type={'text'} placeholder='search for '/> <i className='fas fa-search fa-4x' onClick={()=>navigate('/weather')}/></div>
                    <div className='col-1 p-container'><p>or</p></div>
                    <div className='col-3 button-container'><button onClick={()=>navigate('/weather')}>search </button></div>
                    <div className='col-1'></div>
                </div>
            </div>
        </div>
    )
}

export default Search
