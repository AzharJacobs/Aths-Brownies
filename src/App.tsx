import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './cart';
import Layout from './Layout';
import Home from './Home';
import OrderPage from './OrderPage';
import CheckoutPage from './CheckoutPage';
import EnquiryPage from './EnquiryPage';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}
