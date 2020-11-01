import React from 'react'

const Search = () => {
    return (
        <div>
            
                <form className="form">
                    <input type="text" name="text" placeholder="Search ..."> </input>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"> </input>
                </form>
            
        </div>
    )
}

export default Search
