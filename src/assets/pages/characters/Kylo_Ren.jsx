import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Star_Wars.module.css'  // ← import CSS Module


function Kylo_Ren(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/starwars/cart/Kylo Ren.webp" alt="Image de Kylo Ren" />
                    <div>
                        <h1 className={styles.h1}>Kylo Ren</h1>
                        <h2 className={styles.h2}>Laisse le passé mourir. Tue-le s'il le faut. C'est comme ça que tu deviendras qui tu es vraiment.</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>Star Wars<br/> épisode VII : Le réveil de la Force</h2>
                    <h3 className={styles.h3}>2015</h3>
                    <p>Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l'oppression.<br/>Les membres de l'Alliance rebelle, devenus la "Résistance," combattent les vestiges de l'Empire réunis sous la bannière du "Premier Ordre".</p>
                </div>
                <img src="../img/starwars/poster/Le-réveil-de-la-force.webp" alt="Affiche du film Star Wars, épisode VII : Le réveil de la Force" />
            </div>
        </div>
    )
}

export default Kylo_Ren;