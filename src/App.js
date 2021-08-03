import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    const first50 = countries.slice(0,100);
    // console.log(first50.length);

    const handleCountires = (country) => {
      const newCart = [...cart, country];
      setCart(newCart);
    };


    useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then( res => res.json())
      .then( data =>setCountries(data))
    },[]);

  return ( 
    <div>

      <Cart first50={first50} cart={cart}></Cart>
  
      <div className="countries-container">
        {
          first50.map(country => <Country 
            country={country} 
            key={country.alpha3Code}
            handleCountires={handleCountires}
            ></Country>)
        }
      </div>

    </div>
  );
}

export default App;
