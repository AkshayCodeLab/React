import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
const ItemList = ({ data }) => {
  const item = data.card.info;
  const { name, price, defaultPrice, imageId } = item;

  const dispatch = useDispatch();
  const addDispatchHandler = (val) => {
    dispatch(addItem(val));
  };
  return (
    <div className="flex justify-between items-center p-4 my-4 border-b-2 border-gray-300">
      <div className="text-left">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-gray-600">
          ₹ {price / 100 || defaultPrice / 100}
        </span>
      </div>
      <div className="relative flex-shrink-0">
        <button
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-md p-1 text-xs"
          onClick={() => addDispatchHandler(data)}
        >
          Add+
        </button>
        <img
          className="w-20 h-20 object-cover rounded-lg"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
          alt={name}
        />
      </div>
    </div>
  );
};

export default ItemList;
