import Helmet from 'react-helmet'
import styles from "../styles/components/LoginBox.module.css"

export function LoginBox(){
    return(
        <div className={styles.main}>
            <div className={styles.mainCard}>
            
            <Helmet>
                <meta name="theme-color" content="#000000" />
            </Helmet>

                <div className={styles.circle}>

                    <div id={styles.topCircle}></div>

                </div>

                <div className={styles.texts}>

                    <p id={styles.mainTitle}>LET’S GET STARTED</p>
                    <p id={styles.subtitle}>ENTER YOUR CREDENTIALS TO ACCESS THE MOVIES</p>

                </div>
                
                <form className={styles.form}>
                
                    <input type="text" id={styles.email} name="Email" placeholder="EMAIL"  autocomplete="off"></input>
                    <input type="password" id={styles.password} name="Password" placeholder="PASSWORD"  autocomplete="off"></input>

                    <a href={'./home'}id={styles.forgotPassword}>
                        <div id={styles.queryForgot}></div>
                        FORGOT PASSWORD
                    </a>

                    <button id={styles.button}>LOGIN</button>

                    <a href={'./home'}id={styles.signUp}>
                        <div id={styles.imgSignUp}></div>
                        SIGN UP
                    </a>
                
                </form>

                <div className={styles.circle}>

                    <div id={styles.bottomCircle}></div>

                </div>

            </div>

        </div>
    )
}