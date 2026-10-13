import Navbar from '../../../components/hearder';
import styles from '../styles/Char_Star_Wars.module.css'  // ← import CSS Module


function General_Grievous(){

    return(
        <div className={styles.pageWrapper}>
            <Navbar/>
            <div className={styles.presentation}>
                <img src="../img/starwars/cart/General Grievous.webp" alt="Image de General Grievous" />
                    <div>
                        <h1 className={styles.h1}>General Grievous</h1>
                        <h2 className={styles.h2}>Je vais m'occuper de ce maudit Jedi moi-même.</h2>
                    </div>
            </div>

            <div className={styles.presentation}>
                <div>
                    <h2 className={styles.h2}>Star Wars:<br/>Clone Wars</h2>
                    <h3 className={styles.h3}>2003</h3>
                    <p>Alors que la République galactique, en plein déclin, et les Jedi sont assiégés par la Confédération des systèmes indépendants (les Séparatistes) et les Sith. <br/>Tandis que la guerre fait rage, de plus en plus de planètes échappent au contrôle de la République.</p>
                </div>
                <img src="../img/starwars/poster/Clone-Wars.webp" alt="Affiche de la série Star Wars: Clone Wars" />
            </div>
        </div>
    )
}

export default General_Grievous;