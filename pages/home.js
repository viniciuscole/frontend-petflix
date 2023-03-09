import styles from '@/styles/pages/Home.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function Home({nextFilms, watchedFilms}){


    return (
        <div className={styles.home}>
            <Header />
            <div className={styles.homeMain}>
                <div className={styles.watchedFilmsContainer}>
                    <section className={styles.watchedFilmsText}>
                        <p>ÚLTIMOS FILMES</p>
                        <p className={styles.qtdWatchedFilmsText}>{watchedFilms.length} FILMES</p>
                    </section>
                    <section className={styles.watchedFilms}>

                    </section>
                </div>
                <div className={styles.nextFilmsContainer}>
                    <section className={styles.nextFilmsText}>
                        <p>PRÓXIMOS FILMES</p>
                        <p className={styles.qtdNextFilmsText}>{nextFilms.length} FILMES</p>
                    </section>
                    <section className={styles.nextFilms}>

                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps() {
    // pegar dados do backend
    const nextFilms = [];
    const watchedFilms = [];
    return {
        props: {
            nextFilms,
            watchedFilms
        }
    }
}

export default Home