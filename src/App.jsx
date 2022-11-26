//import './App.css'
import FormNewOpenContainer from './components/FormNewContainer/FormNewOpenContainer'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar';
import OpenedContainerUI from './components/OpenedContainerListUI/OpenedContainerListUI';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  let jobNumber=`3333`

  return (
    <div className="App">
      <NavBar />
      <Home />
      <FormNewOpenContainer />
      <OpenedContainerUI />
    </div>
  )
}

export default App
