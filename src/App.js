import axios from 'axios';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import React, {Component, Fragment } from 'react' ; 
import './App.css';
import Navbar from './compenent/layour/Navbar';
import About from './pages/About'
import Users from './compenent/Users/Users';
import User from './compenent/Users/User';
import Teams from './compenent/Teams/Teams';
import Team from './compenent/Teams/Team';
import Pagination from './compenent/Pagination'




class App extends Component {

  state = {
    users: [],
    usersG: [],
    series:[],
    teams:[],
    games: [],
    user: {} ,
    team: {},
    loading: false,
    currentPage: 1,
    usersPerPage: 5
  };

    
  //League
  componentDidMount = async() => {

    this.setState({ loading: true });
    const res = await axios.get('/api/leagues?token=UIm1bgREmxGoM3moShmeW9YwAxwLxkzSLXm89BEOTC_2ECJUos8');
      const res_t = await axios.get('/api/teams?token=UIm1bgREmxGoM3moShmeW9YwAxwLxkzSLXm89BEOTC_2ECJUos8');
    this.setState({ teams: res_t.data , loading: false});
    this.setState({ users: res.data , loading: false});

  }

  singleUser= async(idUser) => {
    this.setState({ loading: true });
    const res = await axios.get(`/api/leagues/${idUser}/?token=UIm1bgREmxGoM3moShmeW9YwAxwLxkzSLXm89BEOTC_2ECJUos8`);
    this.setState({ user: res.data, loading: false});
    
  }

  singleTeam= async(idTeam) => {
    this.setState({ loading: true });
    const res = await axios.get(`/api/teams/${idTeam}/?token=UIm1bgREmxGoM3moShmeW9YwAxwLxkzSLXm89BEOTC_2ECJUos8`);
    this.setState({ team: res.data, loading: false});
  }

  GetSeries = async(idUser) =>{
    this.setState({ loading: true });
    const res = await axios.get(`/api/leagues/${idUser}/series/?token=UIm1bgREmxGoM3moShmeW9YwAxwLxkzSLXm89BEOTC_2ECJUos8`);
    this.setState({ series: res.data, loading: false});

  }

  GetGames = async(game) => {
    this.setState({ loading: true });
    const res = await axios.get(`/api/teams?search[slug]=${game}&&token=UIm1bgREmxGoM3moShmeW9YwAxwLxkzSLXm89BEOTC_2ECJUos8`);
    this.setState({teams: res.data, loading: false});

  }

    
   render(){

    const indexOfLastUser = this.state.currentPage * this.state.usersPerPage;
    const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
    const currentUsers = this.state.users.slice(indexOfFirstUser, indexOfLastUser);
    const currentUsersG = this.state.usersG.slice(indexOfFirstUser, indexOfLastUser);
    const currentTeams = this.state.teams.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (pageNumber) => {
        this.setState({currentPage: pageNumber });
    } 
    return (
      <Router>
      <div className="App">
        <Navbar title='A-Sport Demo UBO' icon='fas fa-futbol' games={this.state.ga}/>
        <div className="Container"> 
        <Switch >

          {/* leagues*/}
          <Route 
            exact 
            path = '/leagues'
            render = { props => (
              <Fragment >
                <Users loading={this.state.loading} users={currentUsers}/>
                <Pagination UsersPerPage={this.state.usersPerPage} totalUsers={this.state.users.length} paginate={paginate} to={'leagues'}/>
              </Fragment>
            )}
          ></Route>

          {/* leagues/:game  */}    
          <Route 
            exact 
            path = '/leagues/:game'
            render = { props => (
              <Fragment >
                <Users { ...props} loading={this.state.loading} GetGames={this.GetGames} users={currentUsersG}/>
                <Pagination UsersPerPage={this.state.usersPerPage}  totalUsers={this.state.usersG.length} paginate={paginate} to={'leagues'}/>
              </Fragment>
            )}
          ></Route>

          {/* teams*/}
          <Route 
            exact 
            path = '/teams'
            render = { props => (
              <Fragment >
                <Teams loading={this.state.loading} teams={currentTeams}/>
                <Pagination UsersPerPage={this.state.usersPerPage} totalUsers={this.state.teams.length} paginate={paginate} to={'teams'}/>
              </Fragment>
            )}
          ></Route>
          
          {/* about*/}
          <Route
            exact 
            path = '/about' 
            render = { props => (
              <Fragment>
                 <About title= 'about'/>
              </Fragment>
            )}
          ></Route>
          
          {/* leagues/:id*/}
          <Route 
            exact path= '/leagues/:id'
            render={ props => (
              <User  
                { ...props} 
                singleUser ={this.singleUser}
                GetSeries ={this.GetSeries}  
                loading={this.state.loading} 
                user={this.state.user}
                series={this.state.series}
              />
          )}
          ></Route>
 
          {/* teams/:id*/}
          <Route 
            exact path= '/teams/:id'
            render={ props => (
              <Team  
                { ...props} 
                singleTeam ={this.singleTeam} 
                loading={this.state.loading} 
                team={this.state.team}
              />
          )}
          ></Route>
         
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
