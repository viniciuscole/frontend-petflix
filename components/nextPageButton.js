import styles from "@/styles/components/nextPageButton.module.css"

import addIcon from "@/assets/addFilmIcon.png"

import Image from "next/image"

export function NextPageButton(onClick){
    return (
        <div className={styles.button} onClick={onClick} >
            <Image src={addIcon} />
        </div>
    )
}