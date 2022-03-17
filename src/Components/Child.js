import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={props.handleGreet}>Greet Parent</button>
    </div>
  )
}

export default Child