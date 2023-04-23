import styles from '@/styles/pages/Users.module.css'

import { useState } from 'react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { UserBox } from '@/components/UserBox'

import exempleProfilePic from '@/assets/exempleProfilePic.png'

export default function Users(){

    const [isRegisteringAllowed, setIsRegisteringAllowed] = useState(true) // pegar do banco de dados

    const handleRegisteringAllowed = () =>{
        setIsRegisteringAllowed(!isRegisteringAllowed)
    }

    return (
        <div className={styles.users}>
            <Header />
            <div className={styles.usersContent}>
                <div className={styles.usersConteiner}>
                    <section className={styles.usersConteinerText}>
                        <span>
                            <p>REGISTERED USERS</p>
                            <p id={styles.qtdUsers}>0 USERS</p>
                        </span>
                        <span>
                            {isRegisteringAllowed ? ( 
                            <p>REGISTERING ALLOWED</p>
                            ) : (
                            <p>REGISTERING NOT ALLOWED</p>
                            )}
                            <p id={styles.changeBtn} onClick={handleRegisteringAllowed}>CHANGE</p>
                        </span>
                    </section>
                    <section className={styles.usersConteinerContent}>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                        <UserBox profilePic={exempleProfilePic} qtdEvaluations={10} registrationYear={2020} username={"JOAOZIN DO PNEU"}/>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}