import styles from "@/styles/pages/Home.module.css"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FilmCard } from "@/components/FilmCard"

import exampleImg from "@/assets/exampleImg.png"

function Home({ nextFilms, watchedFilms }) {
    return (
        <div className={styles.home}>
            <Header />
            <div className={styles.homeMain}>
                <div className={styles.watchedFilmsContainer}>
                    <section className={styles.watchedFilmsText}>
                        <p>LAST FILMS</p>
                        <p className={styles.qtdWatchedFilmsText}>
                            {watchedFilms.length} FILMS/SERIES
                        </p>
                    </section>
                    <section className={styles.watchedFilms}>
                        {watchedFilms.map((film, index) => {
                            return (
                                <FilmCard
                                    key={index}
                                    wasWatched={film.wasWatched}
                                    cardImage={film.cardImage}
                                    imdbId={film.imdbId}
                                    filmViews={film.filmViews}
                                    filmRating={film.filmRating}
                                    filmLikes={film.filmLikes}
                                    filmDislikes={film.filmDislikes}
                                    isAdmin={true}
                                    
                                />
                            )
                        })}
                    </section>
                </div>
                <div className={styles.nextFilmsContainer}>
                    <section className={styles.nextFilmsText}>
                        <p>NEXT FILMS</p>
                        <p className={styles.qtdNextFilmsText}>
                            {nextFilms.length} FILMS/SERIES
                        </p>
                    </section>
                    <section className={styles.nextFilms}>
                        {nextFilms.map((film, index) => {
                            return (
                                <FilmCard
                                    key={index}
                                    wasWatched={film.wasWatched}
                                    cardImage={film.cardImage}
                                    imdbId={film.imdbId}
                                    filmViews={film.filmViews}
                                    filmRating={film.filmRating}
                                    filmLikes={film.filmLikes}
                                    filmDislikes={film.filmDislikes}
                                    isAdmin={true}
                                />
                            )
                        })}
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    const authorization = "123"

    const nextFilms = await requestSuggestedMovies(authorization)
    const watchedFilms = await requestWatchedMovies(authorization)

    return {
        props: {
            nextFilms,
            watchedFilms,
        },
    }
}

const requestWatchedMovies = async (authorization) => {
    return [
        {
            wasWatched: true,
            imdbId: 123,
            cardImage: exampleImg,
            filmViews: 7,
            filmRating: 3.2,
            filmLikes: 7,
            filmDislikes: 2,
        },
    ]
}
const requestSuggestedMovies = async (authorization) => {
    return [
        {
            wasWatched: false,
            imdbId: 123,
            cardImage: exampleImg,
            filmViews: 7,
            filmRating: 3.2,
            filmLikes: 7,
            filmDislikes: 2,
        },
    ]
}

export default Home
