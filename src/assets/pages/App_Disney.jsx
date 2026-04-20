import { useState } from 'react'

import styles from './styles/App_Disney.module.css'  // ← import CSS Module
import data from '../disney.json'
import Header from '../../components/hearder'
import Modal from '../../components/modal'

function App_Disney() {
  const [count, setCount] = useState(0)
  const [listCharacter, setListCharacter] = useState([])
  const [listBox, setListBox] = useState([])
  const [listPlayer, setListPlayer] = useState([])
  const [index, setIndex] = useState(1)
  const [max, setMax] = useState(9)
  const [isOpen, setIsOpen] = useState(false)
  const [messageBoxError, setMessageBoxError] = useState(true)
  const [idJoueur, setIdJoueur] = useState(1)
  const [playerMessage, setPlayerMessage] = useState("")

  function searchIndexBox(val) {
    for (let i = 0; i < listBox.length; i++) {
      if (listBox[i] === val) return i
    }
    return -1
  }

  function searchIndexCharacter(val, listChoiseCharacter) {
    for (let i = 0; i < listChoiseCharacter.length; i++) {
      if (listChoiseCharacter[i] === val) return i
    }
    return -1
  }

  function addBox() {
    const liste = listBox
    if (!listBox.includes(index))
      liste.push(index)
    else {
      let search = searchIndexBox(index)
      if (search != -1) {
        liste.splice(searchIndexBox(index), 1)
      }
    }
    setListBox(liste)
  }

  function addCharacter() {
    setListCharacter([])
    for (let i = 0; i < listBox.length; i++) {
      let name = "boite" + listBox[i]
      for (let j = 0; j < data[name].length; j++) {
        listCharacter.push(data[name][j])
      }
    }
    setIsOpen(true)
    setMessageBoxError(false)
    if (listCharacter.length < count) {
      setMessageBoxError(true)
    }
    setListCharacter(listCharacter)
    affichagePlayerCharacter()
  }

  function affichagePlayerCharacter() {
    const listPlayer = []
    const listChoiseCharacter = listCharacter
    for (let i = 0; i < count; i++) {
      listPlayer.push(listChoiseCharacter[Math.floor(Math.random() * listChoiseCharacter.length)])
      let indexCharacter = searchIndexCharacter(listPlayer[listPlayer.length - 1], listChoiseCharacter)
      listChoiseCharacter.splice(indexCharacter, 1)
    }
    setPlayerMessage(`<p>Tout vas bien, ${listPlayer}</p>`)
    setListPlayer(listPlayer)
  }

  function handleIdPlayerInc() {
    idJoueur + 1 > count ? setIdJoueur(1) : setIdJoueur(idJoueur + 1)
  }

  function handleIdPlayerDec() {
    idJoueur - 1 === 0 ? setIdJoueur(count) : setIdJoueur(idJoueur - 1)
  }

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <h1 className={styles.h1}>Programmez votre partie de Villainous Disney</h1>

      <div className={styles.carousel}>
        <button onClick={index > 1 ? () => setIndex(index - 1) : () => setIndex(max)}>❰</button>
        <article className={styles.articleCarousel}>
          <img src={`./img/disney/box/boite${index}.webp`} alt="Image Boite" />
          <button
            onClick={() => { addBox(); index + 1 > max ? setIndex(1) : setIndex(index + 1) }}
            className={styles.addButton}
          >
            {listBox.includes(index) ? "Déjà ajouté" : "L'avez vous?"}
          </button>
        </article>
        <button onClick={index < max ? () => setIndex(index + 1) : () => setIndex(1)}>❱</button>
      </div>

      <section className={styles.numberPlayer}>
        <button
          className={styles.counter}
          onClick={count === 0 ? () => setCount(count) : () => setCount(count - 1)}
        >
          -
        </button>
        <p>Vous voulez jouer avec combien de joueurs ?<br />{count}</p>
        <button
          className={styles.counter}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </section>

      <section className={styles.divLuncher}>
        {count != 0 && listBox.length != 0 ? (
          <button className={styles.luncher} onClick={() => addCharacter()}>
            Lancer la sélection
          </button>
        ):(<button className={styles.luncherDisactive} disabled>
            Lancer la sélection
          </button>)}
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className={styles.modalInnerLayout}>
            {messageBoxError ? (
              <p className={styles.messageError}>Nombre de boîtes insuffisant</p>
            ) : (
              <>
                <button className={styles.navBtn} onClick={handleIdPlayerDec}>❰</button>

                <div className={styles.characterInfo}>
                  <h2>Joueur {idJoueur}</h2>
                  <p className={styles.characterName}>{listPlayer[idJoueur - 1]}</p>
                  <img
                    src={`./img/disney/cart/${listPlayer[idJoueur - 1]}.webp`}
                    alt={listPlayer[idJoueur - 1]}
                  />
                </div>

                <button className={styles.navBtn} onClick={handleIdPlayerInc}>❱</button>
              </>
            )}
          </div>
        </Modal>
      </section>
    </div>
  )
}

export default App_Disney