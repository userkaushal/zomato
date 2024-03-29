import React from "react";
import { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import iconsm from "../../logos/iconsm.svg"; // Path to your image
import ddown from "../../logos/ddown.svg";
import abc from "../../logos/search.svg";
import mobsign from "../../logos/mobsign.svg";
import getappmob from "../../logos/getappmob.svg";
import gps from "../../logos/gps.svg";
import TabNav from "./TabNav";

function Header() {

  // For Responsive Mobile View and Tablet View

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 767);
  // const [isTabletScreen, setIsTabletScreen] = useState(window.innerWidth >= 767 && window.innerWidth < 819);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 767);
      // setIsTabletScreen(window.innerWidth >= 767 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // For Dropdown Menu Input

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setShowDropdown(false);
  };

  // For GPS Location

  const [location, setLocation] = useState(null);
  const [city, setCity] = useState("Ahmedabad");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
          .then(response => response.json())
          .then(data => {
            setLocation(data.display_name);
            setCity(data.address.state_district);
            // console.log(data);
          })
          .catch(error => {
            console.error(error);
          });
      },
      (error) => {
        console.error(error);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
    //       setLocation({ latitude, longitude });
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    //   );
    // } else {
    //   console.error('Geolocation is not supported by this browser.');
    // }
  };

  return (
    <div>
      <div className="header">
        <div className="bg-hero">
          <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" />


          {isSmallScreen ? (
            <div className="nav nav-mob">
              <span><Link to="https://www.zomato.com/mobile"><img src={getappmob} />&nbsp;Get the App</Link></span>
              <span>
                <div className="logo-mob">
                  <Link to='/'>
                    <img src={mobsign} />
                  </Link>
                </div>
              </span>
            </div>

            // ) : isTabletScreen ? (
            //   <TabNav/>
          ) : (

            <div className="nav">
              <ul>
                <li>
                  <Link to="/">Get the App</Link>
                </li>
                <li>
                  <Link to="/">Investor Relations</Link>
                </li>
                <li>
                  <Link to="/">Add restaurant</Link>
                </li>
                <li>
                  <Link to="/">Log in</Link>
                </li>
                <li>
                  <Link to="/">Sign up</Link>
                </li>
              </ul>
            </div>

          )}

          <div className="wrapper">
            <div className="logoimg">
              <img
                src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
                alt="zomato logo"
              />
            </div>
            <h1>
              Discover the best food & drinks in <span className="next-line">{city.split(' ')[0]}</span>
            </h1>
            {
              isSmallScreen ? (<>

                <div className="mobsearchcontainer">
                  <div>
                    <div className="mobsearchleft">
                      <div>
                        <i>
                          <img src={iconsm} alt="location" />
                        </i>
                        <input type="text" placeholder="Ahmedabad" value={location ? location : selectedItem}
                          onClick={toggleDropdown} />
                        <i className="ddown">
                          <img src={ddown} alt="location" />
                        </i>
                      </div>
                      {showDropdown && (
                        <div className="leftdropdown">
                          <div className="gpsli" onClick={getLocation}>
                            <div className="gpstext">
                              <div className="imggps">
                                <img src={gps} alt="gpslogo" />
                              </div>
                              <p className="gpsredtext">Detect current location</p>
                            </div>
                            <p className="gpsredtext gpssectext">Using GPS</p>
                          </div>
                          <div className="placeholder">Recent Locations</div>
                          {/* <ul>
                        <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
                        <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
                        <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
                      </ul> */}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mobsearchright">
                    <div>
                      <i>
                        <img src={abc} alt="search" />
                      </i>
                      <input
                        type="text"
                        placeholder="Search for restaurant, cuisine or a dish"
                      />
                    </div>
                  </div>
                </div>

              </>) : (

                <div className="searchcontainer">
                  <div className="mergeddiv">
                    <div className="left">
                      <div>
                        <i>
                          <img src={iconsm} alt="location" />
                        </i>
                        <input type="text" placeholder="Ahmedabad" value={location ? location : selectedItem}
                          onClick={toggleDropdown} />
                        <i className="ddown">
                          <img src={ddown} alt="location" />
                        </i>
                      </div>
                      {showDropdown && (
                        <div className="leftdropdown">
                          <div className="gpsli" onClick={getLocation}>
                            <div className="gpstext">
                              <div className="imggps">
                                <img src={gps} alt="gpslogo" />
                              </div>
                              <p className="gpsredtext">Detect current location</p>
                            </div>
                            <p className="gpsredtext gpssectext">Using GPS</p>
                          </div>
                          <div className="placeholder">Recent Locations</div>
                          {/* <ul>
                        <li onClick={() => handleItemClick('Item 1')}>Item 1</li>
                        <li onClick={() => handleItemClick('Item 2')}>Item 2</li>
                        <li onClick={() => handleItemClick('Item 3')}>Item 3</li>
                      </ul> */}
                        </div>
                      )}
                    </div>
                    <div className="indicate"></div>
                    <div className="right">
                      <div>
                        <i>
                          <img src={abc} alt="search" />
                        </i>
                        <input
                          type="text"
                          placeholder="Search for restaurant, cuisine or a dish"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div >
  );
}

export default Header;
