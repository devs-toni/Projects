import React from 'react'
import Cube from 'react-3d-cube';
import '../../styles/cubo.css';
const CubeAboutMe = () => {
  
  return (
    <div>
    <h1>react-3d-cube</h1>
    <h2>no children</h2>
    <div
      style={{
        width: 600,
        height: 600,
      }}
    >
      <Cube size={600} index="front"  />
    </div>
  </div>
  )
}

export default CubeAboutMe