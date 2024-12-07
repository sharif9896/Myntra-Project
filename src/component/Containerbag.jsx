import { useSelector } from "react-redux";
import Containerbagdata from "./Containerbagdata";

const Containerbag = () =>{
    const bag = useSelector(store => store.bagSlice);
    const items = useSelector(store => store.items);
    const finalist = items.filter((item) => {
        const  indexlist = bag.indexOf(item.id);
        return indexlist >= 0;
    })
    // console.log(bag)
    return (
        <>
        
            {finalist.map(pro => <Containerbagdata item={pro}/>)}
           
        </>
    );
}
export default Containerbag;