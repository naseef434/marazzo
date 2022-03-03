import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Home from "../components/Home";
import Products from '../components/Products';
export default function Auth() {
  
  return (
   
      <Router>
      <Routes>
    
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
       
      </Routes>
    </Router>
   
    
  );
  
}
