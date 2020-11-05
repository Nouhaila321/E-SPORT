import React, { Component } from 'react'
import TeamItem from './TeamItem';

class Teams extends Component {
    render() {
        return (
            <div style={teamStyle}>
                {this.props.teams.map( team => (
                    <TeamItem  key ={team.id}  team={team} />
                ))}
            </div>
        )
    }
}


const teamStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)'
}
export default Teams
