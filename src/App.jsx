import { useState } from 'react'
import Header from './Header.jsx'
import Products from './Products.jsx'
import About from './About.jsx'
import { Routes, Route } from "react-router-dom";
function App() {
  //state to manage search term in header component
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    <Routes>
      <Route pathe="/about" element={<About />} />
      
    </Routes>
    <Header  setSearchQuery={setSearchQuery} /> {/* passing setSearchTerm function as prop to Header component to update search term state in App component */}
     {searchQuery}
    <Products searchQuery={searchQuery}/>
  
    </>
  )
}

export default App
