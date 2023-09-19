import React from 'react';
import { useNavigate } from 'react-router-dom';

export const SingleCard = ({ symbol }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/stocks/:${symbol}`, { state: symbol });
  };
  return (
    <div className="card">
      <div className="card_body">
        <h2 className="card_title">{symbol}</h2>
      </div>
      <button className="card_btn" onClick={handleClick}>
        View Details
      </button>
    </div>
  );
};
