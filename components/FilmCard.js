import Image from "next/image"
import { useState } from "react"
import ReactDOM from 'react-dom';

import styles from "@/styles/components/FilmCard.module.css"

import { EvaluationBox } from "@/components/EvaluationBox";

import viewIcon from "@/assets/viewIcon.png"
import likeIcon from "@/assets/likeIcon.png"
import dislikeIcon from "@/assets/dislikeIcon.png"
import estrelaIcon from "@/assets/estrelaIcon.png"
import closeIcon from "@/assets/closeIcon.png"
import fullStar from '@/assets/fullStar.png'
import emptyStar from '@/assets/emptyStar.png'

import exempleProfilePic from "@/assets/exempleProfilePic.png"


export function FilmCard({cardImage, filmViews, filmRating, filmTitle, filmLikes, filmDislikes, filmYear, filmGenres, filmDescription, wasWatched=false}){

    const [isExpanded, setIsExpanded] = useState(false)
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0);
    const [watchedOn, setWatchedOn] = useState("0");
    const [isFilled, setIsFilled] = useState(false)
    const [hover, setHover] = useState(0);
    const [hasFirstSubmited, setHasFirstSubmited] = useState(false)
    const [hasSubmited, setHasSubmited] = useState(false)
    const [isEvaluationBoxExpanded, setIsEvaluationBoxExpanded] = useState(false)
    const [hasLiked, setHasLiked] = useState(false)
    const [hasDisliked, setHasDisliked] = useState(false)


    let evaluations = [{profilePic:exempleProfilePic, username:"JOÃOZINHO PIPOCA", evaluation:"Achei bem meia boca, mas é bom até, mais ou menos.", rating:3, watchedOn: "0"},
    {profilePic:exempleProfilePic, username:"JOÃOZINHO PIPOCA", evaluation:"Achei bem meia boca, mas é bom até, mais ou menos.", rating:3, watchedOn: "2"},
    {profilePic:exempleProfilePic, username:"JOÃOZINHO PIPOCA", evaluation:"Achei bem meia boca, mas é bom até, mais ou menos.", rating:3, watchedOn: "0"},
    {profilePic:exempleProfilePic, username:"JOÃOZINHO PIPOCA", evaluation:"Achei bem meia boca, mas é bom até, mais ou menos.", rating:3, watchedOn: "3"},
    {profilePic:exempleProfilePic, username:"JOÃOZINHO PIPOCA", evaluation:"Achei bem meia boca, mas é bom até, mais ou menos.", rating:3, watchedOn: "4"},
    {profilePic:exempleProfilePic, username:"JOÃOZINHO PIPOCA", evaluation:"Achei bem meia boca, mas é bom até, mais ou menos.", rating:3, watchedOn: "5"},
    {profilePic:exempleProfilePic, username:"JOÃOZINHO PIPOCA", evaluation:"Achei bem meia boca, mas é bom até, mais ou menos.", rating:3, watchedOn: "6"},];

    const handleClick = () =>{
        // pegar comentarios via api
        setIsExpanded(true)
    }

    const handleClose = () =>{
        setIsExpanded(false)
    }

    const handleCloseSubmitBox = () =>{
        setIsEvaluationBoxExpanded(false)
    }

    const handleCommentChange = (e) =>{
        const {value} = e.target
        setComment(value.substring(0,140))
    }

    function handleRatingClick(value) {
        setRating(value);
        setHover(value);
        setIsFilled(true);
    }

    function handleSelect(){
        const selectElement = document.getElementById("selectWatchedOn");
        const selectedOptionValue = selectElement.options[selectElement.selectedIndex].value;
        setWatchedOn(selectedOptionValue);
    }
    
    function handleSubmmitEvaluation(e){
        e.preventDefault();
        if(comment.length > 0){
            setIsEvaluationBoxExpanded(true);
            if(!hasFirstSubmited)
                setHasFirstSubmited(true);
            else
                setHasSubmited(true)
        }
    }

    function handleAddComment(e){
        e.preventDefault();
        handleCloseSubmitBox();
        console.log(comment, rating, watchedOn)
        setComment('')
        setRating(0)
        setWatchedOn(0)
    }

    function handleLike(){
        if(!hasLiked){
            setHasLiked(true)
            setHasDisliked(false)
        }
        else{
            setHasLiked(false)
        }
        // enviar pra api
    }

    function handleDislike(){
        if(!hasDisliked){
            setHasDisliked(true)
            setHasLiked(false)
        }
        else{
            setHasDisliked(false)
        }
        // enviar pra api
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

    const addEvaluationBox = (
        <section className={styles.submitBox}>
            <div className={styles.submitBoxContent}>
                <Image src={closeIcon} alt="ícone sair" onClick={handleCloseSubmitBox} className={styles.submitBoxCloseButton}/>
                {hasSubmited ? <h1>UPDATE EVALUATION</h1> : <h1>ADD EVALUATION</h1>}
                <section style={!hasSubmited ? {display : 'none'}:{}}>
                    <h2>CURRENT</h2>
                    <EvaluationBox profilePic={exempleProfilePic} username="JOÃOZINHO PIPOCA" evaluation={comment} rating={rating} watchedOn={watchedOn}/>
                </section>
                <section>
                    <h2>PREVIEW</h2>
                    <EvaluationBox profilePic={exempleProfilePic} username="JOÃOZINHO PIPOCA" evaluation={comment} rating={rating} watchedOn={watchedOn}/>
                </section>
                {hasSubmited ? <button onClick={handleAddComment}>UPDATE</button> : <button onClick={handleAddComment}>ADD</button>}
            </div>
        </section>
    )

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
                                    <p>{filmLikes} <Image onClick={handleLike} style={hasLiked ? {transform:'scale(1.4)'} : {}} className={styles.likeIcon} src={likeIcon} alt="ícone like" /></p>
                                    <p>{filmDislikes} <Image onClick={handleDislike} className={styles.dislikeIcon} style={hasDisliked ? {transform:'scale(1.4)'} : {}} src={dislikeIcon} alt="ícone dislike" /></p>
                                </section>
                            </div>
                            <p className={styles.detailedInformation}>{filmYear}・{filmGenres}</p>
                            <p className={styles.description}>{filmDescription}</p>
                            <section className={styles.evaluations} style={wasWatched ? {}:{display:'none'}}>
                                <section className={styles.evaluationsHeader}>
                                    <h2>EVALUATIONS</h2>
                                    <p>{evaluations.length} PEOPLE</p>
                                </section>
                                <section className={styles.evaluationsContent}>
                                    {evaluations.map((evaluation, index) => (
                                        <EvaluationBox key={index} profilePic={evaluation.profilePic} username={evaluation.username} evaluation={evaluation.evaluation} rating={evaluation.rating} watchedOn={evaluation.watchedOn}/>
                                    ))}

                                </section>
                                <form className={styles.postEvaluation}>
                                    <textarea required name="evaluation" value={comment} onChange={handleCommentChange} placeholder="Tell us your opinion..." maxLength={140}></textarea>
                                    <div className={styles.evaluationDetails}>
                                        <p>WATCHED ON:</p>
                                        <select name="selectWatchedOn" id="selectWatchedOn" onClick={handleSelect}>
                                            <option value="0">NETFLIX</option>
                                            <option value="1">AMAZON</option>
                                            <option value="2">HBO</option>
                                            <option value="3">DISNEY</option>
                                            <option value="4">STAR PLUS</option>
                                            <option value="5">CLARO</option>
                                            <option value="6">PIRATEX</option>
                                        </select>
                                        <div>
                                            {[...Array(5)].map((_, index) => (
                                                <span
                                                key={index}
                                                onMouseEnter={() => setHover(index + 1)}
                                                onMouseLeave={() => isFilled? setHover(rating) : setHover(0)}
                                                onClick={() => handleRatingClick(index + 1)}
                                                >
                                                {hover >= index + 1 ? <Image src={fullStar} alt=""/> : <Image src={emptyStar} alt=""/>}
                                                </span>
                                            ))}
                                        </div>
                                        <button onClick={handleSubmmitEvaluation}>EVALUATE</button>
                                    </div>
                                </form>
                            </section>
                        </section>
                    </div>
                </div>,
                document.body
              )}
              {isEvaluationBoxExpanded && addEvaluationBox}
        </>
    )

}