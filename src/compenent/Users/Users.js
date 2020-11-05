import React, { Component } from 'react'
import UsersItem from './UsersItem';
//

 class Users extends Component {
   
    render() {  
        return (
            <div style ={userStyle} >
                {this.props.users.map( user => (
                    <UsersItem  key ={user.id}  user={user} />
                ))}
            </div>

        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gridGap : '1rem'
}

export default Users


//switcher sur la valeur de videogame.name
/*
        this.props.users.map( user => (
                user.videogame.name = 
            ))
*/ 
//1 recupere la valeur de videogame.name 
/*
        var nameGame;
        
        {this.props.users.map( user => (
            nameGame = user && user.videogame && user.videogame['name']
        ))}
        console.log(nameGame); 
        //console.log(nameGame); -> Good  
* */
