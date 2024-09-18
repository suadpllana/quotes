import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Quotes from "./Components/Quotes/Quotes.jsx"
import Programming from './Components/Programming/Programming.jsx';
import BreakingBad from './Components/BreakingBad/BreakingBad.jsx';
import Stoic from "./Components/Stoic/Stoic.jsx"
import Nav from './Components/Nav';

function App() {
  return (
    <>
       <Router>
      <Nav />
      <Routes>
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quotes/home" element={<Quotes />} />
        <Route path="/quotes/programming" element={<Programming />} />
        <Route path="/quotes/breakingbad" element={<BreakingBad />} />
        <Route path="/quotes/stoic" element={<Stoic />} />
        <Route path="*" element={<Navigate to="/quotes" />} />
      </Routes>
    </Router>
    </>
 
  );
}

export default App;
