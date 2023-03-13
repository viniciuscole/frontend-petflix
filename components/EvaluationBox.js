import styles from '../styles/components/EvaluationBox.module.css'

import Image from 'next/image'

import fullStar from '../assets/fullStar.png'
import emptyStar from '../assets/emptyStar.png'
import netflixIcon from '../assets/netflixIcon.png'
import primeVideoIcon from '../assets/primeVideoIcon.png'
import HBOMaxIcon from '../assets/HBOMaxIcon.png'
import disneyPlusIcon from '../assets/disneyPlusIcon.png'
import starPlusIcon from '../assets/starPlusIcon.png'
import claroTVIcon from '../assets/claroTVIcon.png'
import piratexIcon from '../assets/piratexIcon.png'


export function EvaluationBox({profilePic, username, evaluation, rating, watchedOn = "0"}){

    let watchedOnComponent = null;
    switch (watchedOn) {
        case "0":
            watchedOnComponent = (
                <p className={styles.watchedOnComponent}>NETFLIX <Image src={netflixIcon} alt="netflix icon" /></p>
            )
            break;
        case "1":
            watchedOnComponent = (
                <p className={styles.watchedOnComponent}>AMAZON <Image src={primeVideoIcon} alt="prime video icon" /></p>
            )
            break;
        case "2":
            watchedOnComponent = (
                <p className={styles.watchedOnComponent}>HBO <Image src={HBOMaxIcon} alt="hbo max icon" /></p>
            )
            break;
        case "3":
            watchedOnComponent = (
                <p className={styles.watchedOnComponent}>DISNEY <Image src={disneyPlusIcon} alt="disney plus icon" /></p>
            )
            break;
        case "4":
            watchedOnComponent = (
                <p className={styles.watchedOnComponent}>STAR PLUS <Image src={starPlusIcon} alt="star plus icon" /></p>
            )
            break;
        case "5":
            watchedOnComponent = (
                <p className={styles.watchedOnComponent}>CLARO <Image src={claroTVIcon} alt="claro tv icon" /></p>
            )
            break;
        case "6":
            watchedOnComponent = (
                <p className={styles.watchedOnComponent}>PIRATEX <Image src={piratexIcon} alt="piratex icon" /></p>
            )
            break;
        default:
            break;
    }

    return (
        <div className={styles.evaluation}>
            <div className={styles.profilePic}>
                <Image src={profilePic} alt="profile pic" />
            </div>
            <div className={styles.evaluationContent}>
                <h3>{username}</h3>
                <p>{evaluation}</p>
                <section className={styles.detailedEvaluationInfo}>
                    <div className={styles.evaluationRating}>
                        {[...Array(rating)].map((_, index) => (
                            <Image key={index} src={fullStar} alt=""/>
                        ))}
                        {[...Array((5-rating))].map((_, index) => (
                            <Image key={index} src={emptyStar} alt=""/>
                        ))}
                    </div>
                    <div className={styles.watchedOn}>
                        <h5>WATCHED ON: {watchedOnComponent}</h5>
                    </div>
                </section>
            </div>
        </div>
    )
}