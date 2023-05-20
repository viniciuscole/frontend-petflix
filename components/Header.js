import Image from "next/image"
import Link from "next/link"

import styles from "../styles/components/Header.module.css"

import { SearchBar } from "./SearchBar"

import logoImg from "../assets/logo.png"
import adminIcon from "../assets/adminIcon.png"
import sairIcon from "../assets/sairIcon.png"

import { api } from "@/services/api"
import { getToken, destroyToken } from "@/services/cookies"
import { useState } from "react"
import { useRouter } from "next/router"

export function Header() {
    const [profilePic, setProfilePic] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)

    const router = useRouter()

    const requestReadUser = async () => {
        const authorization = getToken()
        let response

        try {
            response = await api.get("/api/user", {
                headers: {
                    Authorization: authorization,
                },
            })
        } catch (err) {
            router.push("/login")
        }

        setIsAdmin(response.data.user.role === "ADMIN")
        setProfilePic(
            "http://200.137.66.9/public/avatar/" +
                response.data.user.profilePic +
                ".png"
        )
    }

    const leave = () => {
        destroyToken()
        router.push("/login")
    }

    requestReadUser()

    return (
        <header className={styles.header}>
            <Image src={logoImg} alt="logo do petflix" />
            <ul className={styles.linksList}>
                <Link href={"/home"}>
                    <li>HOME</li>
                </Link>
                <Link href={"/ranking"}>
                    <li>RANKINGS</li>
                </Link>
                <Link href={"/mymovies"}>
                    <li>MY FILMS</li>
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
