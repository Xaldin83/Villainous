import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Disney.module.css'  // ← import CSS Module


function Captain_Hook(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/disney/cart/Capitaine Crochet.webp" alt="Image de Capitaine Crochet" />
                    <div>
                        <h1 className={styles.h1}>Capitaine Crochet</h1>
                        <h2 className={styles.h2}>Doublez les charges et raccourcissez les amorces !</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>Peter Pan</h2>
                    <h3 className={styles.h3}>1953</h3>
                    <p>Peter Pan, un petit garçon qui refuse de grandir, rend visite à Wendy dans le cœur de Londres et la convainc de venir, avec ses frères, Michel et Jean, dans le pays imaginaire. <br/> C'est là-bas que vivent les enfants perdus, la fée clochette et le redoutable Capitaine Crochet, l'ennemi juré de Peter ayant promis de se venger!</p>
                </div>
                <img src="../img/disney/poster/Peter-Pan.webp" alt="Affiche du film d'animation Disney Peter Pan" />
            </div>
        </div>
    )
}

export default Captain_Hook;