import styles from '@/styles/pages/Login.module.css'

import { LoginBox } from '@/components/LoginBox'

function Login(){
    return(
       <div className={styles.home}><LoginBox /></div>
    )
}

export default Login