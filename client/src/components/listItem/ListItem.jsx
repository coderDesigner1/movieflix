import './listItem.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { useState } from 'react';

const ListItem = ({index}) => {

  const [isHovered, setIsHovered] = useState(false)
  const trailer = "movie.mp4"
  return (
    <div className='listItemWrapper'
          style={{left: isHovered && index * 225 - 50}}
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}>
      <img src="https://images.pexels.com/photos/15418180/pexels-photo-15418180/free-photo-of-close-up-photo-of-stormtrooper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      {isHovered && (
        <>
          <video  src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon"/>
              <AddIcon className="icon"/>
              <ThumbUpOutlinedIcon className="icon"/>
              <ThumbDownAltOutlinedIcon className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 0 mins</span>
              <span className='limit'>+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
            It is a long established fact that a reader will be distracted by the 
            readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal.
            </div>
            <div className="genre">
              Action
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem
