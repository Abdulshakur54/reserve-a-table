import { Link } from "react-router-dom";
export default function LinkButton({ text, to }) {
  return (
    <button className="bg-rose-950 text-contentWhite rounded-md hover:bg-rose-700 hover:text-headerWhite px-3 py-2 mx-auto block">
      <Link to={to}>{text}</Link>
    </button>
  );
}
