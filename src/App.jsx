import { useState } from 'react'
import Header from './Header.jsx'
import Products from './Products.jsx'
function App() {
  //state to manage search term in header component
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    <Header  setSearchQuery={setSearchQuery} /> {/* passing setSearchTerm function as prop to Header component to update search term state in App component */}
     {searchQuery}
    <Products searchQuery={searchQuery}/>
  
    </>
  )
}

export default App
