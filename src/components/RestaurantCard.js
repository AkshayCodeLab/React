import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="w-[230px] m-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-200">
      <div className="flex justify-center">
        <img
          className="w-48 rounded-xl aspect-square"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
