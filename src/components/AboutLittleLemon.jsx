import ImageLg from '../assets/images/restaurant-lg.jpg';
import ImageMd from '../assets/images/restaurant-md.jpg';
import Image from '../assets/images/restaurant.jpg';

export default function AboutLittleLemon() {  
    return (
      <div className="relative">
        <picture>
          <source
            srcSet={ImageLg}
            type="image/jpg"
            media="(min-width:1024px)"
          ></source>
          <source
            srcSet={ImageMd}
            type="image/jpg"
            media="(min-width:768px)"
          ></source>
          <source srcSet={ImageLg} type="image/jpg"></source>
          <img src={Image} />
        </picture>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
          <h3 className="md:text-2xl lg:text-3xl mb-1 font-bold">About Little Lemon</h3>
          <p>
            We offer word class restaurant services
            <br />
            Our menus are not just mouth watering and beneficial to your health
            <br />
            The contain lots of essential vitamins and minerals
          </p>
        </div>
      </div>
    );
}
