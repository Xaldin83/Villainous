import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Star_Wars.module.css'  // ← import CSS Module


function Darth_Vader(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/starwars/cart/Dark Vador.webp" alt="Image de Dark Vador" />
                    <div>
                        <h1 className={styles.h1}>Dark Vador</h1>
                        <h2 className={styles.h2}>Tu sous-estimes le pouvoir du Côté Obscur. Si tu refuses de te battre, tu devras affronter ton destin.</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>Star Wars<br/> épisode IV : Un nouvel espoir</h2>
                    <h3 className={styles.h3}>1977</h3>
                    <p>Alors que l'Alliance rebelle tente de détruire l'Étoile noire, arme suprême du despotique Empire galactique, Luke Skywalker, jeune ouvrier agricole, intercepte un appel à l'aide de la princesse Leia.<br/>Il se lance ainsi dans une mission courageuse afin de la délivrer de Dark Vador et de l'Empire.</p>
                </div>
                <img src="../img/starwars/poster/Un-nouvel-espoir.webp" alt="Affiche du film Star Wars, épisode IV : Un nouvel espoir" />
            </div>
        </div>
    )
}

export default Darth_Vader;