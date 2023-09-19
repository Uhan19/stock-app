// Write your Slider component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Slider = () => {
  const [marketSummaryData, setMarketSummaryData] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log('API KEY', apiKey);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://yfapi.net/v6/finance/quote/marketSummary',
          headers: {
            'x-api-key': apiKey,
          },
        };
        const response = await axios.request(options);
        console.log('RESPONSE', response);
        setMarketSummaryData(
          response.data.marketSummaryResponse.result
        );
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [apiKey]);

  return (
    <>
      {marketSummaryData ? (
        <div className="slider">
          {marketSummaryData.map((item, index) => {
            return item.regularMarketChange.raw > 0 ? (
              <span className="slider-market-raw" key={index}>
                <span className="slider-name">{item.shortName}</span>{' '}
                {item.regularMarketPrice.fmt}
                <span style={{ color: 'green' }}>
                  {' '}
                  +{item.regularMarketChange.fmt} (+
                  {item.regularMarketChangePercent.fmt})
                </span>
              </span>
            ) : (
              <span className="slider-market-raw" key={index}>
                <span className="slider-name">{item.shortName}</span>{' '}
                {item.regularMarketPrice.fmt}
                <span style={{ color: 'red' }}>
                  {' '}
                  {item.regularMarketChange.fmt} (
                  {item.regularMarketChangePercent.fmt})
                </span>
              </span>
            );
          })}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
