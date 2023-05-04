// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Todos from './components/Todos/Todos';
import Form from './components/Form/Form'



function App() {
  return (
    <div className='App'>
      <NavBar />
    <Routes>
      <Route path='/' element={<Todos />} />
      <Route path='/form' element={<Form />} />
    </Routes>
    </div>
    );
  }
  
  export default App;
  
  // <div className="App">
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>
      // </div>

      // import Characters from './components/Characters/Characters/Characters';
      
      // <Route path='/home' elements={<Characters/>} />