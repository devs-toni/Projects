import React from 'react'

const Message = ({ msg, bgColor }) => {

  let style = {
    backgroundColor: bgColor,
    padding: '15px 30px',
    width: '100%',
    fontSize: '1.2em',
  }
  return (
    <div>
        <h2 style={style}>{msg}</h2>
    </div>
  )
}

export default Message