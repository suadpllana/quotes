import {useState , useRef} from "react"
import React from 'react'
import "./Quotes.css"
import { categories } from "./categories"

const Quotes = () => {


  const [quoteData, setQuoteData] = useState([]) 
    const selectValue = useRef(null)
  const apiKey = import.meta.env.VITE_API_KEY
  async function generateQuote(){
    
    try {
    const url = `https://famous-quotes4.p.rapidapi.com/random?category=${selectValue.current.value}&count=1`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
      }
    };
    
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setQuoteData(result)
    } 
    catch (error) {
      console.error(error);
    }
    
  }
 
 


  return (
    <div className="container">
    <h1>Quotes</h1>
    <p>100+ categories to choose from</p>
    <p>Select a category: </p>
    <select ref={selectValue} >
    <option  value="architecture">Architecture</option>
    {
      categories.map((category, index) => (
        <option key={index} value={category}>{category.slice(0,1).toUpperCase() + category.slice(1,category.length).toLowerCase()}</option>
      ))
    }
    </select>
    <div className="quote-container">
      {quoteData[0] ? <></> :  <h2>The Quote</h2>}
     
    {quoteData[0] &&
    <>
      <h2>Category: {quoteData[0].category.slice(0,1).toUpperCase() + quoteData[0].category.slice(1, quoteData[0].category.length).toLowerCase()}</h2>
      <p>{quoteData[0].text}</p>
      <p>-{quoteData[0].author}-</p>
    </>
    
    }

      <button onClick={generateQuote}>Generate Quote</button>
    </div>
    </div>
   
  )
}

export default Quotes
