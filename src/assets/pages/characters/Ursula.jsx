import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Disney.module.css'  // ← import CSS Module


function Ursula(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/disney/cart/Ursula.webp" alt="Image de Ursula" />
                    <div>
                        <h1 className={styles.h1}>Ursula</h1>
                        <h2 className={styles.h2}>Je suis la souveraine de tous les océans ! Les vagues obéissent à mes moindres désirs !</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>La Petite Sirène</h2>
                    <h3 className={styles.h3}>1989</h3>
                    <p>Ariel, la petite Sirène, a la plus belle voix des océans, mais elle ne rêve que du prince Eric et du monde des humains. Ursula, la Sorcière des mers, lui propose un terrible marché.<br/>Saura-t-elle se sortir de ses griffes ? Trouvera-t-elle le moyen de réaliser ses rêves ?</p>
                </div>
                <img src="../img/disney/poster/La-Petite-Sirène.webp" alt="Affiche du film d'animation Disney La Petite Sirène" />
            </div>
        </div>
    )
}

export default Ursula;