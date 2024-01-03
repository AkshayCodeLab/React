import RestaurantCard, { withVegLabel } from './RestaurantCard';
import { useEffect, useState, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
const Body = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [listOfRes, setListOfRes] = useState([]);

  const [searchListRes, setSearchListRes] = useState('');

  const [filteredRes, setFilteredRes] = useState([]);

  const RestaurantCardVeg = withVegLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6529831&lng=77.20853939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You're offline. Check your internet connection.</h1>;

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body dark:bg-gray-800">
      <div className="search-box m-4 p-4 flex items-center">
        <input
          className="border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-md w-64 focus:outline-none focus:border-green-500"
          placeholder="Search restaurant"
          value={searchListRes}
          onChange={(e) => {
            setSearchListRes(e.target.value);
          }}
        />
        <button
          className="bg-green-500 text-white ml-2 px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          onClick={() => {
            const filterList = listOfRes.filter((res) =>
              res.info.name
                .toLowerCase()
                .includes(searchListRes.toLowerCase())
            );
            setFilteredRes(filterList);
          }}
        >
          Search
        </button>
        <button
          className="bg-gray-500 text-white ml-2 px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:border-gray-300"
          onClick={() => {
            const changedList = listOfRes.filter(
              (item) => item.info.avgRating > 4.0
            );
            setFilteredRes(changedList);
          }}
        >
          Top Rated
        </button>
        <input
          className="border border-black m-2"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-wrap">
        {filteredRes.map((item) => (
          <Link key={item.info.id} to={'/restaurant/' + item.info.id}>
            {item.info?.veg ? (
              <RestaurantCardVeg resData={item} />
            ) : (
              <RestaurantCard resData={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
