import styles from "../styles/components/Header.module.css"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { SearchBar } from "./SearchBar"

import logoImg from "../assets/logo.png"
import adminIcon from "../assets/adminIcon.png"
import sairIcon from "../assets/sairIcon.png"

import { destroyToken } from "@/services/cookies"

export function Header({ profilePic, isAdmin }) {
    const router = useRouter()

    const leave = () => {
        destroyToken()
        router.push("/login")
    }

    return (
        <header className={styles.header}>
            <Image src={logoImg} alt="logo do petflix" />
            <ul className={styles.linksList}>
                <Link href={"/home"}>
                    <li>HOME</li>
                </Link>
                <Link href={"/"}>
                    <li>RANKING</li>
                </Link>
                <Link href={"/"}>
                    <li>MY MOVIES/TV SERIES</li>
                </Link>
                <Link
                    href={"/users"}
                    style={isAdmin ? {} : { display: "none" }}
                >
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

            <div onClick={leave} className={styles.sairDiv}>
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
