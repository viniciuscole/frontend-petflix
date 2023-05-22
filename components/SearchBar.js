import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import searchIcon from "../assets/searchIcon.png"

import styles from "../styles/components/SearchBar.module.css"

export function SearchBar({ placeholderText = "SEARCH MOVIE/TV SERIES" }) {
    const [value, setValue] = useState("")
    const router = useRouter()

    const handleSubmit = (event) => {
        event.preventDefault()
        router.push(`/search?query=${value}&page=1`)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            router.push(`/search?query=${value}`)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            action=""
            role="search"
            className={styles.searchBar}
        >
            <Image src={searchIcon} alt="ícone de pesquisa" />
            <input
                type="text"
                placeholder={placeholderText}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={handleKeyDown}
            />
        </form>
    )
}
