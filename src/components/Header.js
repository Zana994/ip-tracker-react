import { useState } from 'react'

const Header = ({newDetails}) => {
    const [newValue, setNewValue] = useState('')
    
    return (
        <div className="header">
            <p> IP Address Tracker </p>
            <div className="search-box">
            <input type='text' placeholder='Search for any IP address or domain' value={newValue}
              onChange={(e) => { setNewValue(e.target.value)}}></input>
            <span onClick={() => {newDetails(newValue); setNewValue('')}}></span>
        </div>
        </div>
    )
}

export default Header
