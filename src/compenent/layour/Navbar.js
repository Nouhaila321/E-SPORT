import React  from 'react';

import { Link }  from 'react-router-dom';

 const Navbar = ({icon , title}) => {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
            <h1>
                <i className={icon}/> 
                <Link to='/' > {title} </Link>
            </h1>
            <ul>
            <div className="dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Games
                </a>
                <div className="dropdown-content">
                    <Link to= '/leagues' > All games </Link>
                    <Link to= '/leagues/CSGO'  > CS-GO </Link>
                    <Link to= '/leagues/COD' > Call Of Duty</Link>
                    <Link to= '/leagues/LOL' > League Of Legend </Link>
                    <Link to= '/leagues/PUBG' > PUBG</Link>
                    <Link to= '/leagues/Overwatch' > Overwatch </Link>
                </div>
            </div>
            
                <li>
                    <Link className="nav-link" to= '/leagues'> All leagues</Link>
                </li>
                <li>
                    <Link className="nav-link" to= '/teams'> All teams</Link>
                </li>
                <li>
                    <Link className="nav-link" to= '/search'> Search </Link>
                </li>
                <li>
                    <Link className="nav-link" to= '/about'> About</Link>
                </li>
            </ul>
            </nav>
        )
}

export default Navbar;
/*
<select name="game" id="game">
                <option value="All games"> All games </option>
                <option value="CS-GO"> CS-GO </option>
                <option value="Call Of Duty"> Call Of Duty </option>
                <option value="League Of Legend"> League Of Legend </option>
                <option value="PUBG"> PUBG </option>
                <option value="Overwatch"> Overwatch </option>
            </select>

*/ 