import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './pages/auth'
import Registration from './pages/reg';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Auth /> } />
        <Route path='/reg' element={ <Registration /> } />
        <Route path='/home' element={ <Home /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;