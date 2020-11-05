import React from 'react'
import {Link } from 'react-router-dom'


const TeamItem = props => {
    const {  id , name , image_url  } = props.team;
    return (
        <div className='card text-center'>
                <img 
                    src={image_url}
                    alt=''
                    style={{width: '60px'}}
                /> 
                <h3> {name} </h3>
                <Link to = {`/teams/${id}`} className='btn btn-dark btn-sm my-1'> Details .. </Link>
            </div>
    )
}

export default TeamItem
