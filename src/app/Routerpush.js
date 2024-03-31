import { useRouter } from 'next/navigation';
import styles from './page.module.css'


function Routerpush() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/contact');
  };

  return (
    <button className={styles.Btn} onClick={handleClick}>
      Go to Contact
    </button>
  );
}

export default Routerpush;