import Image from "next/image"
import { useState } from "react"
import ReactDOM from 'react-dom';

import styles from "../styles/components/FilmCard.module.css"

import { EvaluationBox } from "@/components/EvaluationBox";

import viewIcon from "@/assets/viewIcon.png"
import likeIcon from "@/assets/likeIcon.png"
import dislikeIcon from "@/assets/dislikeIcon.png"
import estrelaIcon from "@/assets/estrelaIcon.png"
import closeIcon from "@/assets/closeIcon.png"

import exempleProfilePic from "@/assets/exempleProfilePic.png"


export function FilmCard({cardImage, filmViews, filmRating, filmTitle, filmLikes, filmDislikes, filmYear, filmGenres, filmDescription, qtdEvaluations, wasWatched=false}){

    const [isExpanded, setIsExpanded] = useState(false)

    let evaluations = [];

    const handleClick = () =>{
        // pegar comentarios via api
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
                                    <p style={wasWatched ? {}:{display:'none'}}>{filmViews} <Image src={viewIcon} alt="icone vizualizção" /></p>
                                    <p style={wasWatched ? {}:{display:'none'}}>{filmRating} <Image src={estrelaIcon} alt="icone estrela" /></p>
                                    <p>{filmLikes} <Image src={likeIcon} alt="ícone like" /></p>
                                    <p>{filmDislikes} <Image src={dislikeIcon} alt="ícone dislike" /></p>
                                </section>
                            </div>
                            <p className={styles.detailedInformation}>{filmYear}・{filmGenres}</p>
                            <p className={styles.description}>{filmDescription}</p>
                            <section className={styles.evaluations} style={wasWatched ? {}:{display:'none'}}>
                                <section className={styles.evaluationsHeader}>
                                    <h2>EVALUATIONS</h2>
                                    <p>{qtdEvaluations} PEOPLE</p>
                                </section>
                                <section className={styles.evaluationsContent}>
                                    <EvaluationBox profilePic={exempleProfilePic} username={"JOÃOZINHO PIPOCA"} evaluation={"Achei bem meia boca, mas é bom até, mais ou menos."} rating={3} watchedOn = {0} />
                                    <EvaluationBox profilePic={exempleProfilePic} username={"JOÃOZINHO PIPOCA"} evaluation={"Achei bem meia boca, mas é bom até, mais ou menos."} rating={3} watchedOn = {1} />
                                    <EvaluationBox profilePic={exempleProfilePic} username={"JOÃOZINHO PIPOCA"} evaluation={"Achei bem meia boca, mas é bom até, mais ou menos."} rating={5} watchedOn = {2} />
                                    <EvaluationBox profilePic={exempleProfilePic} username={"JOÃOZINHO PIPOCA"} evaluation={"Achei bem meia boca, mas é bom até, mais ou menos."} rating={1} watchedOn = {3} />
                                    <EvaluationBox profilePic={exempleProfilePic} username={"JOÃOZINHO PIPOCA"} evaluation={"Achei bem meia boca, mas é bom até, mais ou menos."} rating={1} watchedOn = {4} />
                                    <EvaluationBox profilePic={exempleProfilePic} username={"JOÃOZINHO PIPOCA"} evaluation={"Achei bem meia boca, mas é bom até, mais ou menos."} rating={1} watchedOn = {5} />
                                    <EvaluationBox profilePic={exempleProfilePic} username={"JOÃOZINHO PIPOCA"} evaluation={"Achei bem meia boca, mas é bom até, mais ou menos."} rating={1} watchedOn = {6} />

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