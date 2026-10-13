import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Star_Wars.module.css'  // ← import CSS Module


function Moff_Gideon(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/starwars/cart/Moff Gideon.webp" alt="Image de Moff Gideon" />
                    <div>
                        <h1 className={styles.h1}>Moff Gideon</h1>
                        <h2 className={styles.h2}>Si vous me demandez si vous pouvez vous fier à moi, vous ne pouvez pas. Je serai ravi de ne pas tenir ma promesse et regarder tous mourir.</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>The Mandalorian</h2>
                    <h3 className={styles.h3}>2019</h3>
                    <p>Cinq ans après la chute de l'Empire et la fondation de la Nouvelle République, le métier de chasseur de primes ne paie plus.<br/>Le Mandalorien, surnommé Mando, connu pour être un des plus redoutables chasseurs de primes, accepte un contrat non officiel.</p>
                </div>
                <img src="../img/starwars/poster/The_Mandalorian.webp" alt="Affiche de la série The Mandalorian" />
            </div>
        </div>
    )
}

export default Moff_Gideon;