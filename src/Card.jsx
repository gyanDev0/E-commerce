//rfce to create functional component with export.
import React from 'react'
{/*here props is used to pass new data  to  component. */}
function Card(props) {
  return (
    <div style={{ border: '1px solid black' ,padding:"5px", margin: '10px' ,width: '300px' }} >
      <img style={{ width: '100%', height: 'auto' }} src={props.image} alt={props.title} />
      <h2> {props.title}</h2>
      <h2>price: {props.price}</h2>
      

    </div>
  )
}

export default Card
