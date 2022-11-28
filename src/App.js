import MainRoutes from "./MainRoutes";
// import AuthContextProvider from './compontents/contexts/AuthContextProvider'
import { BrowserRouter } from "react-router-dom";
import MovieContextProvider from "./contexts/MovieContextProvider";
// import FavContextProvider from './compontents/contexts/FavContextProvider'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MovieContextProvider>
          <MainRoutes />
        </MovieContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
