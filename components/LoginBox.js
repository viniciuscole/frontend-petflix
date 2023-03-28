import Image from "next/image"

import logoImg from "@/assets/logo.png"
import iconForgotPass from "@/assets/iconForgotPass.svg"

import styles from '../styles/components/LoginBox.module.css'

export function LoginBox(){
    return(
        <div className={styles.main}>   
            <div className={styles.title}>LET'S GET STARTED</div>
            <p className={styles.subtitle}>ENTER YOUR CREDENTIALS TO ACCESS THE MOVIES</p>
            
            <form>
                <div className={styles.form}>
                    <input type="text" id="email" name="Email" className={styles.inputBox1} placeholder="EMAIL"></input>
                </div>

                <div className={styles.form}>
                    <input type="password" id="password" name="Password" className={styles.inputBox2} placeholder="PASSWORD"></input>
                </div>
            </form>
            
            <div className={styles.forgotPassword}>
                <p>
                    <Image src={iconForgotPass} className={styles.imageForgot} />
                    <a href={"/home"} id={styles.linkForgot}>FORGOT PASSWORD</a>
                </p>
            </div>

            <div className={styles.divButton}><button className={styles.button}>LOGIN</button></div>

        </div>

    )
}
