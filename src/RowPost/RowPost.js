import React, { useState, useEffect } from 'react';
import './RowPost.css'
import axios from '../../axios'
import { Api_Key, imageUrl } from '../Constant/Constant'
import YouTube from 'react-youtube'

const RowPost = ({ title, url, isSmall }) => {
  const [poster, setPoster] = useState([]);
  const [trailer, setTrailer] = useState('');

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPoster(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  // to show trailer
  const showTrailer = async (id) => {
    try {
      const response = await axios.get(
        `/movie/${id}/videos?api_key=${Api_Key}&language=en-US`
      );

      if (response.data.results.length !== 0) {
        setTrailer(response.data.results[0]);
      } else {
        console.log('array empty');
      }
    } catch (error) {
      console.log(error);
    }
  };
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }

  return (
    <div className='text-slate-100 xs:ml-1 sm:m-5'>
      <h1 className='text-2xl spacing tracking-widest'>{title}</h1>
      <div className='post-container m-4 flex overscroll-y-none overflow-x-scroll'>
        {poster.map((obj) => (
          <img
            onClick={() => showTrailer(obj?.id)}
            key={obj?.id}
            className={
              props.isSmall
                ? 'img-post xs:m-1 sm:m-3 sm:h-44 sm:w-60 xs:h-28 xs:w-40 rounded-md object-cover transition hover:transition hover:scale-110 cursor-pointer'
                : 'img-post xs:m-1 sm:m-3 sm:h-56 sm:w-44 xs:h-36 xs:w-40 rounded-md object-cover transition hover:transition hover:scale-110 cursor-pointer'
            }
            src={`${imageUrl + obj?.backdrop_path}`}
            alt='movie'
          />
        ))}
      </div>
      {trailer && <YouTube videoId={trailer?.key} opts={opts} />}
    </div>
  );
};
export default RowPost
