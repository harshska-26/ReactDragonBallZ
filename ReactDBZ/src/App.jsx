import { Route, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './pages/HomePage/home.page'
import Layout from './Layouts/Layout';
import { CharCard } from './components/CharCard/CharCard.Component';
import { PlanetCard } from './components/PlanetCard/PlanetCard.component';
import { Planets } from './pages/Planets/planets.page';
import { Characters } from './pages/Characters/characters.page';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route path='/' element={<HomePage />} />
      <Route path="/characters" element={<CharCard/>} />
      <Route path="/planets" element={<PlanetCard/>} />
      <Route path='/eachplanet' element={<Planets/>} />
      <Route path='/eachcharacter' element={<Characters/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
