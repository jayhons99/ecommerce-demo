import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwkjdrko");
  return (
    <div className="py-20">
      <div className="w-[90vw] my-0 mx-auto max-w-[1170px]">
        <h3 className="text-2xl font-bold">
          Join our newsletter and get 30% off your first purchase
        </h3>
        <div className="lg:grid grid-cols-2 items-center gap-32 mt-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {state.succeeded ? (
            <p className="mt-4 text-2xl font-semibold">
              Thanks for subscribing!
            </p>
          ) : (
            <form
              className="w-[90vw] max-w-[500px] grid grid-cols-[1fr,auto]"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="Enter email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <button className="rounded-md py-0 px-[0.75rem] mt-4  bg-green-950 text-green-500/80 font-semibold cursor-pointer transition-opacity hover:bg-green-950/70">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default Contact;
