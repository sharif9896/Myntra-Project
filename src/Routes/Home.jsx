import Item from "../component/Item";
import {useSelector} from "react-redux";

const Home = () =>{
    const items = useSelector(store => store.items);
    // console.log(items)
    return (
        <>
            <main>
        <div class="items-container">
            
          {items.map(pro => <Item key={pro.id} item={pro}/>)}
        </div>
      </main>
        </>
    );
}
export default Home;