
import {BrowserRouter} from 'react-router-dom'
import { AuthContext } from './Context/AuthContext';
import Router from './Router';

function App() {
  return (
   <AuthContext>
         <BrowserRouter>
          <Router/>
         </BrowserRouter>
   </AuthContext>
  );
}

export default App;
