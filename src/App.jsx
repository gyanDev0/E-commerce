import { useState } from 'react'
import Header from './Header.jsx'
import Products from './Products.jsx'
import About from './About.jsx'
import SignUp from './SignUp.jsx'
import SignIn from './SignIn.jsx'
import { Routes, Route } from "react-router-dom";
function App() {
  //state to manage search term in header component
  const [searchQuery, setSearchQuery] = useState("");

  return (

    <>
    <Header  setSearchQuery={setSearchQuery} /> 
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Products searchQuery={searchQuery} />} />

    </Routes>
    {/* passing setSearchTerm function as prop to Header component to update search term state in App component */}
  
    </>
  )
}

export default App
