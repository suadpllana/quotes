import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Quotes from "./Components/Quotes/Quotes.jsx"
import Programming from './Components/Programming/Programming.jsx';
import BreakingBad from './Components/BreakingBad/BreakingBad.jsx';
import Stoic from "./Components/Stoic/Stoic.jsx"
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="home" element={<Quotes />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/breakingbad" element={<BreakingBad />} />
        <Route path="/stoic" element={<Stoic />} />
      </Routes>
    </Router>
  );
}

export default App;
