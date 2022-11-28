import AuthProvider from "./contexts/auth";
import MainPage from './MainPage/MainPage';
import ProductPage from './ProductPage/ProductPage';
import CartPage from './CartPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from "../Assets/styles/GlobalStyles"


function App() {
   return (
      <AuthProvider>
         <BrowserRouter>
            <GlobalStyle/>
               <Routes>
                  <Route path="/" element={<MainPage />}/>
                  <Route path="/:idProduct" element={<ProductPage/>}/>
                  <Route path="/cart" element={<CartPage/>}/>
                  <Route path="/sign-up" element={<SignUpPage/>}/>
                  <Route path="/sign-in" element={<SignInPage/>}/>
               </Routes>
         </BrowserRouter>
      </AuthProvider>
   );
}

export default App;
