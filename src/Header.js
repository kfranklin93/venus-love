import React from "react";
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
// import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom';

// functional component which returns some JSX 
function Header() {
    return (
        <div className="header">
            <Link to="/profile">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
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