import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className="mh">
      <div className="mh_l">
        <img id='car_pic' src="./cars_pic/peugeot 208.jpeg" alt="Car" />
      </div>
      <div className="mh_r">
        <h1 id='title_h'>MSAOUB RENT CAR</h1>
       <h4 className='info'>+2127669527</h4>
       <h4  className='info'>khouribga</h4>
      </div>
    </div>
  );
}

export default Header;
