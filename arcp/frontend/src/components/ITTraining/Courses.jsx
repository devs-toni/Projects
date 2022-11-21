import React from 'react'
import Course from './Course'
import assembler from '../../assets/img/ITTraining/assembler.png';
import react from '../../assets/img/ITTraining/react.png';
import bootstrap from '../../assets/img/ITTraining/bootstrap.png';
import git from '../../assets/img/ITTraining/git.png';
import css from '../../assets/img/ITTraining/css.png';
import js from '../../assets/img/ITTraining/js.png';
import docker from '../../assets/img/ITTraining/docker.png';
import responsive from '../../assets/img/ITTraining/responsive.png';
import html from '../../assets/img/ITTraining/html.png';
import java from '../../assets/img/ITTraining/java.png';
import java2 from '../../assets/img/ITTraining/java2.png';
import spring from '../../assets/img/ITTraining/spring.png';
import boot from '../../assets/img/ITTraining/boot.jpg';
import sql from '../../assets/img/ITTraining/sql.png';
import fx from '../../assets/img/ITTraining/javafx.png';
import node from '../../assets/img/ITTraining/node.png';
import '../../assets/css/ITTraining/Courses.css';
import Counter from './Counter';

const Courses = () => {
  return (
    <div className='courses'>
      <div className='right'>
        <Counter hours='2206' />
      </div>
      <div className="left">
        <h3 className='title-it'>MY STUDIES</h3>
        <p className='description-it'>All the courses that I have taken since I started programming </p>
      </div>
      <div className='boxes'>
        <Course
          className='box'
          name='Master Software Development'
          creator='Assembler Institute'
          img={assembler}
          hours='1200'
          link='https://assemblerinstitute.com/cursos/master-in-software-development-remoto/'
        />
        <Course
          className='box'
          name='Front-End: HTML5 + CSS3 + JS'
          creator='Tokio School'
          img={java}
          hours='300'
          link='https://www.tokioschool.com/formaciones/cursos-programacion/front-end/'
        />
        <Course
          className='box'
          name='Master Java en Tokio School'
          creator='Tokio School'
          img={java}
          hours='300'
          link='https://www.tokioschool.com/formaciones/cursos-programacion/java/'
        />
        <Course
          className='box'
          name='Java'
          creator='Píldoras Informáticas'
          img={java2}
          hours='150'
          link='https://www.youtube.com/playlist?list=PLU8oAlHdN5BktAXdEVCLUYzvDyqRQJ2lk'
        />
        <Course
          className='box'
          name='Spring Framework'
          creator='Píldoras Informáticas'
          img={spring}
          hours='35'
          link='https://www.youtube.com/playlist?list=PLU8oAlHdN5Blq85GIxtKjIXdfHPksV_Hm'
        />
        <Course
          className='box'
          name='Spring Boot'
          creator='ByteCode'
          img={boot}
          hours='15'
          link='https://www.youtube.com/playlist?list=PLcIHm18h1i4nD4H8tPeID8PNiKsm4VZm5'
        />
        <Course
          className='box'
          name='Node.js'
          creator='Bluuweb'
          img={node}
          hours='6'
          link='https://www.youtube.com/playlist?list=PLPl81lqbj-4IEnmCXEJeEXPepr8gWtsl6'
        />
        <Course
          className='box'
          name='React.js'
          creator='Jonmircha'
          img={react}
          hours='56'
          link='https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk'
        />
        <Course
          className='box'
          name='Javascript Vanilla'
          creator='Jonmircha'
          img={js}
          hours='75'
          link='https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA'
        />
        <Course
          className='box'
          name='Docker'
          creator='HolaMundo'
          img={docker}
          hours='2'
          link='https://www.youtube.com/watch?v=4Dko5W96WHg&t=3354s'
        />
        <Course
          className='box'
          name='GIT'
          creator='HolaMundo'
          img={git}
          hours='1'
          link='https://www.youtube.com/watch?v=VdGzPZ31ts8'
        />
        <Course
          className='box'
          name='Java FX'
          creator='Tecno Extremo'
          img={fx}
          hours='10'
          link='https://www.youtube.com/playlist?list=PLNjWMbvTJAIjLRW2qyuc4DEgFVW5YFRSR'
        />
        <Course
          className='box'
          name='Lenguaje de Consulta SQL'
          creator='Píldoras Informáticas'
          img={sql}
          hours='9'
          link='https://www.youtube.com/playlist?list=PLU8oAlHdN5Bmx-LChV4K3MbHrpZKefNwn'
        />
        <Course
          className='box'
          name='Bootstrap v5'
          creator='Dinora PC'
          img={bootstrap}
          hours='16'
          link='https://www.youtube.com/playlist?list=PLUW3XAK9O3HFfc7KryNaE9jsqhmCpbBQi'
        />
        <Course
          className='box'
          name='Responsive CSS'
          creator='Jonmircha'
          img={responsive}
          hours='3'
          link='https://www.youtube.com/watch?v=AAtvnv6LNMk&list=PLvq-jIkSeTUbQc3dGsssp8lxAi5npMrys'
        />
        <Course
          className='box'
          name='CSS3'
          creator='Píldoras Informáticas'
          img={css}
          hours='12'
          link='https://www.youtube.com/playlist?list=PLU8oAlHdN5BmpUDdnWSglIIHfIosElaVN'
        />
        <Course
          className='box'
          name='HTML5'
          creator='Píldoras Informáticas'
          img={html}
          id="loquesea"
          hours='16'
          link='https://www.youtube.com/playlist?list=PLU8oAlHdN5BnX63lyAeV0LzLnpGudgRrK'
        />
      </div>
    </div>
  )
}

export default Courses