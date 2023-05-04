import Logo from "../components/Logo";
import { Outlet } from "react-router-dom";
import { MenuProvider } from "../contexts/menuContext";
import { useState, useMemo } from "react";
import { OrderProvider } from "../contexts/orderContext";

const Root = () => {
  const date = new Date();
  const style = {
    header: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      gap: "10px",
    },
    footer: {
      textAlign: "center",
      padding: "10px",
    },
    hr: {
      marginBottom: "10px",
      border: "1px solid #ddd",
    },
  };
  const [menus, setMenus] = useState([]);
  const [order, setOrder] = useState({ noOfDinners: 1, time: "", date: "", firstName:"",lastName:"",contact:"" });
  const value = useMemo(() => {
    return { menus, setMenus };
  }, [menus]);
  const orderValue = useMemo(() => {
    return { order, setOrder };
  }, [order]);
  return (
    <div>
      <header style={style.header}>
        <Logo />
        <h1 className="text-2xl text-yellow-500">Little Lemon</h1>
      </header>
      <main className="px-3 lg:w-10/12 lg:mx-auto">
        <MenuProvider value={value}>
          <OrderProvider value={orderValue}>
            <Outlet />
          </OrderProvider>
        </MenuProvider>
      </main>
      <footer style={style.footer}>
        <hr style={style.hr} />
        Abdulshakur - All rights reserved &copy; {date.getFullYear()}
      </footer>
    </div>
  );
};
export default Root;
