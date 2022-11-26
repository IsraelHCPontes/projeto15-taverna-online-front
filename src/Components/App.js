import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from "../Assets/styles/GlobalStyles";

import AuthProvider from "./contexts/auth";

import MainPage from './MainPage/MainPage';
import SingUpPage from './SignUpPage';
import CartPage from './CartPage';

function App() {
  return (
   <AuthProvider>
        <BrowserRouter>
         <GlobalStyle/>
            <Routes>
               <Route path="/" element={<MainPage />}/>
               <Route path="/sign-up" element={<SingUpPage/>}/>
               <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
