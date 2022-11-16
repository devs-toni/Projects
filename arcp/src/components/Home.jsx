import React from 'react'
import { Transition } from './specific/Transition';
import Button from './specific/Button';
import '../styles/home.css';
const Home = () => {
  return (
    <div className='home'>
      <div className='title'>
        <p className='name'>Antonio Rufino Casasus</p>
        <p className="job">Full Stack Developer</p>
      </div>
      <div className="welcome-div">
        <span className='welcome'>`¡Welcome to my $&#123; &lt; </span>
        <Transition className='welcome change' />
        <span className='welcome'>&gt; &#125;!`, I hope you enjoy it.</span>
      </div>
      <div className='container-description'>
        <p className='description'>Here you can find my background and experience as well as the projects I have worked on.</p>
      </div>
      <div className="buttons">
        <Button name='FORMACIÓN IT' desc='Desde que decidí adentrarme en este mundo' router='/cv' />
        <Button name='CURRÍCULUM' desc='Desde que decidí adentrarme en este mundo' router='/cv' />
        <Button name='PROYECTOS' desc='Desde que decidí adentrarme en este mundo' router='/cv' />
        <Button name='SOBRE MÍ' desc='Desde que decidí adentrarme en este mundo' router='/cv' />
      </div>
    </div>
  )
}

export default Home