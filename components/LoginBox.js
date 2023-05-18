import Helmet from 'react-helmet'
import styles from "../styles/components/LoginBox.module.css"
import { useState } from 'react'
import { setToken } from '@/services/cookies';
import { api } from '@/services/api';
import { useRouter } from 'next/router';

export function LoginBox(){
    const router = useRouter();
    const [user, setUser] = useState({email: "", password: ""});

    const handleChangeEmail = (e) => {
        setUser({...user, email: e.target.value})
    }

    const handleChangePassword = (e) => {
        setUser({...user, password: e.target.value})
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/api/login", user)
            setToken(response.data.token)
            router.push('/home')
        } catch (err) {
            setUser({...user, password: ""})
        }
    }

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
                
                    <input type="text" classname="input" id={styles.email} name="Email" value={user.email} placeholder="EMAIL" onChange={handleChangeEmail}></input>
                    <input type="password" classname="input" id={styles.password} name="Password" value={user.password} placeholder="PASSWORD" onChange={handleChangePassword}></input>

                    <a href={'./home'}id={styles.forgotPassword}>
                        <div id={styles.queryForgot}></div>
                        FORGOT PASSWORD
                    </a>

                    <button id={styles.button} onClick={handleLogin}>LOGIN</button>

                
                    <a href={'./signup'}id={styles.signUp}>
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