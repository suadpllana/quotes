import {useState} from "react"
import React from 'react'
import "./Quotes.css"


const Quotes = () => {


  const [quoteData, setQuoteData] = useState("") 
  
  async function generateQuote(){
    const url = `https://supernatural-api.onrender.com/quotes/random`;
    const response = await fetch(url);
    const data = await response.json();
    
    setQuoteData(data)
  }
 


  return (
    <div className="container">
    <h1>SuperNatural Quotes</h1>
    <div className="quote-container">
      <h2>The Quote</h2>
   {quoteData ? <>
    <p>{quoteData.line_0.quote}</p>
    <p>-{quoteData.line_0.character.name}-</p>
                </> : <></>}

      <button onClick={generateQuote}>Generate Quote</button>
    </div>
    </div>
   
  )
}

export default Quotes
