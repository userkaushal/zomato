import React, { useState } from 'react';
import "./Header.css";
import "./TabNav.css";

function TabNav() {

    const [isOpen, setIsOpen] = useState(false);

    const toogleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='nav'>
            <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toogleMenu}>
                <div class="btn-line"></div>
                <div class="btn-line"></div>
                <div class="btn-line"></div>
            </div>

            {
                isOpen ? (<>   </>) : (<></>)
            }
        </div>
    )
}

export default TabNav