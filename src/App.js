
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import About from './About';
import {NavLink } from 'react-router-dom';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
      <table style={({width:'60%'},{marginLeft:'38%'})}>
        <thead>
          <tr>
            <th>
              <h2>
                <NavLink to="/" style={({ isActive }) => ({
                  color: isActive ? 'red' : '#000'
                })}>Trang chủ</NavLink>
              </h2>
            </th>
            <td> </td>
            <th>
              <h2>
                <NavLink to="about" style={({ isActive }) => ({
                  color: isActive ? 'red' : '#000'
                })}>About</NavLink>
              </h2>
            </th>
          </tr>
        </thead>
      </table>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="detail/:dcm" element={<Detail />} />

      </Routes>
    </div>
  );
}

export default App;
