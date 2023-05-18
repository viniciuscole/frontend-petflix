import styles from "@/styles/pages/Home.module.css"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FilmCard } from "@/components/FilmCard"

import exampleImg from "@/assets/exampleImg.png"
import { api } from "@/services/api"
import { headers } from "@/next.config"
import { getToken } from "@/services/cookies"

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
                                    filmRating={film.rating}
                                    filmLikes={film.likes}
                                    filmDislikes={film.dislikes}
                                    isAdmin={true} //para testar só. isso tem q vir do backend
                                    
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
                            console.log(film)
                            return (
                                <FilmCard
                                    key={index}
                                    wasWatched={film.wasWatched}
                                    cardImage={film.poster}
                                    imdbId={film.imdbId}
                                    // filmViews={10} revisar depois
                                    filmRating={film.rating}
                                    filmLikes={film.likes}
                                    filmDislikes={film.dislikes}
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

export async function getServerSideProps(context) {
    const authorization = context.req.cookies["petflix_token"]


    try {
        await api.get("/api/user",  {headers: {
            'Authorization': authorization
        }})
    } catch (err) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        }
    }

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
    let response;

    try {
        response = await api.get("/api/movie/watched", {headers: {
            'Authorization': authorization
        }})
    } catch (err) {
        
    }

    return response.data
}
const requestSuggestedMovies = async (authorization) => {
    let response;

    try {
        response = await api.get("/api/movie/suggested", {headers: {
            'Authorization': authorization
        }})
    } catch (err) {
        console.log(err)
    }

    return response.data
}

export default Home
