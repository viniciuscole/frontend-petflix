import styles from '@/styles/pages/Login.module.css'

import { LoginBox } from '@/components/LoginBox'
import { PromotionalPanel } from '@/components/PromotionalPanel'

function Login(){
    return(
        <div className={styles.main}>
            <PromotionalPanel/>
            <LoginBox/>
        </div>
    )
}

export default Login