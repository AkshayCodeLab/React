import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

  const [searchListRes, setSearchListRes] = useState('');

  const [filteredRes, setFilteredRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6529831&lng=77.20853939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You're offline. Check your internet connection.</h1>;

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const changedList = listOfRes.filter(
            (item) => item.info.avgRating > 4.0
          );
          setFilteredRes(changedList);
        }}
      >
        Top rated
      </button>
      <input
        className="search-bar"
        placeholder="search restaurant"
        value={searchListRes}
        onChange={(e) => {
          setSearchListRes(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const filterList = listOfRes.filter((res) =>
            res.info.name
              .toLowerCase()
              .includes(searchListRes.toLowerCase())
          );

          setFilteredRes(filterList);
        }}
      >
        Submit
      </button>
      <div className="res-container">
        {filteredRes.map((item) => (
          <Link key={item.info.id} to={'/restaurant/' + item.info.id}>
            <RestaurantCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
