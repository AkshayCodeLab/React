import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  let cuisineStr = cuisines.slice(0, 2).join(', ');
  return (
    <div className="w-[230px] h-auto m-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <div data-testid="resCard" className="flex justify-center mb-4">
        <img
          className="w-48 h-48 object-cover rounded-xl"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
        {name}
      </h3>
      <h4 className="text-gray-600 dark:text-gray-300 mb-2">
        {cuisineStr}
      </h4>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500">{'\u2605'}</span>
        <span className="ml-1 text-gray-700 dark:text-gray-400">
          {avgRating}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-gray-700 dark:text-gray-400">
          {costForTwo}
        </h4>
      </div>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-0 left-0 bg-green-500 text-white m-2 px-2 py-1 rounded-lg z-10">
          Veg
        </label>
        <RestaurantCard {...props} className="relative z-0" />
      </div>
    );
  };
};

export default RestaurantCard;
