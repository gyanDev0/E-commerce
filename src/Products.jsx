import {useState,useEffect} from 'react'
import Card from "./Card"
function Products({searchQuery}) {
  {/*inital state is empty array because we are going to fetch data from api and store in products state */}
  const [products, setProducts] = useState([]);


useEffect(() => {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProducts(json))
}, [])
//filtering products based on search query
const filteredProducts = products.filter((prod) => prod.title.toLowerCase().includes(searchQuery.toLowerCase()));
console.log(filteredProducts);
  return  (
    <>
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
    </>
  )
}
export default Products