import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './index.css';
import LandingPage from './LandingPage';
import AddDevice from './AddDevice';
import reportWebVitals from './reportWebVitals';

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/addDevice" element={<AddDevice />} />
      </Routes>
    </Router>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App />
</React.StrictMode>
);
reportWebVitals();
