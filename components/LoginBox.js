import Image from "next/image"

import logoImg from "@/assets/logo.png"

import styles from '../styles/components/LoginBox.module.css'

export function LoginBox(){
    return(
        <div className={styles.main}>
            <div className={styles.title}>LET'S GET STARTED</div>
            <div className={styles.subtitle}>ENTER YOUR CREDENTIALS TO ACCESS THE MOVIES</div>
            
            <form>
                <p className={styles.form}>
                    <input type="text" id="email" name="Email" className={styles.inputBox}></input>
                </p>

                <p className={styles.form}>
                    <input type="text" id="password" name="Password" className={styles.inputBox}></input>
                </p>
            </form>
            
            <div className={styles.forgotPassword}>
                <p><a href={"/home"} id={styles.linkForgot}>FORGOT PASSWORD</a></p>
            </div>
        </div>

    )
}