import React from 'react'
import "./Stoic.css"
import { useState,useEffect } from 'react';
import logo from "../../assets/x.png"

const Stoic = () => {

  const [quoteData , setQuoteData] = useState("")
 useEffect(() => {
    generateQuote()
  } ,[])


  async function generateQuote(){
    const response = await fetch("https://stoic-quotes.com/api/quote");
    const data = await response.json();
    console.log(data)
    setQuoteData(data)
  }

  function tweet(){
    if(quoteData){
      window.open(`https://twitter.com/intent/tweet?text=${quoteData.text}%0A%0A-${quoteData.author}-`,
        "Tweet Window", "width=600, height=400");
    }
    return
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
        <button className="tweet-btn" onClick={tweet}>
            <img className="logo" src={logo} alt=""/> Tweet
          </button>
      </div>
    </div>
  )
}

export default Stoic
