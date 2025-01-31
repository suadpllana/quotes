import React from 'react'
import "./BreakingBad.css"
import { useState,useEffect } from 'react';
import logo from "../../assets/x.png"

const BreakingBad = () => {

  const [quoteData , setQuoteData] = useState("")

  useEffect(() => {
    generateQuote()
  } ,[])
    async function generateQuote(){
      const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
      const data = await response.json();
      console.log(data)
      setQuoteData(data)
    }

    function tweet(){
      if(quoteData){
        window.open(`https://twitter.com/intent/tweet?text=${quoteData[0].quote}%0A%0A-${quoteData[0].author}-`,
          "Tweet Window", "width=600, height=400");
      }
      return
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
        <button className="tweet-btn" onClick={tweet}>
            <img className="logo" src={logo} alt=""/> Tweet
          </button>
      </div>
    </div>
  )
}

export default BreakingBad
