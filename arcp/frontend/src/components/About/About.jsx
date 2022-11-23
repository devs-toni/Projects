import React from 'react'
import '../../assets/css/About/About.css';
import Me from '../../assets/img/About/me.png';
import Animation from './Animation';
import Loader from './Loader';
import aficiones from '../../assets/img/About/aficiones.png';
import historia from '../../assets/img/About/historia.png';
import develop from '../../assets/img/About/develop.png';

const About = () => {
  return (
    <div className='courses about'>
      <h1 className='title'>About Me</h1>
      <p className='description'>In this section, you can know a little about me</p>
      <div className="me">
        <img className='img' src={Me} alt="Me" />
        <p>Backend developer. Actually I'm realising a Master in Software Development in Assembler Institute of Technologies</p>
      </div>
      <div className="icons">
        <Loader />
        <div className='icons-int'>
          <div className="icon">
            <img className='icon-history' src={historia} alt="History" />
          </div>
          <div className="icon end">
            <img className='icon-aficiones' src={aficiones} alt="Aficiones" />
          </div>
          <div className="icon">
            <img className='icon-develop' src={develop} alt="Development" />
          </div>
        </div>
      </div>
      <div className="window">

        <p className="aficiones">Nacido en Valencia, con orígenes humildes, he sido educado para ser una persona cercana y honesta, a la vez que sencilla y competitiva.</p>

        <Animation className='born' speed={70} content='Soy un apasionado del deporte, especialmente de la bicicleta de montaña y la natación, y me encanta salir de ruta con mi motocicleta.' />

        <Animation speed={10} content='La tecnología es algo que siempre me ha causado curiosidad, y poco a poco siempre acaba convirtiendose en una obsesión, lo que me ha permitido obtener grandes conocimientos en muy poco tiempo, por lo que siempre he tenido claro que mi futuro trabajo tiene que estar estrechamente relacionado con la tecnología, gracias a mi profesor de `Hogar Digital` en la cual
          programamos una casa domótica con Arduino, me di cuenta que me apasionaban los retos que ofrece programar, a la par que la frustración y la posterior satisfacción que la sucede
          , lo que me animó a empezar a estudiar Java, y posteriormente un curso completo de Frontend y de ahí vi la necesidad de aprender por mi cuenta React, Node, MongoDB, ElasticSearch, Kafka, ... y la lista sería largísima.
          Ha sido una de las mejores decisiones que he tomado. Falta decir que estoy muy entusiasmado por empezar mi primer trabajo y demostrar mi valía, a la vez que me gustaría seguir aprendiendo para no dejar de crecer.' />
      </div>
    </div>
  )
}

export default About;