import styles from '@/styles/pages/Rank.module.css'

import { useState } from 'react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

function Ranking(){
    return(
        <div className={styles.rank}>
            <Header/>
            <div className={styles.rankContent}>
                <div className={styles.rankConteiner}>
                    <section className={styles.rankConteinerText}>
                        <span>
                            <p>USERS WITH MORE EVALUATIONS</p>
                        </span>
                    </section>
                    <section className={styles.rankConteinerText}>
                        <span>
                            <p>#01</p>
                        </span>
                        <span>
                            <p>SOFIA MORAIS</p>
                        </span>
                        <span>
                            <p>9 EVALUATIONS</p>
                        </span>
                    </section>
                    <section className={styles.rankConteinerText}>
                        <span>
                            <p>#02</p>
                        </span>
                        <span>
                            <p>SOFIA SARCINELLI</p>
                        </span>
                        <span>
                            <p>7 EVALUATIONS</p>
                        </span>
                    </section>
                    <section className={styles.rankConteinerText}>
                        <span>
                            <p>#03</p>
                        </span>
                        <span>
                            <p>SOFEIA MORAIS SARCINELLI</p>
                        </span>
                        <span>
                            <p>3 EVALUATIONS</p>
                        </span>
                    </section>
                </div>

                <div className={styles.rankConteiner}>
                    <section className={styles.rankConteinerText}>
                        <span>
                            <p>BEST MOVIES/ TV SERIES</p>
                        </span>
                    </section>
                    <section className={styles.rankConteinerText}>
                        <span>
                            <p>#001</p>
                        </span>
                        <span>
                            <p>SPIN OUT</p>
                        </span>
                        <span>
                            <p>4.65</p>
                        </span>
                    </section>
                    <section className={styles.rankConteinerText}>
                        <span>
                            <p>#002</p>
                        </span>
                        <span>
                            <p>STRANGER THINGS</p>
                        </span>
                        <span>
                            <p>4.5</p>
                        </span>
                    </section>
                    <section className={styles.rankConteinerText}>
                        <span>
                            <p>#003</p>
                        </span>
                        <span>
                            <p>PINOCCHIO</p>
                        </span>
                        <span>
                            <p>4.49</p>
                        </span>
                    </section>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Ranking