import styles from '@/styles/pages/Home.module.css'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FilmCard } from '@/components/FilmCard'

import exampleImg from '@/assets/exampleImg.png'

function Home({nextFilms, watchedFilms}){


    return (
        <div className={styles.home}>
            <Header />
            <div className={styles.homeMain}>
                <div className={styles.watchedFilmsContainer}>
                    <section className={styles.watchedFilmsText}>
                        <p>ÚLTIMOS FILMES</p>
                        <p className={styles.qtdWatchedFilmsText}>{watchedFilms.length} FILMES/SÉRIES</p>
                    </section>
                    <section className={styles.watchedFilms}>
                        {watchedFilms.map((film, index) => {
                            return (
                                <FilmCard
                                    key={index}
                                    cardImage={film.cardImage}
                                    filmViews={film.filmViews}
                                    filmRating={film.filmRating}
                                    filmTitle={film.filmTitle}
                                    filmLikes={film.filmLikes}
                                    filmDislikes={film.filmDislikes}
                                    wasWatched={true}
                                />
                            )
                        })}
                    </section>
                </div>
                <div className={styles.nextFilmsContainer}>
                    <section className={styles.nextFilmsText}>
                        <p>PRÓXIMOS FILMES</p>
                        <p className={styles.qtdNextFilmsText}>{nextFilms.length} FILMES/SÉRIES</p>
                    </section>
                    <section className={styles.nextFilms}>
                        {nextFilms.map((film, index) => {
                            return (
                                <FilmCard
                                    key={index}
                                    cardImage={film.cardImage}
                                    filmViews={film.filmViews}
                                    filmRating={film.filmRating}
                                    filmTitle={film.filmTitle}
                                    filmLikes={film.filmLikes}
                                    filmDislikes={film.filmDislikes}
                                    wasWatched={false}
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
    // pegar dados do backend
    const nextFilms = [{cardImage: exampleImg, filmViews: 7, filmRating: 3.2, filmTitle: "Pelé", filmLikes: 7, filmDislikes: 2}];
    const watchedFilms = [{cardImage: exampleImg, filmViews: 7, filmRating: 3.2, filmTitle: "Pelé", filmLikes: 7, filmDislikes: 2}, {cardImage: exampleImg, filmViews: 5, filmRating: 1.2, filmTitle: "Pelé", filmLikes: 1, filmDislikes: 2}];
    return {
        props: {
            nextFilms,
            watchedFilms
        }
    }
}

export default Home