import React, { useEffect, useState } from 'react'



const DigitalSkill = ({ name, level, color }) => {

    const [completed, setCompleted] = useState(0);

    useEffect(() => {
      setInterval(() => setCompleted(level), 30);
    }, []);

    const containerStyles = {
        height: 5,
        width: '160px',
        backgroundColor: 'var(--font-color)',
        borderRadius: 50,
        margin: 50,
        marginLeft: 20
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: color,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 3s ease-in-out'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }


    return (
        <div className='skill'>
        <p className='name'>{name}</p>
            <div style={containerStyles} className='bar'>
                <div style={fillerStyles}>
                    <span style={labelStyles}></span>
                </div>
            </div>
        </div>
    )
}

export default DigitalSkill