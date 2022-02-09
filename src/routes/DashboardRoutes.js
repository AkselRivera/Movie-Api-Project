import React from 'react';

import { HomeScreen } from '../components/home/HomeScreen';
import MovieScreen from '../components/movies/MovieScreen';
import {MovieInfo} from '../components/movies/MovieInfo';
import Navbar from '../components/navbar/Navbar';
import TvScreen from '../components/tv/TvScreen';
import { TvInfo } from '../components/tv/TvInfo';
import {  Route, Routes } from 'react-router-dom';



export const DashboardRoutes = () => {
return (
    <div>

<Navbar/>
    <Routes>
        <Route path="/movie" element={<MovieScreen />}/>
        <Route path='/' element={ <HomeScreen/> } />
        <Route path="/tv" element={<TvScreen />}/>
        <Route path="/movie/:id" element={<MovieInfo />}/>
        <Route path="/tv/:id" element={<TvInfo/>}/>
    </Routes>

    </div>
)};
