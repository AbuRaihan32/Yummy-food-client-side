const Banner = () => {
  return (
    <div className="carousel w-full h-[calc(100vh-30vh)] rounded-3xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={"https://i.ibb.co/0njDY6Y/pexels-norma-mortenson-4393436.jpg"}
          className="w-full object-cover "
        />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151503] flex items-center transform h-full">
          <div className="text-white md:w-[45%] p-5 md:pl-24 space-y-4">
            <h1 className="text-3xl md:text-6xl">YummyFood Taste Bliss!</h1>
            <p className="text-xl">
              YummyFood: Delightful dishes delivered fast. Order now for a taste
              sensation that will satisfy your cravings with every bite.
            </p>
            <button className="btn btn-active btn-secondary bg-orange-600 mr-5">
              Get Started
            </button>
            <button className="btn btn-outline btn-warning">
              Feedback
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle bg-orange-600 mr-7">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-orange-600 ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={
            "https://i.ibb.co/k61xyfJ/pexels-shameel-mukkath-3421394-5175605.jpg"
          }
          className="w-full object-cover"
        />

        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151503] flex items-center transform h-full">
        <div className="text-white md:w-[45%] p-5 md:pl-24 space-y-4">
            <h1 className="text-3xl md:text-6xl">YummyFood Taste Bliss!</h1>
            <p className="text-xl">
              YummyFood: Delightful dishes delivered fast. Order now for a taste
              sensation that will satisfy your cravings with every bite.
            </p>
            <button className="btn btn-active btn-secondary bg-orange-600 mr-5">
              Get Started
            </button>
            <button className="btn btn-outline btn-warning">
              Feedback
            </button>
          </div>
        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle  bg-orange-600 mr-7">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-orange-600 ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={"https://i.ibb.co/KGMG6mY/pexels-norma-mortenson-4393426.jpg"}
          className="w-full object-cover"
        />

        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151503] flex items-center transform h-full">
        <div className="text-white md:w-[45%] p-5 md:pl-24 space-y-4">
            <h1 className="text-3xl md:text-6xl">YummyFood Taste Bliss!</h1>
            <p className="text-xl">
              YummyFood: Delightful dishes delivered fast. Order now for a taste
              sensation that will satisfy your cravings with every bite.
            </p>
            <button className="btn btn-active btn-secondary bg-orange-600 mr-5">
              Get Started
            </button>
            <button className="btn btn-outline btn-warning">
              Feedback
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle  bg-orange-600 mr-7">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle  bg-orange-600">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={"https://i.ibb.co/Hz0C9Yp/chef-5993951-640.jpg"}
          className="w-full object-cover"
        />

        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151503] flex items-center transform h-full">
        <div className="text-white md:w-[45%] p-5 md:pl-24 space-y-4">
            <h1 className="text-3xl md:text-6xl">YummyFood Taste Bliss!</h1>
            <p className="text-xl">
              YummyFood: Delightful dishes delivered fast. Order now for a taste
              sensation that will satisfy your cravings with every bite.
            </p>
            <button className="btn btn-active btn-secondary bg-orange-600 mr-5">
              Get Started
            </button>
            <button className="btn btn-outline btn-warning">
              Feedback
            </button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle bg-orange-600 mr-7">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle  bg-orange-600">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
