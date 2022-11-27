import React from 'react'

const Message = ({ msg, bgColor }) => {

  let style = {
    backgroundColor: bgColor,
    padding: '30px 50px',
    width: '100%'
  }
  return (
    <div>
        <h2 style={style}>{msg}</h2>
    </div>
  )
}

export default Message