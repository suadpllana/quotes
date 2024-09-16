import React from 'react'
import "./BreakingBad.css"
import { useState } from 'react';

const BreakingBad = () => {

  const [quoteData , setQuoteData] = useState("")


    async function generateQuote(){
      const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
      const data = await response.json();
      console.log(data)
      setQuoteData(data)
    }

  return (
    <div className="container3">
      <div className="breaking-bad-container">
        <h1>Breaking Bad Quotes</h1>
        {quoteData ?  <>
          <p>{quoteData[0].quote}</p>
        <p>-{quoteData[0].author}-</p>
        </> : <></>}
      
        <button onClick={generateQuote}>Generate Quote</button>
      </div>
    </div>
  )
}

export default BreakingBad
