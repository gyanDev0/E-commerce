
import './index.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
function Header( {setSearchQuery} ) {
  const [Search, setSearch] = useState("");
  function handleSearch(){
 setSearchQuery(Search);
  }
  function toggleDarkMode() {
  document.body.classList.toggle("dark");
  console.log(document.body.className);
}

  return (
   <>
   <header style={{display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"#f0f0f0",padding:"10px"}}>
    <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="logo" className='logo' height="50" />
    <input  onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search for products, brands and more' className='search' style={{border:"1px solid #ccc",borderRadius:"4px",padding:"5px" ,width:"30%"}}/>
    <button onClick={handleSearch}  className='search-btn' style={{backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",padding:"5px 10px",cursor:"pointer"}}>Search</button>
    <nav style={{display:"flex",gap:"20px"}}>
      <Link to="/"  style={{textDecoration:"none"}}>Home</Link>
      <Link to="/products"  style={{textDecoration:"none"}}>Products</Link>
      <Link to="/about"  style={{textDecoration:"none"}}>About</Link>
      <Link to="/signup"  style={{textDecoration:"none"}}>SignUp</Link>
      <Link to="/signin"  style={{textDecoration:"none"}}>SignIn</Link>
      <i
          className="fa-solid fa-bars"
         onClick={() => console.log("Menu clicked")}
         style={{ cursor: "pointer", fontSize: "24px" }}></i>

    </nav>
    <button onClick={toggleDarkMode} className="LDMode">Toggle Dark Mode</button>

   </header>
  
   </>
  )
}

export default Header