import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Edit from "./Pages/Edit";
import New from "./Pages/New";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";

import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
          <main>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/donuts' element={<Index />} />
              <Route path='/donuts/new' element={<New />} />
              <Route path='/donuts/:id' element={<Show />} />
              <Route path='/donuts/:id/edit' element={<Edit />} />
              <Route path='*' element={<FourOFour />} />
            </Routes>
          </main>
      </Router>
    </div>
  );
}

export default App;
