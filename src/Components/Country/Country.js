import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props);
    const country = props.country;
    // console.log(country);

    const {name,population,flag} = props.country;
    const handleCountires = props.handleCountires;
    // console.log(handleCountires);
    return (
        <div className="countryCart">
            <img src={flag}/>
            <h1>{name}</h1>
            <p>Populations: {population}</p>
            <button 
            style={{padding:'10px 30px',fontSize:'18px', cursor: 'pointer'}}
            onClick={() => handleCountires(country)}>Add Me</button>
        </div>
    );
};

export default Country;