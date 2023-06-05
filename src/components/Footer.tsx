const Footer = () => {
  return (
    <>
      <div className="h-20 flex flex-col justify-center items-center bg-green-950 text-center">
        <h5 className="text-white font-semibold">
          &copy; {new Date().getFullYear()}
          <span className="text-green-500"> JhonsDev</span>
        </h5>
        <h5 className="text-white">All rights reserved</h5>
      </div>
    </>
  );
};
export default Footer;
