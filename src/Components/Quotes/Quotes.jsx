import {useState , useEffect, useRef} from "react"
import React from 'react'
import "./Quotes.css"
import { categories } from "./categories"
import logo from "../../assets/x.png"
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
const Quotes = () => {


  const [quoteData, setQuoteData] = useState([]) 
  const [ openSavedQuotes, setOpenSavedQuotes] = useState(false)
  const [saveQuote , setSaveQuote] = useState(() => {
    const savedQuotes = localStorage.getItem("quotesData")
    return savedQuotes ? JSON.parse(savedQuotes) : []
  })
  useEffect(() => {
    localStorage.setItem("quotesData", JSON.stringify(saveQuote))
  } ,[saveQuote])

    const selectValue = useRef(null)
  const apiKey = import.meta.env.VITE_API_KEY
  async function generateQuote(){
      console.log(saveQuote)
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
   
      setQuoteData(result)
    } 
    catch (error) {
      console.error(error);
    }
    
  }
  function tweet(){
    if(quoteData[0]){
      window.open(`https://twitter.com/intent/tweet?text=${quoteData[0].text}%0A%0A-${quoteData[0].author}-`,
        "Tweet Window", "width=600, height=400");
    }
      return
 
  }
  function saveQuoteFunction(){
    if(!quoteData[0].text){
      return
    }
    if(saveQuote.length >=5) {
      alert("You cant add more quotes")
      return
    }
    setSaveQuote((prev) => {
    if(!prev.some((item) => item.quote === quoteData[0].text)) {
      return [
        ...prev ,
        {
          id: Math.random(),
          quote: quoteData[0].text,
          author: quoteData[0].author
        }
      ]
    }
    return prev
    })
  
  }
 
 function deleteQuote(id){
  const filteredQuotes = saveQuote.filter((quote) => quote.id !== id)
  setSaveQuote(filteredQuotes)
 }


  return (
    <div className="container">
    <h1>Quotes</h1>
    <div className="savedQuotesContainer">
    <h2>Saved Quotes  { openSavedQuotes ?  <FaChevronUp className="icon"  onClick={() => setOpenSavedQuotes(prev => !prev)}/> : <FaChevronDown className="icon"  onClick={() => setOpenSavedQuotes(prev => !prev)} />}  </h2>
    {openSavedQuotes ? saveQuote.length > 0 ? saveQuote.map((quote) => (
    

    <div className="quote">
  
    <p> {quote.quote}</p>
    <p>--{quote.author}--</p>
    <button onClick={() => deleteQuote(quote.id)}>Delete Quote</button>
    <hr />
    
    </div>
  
 
 
 ))  : <p>No quotes saved</p> : <></>}
     
    </div>
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

    <div className="buttonContainer">
    <button className="generateQuote" onClick={generateQuote}>Generate Quote</button>
      <button className="tweet-btn" onClick={tweet}>
            <img className="logo" src={logo} alt=""/> Tweet
          </button>
          <button id="saveQuote" onClick={saveQuoteFunction}>Save quote</button>
    </div>
      
    </div>
    </div>
   
  )
}

export default Quotes
