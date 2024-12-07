import Item from "./Item";

const MainAdda = () => {

  const item = [
    {
        id: '001',
        image: 'images/1.jpg',
        company: 'Carlton London',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 1045,
        current_price: 606,
        discount_percentage: 42,
        return_period: 14,
        delivery_date: '10 Oct 2023',
        rating: {
            star: 4.5,
            count: 1400,
        },
    },
    ];
 
  return (
    <>
      <main>
        <div class="items-container">
          {item.map(pro => <Item item={pro}/>)}
        </div>
      </main>
    </>
  );
};
export default MainAdda;
