import {useState,useEffect} from 'react'
import Card from "./Card"
function Products({searchQuery}) {
  {/*inital state is empty array because we are going to fetch data from api and store in products state */}
  const [products, setProducts] = useState([]);


useEffect(() => {
  fetch('https://new-eco.onrender.com/api/products/')
    .then(res => res.json())
    .then(json => setProducts(json))
}, [])
//make a post request to api to add new product
// useEffect(() => {
// fetch('http://localhost:3000/prod', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     id: Date.now(),
//     title: 'New Product',
//     price: 19.99,
//     image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UY879_t.png'
//   })
// }),[]})
//   .then(res => res.json())
//   .then(newProduct => {
//     setProducts([...products, newProduct]);
//   });

//filtering products based on search query
const filteredProducts = products.filter((prod) => prod.title.toLowerCase().includes(searchQuery.toLowerCase()));
console.log(filteredProducts);
  return  (
    <>
    <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '52px' }}>
         
      {
         filteredProducts.map((prod) => {
          return (
            <Card
              image={prod.image}
              title={prod.title}
              price={prod.price}

            /> 
          );
        })
      }
      </div>
    </>
  )
}
export default Products