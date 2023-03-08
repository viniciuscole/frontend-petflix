import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/components/Header.module.css'

import { SearchBar } from './SearchBar'

import logoImg from '../assets/logo.png'
import adminIcon from '../assets/adminIcon.png'
import sairIcon from '../assets/sairIcon.png'
import profilePic from '../assets/profilePic.png'

let isAdmin = true; // nao sei como fazer pra saber se é admin ou nn

export function Header(){


    return (
        <header className={styles.header}>
            <Image src={logoImg} alt="logo do petflix" />
            <ul className={styles.linksList}>
                <Link href={"/home"}>
                    <li>INÍCIO</li>
                </Link>
                <Link href={"/rankings"}>
                    <li>RANKINGS</li>
                </Link>
                <Link href={"/meusfilmes"}>
                    <li>MEUS FILMES</li>
                </Link>
                <Link href={"/usuarios"} style={isAdmin?{}:{display: 'none'}}>
                    <li>USUARIOS</li>
                </Link>
            </ul>

            <SearchBar/>

            <div className={styles.adminDiv} style={isAdmin?{}:{display: 'none'}}>
                <Image src={adminIcon} alt="icone logado como admin"/>
                <p>LOGADO COMO ADMIN</p>
            </div>

            <div className={styles.sairDiv}>
                <Image src={sairIcon} alt="ícone de sair"/>
                <p>SAIR</p>
            </div>

            <Image src={profilePic} alt="imagem do perfil"/>

        </header>
    )
}