
import SingUpPage from './SignUpPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GlobalStyle from "../Assets/styles/GlobalStyles"

function App() {
  return (
        <BrowserRouter>
         <GlobalStyle/>
            <Routes>
               <Route path="/sign-up" element={<SingUpPage/>}/>
            </Routes>
        </BrowserRouter>
  );
}

export default App;
