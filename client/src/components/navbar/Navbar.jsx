import { useState } from 'react';
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return ()=>window.onscroll = null;
  }

    
  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='left'>
     
          <img alt="movieflix" src="logo.jpg"></img>
          <span>Home Page</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
       
     
      <div className='right'>
        <SearchIcon className='icon'/>
        <span>KID</span>
        <NotificationsIcon className='icon'/>
        <img src="https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className='profile'>
          <ArrowDropDownIcon className='icon'/>
          <div className='options'>
            <span>Settings</span>
            <span>Logout</span>
          </div>
        </div>
        
      </div>      
    </div>
  )
}

export default Navbar
