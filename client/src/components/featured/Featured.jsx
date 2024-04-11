import React from 'react'
import './featured.scss'
import Category from "../category/Category"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = ({type}) => {
  return (
    <div className='featured'>
      <img src="https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profileimage" />
      <span>{type  ? <Category/>:''}</span>
      <div className='info'>
        <img src="movie1.jpg" alt="" />
        <span className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrowIcon/>
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlinedIcon/>
            <span>Info</span>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Featured
