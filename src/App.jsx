import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/UI/ItemListContainer/ItemListContainer';
import DetalleUI from './components/UI/DetalleUI/DetalleUI';
import CarritoUI from './components/UI/CarritoUI/CarritoUI';


import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './context/Context';

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/detalle/:productoId' element={<DetalleUI />}/>
          <Route path='/carrito' element={<CarritoUI/>}/>
          
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
          
          
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
