import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Disney.module.css'  // ← import CSS Module


function Prince_Jean(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/disney/cart/Prince Jean.webp" alt="Image de Prince Jean" />
                    <div>
                        <h1 className={styles.h1}>Prince Jean</h1>
                        <h2 className={styles.h2}>Je dérobe aux pauvres pour nourrir les riches !</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>Robin des Bois</h2>
                    <h3 className={styles.h3}>1973</h3>
                    <p>Pendant que le roi Richard combat hors de l'Angleterre, son frère, le prince Jean, écrase les bons habitants de Nottingham d'impôts.<br/>Mais il se heurte à l'opposition farouche de l'habile Robin des Bois et de ses joyeux compagnons.</p>
                </div>
                <img src="../img/disney/poster/Robin-des-Bois.webp" alt="Affiche du film d'animation Disney Robin des Bois" />
            </div>
        </div>
    )
}

export default Prince_Jean;