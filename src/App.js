import axios from 'axios';
import React, {Component} from 'react' ; 
import './App.css';
import Navbar from './compenent/layour/Navbar';
import Users from './compenent/Users/Users';
//import Search from './compenent/Users/Search';



class App extends Component {

  state = {
    users: [],
    loading: false
  };

  async componentDidMount(){

    this.setState({ loading: true });
    const res = await axios.get('https://api.pandascore.co/leagues?token=UIm1bgREmxGoM3moShmeW9YwAxwLxkzSLXm89BEOTC_2ECJUos8');
    this.setState({ users: res.data, loading: false});
  }

   render(){
    return (
      <div className="App">
        <Navbar title='GITHUB' icon='fab fa-github'/> 
        
        <div className="Container">   
         
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
  
}

export default App;
