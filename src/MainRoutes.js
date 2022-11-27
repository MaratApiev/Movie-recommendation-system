import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RegisterPage from './compontents/Pages/RegisterPage'
import Navbar from './compontents/Navbar/Navbar'
import AddMoviePage from './compontents/Pages/AddMoviePage'
import EditedMoviesPage from './compontents/Pages/EditedMoviesPage'
import FavPage from './compontents/Pages/FavPage'
import HomePage from './compontents/Pages/HomePage'
import LoginPage from './compontents/Pages/LoginPage'
import MovieDetailsPage from './compontents/Pages/MovieDetailsPage'
import MoviesPage from './compontents/Pages/MoviesPage'
import NotFoundPage from './compontents/Pages/NotFoundPage'
import Cart from './compontents/Cart/Cart'


const MainRoutes = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/*' element={<NotFoundPage/>}/>
    <Route path='/add' element={<AddMoviePage/>}/>
    <Route path='/edit/:id' element={<EditedMoviesPage/>}/>
    <Route path='/fav' element={<FavPage/>}/>
    <Route path='/movie' element={<MoviesPage/>}/>
    <Route path='/details/:id' element={<MovieDetailsPage/>}/>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default MainRoutes