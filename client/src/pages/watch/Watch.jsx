import { useState, useEffect } from 'react';
import './watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import axios from 'axios';

const Watch = () => {

  // const [videoUrl, setVideoUrl] = useState('');
  // const videoSourceUrl = "https://player.vimeo.com/video/728924613"
  const videoUrl = "movie.mp4"

  // useEffect(()=>{
  //   const fetchVideo = async ()=>{
  //     try{
  //       const response = await axios.get(videoSourceUrl, {responseType:'blob',mode:'no-cors'});
       
  //       const url = URL.createObjectURL(response.data)
  //       setVideoUrl(url)
  //     }catch(error){
  //       console.error('Error reading video:', error)
  //     }
  //   };

  //   fetchVideo();

  //   return ()=>{
  //     if(videoUrl){
  //       URL.revokeObjectURL(videoUrl)
  //     }
  //   };
  // },[videoSourceUrl])
  return (
    <div className='watch'>
      <div className="back">
       <ArrowBackOutlinedIcon /> 
       Home
      </div>
      <video 
          src={videoUrl} autoPlay progress controls loop
          className='video'/>

    </div>
  )
}

export default Watch
