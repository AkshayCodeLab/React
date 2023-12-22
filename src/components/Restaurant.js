import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
const Restaurant = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo.length === 0) return <Shimmer />;

  const { name, costForTwoMessage, avgRating, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const menu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;
  return (
    <div id="restaurant">
      <h1>{name}</h1>
      <h4>{costForTwoMessage}</h4>
      <h4>
        {cuisines.join(', ')} Cuisine - {avgRating} ⭐
      </h4>
      <h2>Menu</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{' '}
            {item.card.info.price / 100 ||
              item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
