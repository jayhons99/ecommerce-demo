import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="bg-primary flex justify-center items-center text-center min-h-[calc(100vh-10rem)] py-20 px-0">
        <section className="font-bold tracking-wider">
          <h1 className="text-4xl">404</h1>
          <h3 className="text-2xl mb-8">
            Sorry, the page you tried cannot be found
          </h3>
          <Link
            to="/"
            className="text-xl bg-green-500/80 py-1 px-4 rounded-lg transition-opacity hover:bg-green-500/50"
          >
            Go back to home
          </Link>
        </section>
      </div>
    </>
  );
};
export default ErrorPage;
