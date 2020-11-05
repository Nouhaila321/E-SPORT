import React, { Component , Fragment} from 'react'
import {Link} from 'react-router-dom'

export class Team extends Component {
    
    componentDidMount(){
        this.props.singleTeam(this.props.match.params.id);
    }    
    render() {
        const {
            name,
            image_url,
            current_videogame
        } = this.props.team
        return (
            <Fragment>
                <Link to='/teams' className='btn btn-light' >
                    Back to all teams  
                </Link>
                <div className='card grid-2'>
                    <div className='all-center'>
                    <img 
                        src={image_url}
                        alt=''
                        
                        style={{width: '150px'}}
                     />
                     <h2>{name}</h2>
                     <h4> Game : { this.props.team && current_videogame && current_videogame['name']}</h4>
                     <h4> Players: </h4>
                     
                        {this.props.team && this.props.team.players.map( player => (
                                <h4> {player['name']}</h4>   
                        ))}
                     

                     <br />
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default Team
