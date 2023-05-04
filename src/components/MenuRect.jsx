import { IoMdClose } from "react-icons/io";
import { menuContext } from "../contexts/menuContext";
import { useContext } from "react";
export default function MenuRect({ dish }) {
  const { menus, setMenus } = useContext(menuContext);
  const deleteRect = () => {
    const filteredMenus = menus.filter((menu) => menu.id != dish.id);
    setMenus(filteredMenus);
  };
  return (
    <div className="flex flex-row justify-start pl-3 pr-9 py-2 font-bold items-center text-contentWhite rounded-md relative bg-cyan-500 hover:bg-cyan-200 hover:text-red-700">
      {dish.name}
      <div>
        <IoMdClose
          className="text-red-600 font-extrabold absolute top-[10px] right-[5px] border"
          onClick={deleteRect}
        />
      </div>
    </div>
  );
}
