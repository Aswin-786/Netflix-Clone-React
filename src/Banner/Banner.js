import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import { Api_Key, imageUrl } from '../Constant/Constant';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        // Fetch trending movies/TV shows
        const response = await axios.get(
          `trending/all/week?api_key=${Api_Key}&language=en-US`
        );

        // Randomly select one movie/TV show from the results
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[randomIndex]);
      } catch (error) {
        console.log(error);
      }
    };

    // Call the async function to fetch data when the component mounts
    fetchTrendingMovie();
  }, []);

  return (
    <div
      className='banner text-white pt-40 bg-white bg-footer-texture flex-col items-center bg-no-repeat h-150 bg-cover relative'
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})`,
      }}
    >
      <div className='content mt-5 md:pl-10 sm:pl-5 xs:pl-3'>
        <h1 className='text-5xl'>
          {movie ? movie.title || movie.name : 'Loading...'}
        </h1>
        <div className='btn mt-8'>
          <button className='outline-none border-none py-1 px-5 mr-5 bg-slate-700 rounded-sm hover:opacity-80 cursor-pointer'>
            Play
          </button>
          <button className='outline-none border-none py-1 px-5 mr-5 bg-slate-700 rounded-sm hover:opacity-80 cursor-pointer'>
            My List
          </button>
        </div>
        <p className='sm:w-1/2 xs:w-full overflow-hidden mt-4 text-justify'>
          {movie ? movie.overview : ''}
        </p>
      </div>
      <div className='color h-28 absolute bottom-0 right-0 left-0'></div>
    </div>
  );
}

export default Banner;
