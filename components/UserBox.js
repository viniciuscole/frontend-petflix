import styles from '@/styles/components/UserBox.module.css';

import Image from 'next/image';

import {BsFillTrashFill} from 'react-icons/bs';

export function UserBox({ username, registrationYear, qtdEvaluations, profilePic }) {

  return (
    <div className={styles.userBox}>
      <Image src={profilePic} alt={username+" profile pic"}/>
      <section className={styles.content}>
        <h3>{username}</h3>
        <p>YEAR OF REGISTRATION: {registrationYear}</p>
        <p>EVALUATIONS: {qtdEvaluations}</p>
      </section>
      <BsFillTrashFill className={styles.icon} color="#FF8383"/>
    </div>
  );
}