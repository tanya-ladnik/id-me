import React from "react";
import formatPrice from '../../helper/formatPrice';
import Moment from 'moment';
import './cards.css';


const Cards = ({ data }) => {
  return (
    <div className="cards">
        {data.map((card) => {
          return <div className="card">
            <div className="main">
              <div className="nameContainer">
                  <img src={card.location} alt={card.location}/>
                  <div>{card.name}</div>
              </div>
              <div className="description">{card.description}</div>
              
              <div className="purchaseDate">
                <div>Purchase Date</div>
                {Moment(card.purchaseDate).format('MMM d, YYYY')}
              </div>
            </div>
            <div className="right">
              {formatPrice(card.price)}
            </div>
          </div>
        })}

    </div>
  );
};

export default Cards;