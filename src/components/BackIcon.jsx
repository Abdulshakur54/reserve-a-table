import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function BackIcon() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <div
      className="relative w-[40px] h-[40px] bg-rose-950 hover:bg-rose-800 text-white rounded-full"
      onClick={clickHandler}
    >
      <IoMdArrowRoundBack className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl" />
    </div>
  );
}
