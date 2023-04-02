import styles from '@/styles/pages/Admin.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Admin(){
    return (
        <div className={styles.admin}>
            <Header />
                <div className={styles.usersConteiner}>
                    <section className={styles.usersConteinerText}>
                        <span>
                            <p>REGISTERED USERS</p>
                            <p id={styles.qtdUsers}>0 USERS</p>
                        </span>
                        <span>
                            <p>REGISTERING ALLOWED</p>
                            <p id={styles.changeBtn}>CHANGE</p>
                        </span>
                    </section>
                    <section className={styles.usersConteinerContent}>

                    </section>
                </div>
            <Footer />
        </div>
    )
}