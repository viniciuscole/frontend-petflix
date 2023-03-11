import Image from "next/image"
import { useState } from "react"
import ReactDOM from 'react-dom';

import styles from "../styles/components/FilmCard.module.css"

import viewIcon from "@/assets/viewIcon.png"
import likeIcon from "@/assets/likeIcon.png"
import dislikeIcon from "@/assets/dislikeIcon.png"
import estrelaIcon from "@/assets/estrelaIcon.png"
import closeIcon from "@/assets/closeIcon.png"


export function FilmCard({cardImage, filmViews, filmRating, filmTitle, filmLikes, filmDislikes, filmYear, filmGenres, filmQtdSeasons, filmDescription, qtdEvaluations, wasWatched=false}){

    const [isExpanded, setIsExpanded] = useState(false)

    const handleClick = () =>{
        setIsExpanded(true)
    }

    const handleClose = () =>{
        setIsExpanded(false)
    }

    const card = (
        <div className={styles.filmCard} onClick={handleClick}>
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
    );

    return (
       <>
        {card}
        {isExpanded && 
            ReactDOM.createPortal(
                <div className={styles.cardFilmExpanded}>
                    <div className={styles.cardFilmContent}>
                        <section className={styles.leftPart}>
                            <Image src={closeIcon} alt="ícone sair" onClick={handleClose} className={styles.closeButton}/>
                            <Image src={cardImage} alt={filmTitle+" foto de capa"} className={styles.cardImg} priority />
                        </section>
                        <section className={styles.filmStats}>
                            <div className={styles.headerStats}>
                                <h1>{filmTitle}</h1>
                                <section className={styles.ratingStats}>
                                    <p>{filmViews} <Image src={viewIcon} alt="icone vizualizção" /></p>
                                    <p>{filmRating} <Image src={estrelaIcon} alt="icone estrela" /></p>
                                    <p>{filmLikes} <Image src={likeIcon} alt="ícone like" /></p>
                                    <p>{filmDislikes} <Image src={dislikeIcon} alt="ícone dislike" /></p>
                                </section>
                            </div>
                            <p className={styles.detailedInformation}>{filmYear}・{filmGenres}・{filmQtdSeasons} SEASONS</p>
                            <p className={styles.description}>{filmDescription}</p>
                            <section className={styles.evaluations}>
                                <section className={styles.evaluationsHeader}>
                                    <h2>EVALUATIONS</h2>
                                    <p>{qtdEvaluations} PEOPLE</p>
                                </section>
                            </section>
                        </section>
                    </div>
                </div>,
                document.body
              )}
        </>
    )
}