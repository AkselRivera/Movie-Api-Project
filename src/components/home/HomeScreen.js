import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { MovieCard } from '../movies/MovieCard';
import './style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';

import SwiperCore,{ Autoplay } from 'swiper';
import { HomeTvCard } from './HomeTvCard';
SwiperCore.use([Autoplay]);
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";



export const HomeScreen = () => {  

  const {data:trendingMovie}=useFetch('https://api.themoviedb.org/3/trending/movie/day?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en');
  const {data:trendingTV}=useFetch('https://api.themoviedb.org/3/trending/tv/week?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en');
  const {data:trendingPeople}=useFetch('https://api.themoviedb.org/3/trending/people/week?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en');
  const {data:UpComingMovie}=useFetch('https://api.themoviedb.org/3/movie/upcoming?api_key=fd922be3276e0c686293e46cf44f0e9e&language=en-US&page=1');
  
  
  const bk={
                      
    // when window width is >= 320px
    120: {
      slidesPerView: 1,
      centeredSlidesBounds:true,
      loopedSlides:1
    },
    // when window width is >= 480px
    530: {
      slidesPerView: 2,
      spaceBetween: 10,
      loopFillGroupWithBlank:false,
      loopedSlides:1
    },
    // when window width is >= 640px
    740: {
      slidesPerView: 2,
      spaceBetween: 10,
      loopFillGroupWithBlank:false,
      loopedSlides:1
    },
    760: {
      slidesPerView: 3,
      spaceBetween: 10,
      loopFillGroupWithBlank:false,
      loopedSlides:1
    },
    950: {
      slidesPerView: 4,
      spaceBetween: 10,
      loopFillGroupWithBlank:false,
      loopedSlides:1
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
      loopFillGroupWithBlank:false,
      loopedSlides:1
    },
    1750: {
      slidesPerView: 6,
      spaceBetween: 10,
      loopFillGroupWithBlank:false,
      loopedSlides:1
    },
    2100: {
      slidesPerView: 7,
      spaceBetween: 10,
      loopFillGroupWithBlank:false,
      loopedSlides:1
    }
  }

  if(trendingMovie === [] || trendingPeople === [] || trendingTV===[] || UpComingMovie===[] )
        return <div className='d-flex justify-content-center mt-5'>
                <div className="spinner-grow text-light" role="status">
                    <span className="visually-hidden"></span>
                </div>
                </div>
    else
return <div className='container-fluid text-white bg-dark'>
      
      <div className="mx-5">
    <div className='my-4'>
    <h1 className='titleTag'>Upcoming movies</h1>

      <div className="row">
            <Swiper 
                    spaceBetween={10} 
                    loopFillGroupWithBlank={false}
                    loopedSlides={1}
                    autoplay={{delay: 1500, disableOnInteraction: false}} 
                    slidesPerView={5}
                    className='swipper'
                    breakpoints={bk}
            > 
              
              {
              UpComingMovie.map ( e=> (
                <SwiperSlide key={e.id} className='mx-1'>
                  <MovieCard {...e} /> 
                </SwiperSlide>
              ))
              } 
            
            </Swiper>
      </div>
    </div>
    <div className='my-4'>
    <h1 className='titleTag'>Trending movies of the week</h1>

      <div className="row">
            <Swiper 
                    spaceBetween={10} 
                    loopFillGroupWithBlank={false}
                    loopedSlides={1}
                    autoplay={{delay: 1500, disableOnInteraction: false}} 
                    slidesPerView={5}
                    className='swipper'
                    breakpoints={bk}
            > 
              
              {
              trendingMovie.map ( e=> (
                <SwiperSlide key={e.id} className='mx-1'>
                  <MovieCard {...e} /> 
                </SwiperSlide>
              ))
              } 
            
            </Swiper>
      </div>
    </div>

  <div className='my-4'>
  <h1 className='titleTag'>Trending TV series of the week</h1>
      <div className="row">
            <Swiper 
                    spaceBetween={10} 
                    loopFillGroupWithBlank={false}
                    loopedSlides={1}
                    autoplay={{delay: 1500, disableOnInteraction: false}} 
                    slidesPerView={5}
                    className='swipper'
                    breakpoints={bk}
            > 
              
              {
              trendingTV.map ( e=> (
                <SwiperSlide key={e.id} className='mx-1'>
                  <HomeTvCard {...e} /> 
                </SwiperSlide>
              ))
              } 
            
            </Swiper>
      </div>
    </div>

  <div className='my-4'>
  <h1 className='titleTag'>Trending people of the week</h1>
      <div className="row">
            <Swiper 
                    spaceBetween={10} 
                    loopFillGroupWithBlank={false}
                    loopedSlides={1}
                    autoplay={{delay: 1500, disableOnInteraction: false}} 
                    slidesPerView={5}
                    className='swipper'
                    breakpoints={bk}
            > 
              
              {
              trendingPeople.map ( e=> (
                <SwiperSlide key={e.id} className='mx-1'>
                  { (e.media_type==='movie')  
                    ?
                      <MovieCard {...e}/>
                    :
                      <HomeTvCard {...e} /> 
                  }
                </SwiperSlide>
              ))
              } 
            
            </Swiper>
      </div>
    </div>
  
      </div>
  </div>;
};
