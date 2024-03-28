import React from 'react'
import "./Cardstwo.css";
import { Link } from 'react-router-dom';

function Cardstwo() {
  return (
    <div>
      <div className='flex'>
        <div className='merges'>
          <div className='card'>
            <Link href='/'>
              <div className='inrflex'>
                <img src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Image" className="card-image" />
                <div className="card-text">
                  <p className='title'>Order Online</p>
                  <p className='subtitle'>Stay home and order to your doorstep</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='card'>
            <Link href='/'>
              <div className='inrflex'>
                <img src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*" alt="Image" className="card-image" />
                <div className="card-text">
                  <p className='title'>Dining</p>
                  <p className='subtitle'>View the city's favourite dining venues</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cardstwo