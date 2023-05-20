import styles from "@/styles/pages/Home.module.css"

import Image from "next/image"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { FilmCard } from "@/components/FilmCard"
import SearchPage from "@/components/SearchPage"

import { api } from "@/services/api"

function Search({
    foundFilms,
    query,
    page,
    totalResults,
    authorization,
    isAdmin,
}) {
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
                                        authorization={authorization}
                                        wasWatched={film.wasWatched}
                                        cardImage={film.poster}
                                        imdbId={film.imdbId}
                                        filmViews={film.evaluations}
                                        filmRating={film.rating}
                                        filmLikes={film.likes}
                                        filmDislikes={film.dislikes}
                                        isAdmin={isAdmin}
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
    const authorization = context.req.cookies["petflix_token"]

    let response
    try {
        response = await api.get("/api/user", {
            headers: {
                Authorization: authorization,
            },
        })
    } catch (err) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        }
    }

    const isAdmin = response.data.user.role === "ADMIN"
    const query = context.query.query
    const page = parseInt(context.query.page)

    if (query == undefined || page == undefined) {
        return {
            redirect: {
                destination: "/home",
                permanent: false,
            },
        }
    }

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
            authorization,
            isAdmin,
        },
    }
}

const requestSearchMovie = async (authorization, query, page) => {
    let movies = []
    let totalResults = 0

    let response
    try {
        const data = {
            page: page,
            query: query,
        }

        response = await api.post("/api/search", data, {
            headers: {
                Authorization: authorization,
                "Content-Type": "application/json",
            },
        })

        console.log(response)

        movies = response.data.movies
        totalResults = response.data.totalResults
    } catch (err) {
        console.log(err)
    }
    return [movies, totalResults]
}

export default Search
