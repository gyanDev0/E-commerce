//rfce to create functional component with export.
import React from 'react'
{/*here props is used to pass new data  to  component. */}
function Card(props) {
  return (
    <div style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
      <img src={props.image} alt={props.title} />
      <h2>title: {props.title}</h2>
      <h2>price: {props.price}</h2>
      

    </div>
  )
}

export default Card
