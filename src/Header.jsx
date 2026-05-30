

import {useState} from 'react'
function Header( {setSearchQuery} ) {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
   <>
   <header style={{display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"#f0f0f0",padding:"10px"}}>
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="logo" className='logo' height="50" />
    <input  onChange={(e)=>setSearchQuery(e.target.value)} type="text" placeholder='Search for products, brands and more' className='search' style={{border:"1px solid #ccc",borderRadius:"4px",padding:"5px" ,width:"30%"}}/>
    <button  className='search-btn' style={{backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",padding:"5px 10px",cursor:"pointer"}}>Search</button>
    <nav style={{display:"flex",gap:"20px"}}>
      <a href="#"  style={{textDecoration:"none"}}>Home</a>
      <a href="#" style={{textDecoration:"none"}}>Products</a>
      <a href="#" style={{textDecoration:"none"}}>Contact</a>
      <a href="#" style={{textDecoration:"none"}}>About</a>
    </nav>

   </header>
  
   </>
  )
}

export default Header