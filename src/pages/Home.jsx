import AboutLittleLemon from "../components/AboutLittleLemon";
import Header3 from "../components/Header3";
import Hr from "../components/Hr";
import LinkButton from "../components/LinkButton";
import Menu from "../components/Menu";
import MenuData from "../data/menu.json";

export default function Home() {
  return (
    <div>
      <AboutLittleLemon />
      <div>
        <Header3 text="Menus" />
        <Hr />
        <div className="grid md:grid-cols-3 justify-start">
          {MenuData.map((menu) => (
            <Menu
              image={menu.image}
              alt={menu.name}
              description={menu.description}
              key={menu.id}
            />
          ))}
        </div>
      </div>
      <div className="my-5">
        <LinkButton to="reserve" text="Reserve table" />
      </div>
    </div>
  );
}
