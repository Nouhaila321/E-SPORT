import axios from 'axios';
import React, {Component} from 'react' ; 
import './App.css';
import Navbar from './compenent/layour/Navbar'
import Users from './compenent/Users/Users'



class App extends Component {

  state = {
    users: [],
    loading: false
  };

  async componentDidMount(){

    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false});
  }
  render(){
    return (
      <div className="App">
        < Navbar title='GITHUB' icon='fab fa-github'/> 
        <div className="Containeur">
        < Users loading={this.state.loading} users={this.state.users}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
