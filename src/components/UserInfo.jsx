import React from 'react'

function UserInfo({ resultInfo, userOnclick, userOntype, warning, fullName, userName, location }) {
    return (        
        <div className='userInp'>
            <div className='inp-btn'>
                <input type="text" placeholder="search github user" name='inpt'  onChange={userOntype}/>
                <button onClick={userOnclick} type="submit" className="btn btn-info">search</button>
                <p className='warning'>{warning}</p>
            </div>
            
            <div className='userinfo'>
                <img src= {resultInfo.avatar_url} alt={resultInfo.login}/>
                <h5>{fullName} {resultInfo.name}</h5>
                <h5>{userName} {resultInfo.login}</h5>
                <h5>{location} {resultInfo.location}</h5>    
                <h4> {resultInfo.bio}</h4>                
            </div>
        </div>
    )
}
export default UserInfo