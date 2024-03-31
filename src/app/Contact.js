import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
    <section>
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
  )
}
