import Image from "next/image"
import Link from "next/link"

import styles from "../styles/components/Header.module.css"

import { SearchBar } from "./SearchBar"

import logoImg from "../assets/logo.png"
import adminIcon from "../assets/adminIcon.png"
import sairIcon from "../assets/sairIcon.png"
import { useRouter } from "next/router"
import { destroyToken } from "@/services/cookies"

export function Header({ profilePic, isAdmin }) {
    const router = useRouter()

    const handleLogout = () => {
        destroyToken()
        router.push("/")
    }

    return (
        <header className={styles.header}>
            <Image src={logoImg} alt="logo do petflix" />
            <ul className={styles.linksList}>
                <Link href={"/home"}>
                    <li>HOME</li>
                </Link>
                <Link href={"/rankings"}>
                    <li>RANKINGS</li>
                </Link>
                <Link href={"/mymovies"}>
                    <li>MY FILMS</li>
                </Link>
                <Link
                    href={"/users"}
                    style={isAdmin ? {} : { display: "none" }}
                >
                <Link href={"/users"} style={isAdmin ? {} : { display: 'none' }}>
                    <li>USERS</li>
                </Link>
            </ul>

            <SearchBar />

            <div
                className={styles.adminDiv}
                style={isAdmin ? {} : { display: "none" }}
            >
                <Image src={adminIcon} alt="icone logado como admin" />
                <p>LOGGED AS ADMIN</p>
            </div>

            <div className={styles.sairDiv} onClick={handleLogout}>
                <Image src={sairIcon} alt="ícone de sair" />
                <p>LEAVE</p>
            </div>

            <Image
                className={styles.img}
                src={profilePic}
                height={202}
                width={202}
                alt="imagem do perfil"
            />
        </header>
    )
}
