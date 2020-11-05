import React from 'react'
import { Link }  from 'react-router-dom';

 
const UsersItem = props =>{
        const { id , name ,image_url } = props.user;
       // const game = props.game;
        //const UGame = (this.props.user && videogame && videogame['name']); 
        

        return (

            <div className='card center'>
                <img 
                    src={image_url}
                    alt=''
                    style={{width: '200px'}}
                /> 
                <h3> {name} </h3>
                <Link to = {`/leagues/${id}`} className='btn btn-dark btn-sm my-1'> Details .. </Link>
            </div>
        )
}

export default UsersItem
