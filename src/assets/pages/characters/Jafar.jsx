import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Disney.module.css'  // ← import CSS Module


function Jafar(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/disney/cart/Jafar.webp" alt="Image de Jafar" />
                    <div>
                        <h1 className={styles.h1}>Jafar</h1>
                        <h2 className={styles.h2}>Nous sommes sous un ordre nouveau : mon ordre ! Je vais enfin vous voir à genoux devant moi !</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>Aladdin</h2>
                    <h3 className={styles.h3}>1992</h3>
                    <p>À Agrabah, Aladdin, un jeune orphelin vivant de petits larcins, tombe amoureux de la princesse Jasmine et cherche un moyen de gagner son cœur malgré sa condition modeste.<br/>Pendant ce temps, le vizir Jafar manipule Aladdin pour récupérer une lampe magique cachée dans une caverne,  que seul le jeune homme au cœur pur peut pénétrer.</p>
                </div>
                <img src="../img/disney/poster/Aladdin.webp" alt="Affiche du film d'animation Disney Aladdin" />
            </div>
        </div>
    )
}

export default Jafar;