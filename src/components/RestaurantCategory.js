import { useState } from 'react';
import ItemList from './ItemList';
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    !clicked === true
      ? (setClicked(true), setShowIndex())
      : setClicked(false);
  };

  const [clicked, setClicked] = useState(false);
  return (
    <div className="max-w-2xl mx-auto my-4 p-4 bg-gray-100 shadow-lg border rounded-md">
      <div
        className="flex items-center justify-between hover:cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data?.title} ({data.itemCards.length})
        </span>
        <span className="text-teal-500">
          <svg
            className="w-6 h-6 transform rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </span>
      </div>
      <div>
        {clicked &&
          showItems &&
          data.itemCards.map((item) => (
            <ItemList key={item.card.info.id} data={item} />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
