import Image from "next/image"

import styles from "@/styles/pages/Home.module.css"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FilmCard } from "@/components/FilmCard"
import SearchPage from "@/components/SearchPage"

import exampleImg from "@/assets/exampleImg.png"

function Search({ foundFilms, query, page, totalResults }) {
    if (totalResults != 0) {
        const amountPages = Math.ceil(totalResults / 10)
        return (
            <div className={styles.search}>
                <Header />
                <div className={styles.searchMain}>
                    <div className={styles.foundFilmsContainer}>
                        <section className={styles.foundFilmsText}>
                            <p>MOVIES FOUND FOR "{query}"</p>
                            <p className={styles.qtdFoundFilmsText}>
                                {totalResults} FILMS/SERIES
                            </p>
                        </section>
                        <section className={styles.foundFilms}>
                            {foundFilms.map((film, index) => {
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
                                    />
                                )
                            })}
                        </section>
                    </div>
                    <div>
                        <SearchPage
                            min={1}
                            max={amountPages}
                            initialValue={page}
                            query={query}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div className={styles.search}>
            <Header />
            <div className={styles.notFoundMain}>
                <Image
                    src="/notFound.png"
                    alt="not found image"
                    width={261}
                    height={240}
                />
                <p className={styles.foundFilmsText}>
                    NO MOVIE/TV SERIES NAMED “{query}” WAS FOUND
                </p>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const query = context.query.query
    const page = parseInt(context.query.page)

    const authorization = "123"

    const [movies, totalResults] = await requestSearchMovie(
        authorization,
        query,
        page
    )

    return {
        props: {
            foundFilms: movies,
            query,
            page,
            totalResults,
        },
    }
}

const requestSearchMovie = async (authorization, query, page) => {
    let movies = []
    let totalResults = 25

    if (query == "test") totalResults = 0

    for (var i = 0; i < 10; i++) {
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
    return [movies, totalResults]
}

export default Search
