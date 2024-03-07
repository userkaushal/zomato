import React from 'react'
import "./Cardstwo.css";
import { Link } from 'react-router-dom';

function Cardstwo() {
  return (
    <div>
      <div className='flex'>
        <div className='merges'>
          <div className='card'>
            <div className='inrflex'>
              <Link to='' >
                <img src='zomato/src/logos/orderonline.avif' alt='OrderOnline img' width={100}/>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cardstwo