import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={()=> props.handleGreet("prayag")} >click me</button>
    </div>
  )
}

export default Child