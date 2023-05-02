import styles from '@/styles/pages/Thumb.module.css'
import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../assets/logo.png'
import desenhosImg from '../assets/desenhos.png'
import { LoginBox } from '@/components/LoginBox'

function Thumb(){
    return(
        <div className={styles.main}>
            <div>
                <div className={styles.desenhos}>
                    <Image src={desenhosImg} alt="desenhos" />
                </div>
                <div className={styles.logo2}>
                    <Image src={logoImg} alt="logo do petflix" />
                </div>
                <div className={styles.text}>
                    <p>A platform designed to evaluate movies and meant to be used by members of the group PET Engenharia da Computação, from UFES</p>
                </div>
                <div className={styles.pet}>
                    <p>PET ENGCOMP UFES</p>
                </div>
                
            </div>
            
            <button id={styles.button}>LOGIN</button>
        </div>
    )
}

export default Thumb