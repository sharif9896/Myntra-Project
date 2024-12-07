import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsAction } from "../store/Itemslice";
import { fetchingAction } from "../store/fetchstatus";

const FetchStatus = () => {
  const fetchstatus = useSelector((store) => store.fetchstatus);
 
  const dispatch = useDispatch();

  useEffect(() => {
  console.log(fetchstatus.fetchDone)
    if (fetchstatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchingAction.markfetchstarted());
    fetch("http://localhost:8080/items", {signal})
      .then((res) => res.json())
      .then(({ items }) => {
        
        dispatch(fetchingAction.markfetchdone());
        dispatch(fetchingAction. markfetchended());
        dispatch(ItemsAction.addinitialitem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, []);
  return <></>;
};
export default FetchStatus;
