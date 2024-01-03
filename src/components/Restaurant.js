import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useState } from 'react';
const Restaurant = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRating, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const menu =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const filteredMenu = menu.filter(
    (c) =>
      c?.card?.card?.['@type'] ===
      'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );

  return (
    <div id="restaurant" className="text-center">
      <h1 className="font-bold my-3 text-2xl">{name}</h1>
      <p className="font-bold">
        {cuisines.join(', ')} Cuisine - {avgRating} ⭐
      </p>
      {filteredMenu.map((res, index) => (
        <RestaurantCategory
          showItems={index === showIndex ? true : false}
          key={res.card.card.title}
          data={res.card.card}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restaurant;
