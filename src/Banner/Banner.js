/* eslint-disable no-undef */
import React from 'react'
import axios from '../../axios'
import { Api_Key, imageUrl } from '../Constant/Constant'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = React.useState([])
  React.useEffect(() => {
    axios.get(`trending/all/week?api_key=${Api_Key}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results[Math.floor(Math.random() * 20)])
      })
      .catch((error) => console.log(error))
  }, [])
  return (
    <div className='banner text-white pt-40  bg-white bg-footer-texture flex-col items-center bg-no-repeat h-150 bg-cover relative'
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})` }}>
      <div className="content mt-5 md:pl-10 sm:pl-5 xs:pl-3 ">
        <h1 className='text-5xl'>{movie.title ? movie.title : movie.name}</h1>
        <div className="btn mt-8">
          <button className='outline-none border-none py-1 px-5 mr-5 bg-slate-700 rounded-sm hover:opacity-80 cursor-pointer'>Play</button>
          <button className='outline-none border-none py-1 px-5 mr-5 bg-slate-700 rounded-sm hover:opacity-80 cursor-pointer'>My List</button>
        </div>
        <p className='sm:w-1/2 xs:w-full overflow-hidden mt-4 text-justify'>
          {movie ? movie.overview : ""}
        </p>
      </div>
      <div className="color h-28 absolute bottom-0 right-0 left-0"></div>
    </div>
  )
}
export default Banner