const Footer = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-3xl font-bold text-center">Gadget Heaven</h1>
          <p className="text-gray-500 font-bold text-center p-1 pb-3">
            Leading the way in cutting-edge technology and innovation.
          </p>
          <hr className="w-10/12  mx-auto" />
        </div>
        <footer className="footer bg-white text-base-content p-3  px-14 pl-56">
          <nav>
            <h6 className="text-black font-bold">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className=" text-black font-bold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav>
            <h6 className="text-black font-bold">Legal</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Footer;
