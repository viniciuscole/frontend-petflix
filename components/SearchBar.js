import Image from 'next/image'
import searchIcon from '../assets/searchIcon.png'

import styles from '../styles/components/SearchBar.module.css'

export function SearchBar({placeholderText = "SEARCG FILM/SERIE"}){
    return (
        <form noValidate action="" role="search" className={styles.searchBar}>
            <Image src={searchIcon} alt="ícone de pesquisa" />
            <input type="text" placeholder={placeholderText} />
        </form>
    )
}