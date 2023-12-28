
import './style.scss'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './pages/Home';
import Layout from './Layout'; 
import Home from './pages/Home';
import About from './pages/About';
import Apply from './pages/Apply';
import Academics from './pages/Academics';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='apply' element={< Apply/>} />
      <Route path='academics' element={<Academics/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
