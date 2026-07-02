import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Disney.module.css'  // ← import CSS Module


function Queen_of_Hearts(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/disney/cart/La reine de coeur.webp" alt="Image de La reine de coeur" />
                    <div>
                        <h1 className={styles.h1}>Reine de Coeur</h1>
                        <h2 className={styles.h2}>Si je perdais mon sang-froid, vous perdriez la tête !</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>Alice aux Pays des Merveilles</h2>
                    <h3 className={styles.h3}>1951</h3>
                    <p>En suivant un lapin blanc très pressé, Alice pénètre au pays des merveilles, où elle rencontre les plus étranges créatures :<br/>Tweedle Dum et Tweedle Dee, une chenille férue de poésie, le chapelier toqué et le lièvre de mars qui fêtent son « non-anniversaire » en prenant le thé, ainsi que la Reine de Coeur, bien décidé à faire tomber la tête d'Alice.</p>
                </div>
                <img src="../img/disney/poster/Alice-aux-Pays-des-Merveilles.webp" alt="Affiche du film d'animation Disney Alice aux Pays des Merveilles" />
            </div>
        </div>
    )
}

export default Queen_of_Hearts;