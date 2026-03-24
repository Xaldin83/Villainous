import { useState } from 'react'

import './App.css'
import data from './assets/disney.json'
import Header from './components/hearder'

function App() {
  const [count, setCount] = useState(0)
  const [listCharacter, setListCharacter]=useState([])
  const [listBox, setListBox]=useState([])
  const [index, setIndex]=useState(1)
  const [max,setMax]=useState(9)

  function searchIndex(val){
    for(let i = 0;i<listBox.length;i++){
      if(listBox[i]===val)
        console.log(i)
        return i
    }
    return -1
  }

  function addBox(){
    const liste = listBox
    console.log(listBox.includes(index))
    if(!listBox.includes(index))
      liste.push(index)
    else{
      let search = searchIndex(index)
      if (search!=-1){
        liste.splice(searchIndex(index),1)}}
    setListBox(liste)
  }

  return (
    <>
    <Header></Header>
      <h1>Programmez votre partie de Villainous Disney</h1>
      
      <div className='carousel'>
        <button onClick={index>1?()=>setIndex(index-1):()=>setIndex(max)}>❰</button>
        <article className='articleCarousel'>
          <img src={`./img/box/boite${index}.webp`} alt="Image Boite" />
          <button onClick={()=>{addBox(),setIndex(index+1)}} className='addButton'>{listBox.includes(index)?"Déjà ajouté":"L'avez vous?"}</button>
        </article>
        <button onClick={index<max?()=>setIndex(index+1):()=>setIndex(1)}>❱</button>
      </div>

      <section className='numberPlayer'>

        <button
          className="counter"
          onClick={count===0?() => setCount((count) => count):() => setCount((count) => count-1)}
        >
        -
        </button>
        <p>Vous voulez jouer avec combien de joueurs ?<br/>{count}</p>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
        +
        </button>
      </section>

      <section className='div-luncher'>
        {count!=0&&listBox.length!=0&&<button className='luncher' onClick={console.log(listBox)}>Lancer la sélection</button>}
        
      </section>



    </>
  )
}

export default App
