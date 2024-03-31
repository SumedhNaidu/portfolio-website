'use client'


import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styles from './page.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <body class="my-body-class">
    <div>
      <header className={styles.header}>
        <nav>
          <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/project">Project</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section id='home'>
          <div className={styles.mainpage}>
            <div className={styles.profile}>
              <Fade direction='left' triggerOnce>
                <h1 className={styles.normalText}>Hello My Name is Sumedh</h1>
              </Fade>
              <Fade direction='right' triggerTwice>
                <h2 className={styles.para}><b>I'm a WebDeveloper</b></h2><br/>
                </Fade> 
                <div className={styles.Btncontainer}>
                  <button className={styles.Btn} onclick="window.open('./SumedhNaidu_BE_ComputerScienceEngineering_2023_JavaFullStack _Resume.pdf')">
                      Check CV
                  </button>
                  <button className={styles.Btn} onClick="location.href('contact')">
                      Go to Contact
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

        <section id='about'>
          <div className={styles.heading2}><br/>
            <p>Get to Know more</p>
            <Fade direction='left'triggerTwice>
            <h1 className={styles.heading}>About Me</h1>
            </Fade>
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
    
        <section id='project'>
          <div className={styles.heading3}>
          <Fade direction='right'triggerTwice>
          <h1 className={styles.heading}>Projects</h1>
          </Fade>
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
        
        <section id='contact'>
        <div className={styles.heading3}>
          <Fade direction='right' triggerTwice>
          <h1 className={styles.heading}>Contact Info</h1>
          </Fade>
          <div className={styles.boxes}>
          <div>
            <Image
            className={styles.icon}
            src="/profile/telephone.png"
            alt='phone'
            height={70}
            width={70}
            />
            <h1 className={styles.box}>Phone:- 91+ 6304787473</h1>
          </div>
          <div>
          <Image
            className={styles.icon}
            src="/profile/envelope.png"
            alt='phone'
            height={70}
            width={70}
            />
            <h1 className={styles.box}>Email:- sumedhnaidu.kn@gmail.com</h1>
          </div>
          <div>
          <Image
            className={styles.icon}
            src="/profile/map.png"
            alt='phone'
            height={70}
            width={70}
            />
            <h1 className={styles.box}>Address:- Bangalore BTM Layout</h1>
          </div>
          </div>
        </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
    </body>

  )
}