import React from 'react'

function Memo({name}) {
    console.log('rendering from memo');
  return (
    <div>Memo {name}</div>
  )
}

export default React.memo(Memo) 