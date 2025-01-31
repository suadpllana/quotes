import React from 'react'
import "./Programming.css"
import { useState ,useEffect} from 'react';
import logo from "../../assets/x.png"

const Programming = () => {

  const [quoteData , setQuoteData] = useState("")




  useEffect(() =>{
    generateQuote()
  } ,[])
  async function generateQuote() {
    const response = await fetch("https://programming-quotesapi.vercel.app/api/random");
    const data = await response.json();

    setQuoteData(data)
  }
  function tweet(){
    if(quoteData){
      window.open(`https://twitter.com/intent/tweet?text=${quoteData.quote}%0A%0A-${quoteData.author}-`,
        "Tweet Window", "width=600, height=400");
    }
    return
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
          <button className="tweet-btn" onClick={tweet}>
            <img className="logo" src={logo} alt=""/> Tweet
          </button>
          </div>
           
         </div>
      
  

  )
}

export default Programming
