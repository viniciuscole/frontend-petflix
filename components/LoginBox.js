import Image from "next/image"

import logoImg from "@/assets/logo.png"
import iconForgotPass from "@/assets/iconForgotPass.svg"
import iconSignUp from "@/assets/iconSignUp.svg"

import styles from '../styles/components/LoginBox.module.css'

export function LoginBox(){
    return(
        <div className={styles.main}>   
            <span className={styles.centerCircle}><div className={styles.topCircle}></div></span>
            
            <div className={styles.title}>LET'S GET STARTED</div>
            <div className={styles.subtitle}>ENTER YOUR CREDENTIALS TO ACCESS THE MOVIES</div>
            
            <form>
                <div className={styles.form}>
                    <input type="text" id="email" name="Email" className={styles.inputBox1} placeholder="EMAIL"></input>
                </div>

                <div className={styles.form}>
                    <input type="password" id="password" name="Password" className={styles.inputBox2} placeholder="PASSWORD"></input>
                </div>
            </form>
            
            <div className={styles.imageContainerForgot}>
                <a href={"/home"} className={styles.linkForgot}>
                    <Image src={iconForgotPass} id={styles.imageForgot}/>FORGOT PASSWORD
                </a>
            </div>
            
            <div className={styles.divButton}><button className={styles.button}>LOGIN</button></div>

            <div className={styles.imageContainerSignUp}>
                <a href={"/home"} className={styles.linkSignUp}>
                    <Image src={iconSignUp} id={styles.imageSignUp}/>SIGN UP
                </a>
            </div>

        </div>

    )
}
