/* IMPORT STYLES */
import './App.scss';

/* IMPORT REACT ROUTER */
import { Route, Routes } from 'react-router-dom';

/* IMPORT COMPONENTS */
import FooterComponent from './layout/FooterComponent/FooterComponent';
import HeaderComponent from './layout/HeaderComponent/HeaderComponent';

/* IMPORT PAGES */
import HomePage from './pages/HomePage/HomePage';
import FilmsPage from './pages/FilmsPages/FilmsPage';
import SeriesPage from './pages/SeriesPage/SeriesPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import LoginPage from './pages/LoginPage/LoginPage';


function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <main className='main'>
        <div className='main-container container'>
          <Routes>
            <Route exact path='/' element={<HomePage/>}></Route>
            <Route exact path='/films' element={<FilmsPage/>}></Route>
            <Route exact path='/series' element={<SeriesPage/>}></Route>
            <Route exact path='/favourites' element={<FavouritesPage/>}></Route>
            <Route exact path='/about' element={<AboutPage/>}></Route>
            <Route exact path='/login' element={<LoginPage/>}></Route>
          </Routes>
        </div>
      </main>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
