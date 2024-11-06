const About = () => {
  return (
    <>
      <div className="bg-bannerTwo h-[200px] max-w-screen-2xl mt-8">
        <h1 className="text-5xl text-white font-bold text-center pt-10 ">
          About
        </h1>
        <p className="font-thin text-white text-center pt-3 w-11/12 mx-auto">
          Gadget Haven is your go-to store for the latest tech and innovative
          gadgets, handpicked for quality and functionality. We’re passionate
          about making cutting-edge technology accessible, with a curated
          selection from trusted brands to inspire tech lovers of all levels.
          Discover, explore, and enjoy the future of tech with Gadget Haven!
        </p>
        <p className="font-thin text-white text-center pt-3 w-11/12 mx-auto">
          Location: Mirpur, Dhaka, Bangladesh
        </p>
      </div>
      <div className="text-4xl font-bold text-purple-500 text-center mt-8 ">
        <figure>
          <img
            className="ml-[580px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVtcbKnrwyva48Ekxg0TMnzYz9xrtHUppuQ&s"
            alt=""
          />
        </figure>
      </div>
      <h1 className="text-3xl font-bold text-center text-purple-400">
        Thank you for visiting Gadget Haven ❤
      </h1>
    </>
  );
};

export default About;
