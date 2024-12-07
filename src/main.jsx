import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import './index.css'
import Home from './Routes/Home.jsx';
import Bag from "./Routes/Bag.jsx";
import App from './Routes/App.jsx';
import { Provider } from 'react-redux';
import myntraStore from './store/index.js';
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  children: [
    {path:"/", element: <Home/>},
    {path:"/bag", element: <Bag/>},
  ],
},
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
