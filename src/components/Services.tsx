import { services } from "../utils/constants";

const Services = () => {
  return (
    <div className="py-20 px-0 bg-green-500/40">
      <div className="w-[90vw] my-0 mx-auto max-w-[1170px]">
        <article className="lg:grid grid-cols-2">
          <h3 className="text-green-950/80 mb-8 font-bold text-2xl">
            Handmade Furniture <br />
            Built Only <span className="animate-pulse">For You</span>
          </h3>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
        <div className="mt-16 grid gap-[2.5rem] md:grid-cols-[repeat(auto-fit,minmax(360px,1fr))]">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article
                key={id}
                className="bg-green-950/80 flex flex-col justify-center items-center gap-2 py-10 px-8 rounded-md text-green-200 transition-all hover:translate-y-[-5%]"
              >
                <span className="rounded-full bg-green-500/70 w-[48px] h-[48px] flex justify-center items-center">
                  {icon}
                </span>
                <h4 className="text-xl font-bold tracking-wide">{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Services;
