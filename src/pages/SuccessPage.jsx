import Header3 from "../components/Header3";
import Information from "../components/Information";
import { useContext, useMemo } from "react";
import { orderContext } from "../contexts/orderContext";
import { menuContext } from "../contexts/menuContext";
import useDate from "../hooks/useDate";
import useTime from "../hooks/useTime";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
export default function SuccessPage() {
  const { order, setOrder } = useContext(orderContext);
  const { menus, setMenus } = useContext(menuContext);
const navigate = useNavigate();
  const menusInString = useMemo(() => {
    const menuArr = [];
    menus.forEach((mn) => {
      menuArr.push(mn.name);
    });
    return menuArr.join(", ");
  }, [menus]);
  const dateString = useDate(order.date);
  const timeString = useTime(order.time);
  const clearState = ()=>{
   setOrder({
     noOfDinners: 1,
     time: "",
     date: "",
     firstName: "",
     lastName: "",
     contact: "",
   });
   setMenus([]);
navigate('/')
  }
  return (
    <div className="max-w-md p-5 border-rose-900 border">
      <p className="text-green-500 font-bold mb-5 px-5">
        Congratulations! You have successfully reserved a table
      </p>
      <Header3 text="Order Details" />
      <div>
        <Information label={"First Name"} value={order.firstName} />
        <Information label={"Last Name"} value={order.lastName} />
        <Information label={"No of Dinners"} value={order.noOfDinners} />
        <Information label={"Date"} value={dateString} />
        <Information label={"Time"} value={timeString} />
        <Information label={"Dishes"} value={menusInString} />
      </div>
      <Button text="Home" clickHandler={clearState} />
    </div>
  );
}
