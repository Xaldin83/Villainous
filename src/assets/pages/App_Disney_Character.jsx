import { useState } from 'react'
import { Link } from 'react-router-dom'


import styles from './styles/App_Disney.module.css'  // ← import CSS Module
import Header from '../../components/hearder'
import data from '../disney.json'

function App_Disney_Characters(){

    const [index1, setIndex1]=useState(0)
    const [index2, setIndex2]=useState(0)
    const [index3, setIndex3]=useState(0)
    const [index4, setIndex4]=useState(0)
    const [index5, setIndex5]=useState(0)
    const [index6, setIndex6]=useState(0)
    const [index7, setIndex7]=useState(0)
    const [index8, setIndex8]=useState(0)
    const [index9, setIndex9]=useState(0)


    function incrementIndex1(){
        index1+1>5?setIndex1(0):setIndex1(index1+1)
    }
    function decrementIndex1(){
        index1-1<0?setIndex1(5):setIndex1(index1-1)
    }
    function incrementIndex2(){
        index2+1>2?setIndex2(0):setIndex2(index2+1)
    }
    function decrementIndex2(){
        index2-1<0?setIndex2(2):setIndex2(index2-1)
    }
    function incrementIndex3(){
        index3+1>2?setIndex3(0):setIndex3(index3+1)
    }
    function decrementIndex3(){
        index3-1<0?setIndex3(2):setIndex3(index3-1)
    }
    function incrementIndex4(){
        index4+1>2?setIndex4(0):setIndex4(index4+1)
    }
    function decrementIndex4(){
        index4-1<0?setIndex4(2):setIndex4(index4-1)
    }
    function incrementIndex5(){
        index5+1>2?setIndex5(0):setIndex5(index5+1)
    }
    function decrementIndex5(){
        index5-1<0?setIndex5(2):setIndex5(index5-1)
    }
    function incrementIndex6(){
        index6+1>2?setIndex6(0):setIndex6(index6+1)
    }
    function decrementIndex6(){
        index6-1<0?setIndex6(2):setIndex6(index6-1)
    }
    function incrementIndex8(){
        index8+1>1?setIndex8(0):setIndex8(index8+1)
    }
    function decrementIndex8(){
        index8-1<0?setIndex8(1):setIndex8(index8-1)
    }
    function incrementIndex9(){
        index9+1>1?setIndex9(0):setIndex9(index9+1)
    }
    function decrementIndex9(){
        index9-1<0?setIndex9(1):setIndex9(index9-1)
    }
    
    return (
        <>
        <Header />
        <h1 className={styles.h1}>Voici la liste des boîtes de l'univers Disney</h1>
        
        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Quel Méchant sommeille en vous?</h2>
            <div>
                <img src="../img/disney/box/boite1.webp" alt="Boîte Quel Méchant sommeille en vous?" className = "imgBox"/>
                <div>
                    <button onClick={decrementIndex1}>❰</button>
                    <div>
                        <h3 className={styles.h1}>{data["boite1"][index1]}</h3>
                        <img src={`../img/disney/cart/${data["boite1"][index1]}.webp`} alt={`${data["boite1"][index1]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite1"][index1]}`} >Voir le Méchant</Link> */}
                    </div>
                    <button onClick={incrementIndex1}>❱</button>
                </div>
            </div>
        </article>

        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Mauvais jusqu'à l'os</h2>
            <div>
                <img src="../img/disney/box/boite2.webp" alt="Mauvais jusqu'à l'os" className = "imgBox"/>
                <div>
                    <button onClick={decrementIndex2}>❰</button>
                    <div>
                        <h3 className={styles.h1}>{data["boite2"][index2]}</h3>
                        <img src={`../img/disney/cart/${data["boite2"][index2]}.webp`} alt={`${data["boite2"][index2]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite2"][index2]}`} >Voir le Méchant</Link> */}
                    </div>
                    <button onClick={incrementIndex2}>❱</button>
                </div>
            </div>
        </article>

        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>La fin est proche !</h2>
            <div>
                <img src="../img/disney/box/boite3.webp" alt="La fin est proche !" className = "imgBox"/>
                <div>
                    <button onClick={decrementIndex3}>❰</button>
                    <div>
                        <h3 className={styles.h1}>{data["boite3"][index3]}</h3>
                        <img src={`../img/disney/cart/${data["boite3"][index3]}.webp`} alt={`${data["boite3"][index3]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite3"][index3]}`} >Voir le Méchant</Link> */}
                    </div>
                    <button onClick={incrementIndex3}>❱</button>
                </div>
            </div>
        </article>

        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Cruellement infecte</h2>
            <div>
                <img src="../img/disney/box/boite4.webp" alt="Cruellement infecte" className = "imgBox"/>
                <div>
                    <button onClick={decrementIndex4}>❰</button>
                    <div>
                        <h3 className={styles.h1}>{data["boite4"][index4]}</h3>
                        <img src={`../img/disney/cart/${data["boite4"][index4]}.webp`} alt={`${data["boite4"][index4]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite4"][index4]}`} >Voir le Méchant</Link> */}
                    </div>
                    <button onClick={incrementIndex4}>❱</button>
                </div>
            </div>
        </article>

        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Monstrueusement malsain</h2>
            <div>
                <img src="../img/disney/box/boite5.webp" alt="Monstrueusement malsain" className = "imgBox"/>
                <div>
                    <button onClick={decrementIndex5}>❰</button>
                    <div>
                        <h3 className={styles.h1}>{data["boite5"][index5]}</h3>
                        <img src={`../img/disney/cart/${data["boite5"][index5]}.webp`} alt={`${data["boite5"][index5]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite5"][index5]}`} >Voir le Méchant</Link> */}
                    </div>
                    <button onClick={incrementIndex5}>❱</button>
                </div>
            </div>
        </article>
    
        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Plus grand, Plus méchant</h2>
            <div>
                <img src="../img/disney/box/boite6.webp" alt="Plus grand, Plus méchant" className = "imgBox"/>
                <div>
                    <button onClick={decrementIndex6}>❰</button>
                    <div>
                        <h3 className={styles.h1}>{data["boite6"][index6]}</h3>
                        <img src={`../img/disney/cart/${data["boite6"][index6]}.webp`} alt={`${data["boite6"][index6]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite6"][index6]}`} >Voir le Méchant</Link> */}
                    </div>
                    <button onClick={incrementIndex6}>❱</button>
                </div>
            </div>
        </article>
    
        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Rempli d'effroi</h2>
            <div>
                <img src="../img/disney/box/boite7.webp" alt="Rempli d'effroi" className = "imgBox"/>
                <div>
                    <div>
                        <h3 className={styles.h1}>{data["boite7"][index7]}</h3>
                        <img src={`../img/disney/cart/${data["boite7"][index7]}.webp`} alt={`${data["boite7"][index7]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite7"][index7]}`} >Voir le Méchant</Link> */}
                    </div>
                </div>
            </div>
        </article>
        
        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Morsure sucrée</h2>
            <div>
                <img src="../img/disney/box/boite8.webp" alt="Morsure sucrée" className = "imgBox"/>
                <div>
                    <button onClick={decrementIndex8}>❰</button>
                    <div>
                        <h3 className={styles.h1}>{data["boite8"][index8]}</h3>
                        <img src={`../img/disney/cart/${data["boite8"][index8]}.webp`} alt={`${data["boite8"][index8]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite8"][index8]}`} >Voir le Méchant</Link> */}
                    </div>
                    <button onClick={incrementIndex8}>❱</button>
                </div>
            </div>
        </article>
        
        <article className={styles.articleBoxCarousel}>
            <h2 className={styles.h1}>Larmes de fond</h2>
            <div>
                <img src="../img/disney/box/boite9.webp" alt="Larmes de fond" className = "imgBox"/>
                <div>
                    <button onClick={decrementIndex9}>❰</button>
                    <div>
                        <h3 className={styles.h1}>{data["boite9"][index9]}</h3>
                        <img src={`../img/disney/cart/${data["boite9"][index9]}.webp`} alt={`${data["boite9"][index9]}`} />
                        {/* <Link className={styles.addButton} to={`/disney/${data["boite9"][index9]}`} >Voir le Méchant</Link> */}
                    </div>
                    <button onClick={incrementIndex9}>❱</button>
                </div>
            </div>
        </article>

        </>
    )
}

export default App_Disney_Characters;