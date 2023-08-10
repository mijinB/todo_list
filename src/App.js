import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpComponent from './pages/SignUp';
import SignInComponent from './pages/SignIn';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<SignInComponent />} />
        <Route path='/signup' element={<SignUpComponent />} />
      </Routes>
    </div>
  );
}

export default App;
