import './list.scss'
import ListItem from '../listItem/ListItem'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useRef, useState } from 'react';

const List = () => {

  const [sliderNum, setSliderNum] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  const contRef = useRef();

  const handleClick = (direction) =>{
    setIsMoved(true);
    let distance = contRef.current.getBoundingClientRect().x - 55;
    if(direction === 'left' && sliderNum > 0 ){
        setSliderNum(sliderNum-1)
        console.log(sliderNum)
        contRef.current.style.transform = `translateX(${360 + distance}px)`;
    }

    if(direction === 'right' && sliderNum < 5){
      setSliderNum(sliderNum+1)
      console.log(sliderNum)
      contRef.current.style.transform = `translateX(${-360 + distance}px)`;
  }
   
  }

  return (
    <div className='itemInfo'>
      <span className='itemTitle'> Continue to watch </span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon 
          className='sliderArrow left' 
          onClick={()=>handleClick("left")}
          style={{display:!isMoved && "none"}}/>
        <div className="container" ref={contRef}>
          <ListItem index={0}/>
          <ListItem index={1}/>
          <ListItem index={2}/>
          <ListItem index={3}/>
          <ListItem index={4}/>
          <ListItem index={5}/>
          <ListItem index={6}/>
          <ListItem index={7}/>
          <ListItem index={8}/>
          <ListItem index={9}/>
        </div>
        <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={()=>handleClick("right")}/>
      </div>
     
    </div>
  )
}

export default List
