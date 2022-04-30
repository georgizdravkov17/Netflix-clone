import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import {HomeScreen, ListsScreen, LoginScreen, MoviesScreen, NotFoundScreen, RegisterScreen, UsersScreen  } from './Screens/screens';
import { Header, Footer } from './Components/components.js';
import { UsersProvider } from './Contexts/usersContext.js';
import { ListsProvider } from './Contexts/listsContext.js';
import { MoviesProvider } from './Contexts/moviesContext.js';
import AuthenticatedGuard from './Core/Guards/AuthenticatedGuard.jsx';
import NonAuthenticatedGuard from './Core/Guards/NonAuthenticatedGuard.jsx';
import './App.css';

function App() {
  return (
    <Router>
     <UsersProvider>
       <ListsProvider>
         <MoviesProvider>
        <div className="App">
          <Header />
            <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                 {/* Authenticated Routes */}
                <Route element={ <AuthenticatedGuard /> }>
                    <Route exact path="/movies" element={<MoviesScreen />} />
                    <Route exact path="/users" element={<UsersScreen />} />
                    <Route exact path="/lists" element={<ListsScreen />} />
                </Route>
        
                 {/* Non Authenticated Routes   */}
                <Route element={<NonAuthenticatedGuard />}>
                  <Route exact path="/register" element={<RegisterScreen />} />
                  <Route exact path="/login" element={<LoginScreen />} />
                </Route>
                <Route path="/*" element={<NotFoundScreen />} />
            </Routes>
            <Footer />
        </div>
        </MoviesProvider>
        </ListsProvider>
        </UsersProvider>
    </Router>
  );
}

export default App;
