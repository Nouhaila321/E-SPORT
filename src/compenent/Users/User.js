import React, { Component, Fragment } from 'react'
import { Link }  from 'react-router-dom';

export class User extends Component {

    componentDidMount(){
        this.props.singleUser(this.props.match.params.id);
        this.props.GetSeries(this.props.match.params.id);
    }
    render() {
        const {
            name,
            image_url,
            url, 
            videogame
        } = this.props.user
        

        return (
            <Fragment>
                <Link to='/leagues' className='btn btn-light' >
                    Back to all leagues  
                </Link>
                <div className='card grid-2'>
                    <div className='all-center'>
                        <img 
                            src={image_url}
                            alt=''
                            style={{width: '150px'}}
                        />

                        <h1>{name}</h1>  
                        <h3> Game: { this.props.user && videogame && videogame['name']}</h3>
                        <br />
                        <div className='card grid-2'>
                            <h3> Series</h3>
                            <ul>
                                <li>
                                {this.props.series.map( serie => (
                                    <div  className="card">
                                        <h4> <strong> Name: </strong>{serie.full_name}</h4>
                                        <h4> <strong> From: </strong> {(serie.begin_at).substr(0,10)}</h4>
                                        <h4> <strong> To: </strong> {serie.end_at}</h4>
                                        <Link to = {`/team/${serie.winner_id}`} className='btn btn-dark btn-sm my-1'> Winner .. </Link>
                                    </div>                    
                                ))}
                                </li>
                            </ul>
                        
                        </div>
                        <h4> 
                            Pour plus d'informations .. <a href= {url} > Visiter site web </a>
                        </h4>
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default User
