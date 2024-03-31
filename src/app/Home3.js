import React from 'react';
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styles from './page.module.css'
import Link from 'next/link'
import Redirect from './Redirect'
import MyComponent from './About3'

function Home3() {
  const scrollToSection = () => {
    const section = document.getElementById('home');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <button className='Btn1' onClick={scrollToSection}>Home</button>

      {/* Other content... */}

      <div id="home">
      <section id='home'>
          <div className={styles.mainpage}>
            <div className={styles.profile}>
              <Fade direction='left' triggerOnce>
                <h1 className={styles.normalText}>Hello My Name is Sumedh</h1>
              </Fade>
                <h2 className={styles.para}><b>I'm a WebDeveloper</b></h2><br/>
                <div className={styles.Btncontainer}>
                  <button className={styles.Btn} onclick="window.open('./SumedhNaidu_BE_ComputerScienceEngineering_2023_JavaFullStack _Resume.pdf')">
                      Check CV
                  </button>
                  <button className={styles.Btn} onClick="location.href('/contact')">
                      Contact Info
                  </button>

                </div>
            </div>
           
            <div className='profileImg-container'>
            <Image
                className={styles.profileImg}
                src="/profile/Profile.jpeg"
                alt='Profile'
                width={500}
                height={500}
                />
            </div>
          </div>  
        </section>
        </div>
    </div>
  );
}

export default Home3;