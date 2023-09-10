import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import About from './components/About';
import Travel from './components/Travel';
import Singin from './2023-09-04/Singin';
import Login from './2023-09-04/Login';
// import Rooms from './components/Rooms';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
<Routes>
  <Route path='/' element={<App/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/travel' element={<Travel/>}/>
  {/* <Route path='/Rooms' element={<Rooms/>}/> */}
 <Route path='/Singin' element={<Singin/>}/>
  <Route path='/Login' element={<Login/>}/>

</Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  