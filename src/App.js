import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// context
import { AuthContextProvider } from './context/AuthContext';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined

  if(loadingUser) {
    return <p>Carregando...</p>;
  }

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth]);

  return (
    <div className="App">
      <AuthContextProvider value={{ user }}>
        <BrowserRouter>
        <Navbar />
          <div className="container">
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/about' element={ <About /> }/>
                <Route path='/login' element={ <Login /> }/>
                <Route path='/register' element={ <Register /> }/>
            </Routes>
          </div>
        <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
