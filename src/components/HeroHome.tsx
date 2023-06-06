import { Link } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";

import heroImg1 from "../assets/heroHome-img.jpg";
import heroImg2 from "../assets/heroHome-img2.jpg";

const HeroHome = () => {
  return (
    <div className="min-h-[60vh] grid place-items-center lg:grid-cols-2 w-[90vw] my-0 mx-auto max-w-[1170px] lg:w-[95vw]">
      <article className="tracking-wide">
        <h1 className="font-bold text-4xl">
          Live In Your <br />{" "}
          <span className="text-green-950/80 animate-pulse">Dream</span> Space
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link
          to="/products"
          className="py-3 px-4 mt-4 text-lg flex justify-between bg-green-950/90 text-green-500 font-semibold cursor-pointer rounded-md border-transparent transition-opacity hover:bg-green-950/80 max-w-[50vw] lg:max-w-lg"
          aria-label="Go to products page"
        >
          Start shopping
          <RxCaretRight size={30} />
        </Link>
      </article>
      <article className="hidden lg:block relative">
        <img
          src={heroImg1}
          alt="Photo by EVG Kowalievska"
          className="h-auto max-w-[10vw] relative rounded-md block object-cover translate-x-[-5%]"
        />
        <img
          src={heroImg2}
          alt="Photo by freemockups.org"
          className="absolute bottom-0 left-0 w-[250px] translate-x-[-50%] rounded-md"
        />
      </article>
    </div>
  );
};
export default HeroHome;
