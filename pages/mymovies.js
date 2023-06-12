import styles from '@/styles/pages/MyMovies.module.css'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FilmCard } from "@/components/FilmCard"
import { EvaluationCard } from "@/components/EvaluationCard"

import exampleImg from "@/assets/exampleImg.png"

function Movies() {
    let movies = []

    for (let i = 0; i < 10; i++) {
        movies.push({
            wasWatched: true,
            imdbId: 123,
            cardImage: exampleImg,
            filmViews: 7,
            filmRating: 3.2,
            filmLikes: 7,
            filmDislikes: 2,
        })
    }
    return (
        <div className={styles.moviesPage}>
        <Header />

        <div className={styles.main}>
            <div className={styles.foundFilmsContainer}>
                <section className={styles.foundFilmsText}>
                    <p>MY LIKED MOVIES</p>
                    <p className={styles.qtdFoundFilmsText}>
                        {movies.length} FILMS/SERIES
                    </p>
                </section>
                <section className={styles.foundFilms}>
                    {movies.map((film, index) => {
                        return (
                            <FilmCard
                                key={index}
                                wasWatched={film.wasWatched}
                                cardImage={film.cardImage}
                                imdbId={film.imdbId}
                                filmViews={film.filmViews}
                                filmRating={film.filmRating.toFixed(2)}
                                filmLikes={film.filmLikes}
                                filmDislikes={film.filmDislikes}
                            />
                        )
                    })}
                </section>
            </div>
            <div className={styles.foundFilmsContainer}>
                <section className={styles.foundFilmsText}>
                    <p>MY EVALUATIONS</p>
                    <p className={styles.qtdFoundFilmsText}>
                        {movies.length} EVALUATIONS
                    </p>
                    <p className={styles.rankByText}>
                        RANK BY  <strong>MOST FREQUENT</strong>
                    </p>
                </section>
                <section className={styles.foundFilms}>
                    {movies.map((film, index) => {
                        return (
                            <EvaluationCard
                                key={index}
                                wasWatched={film.wasWatched}
                                cardImage={film.cardImage}
                                imdbId={film.imdbId}
                                filmViews={film.filmViews}
                                filmRating={film.filmRating.toFixed(2)}
                                filmLikes={film.filmLikes}
                                filmDislikes={film.filmDislikes}
                                userRating={3}
                                watchedOn={"1"}
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

export default Movies