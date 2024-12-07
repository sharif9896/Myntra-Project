import { useSelector } from "react-redux";

const Summarybag = ()=>{
  const bag = useSelector(store => store.bagSlice);
  const bagItem = bag.length;
  const items = useSelector(store => store.items);
  const finalist = items.filter((item) => {
      const  indexlist = bag.indexOf(item.id);
      return indexlist >= 0;
  })

  console.log(bag.original_price)
  const CONVINIENCE_FEES = 99;
  let totalItem = bagItem;
  let totalMRP = 0;
  let totalDiscount = 0;

  finalist.forEach(item => {

    totalMRP += item.original_price;
    totalDiscount += item.original_price- item.current_price;
    
  });

  let  finalPayment = totalMRP - totalDiscount + CONVINIENCE_FEES;
    
   
    return (
        <>
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹{totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹{CONVINIENCE_FEES}</span>
    </div>
    <hr/>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
        </>
    );
}
export default Summarybag;