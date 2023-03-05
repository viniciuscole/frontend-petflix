import styles from '@/styles/pages/Home.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
export default function Home(){
    return (
        <div className={styles.home}>
            <Header />
            <div className={styles.homeMain}/>
            <Footer />
        </div>
    )
}