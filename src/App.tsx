import React, { ReactElement } from 'react';
import { QueryClientProvider } from 'react-query';
import './App.css';
import DogsGallery from './components/dogs/dogs-gallery';
import useStorage from './hooks/utils/useStorage';
import { queryClient } from "./lib/react-query";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Favourites from "./components/dogs/favourites";
import { FavouritesContext } from './context/favourites';
import NavBar from './components/NavBar';

const RedirectHome = (): ReactElement => {
  return <Navigate replace to="/home" />;
}

function App(): ReactElement {
  const [favourites, setFavourites] = useStorage([], "favourites");
  return (
    <div className={"App"} >
    <Router>
      <QueryClientProvider client={queryClient}>
        <FavouritesContext.Provider value={{ favourites, setFavourites }}>
          
          <NavBar />
            <Routes>
              <Route path="/" element={<RedirectHome />} />
              <Route path="/home" element={<DogsGallery />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>

        </FavouritesContext.Provider>
      </QueryClientProvider>
    </Router>
    </div>
  );
}

export default App;
