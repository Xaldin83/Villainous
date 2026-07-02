import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Disney.module.css'  // ← import CSS Module


function Maleficent(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/disney/cart/Maléfique.webp" alt="Image de Maléfique" />
                    <div>
                        <h1 className={styles.h1}>Maléfique</h1>
                        <h2 className={styles.h2}>Sache que tu as eu tort de me défier, moi et toutes les forces de l'Enfer !</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>La Belle au Bois Dormant</h2>
                    <h3 className={styles.h3}>1959</h3>
                    <p>La princesse Aurore, victime d'un sort que lui a jeté la sorcière Maléfique, s'est endormie d'un profond sommeil dont seul le baiser d'un prince peut l'éveiller.<br/>Ses Marraines, les fées Pimprenelle, Flora et Pâquerette unissent leurs pouvoirs magiques pour aider le prince Phillippe à combattre la redoutable Maléfique et sauver Aurore.</p>
                </div>
                <img src="../img/disney/poster/La-Belle-au-Bois-Dormant.webp" alt="Affiche du film d'animation Disney La Belle au Bois dormant" />
            </div>
        </div>
    )
}

export default Maleficent;