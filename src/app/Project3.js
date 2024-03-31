import React from 'react';
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styles from './page.module.css'
import Link from 'next/link'
import Redirect from './Redirect'


function Project3() {
  const scrollToSection = () => {
    const section = document.getElementById('project');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <button className='Btn1' onClick={scrollToSection}>Projects</button>

      {/* Other content... */}

      <div id="project">
      <section id='project'>
          <div className={styles.heading3}>
          <h1 className={styles.heading}>Projects</h1>
          <div className={styles.projectGrid}>
            <div className={styles.project}>
            <video className={styles.video} controls width={400} height={300}>
              <source src='/profile/Analogclock.mp4' type='video/mp4' />
            </video><br/>
              <h3>Analog Clock 1</h3><br/>
              <p>This program displays a simple analog clock to show the current system <br/>time and the time is shown using hour, minute and seconds hand <br/>Technologies Used : HTML CSS and JavaScript</p><br/>
            </div>
            <div className={styles.project}>
              <video className={styles.video} controls width="400" height="300">
                <source src="/profile/OTP Generator.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video >
              <h3>OTP Generator</h3><br/>
              <p>This program generates OTP every 7 seconds until user enters correct <br/> OTP in 7 seconds Technologies Used : HTML CSS and JavaScript</p>
            </div>
          </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}

export default Project3;