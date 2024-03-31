import React from 'react';
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styles from './page.module.css'
import Link from 'next/link'
import Redirect from './Redirect'
import MyComponent from './About3'

function About3() {
  const scrollToSection = () => {
    const section = document.getElementById('about');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <button className='Btn1' onClick={scrollToSection}>About</button>

      {/* Other content... */}

      <div id="about">
      <section id='about'>
          <div className={styles.heading2}><br/>
            <p>Get to Know more</p>
            <h1 className={styles.heading}>About Me</h1>
          </div>
          <div className={styles.info}>
            <p><b>Dedicated and enthusiastic Frontend Developer seeking an entry-level position to leverage <br/>
                  my technical skills and creativity to build innovative and user-friendly web applications. Eager<br/>
                  to contribute to a dynamic development team and learn and grow in a professional<br/>
                  environment!</b></p> <br/>
            <h1 className={styles.heading}>Education </h1><br/>
            <p><b>Completed My Graduation in the Year of 2023 <br/>
                  and Enrolled Myself into Besant Technologies <br/>
                  and pursing Java FullStack Course <br/>
            </b></p> <br/>
            <h1 className={styles.heading}>College </h1><br/>
            <p><b>I pursed my Bachelor of Technology in <br/>
                  G.Pullaiah College of Engineering and Technology <br/>
                  in the stream of Computer Science and Engineering
            </b></p>
          </div>
        </section><br/><br/>
    
        </div>
    </div>
  );
}

export default About3;