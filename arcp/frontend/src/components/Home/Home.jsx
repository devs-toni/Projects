import React from 'react'
import { Transition } from '../Home/Transition';
import '../../assets/css/Home/Home.css';

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
    </div>
  )
}

export default Home