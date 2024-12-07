import { useDispatch, useSelector } from "react-redux";
import bagSlice, { bagAction } from "../store/bagSlice";

const Item = ({ item }) => {
  const bag = useSelector((store) => store.bagSlice);
  const baglist = bag.indexOf(item.id) >= 0;
  const dispatch = useDispatch();
  const addtobagbtn = (id) => {
    dispatch(bagAction.addtobag(id));
  };
  const removebag = (id) => {
    dispatch(bagAction.deletefrombag(id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.star} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {baglist ? (
          <button
            type="button"
            class="btn btn-danger btn-add-bag "
            onClick={() => removebag(item.id) }
          >
            Remove From Bag
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success btn-add-bag "
            onClick={() => addtobagbtn(item.id)}
          >
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};
export default Item;
