import styles from '@/styles/components/Footer.module.css'

import Image from 'next/image'

import logoImg from '@/assets/logo.png'
import coracaoImg from '@/assets/coracaoImg.png'

export function Footer(){
    return (
        <footer className={styles.footer}>
            <Image src={logoImg} alt="logo petflix"/>
            <p className={styles.footerText}>FEITO COM <Image src={coracaoImg} alt="coração azul"/>  PELO PET ENGENHARIA DA COMPUTAÇÃO ・ 2023 ・ UFES</p>
        </footer>
    )
}