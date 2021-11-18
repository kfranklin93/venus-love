import React from 'react'
import './Chat.css'
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom'
import'./ChatScreen.js'

function Chat({ name, message, timestamp, profilePic }) {
  return (
    // <Link to={`/chat/${name}`}>
    <Link to="/match-chat/:person"> 
      <div className='chat'>
        <Avatar className='chat__image' src={profilePic} />
        <div className='chat__details'>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className='chat__timestamp'>{timestamp}</p>
      </div>
    </Link>
  )
}

export default Chat