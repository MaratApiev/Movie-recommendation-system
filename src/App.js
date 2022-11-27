import React, {useEffectw} from 'react'
import MainRoutes from './MainRoutes'
// import AuthContextProvider from './compontents/contexts/AuthContextProvider'
import { BrowserRouter } from 'react-router-dom'
// import FavContextProvider from './compontents/contexts/FavContextProvider'
// import MovieContextProvider from './compontents/contexts/MovieContextProvider'

const App = () => {
  return (
    <>
    <BrowserRouter>
      {/* <FavContextProvider>
        <MovieContextProvider>
          <AuthContextProvider> */}
              <MainRoutes/>
          {/* </AuthContextProvider>
        </MovieContextProvider>
      </FavContextProvider> */}
      </BrowserRouter>
    </>
  )
}

export default App