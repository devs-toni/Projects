import React from 'react'
import { Transition } from '../Home/Transition';
import '../../assets/css/Home/Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='title'>
        <p className='name'>Antonio Rufino Casasus</p>
        <p className="job">Backend Developer</p>
      </div>
      <div className="welcome-div">
        <span className='welcome'>`¡Bienvenido a mi $&#123; &lt; </span>
        <Transition className='welcome change' />
        <span className='welcome'>&gt; &#125;!`, espero que lo disfrutes.</span>
      </div>
      <div className='container-description'>
        <p className='description'>Aquí podrás encontrar información sobre mi perfil personal y laboral, además de los proyectos personales en los que estoy trabajando.</p>
      </div>
    </div>
  )
}

export default Home