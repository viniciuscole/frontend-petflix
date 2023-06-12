
import Image from "next/image";
import logoPetflix from "@/assets/LOGOPETFLIX.svg"
import styles from "@/styles/components/PromotionalPanel.module.css"
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";

export function PromotionalPanel(){
    return(
        <div className={styles.main}>
            <section className={styles.head}>
                <Image src={logoPetflix} id={styles.petflix}/>

                <div id={styles.separator}></div>

                <div id={styles.logoText}>LOGIN</div>
            </section>

            <section className={styles.panel}>
                <div id={styles.video}></div>
            </section>

            <section className={styles.phrase}>
                <div id={styles.effectPhrase}>“There’s something more important than logic: imagination.“</div>
                <div id={styles.author}>ALFRED HITCHCOCK</div>
            </section>

        </div>
    );
}