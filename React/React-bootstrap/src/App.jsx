import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;

