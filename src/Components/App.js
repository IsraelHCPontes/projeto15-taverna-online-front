import FrontPage from './FrontPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from "../Assets/styles/GlobalStyles"

function App() {
  return (
        <BrowserRouter>
         <GlobalStyle/>
            <Routes>
               <Route path="/" element={<FrontPage/>}/>
               <Route path="/sign-up" element={<SignUpPage/>}/>
               <Route path="/sign-in" element={<SignInPage/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
