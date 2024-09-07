import "./Cars_list.css"
import Card_card from "../Card_card/Card_card";
import React from 'react'

const Cars_list = () => {

    const cars = [
        { imgSrc: './cars_pic/peugeot 208.jpeg', carName: '208' },
        { imgSrc: './cars_pic/clio.jpeg', carName: 'clio' },
        { imgSrc: './cars_pic/dacia-logan.jpeg', carName: 'logan' },
        { imgSrc: './cars_pic/dacia_stepway.jpeg', carName: 'stepway' },
        { imgSrc: './cars_pic/Elysee.jpeg', carName: 'Elysee' },
      ];

      
  return (
    <div className="car_cards">
    {cars.map((car, index) => (
      <Card_card key={index} imgSrc={car.imgSrc} carName={car.carName} />
      
    ))}
  </div>
  )
}

export default Cars_list