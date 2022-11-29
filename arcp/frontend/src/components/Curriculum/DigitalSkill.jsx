import React, { useEffect, useState } from 'react'



const DigitalSkill = ({ name, level }) => {

    const [completed, setCompleted] = useState(0);

    useEffect(() => {
      setInterval(() => setCompleted(level), 1000);
    }, []);

    const containerStyles = {
        height: 15,
        width: '40%',
        backgroundColor: 'var(--color)',
        borderRadius: 50,
        margin: 50
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: 'var(--react-text-color-changing)',
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
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}></span>
                </div>
            </div>
        </div>
    )
}

export default DigitalSkill