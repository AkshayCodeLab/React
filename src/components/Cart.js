import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';
const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const clearHandler = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="flex justify-center font-bold text-xl p-2 m-2">
        Cart
      </h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white p-2 m-2 rounded-lg"
          onClick={clearHandler}
        >
          Clear Cart
        </button>
        {cart.length === 0 && (
          <h1 className="text-center">Cart is Empty</h1>
        )}
        {cart.map((info) => (
          <ItemList key={info.card.info.id} data={info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
