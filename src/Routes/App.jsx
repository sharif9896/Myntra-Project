import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import Footer from "../component/Footer"
import FetchStatus from "../component/FetchStatus"
import Spinner from "../component/Spinner";
import {useSelector } from "react-redux";


function App() {
  const fetchstatus = useSelector(store => store.fetchstatus);

  return (
    <>
      <Header/>
      <FetchStatus/>
      {fetchstatus.currentlyfetching ? <Spinner />:<Outlet />}
      <Footer/>
    </>
  )
}

export default App
