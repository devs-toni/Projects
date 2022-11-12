import React from 'react'

const Course = ({ name, img, hours, tech}) => {
  return (
    <div className='box'>
        <img src={img} alt={name} />
        <p>{name}</p>
        <div>
            <p>{hours} h</p>
            <p>{tech} tech</p>
            <a href=""></a>
        </div>
    </div>
  )
}

export default Course