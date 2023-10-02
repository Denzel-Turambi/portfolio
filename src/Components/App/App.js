import './App.css';
import Nav from '../Nav/Nav';
import Welcome from '../Welcome/Welcome';
import { Routes, Route } from 'react-router-dom';
import About from '../About/About';

function App() {
  return (
    <main>
      <Welcome path="/" />
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  )
}

export default App;
