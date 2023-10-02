import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Validation from './components/Validation';
import BasicForm from './components/BasicForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<BasicForm/>}></Route>
          <Route exact path="/validationform" element={<Validation/>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
