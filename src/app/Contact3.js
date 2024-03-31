import React from 'react';
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import styles from './page.module.css'
import Link from 'next/link'
import Redirect from './Redirect'


function Contact3() {
  const scrollToSection = () => {
    const section = document.getElementById('contact');
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <button className='Btn1' onClick={scrollToSection}>Contact</button>

      {/* Other content... */}

      <div id="contact">
      <section id='contact'>
        <div className={styles.heading3}>
          <h1 className={styles.heading}>Contact Info</h1>
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
      </div>
    </div>
  );
}

export default Contact3;