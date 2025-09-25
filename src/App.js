import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"))

const AppLayout = () => {
// console.log(<Body/>)
  const [userName , setUserName ] = useState()

  useEffect(()=>{
const data = {
  name : "smruti sakre "
} 
setUserName(data.name)
}, [])

  return (
    <Provider store = {appStore}>
    <UserContext.Provider value={{loggedInUser : userName}}>
<div className="app">
  <Header />
  <Outlet />
</div>
</UserContext.Provider>
</Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children : [ 
      {
      path : "/",
      element: <Body />
    },
    {
      path : "/contact",
      element: <Contact />
    },
    {
      path: "/grocery",
      element: <Suspense fallback={<h1> Loading.....</h1>}>
      <Grocery /></Suspense>
 
    },
    {
      path : "/about",
      element:<Suspense fallback={<h1> Loading.....</h1>}>
         <About /></Suspense>
    },
    {
      path : "/restaurant/:resId",
      element: <RestaurantMenu />
    },
     {
        path: "/cart",
        element: <Cart />,
      },
  ]
  },

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />)
