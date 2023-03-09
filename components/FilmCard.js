import Image from "next/image"

import styles from "../styles/components/FilmCard.module.css"

import viewIcon from "@/assets/viewIcon.png"
import likeIcon from "@/assets/likeIcon.png"
import dislikeIcon from "@/assets/dislikeIcon.png"
import estrelaIcon from "@/assets/estrelaIcon.png"

export function FilmCard({cardImage, filmViews, filmRating, filmTitle, filmLikes, filmDislikes, wasWatched=false}){
    return (
        <div className={styles.filmCard}>
            <Image src={cardImage} alt={filmTitle+" foto de capa"} priority />
            <section className={styles.watchedFilmsStats} style={wasWatched?{}:{display:'none'}}>
                <p>{filmViews} <Image src={viewIcon} alt="icone vizualizção" /></p>
                <p>{filmRating} <Image src={estrelaIcon} alt="icone estrela" /></p>
            </section>
            <section className={styles.nextFilmsStats} style={wasWatched?{display:'none'}:{}}>
                <Image src={likeIcon} alt="ícone like"/>
                <p>{filmLikes - filmDislikes}</p>
                <Image src={dislikeIcon} alt="ícone dislike"/>
            </section>
        </div>
    )
}