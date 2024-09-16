import React from 'react'
import "./Programming.css"
import { useState } from 'react';


const Programming = () => {

  const [quoteData , setQuoteData] = useState("")

  async function generateQuote() {
    const response = await fetch("https://programming-quotesapi.vercel.app/api/random");
    const data = await response.json();

    setQuoteData(data)
  }


  return (

         <div className="container2">
          <div className="programming-container">
          <h1>Programming Quotes</h1>
          {quoteData ? <>
            <p>{quoteData.quote}</p>
            <p>-{quoteData.author}-</p>
          </> : <></>}
         
          <button onClick={generateQuote}>Generate Quote</button>
          </div>
           
         </div>
      
  

  )
}

export default Programming
