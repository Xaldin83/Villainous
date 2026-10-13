import { Routes, Route } from 'react-router-dom'

// import './App.css'
import Home from './assets/pages/Home'

import App_Disney from './assets/pages/App_Disney'
import Maleficient from './assets/pages/characters/Maleficient.jsx'
import Captain_Hook from './assets/pages/characters/Captain_Hook.jsx'
import Jafar from './assets/pages/characters/Jafar.jsx'
import Prince_Jean from './assets/pages/characters/Prince_Jean.jsx'
import Queen_of_Hearts from './assets/pages/characters/Queen_of_Hearts.jsx'
import Ursula from './assets/pages/characters/Ursula.jsx'

import App_Marvel from './assets/pages/App_Marvel'
import App_Marvel_Characters from './assets/pages/App_Marvel_Character'
import App_Star_Wars from './assets/pages/App_Star_Wars'
import App_Disney_Characters from './assets/pages/App_Disney_Character'
import App_Star_Wars_Characters from './assets/pages/App_Star_Wars_Characters'
import Darth_Vader from './assets/pages/characters/Darth_Vader.jsx'
import Asajj_Ventress from './assets/pages/characters/Asajj_Ventress.jsx'
import General_Grievous from './assets/pages/characters/General_Grievous.jsx'
import Kylo_Ren from './assets/pages/characters/Kylo_Ren.jsx'
import Moff_Gideon from './assets/pages/characters/Moff_Gideon.jsx'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/disney' element={<App_Disney/>}/>
      <Route path='/disney/boxs' element={<App_Disney_Characters/>}/>
      <Route path='/disney/Maléfique' element={<Maleficient/>}/>
      <Route path='/disney/Capitaine Crochet' element={<Captain_Hook/>}/>
      <Route path='/disney/Jafar' element={<Jafar/>}/>
      <Route path='/disney/Prince Jean' element={<Prince_Jean/>}/>
      <Route path='/disney/La reine de coeur' element={<Queen_of_Hearts/>}/>
      <Route path='/disney/Ursula' element={<Ursula/>}/>
      
      
      <Route path='/marvel' element={<App_Marvel/>}/>
      <Route path='/marvel/boxs' element={<App_Marvel_Characters/>}/>

      <Route path='/starwars' element={<App_Star_Wars/>}/>
      <Route path='/starwars/Dark Vador' element={<Darth_Vader/>}/>
      <Route path='/starwars/Asajj Ventress' element={<Asajj_Ventress/>}/>
      <Route path='/starwars/General Grievous' element={<General_Grievous/>}/>
      <Route path='/starwars/Kylo Ren' element={<Kylo_Ren/>}/>
      <Route path='/starwars/Moff Gideon' element={<Moff_Gideon/>}/>

      <Route path='/starwars/boxs' element={<App_Star_Wars_Characters/>}/>
      <Route path='/*' element={<Home/>}/>


    </Routes>
  )
}

export default App