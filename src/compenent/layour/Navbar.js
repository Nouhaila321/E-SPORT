import React  from 'react';

 const Navbar = props => {
    
        return (
            <div>
                <nav className=" navbar bg-primary"> 
                <i className={props.icon}/> {props.title} 
                </nav>
            </div>
        )
    
}

export default Navbar;
