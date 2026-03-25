import Navbar from "../../components/hearder"
import { Link } from "react-router-dom";

import styles from './styles/Home.module.css'  // ← import CSS Module



document.title="Villainous"
export default function Home(){
    return(
        <>
        <Navbar/>
        <h1 className={styles.h1}>Bienvenue</h1>

        <h2 className={styles.h2}>Veuillez selectionner votre univers</h2>

        <div className={styles.buttonMenus}>
            <Link to="/disney" className={styles.Disney}><img src="./img/Logo.webp" alt="Logo Disney Villainous" /></Link>
            <Link to="/marvel" className={styles.Marvel}><img src="./img/Logo_Marvel.webp" alt="Logo Marvel Villainous" /></Link>
            <Link to="/starwars" className={styles.StarWars}><img src="./img/Logo_Star_Wars.webp" alt="Logo Star Wars Villainous" /></Link>
        </div>
        </>
    )
}