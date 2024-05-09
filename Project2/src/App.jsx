import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import Contact from "./Components/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* necessary in React Router v6 
          https://reactrouter.com/en/main/route/route */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;