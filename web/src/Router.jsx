import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Garantia from './Garantia';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/garantia" element={<Garantia />} />
      </Routes>
    </BrowserRouter>
  );
}
