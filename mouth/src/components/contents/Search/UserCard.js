import React from 'react'

import "./UserCard.css"


export const UserCard = props => {
    const { Name, PhotoUrl } = props.selectedPlayer
    return (
      <div className="Usercard-container">
        <div>{Name}</div>
        <img src={PhotoUrl} alt="avatar"/>
      </div>
    )
}
