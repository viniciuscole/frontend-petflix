import { useRouter } from "next/router"

import styles from "../styles/components/SearchPage.module.css"

function SearchPage(props) {
    const page = props.initialValue
    const router = useRouter()

    function increment() {
        if (page < props.max) {
            router.push(`/search?query=${props.query}&page=${page + 1}`)
        }
    }

    function decrement() {
        if (page > props.min) {
            router.push(`/search?query=${props.query}&page=${page - 1}`)
        }
    }

    return (
        <div>
            <section className={styles.container}>
                <button className={styles.button} onClick={decrement}>
                    &lt;
                </button>
                <p className={styles.text}>{page}</p>
                <button className={styles.button} onClick={increment}>
                    &gt;
                </button>
            </section>
        </div>
    )
}

export default SearchPage
