import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemMenu = ({ item }) => {
  //   console.log(item.map((item) => item.card.info));
  const dispatch = useDispatch();
  const AddItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };
  return (
    <div>
      {item.map((item) => (
        <div
          key={item.card.info.id}
          className=" w-full m-2 p-2 border-gray-300 border-b-2 flex justify-between"
        >
          <div className="w-8/12">
            <div className="mx-4">
              <span className="font-bold text-sm">{item.card.info.name}</span>
              <span className="text-xs mx-1">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="text-xs mx-4">{item.card.info.description}</div>
          </div>

          <div className="w-4/12 relative">
            <img src={CDN_URL + item.card.info.imageId} />
            <div className="my-1 p-2 bottom-2 absolute bg-black text-white rounded-md">
              <button onClick={() => AddItem(item)}>Add+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemMenu;
