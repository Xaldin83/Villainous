import { Routes, Route } from 'react-router-dom'

// import './App.css'
import App_Disney from './assets/pages/App_Disney'
import App_Marvel from './assets/pages/App_Marvel'
import App_StarWars from './assets/pages/App_StarWars'
import Home from './assets/pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/disney' element={<App_Disney/>}/>
      <Route path='/marvel' element={<App_Marvel/>}/>
      <Route path='/starwars' element={<App_StarWars/>}/>
    </Routes>
  )
}

export default App