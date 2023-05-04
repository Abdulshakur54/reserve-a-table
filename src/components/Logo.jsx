import logo from "../assets/images/little_lemon.jpg";
import { useState, useEffect } from "react";
const Logo = () => {
  const [store, setStore] = useState({ device: "mobile", size: 70 });
  const resizeEvent = () => {
    const width = window.innerWidth;
    if (width < 465) {
      setStore({ device: "mobile", size: 70 });
    } else if (width < 765) {
      setStore({ device: "mobile", size: 70 });
    } else {
      setStore({ device: "mobile", size: 70 });
    }
  };
  useEffect(() => {

    resizeEvent();
    window.addEventListener("resize", resizeEvent);
    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, [screen]);
  return (
    <img
      src={logo}
      alt="little lemon logo"
      width={store.size}
      height={store.size}
    />
  );
};
export default Logo;
