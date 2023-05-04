export default function Button({ text, clickHandler }) {
  return (
    <button type="button" className="bg-rose-950 text-contentWhite rounded-md hover:bg-rose-700 hover:text-headerWhite px-3 py-2 mx-auto block my-5" onClick={clickHandler}>
      {text}
    </button>
  );
}
