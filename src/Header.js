import React from "react";
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
// import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import IconButton from '@mui/material/IconButton';
import {Link, useHistory} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// functional component which returns some JSX 
function Header({ backButton }) {

    const history = useHistory()

    return (
        <div className="header">
            
           {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize='large' className='header__icon' />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>
      )}

           
            <Link to="/">
            <img
                className="header__tinderLogo"
                src="https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg"
                alt="tinder logo" />
                </Link>

            {/* <MeetingRoomIcon /> */}
            <Link to="/match-chat"> 
            <IconButton>
                <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
        </div>
    
    )
}
export default Header 