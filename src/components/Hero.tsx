const Hero = () => {
  return (
    <div>
      <div className=" bg-image h-[300px] md:h-[500px] ">
        <div className=" mt-3 flex items-center justify-center flex-col">
          <h4 className="text-[20px] font-medium text-gray-800">
            Simple, Powerful &amp; Affordable
          </h4>
          <h2 className="text-[#002365] text-[25px] font-extrabold">
            POS SOFTWARE SOLUTION
          </h2>
          <h4 className="text-[20px] font-medium text-gray-800">
            For All Restaurant Types
          </h4>
          <button className="inline-flex items-center justify-center rounded-md p-2 bg-[#002365] text-white text-sm  hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mt-2">
            Book A Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
