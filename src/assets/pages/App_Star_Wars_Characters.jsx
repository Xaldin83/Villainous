import { useState } from 'react'
import { Link } from 'react-router-dom'


import styles from './styles/App_Star_Wars.module.css'  // ← import CSS Module
import Header from '../../components/hearder'
import data from '../starwars.json'

function App_Star_Wars_Characters(){

    const [index1, setIndex1]=useState(0)
    const [index2, setIndex2]=useState(0)


    function incrementIndex1(){
        index1+1>4?setIndex1(0):setIndex1(index1+1)
    }
    function decrementIndex1(){
        index1-1<0?setIndex1(4):setIndex1(index1-1)
    }
    function incrementIndex2(){
        index2+1>2?setIndex2(0):setIndex2(index2+1)
    }
    function decrementIndex2(){
        index2-1<0?setIndex2(2):setIndex2(index2-1)
    }
    
    return (
        <>
        <Header />
        <h1 className={styles.h1}>Voici la liste des boîtes de l'univers Star Wars</h1>
        
        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Le Pouvoir du côté obscur !</h2>
            <div>
                <img src="../img/starwars/box/boite1.webp" alt="Boîte Le Pouvoir du côté obscur !" className = "imgBox"/>
                <div>
                    <h3 className={styles.h1}>{data["boite1"][index1]}</h3>
                    <div>
                        <button onClick={decrementIndex1}>❰</button>
                        <img src={`../img/starwars/cart/${data["boite1"][index1]}.webp`} alt={`${data["boite1"][index1]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite1"][index1]}`} >Voir le Méchant</Link> */}
                        <button onClick={incrementIndex1}>❱</button>
                    </div>
                </div>
            </div>
        </article>

        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Vermine et Trahison</h2>
            <div>
                <img src="../img/starwars/box/boite2.webp" alt="Vermine et Trahison" className = "imgBox"/>
                <div>
                    <h3 className={styles.h1}>{data["boite2"][index2]}</h3>
                    <div>
                        <button onClick={decrementIndex2}>❰</button>
                        <img src={`../img/starwars/cart/${data["boite2"][index2]}.webp`} alt={`${data["boite2"][index2]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite2"][index2]}`} >Voir le Méchant</Link> */}
                        <button onClick={incrementIndex2}>❱</button>
                    </div>
                </div>
            </div>
        </article>

        </>
    )
}

export default App_Star_Wars_Characters;