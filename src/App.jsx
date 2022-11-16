import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import ProductDetails from './Pages/Product/ProductDetails';




export default function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/productdetails" element={<ProductDetails />} />

          

          
      </Routes>
    </BrowserRouter>
        

  )
}