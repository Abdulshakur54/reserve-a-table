export default function SubmitButton({ text }) {
  return (
    <button type="submit" className="bg-rose-950 text-contentWhite rounded-md hover:bg-rose-700 hover:text-headerWhite px-3 py-2 mx-auto block my-5">
      {text}
    </button>
  );
}
