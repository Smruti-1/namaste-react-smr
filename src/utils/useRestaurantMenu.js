import { useEffect, useState } from "react";
import { Menu_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInnfo, setResInfo] = useState(null);

  useEffect(() => {
   fetchData();
},[]);

  const fetchData = async () => {
    const data = await fetch(Menu_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInnfo;
  
};

export default useRestaurantMenu;
