import React from 'react'
import "./Stoic.css"
import { useState } from 'react';


const Stoic = () => {

  const [quoteData , setQuoteData] = useState("")



  async function generateQuote(){
    const response = await fetch("https://stoic-quotes.com/api/quote");
    const data = await response.json();
    console.log(data)
    setQuoteData(data)
  }


  return (
    <div className="container4">
      <div className="stoic-container">
        <h1>Stoic Quotes</h1>
        {quoteData ? <>
        <p>{quoteData.text}</p>
        <p>-{quoteData.author}-</p>
        </> : <></>}
        <button onClick={generateQuote}>Generate Quote</button>
      </div>
    </div>
  )
}

export default Stoic
