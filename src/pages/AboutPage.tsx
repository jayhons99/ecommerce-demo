import { PageHero } from "../components";
import aboutImg from "../assets/hero.jpg";
import { AiOutlineLine } from "react-icons/ai";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="About" />
      <div className="grid gap-16 lg:grid-cols-2 min-h-[calc(100vh-(20vh+10rem))] py-20 w-[90vw] my-0 mx-auto w-max-[1170px] lg:w-[95vw]">
        <img
          src={aboutImg}
          alt="Photo by cottonbro studio"
          className="w-auto block rounded-md h-[500px] lg:mx-auto"
        />
        <article className="text-left">
          <h2 className="font-bold tracking-wide text-2xl text-green-700/80">
            Our Mission
          </h2>
          <div className="ml-0">
            <AiOutlineLine size={50} className="text-green-950/80" />
          </div>
          <p className="leading-8 max-w-[45rem] my-0 mx-auto mt-8 text-green-950/80 lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </div>
    </main>
  );
};
export default AboutPage;
