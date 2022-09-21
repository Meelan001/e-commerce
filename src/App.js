import PaymentProcess from './components/paymentProcess';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Homepage from './pages/homepage';
import ProductDetailPage from './pages/ProductDetailPage';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/product_detail/:productSlug' element={<ProductDetailPage/>}/>
      <Route path='/paymentprocess' element={<PaymentProcess/>}/>
      
    </Routes>
   


    
    </>
  );
}

export default App;
