import MainRoutes from "./MainRoutes";
import MovieContextProvider from "./contexts/MovieContextProvider";

const App = () => {
  return (
    <>
      <MovieContextProvider>
        <MainRoutes />
      </MovieContextProvider>
    </>
  );
};

export default App;
