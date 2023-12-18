import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';
const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const changedList = listOfRes.filter(
            (item) => item.info.avgRating > 4.5
          );
          setListOfRes(changedList);
        }}
      >
        Top rated
      </button>
      <div className="res-container">
        {listOfRes.map((item) => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
