import Hr from "./Hr";
export default function Menu({ image, description, alt }) {
  return (
    <div>
      <div className="flex flex-row w-md justify-between gap-5 items-center p-4 h-full border-x-[1px]">
        <div className="w-1/2">
          <img src={image} alt={alt ? alt : src} className="w-full h-auto" />
        </div>
        <p className="w-1/2">{description}</p>
      </div>
     <Hr />
    </div>
  );
}
