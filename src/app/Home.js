import React from 'react';

import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <section>
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
            <button className={styles.Btn} onclick="location.href('')">
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
  )
}
