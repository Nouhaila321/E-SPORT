import React from 'react'

 
const UsersItem = props =>{
        const {name ,image_url ,url } = props.user;
        return (
            <div className='card text-center'>
                <img 
                    src={image_url}
                    alt=''
                    className='round-img'
                    style={{width: '60px'}}
                /> 
                <h3> {name} </h3>
                <a href = {url} className='btn btn-dark btn-sm my-1'> More .. </a>
            </div>
        )
}
/*

*/
export default UsersItem
