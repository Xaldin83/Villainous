import { Routes, Route } from 'react-router-dom'

// import './App.css'
import App_Disney from './assets/pages/App_Disney'
import App_Marvel from './assets/pages/App_Marvel'
import App_Star_Wars from './assets/pages/App_Star_Wars'
import Home from './assets/pages/Home'
import App_Disney_Characters from './assets/pages/App_Disney_Character'
import Maleficent from './assets/pages/characters/Maleficient'
import App_Star_Wars_Characters from './assets/pages/App_Star_Wars_Characters'
import App_Marvel_Characters from './assets/pages/App_Marvel_Character'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/disney' element={<App_Disney/>}/>
      <Route path='/disney/boxs' element={<App_Disney_Characters/>}/>
      
      
      <Route path='/marvel' element={<App_Marvel/>}/>
      <Route path='/marvel/boxs' element={<App_Marvel_Characters/>}/>

      <Route path='/starwars' element={<App_Star_Wars/>}/>
      <Route path='/starwars/boxs' element={<App_Star_Wars_Characters/>}/>

    </Routes>
  )
}

export default App